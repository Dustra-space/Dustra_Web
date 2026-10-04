import { useEffect, useRef } from 'react'

/**
 * A slowly turning 3D moon for the hero, drawn on a canvas.
 *
 * A surface (height and brightness) is generated once from a fixed seed, so
 * the moon always looks the same: dark maria with irregular shores, bright
 * cratered highlands, craters following the real size distribution, and two
 * young craters with bright ray systems.
 *
 * Each frame, every pixel of the disc is mapped to a point on the sphere and
 * lit from the left, so the moon shows as a waxing gibbous. Lighting follows
 * the Lommel–Seeliger law the real Moon obeys (which is why it looks flat
 * rather than ball-shaded, with a sharp terminator), and near the terminator
 * craters cast real shadows.
 */

const TEX_W = 1536
const TEX_H = 768
const SPIN_SECONDS = 180 // one full turn
const BUMP = 1.6 // how strongly the relief tilts the light
const LIGHT = normalise(-0.95, 0.24, 0.06) // from the left: just over half lit

// Colours (sRGB): lit highlands at full brightness, and the unlit side
const LIT: [number, number, number] = [244, 242, 238] // warm paper white
const DARK: [number, number, number] = [42, 42, 48] // the site's ink, for shadows and the night side
const BANDS = 5 // tones the light is stepped into, for a printed, illustrated look
const OPACITY = 0.82 // lets the page show through the moon a little

// Rocks: lunar regolith drifting round the moon, the propellant DUSTRA wants to use
const ROCK_COUNT = 60
const RING_TILT = -0.32 // radians: the ring of rocks is tipped, not level
const ROCK_LIT = 'rgb(206, 201, 196)'
const ROCK_DARK = 'rgb(58, 57, 63)'
const ROCK_FIELD = 1.9 // rock canvas size, in moon diameters

type Texture = { height: Float32Array; albedo: Float32Array }

type Rock = {
  orbit: number // radius, in moon radii
  phase: number
  speed: number // radians per second
  lift: number // height above or below the ring
  size: number // in moon radii
  spin: number
  turn: number
  shape: [number, number][] // outline, unit size
}

/** Rocks on a slightly tilted ring, so they pass in front of and behind the moon. */
function makeRocks(): Rock[] {
  const rand = random(5)
  return Array.from({ length: ROCK_COUNT }, () => {
    const orbit = 1.12 + rand() ** 1.4 * 0.62
    const corners = 5 + Math.floor(rand() * 4)
    const shape = Array.from({ length: corners }, (_, i): [number, number] => {
      const a = (i / corners) * 2 * Math.PI + (rand() - 0.5) * 0.7
      const r = 0.65 + rand() * 0.45
      return [Math.cos(a) * r, Math.sin(a) * r]
    })
    return {
      orbit,
      phase: rand() * 2 * Math.PI,
      speed: (0.05 / orbit ** 1.5) * (rand() < 0.5 ? 1 : 0.85), // outer rocks move slower, as in orbit
      lift: (rand() - 0.5) * 0.5,
      size: 0.014 + rand() ** 3 * 0.06, // mostly small grains, a few larger rocks
      spin: (rand() - 0.5) * 0.6,
      turn: rand() * 2 * Math.PI,
      shape,
    }
  })
}

function normalise(x: number, y: number, z: number): [number, number, number] {
  const l = Math.hypot(x, y, z)
  return [x / l, y / l, z / l]
}

function random(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

// Smooth 3D value noise, so patterns wrap seamlessly round the sphere
function hash(x: number, y: number, z: number) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

function noise(x: number, y: number, z: number) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z)
  const f = (t: number) => t * t * (3 - 2 * t)
  const u = f(x - xi), v = f(y - yi), w = f(z - zi)
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t
  const c = (dx: number, dy: number, dz: number) => hash(xi + dx, yi + dy, zi + dz)
  return lerp(
    lerp(lerp(c(0, 0, 0), c(1, 0, 0), u), lerp(c(0, 1, 0), c(1, 1, 0), u), v),
    lerp(lerp(c(0, 0, 1), c(1, 0, 1), u), lerp(c(0, 1, 1), c(1, 1, 1), u), v),
    w,
  )
}

function fbm(x: number, y: number, z: number, octaves = 4) {
  let sum = 0, amp = 0.5, freq = 1, norm = 0
  for (let o = 0; o < octaves; o++) {
    sum += amp * noise(x * freq, y * freq, z * freq)
    norm += amp
    amp *= 0.5
    freq *= 2.03
  }
  return sum / norm
}

let texture: Texture | null = null

function buildTexture(): Texture {
  const rand = random(11)
  const n = TEX_W * TEX_H
  const height = new Float32Array(n)
  const albedo = new Float32Array(n)
  const mare = new Float32Array(n)
  const dLon = (2 * Math.PI) / TEX_W
  const dLat = Math.PI / TEX_H

  const sinLat = new Float32Array(TEX_H)
  const cosLat = new Float32Array(TEX_H)
  for (let y = 0; y < TEX_H; y++) {
    const lat = Math.PI / 2 - (y + 0.5) * dLat
    sinLat[y] = Math.sin(lat)
    cosLat[y] = Math.cos(lat)
  }

  // Maria: dark basalt plains with irregular shores. Highlands get a mottled
  // brightness and a gentle rolling relief.
  for (let y = 0; y < TEX_H; y++) {
    for (let x = 0; x < TEX_W; x++) {
      const lon = (x + 0.5) * dLon
      const px = cosLat[y] * Math.cos(lon)
      const py = sinLat[y]
      const pz = cosLat[y] * Math.sin(lon)
      const m = fbm(px * 1.6 + 3.1, py * 1.6 + 7.7, pz * 1.6 + 1.3, 5)
      const i = y * TEX_W + x
      mare[i] = smoothstep(0.53, 0.6, m)
      const mottle = fbm(px * 7 + 9, py * 7, pz * 7, 2)
      albedo[i] = 1 - 0.32 * mare[i] - 0.12 * mottle * (1 - mare[i]) - 0.12 * (mottle - 0.5) * mare[i] 
      height[i] = 0.006 * (1 - mare[i]) * fbm(px * 5, py * 5 + 4, pz * 5, 3)
    }
  }

  const stamp = (lat: number, lon: number, reach: number, fn: (i: number, d: number, bearing: number) => void) => {
    const sL = Math.sin(lat)
    const cL = Math.cos(lat)
    const y0 = Math.max(0, Math.floor((Math.PI / 2 - lat - reach) / dLat))
    const y1 = Math.min(TEX_H - 1, Math.ceil((Math.PI / 2 - lat + reach) / dLat))
    for (let y = y0; y <= y1; y++) {
      const half = Math.min(Math.PI, reach / Math.max(cosLat[y], 0.04))
      const x0 = Math.floor((lon - half) / dLon)
      const x1 = Math.ceil((lon + half) / dLon)
      for (let xx = x0; xx <= x1; xx++) {
        const x = ((xx % TEX_W) + TEX_W) % TEX_W
        const dl = (x + 0.5) * dLon - lon
        const cd = sinLat[y] * sL + cosLat[y] * cL * Math.cos(dl)
        const d = Math.acos(Math.min(1, Math.max(-1, cd)))
        if (d > reach) continue
        const bearing = Math.atan2(Math.sin(dl) * cosLat[y], cL * sinLat[y] - sL * cosLat[y] * Math.cos(dl))
        fn(y * TEX_W + x, d, bearing)
      }
    }
  }

  // Craters: many small, few large (a power law, like the real size
  // distribution). Maria are younger, so far fewer craters survive on them.
  // Drawn largest first, so smaller craters sit on top of older, bigger ones.
  const craters = Array.from({ length: 1400 }, () => ({
    R: Math.min(0.12, 0.011 * Math.pow(rand(), -0.5)),
    lat: Math.asin(2 * rand() - 1),
    lon: rand() * 2 * Math.PI,
    age: rand(),
    keep: rand(),
  })).sort((a, b) => b.R - a.R)

  for (const c of craters) {
    const cy = Math.min(TEX_H - 1, Math.max(0, Math.floor((Math.PI / 2 - c.lat) / dLat)))
    const cx = Math.floor(c.lon / dLon) % TEX_W
    if (mare[cy * TEX_W + cx] > 0.5 && c.keep < 0.7) continue

    const { R } = c
    const depth = R * (R > 0.05 ? 0.12 : 0.2) // big craters are shallower for their size
    const rim = depth * 0.35
    const peak = R > 0.045 ? depth * 0.45 : 0
    const floor = R > 0.045 ? 0.55 : 0 // big craters have flat floors
    const young = c.age < 0.12
    const worn = 0.45 + 0.55 * c.age // old craters are softened
    stamp(c.lat, c.lon, R * 2.6, (i, d) => {
      const r = d / R
      if (r < 1) {
        const rr = Math.max(0, (r - floor) / (1 - floor))
        const bowl = rim - depth * (1 - rr * rr)
        height[i] = height[i] * r * r * 0.6 + bowl * worn + peak * Math.exp(-((r / 0.16) ** 2))
      } else {
        height[i] += rim * worn * Math.exp(-(((r - 1) / 0.4) ** 2))
      }
      // Fresh rims catch the light even at full Sun; floors are a touch darker
      albedo[i] += (0.1 * Math.exp(-(((r - 1) / 0.18) ** 2)) - (r < 0.8 ? 0.03 : 0)) * (1.15 - c.age)
      if (young) albedo[i] += 0.16 * Math.exp(-((r / 1.6) ** 2))
    })
  }

  // Two young craters with bright ray systems, like Tycho and Copernicus
  for (const [lat, lon, R] of [[-0.75, 1.2, 0.035], [0.18, 4.1, 0.045]] as const) {
    const rays = Array.from({ length: 22 }, () => ({ a: rand() * 2 * Math.PI, w: 0.015 + rand() * 0.035, len: 6 + rand() * 12 }))
    stamp(lat, lon, R * 18, (i, d, bearing) => {
      const r = d / R
      let ray = 0
      for (const q of rays) {
        let da = Math.abs(bearing - q.a)
        if (da > Math.PI) da = 2 * Math.PI - da
        ray = Math.max(ray, Math.exp(-((da / q.w) ** 2)) * (1 - smoothstep(1.5, q.len, r)))
      }
      albedo[i] += 0.22 * ray * smoothstep(1, 1.6, r) + 0.2 * Math.exp(-((r / 1.8) ** 2))
    })
  }

  return { height, albedo }
}

type Pixels = {
  count: number
  idx: Uint32Array
  lon: Float32Array
  row: Uint16Array
  invCos: Float32Array
  geo: Float32Array // normal (3), east (3), north (3)
  sun: Float32Array // cosine of sun angle, tan of sun elevation, texel steps towards the sun (u, v)
  alpha: Uint8ClampedArray
  image: ImageData
}

export default function Moon({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const backRef = useRef<HTMLCanvasElement>(null)
  const frontRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const back = backRef.current?.getContext('2d')
    const front = frontRef.current?.getContext('2d')
    if (!canvas || !ctx || !back || !front) return
    const rocks = makeRocks()

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const [lx, ly, lz] = LIGHT
    let frame = 0
    let visible = true
    let last = 0
    let px: Pixels | null = null

    const layout = () => {
      // Always draw at 2x and let the browser scale down: smooths the fine craters
      const dpr = 2
      const size = Math.max(2, Math.round(canvas.clientWidth * dpr))
      canvas.width = size
      canvas.height = size
      const R = size / 2 - dpr
      const c = size / 2
      const max = size * size
      const idx = new Uint32Array(max)
      const lon = new Float32Array(max)
      const row = new Uint16Array(max)
      const invCos = new Float32Array(max)
      const geo = new Float32Array(max * 9)
      const sun = new Float32Array(max * 4)
      const alpha = new Uint8ClampedArray(max)
      const dLon = (2 * Math.PI) / TEX_W
      const dLat = Math.PI / TEX_H
      let count = 0
      for (let py = 0; py < size; py++) {
        for (let pxx = 0; pxx < size; pxx++) {
          let x = (pxx + 0.5 - c) / R
          let y = -(py + 0.5 - c) / R
          const d = Math.hypot(x, y)
          const cover = Math.min(1, Math.max(0, (1 - d) * R + 0.5))
          if (cover <= 0) continue
          if (d > 0.999) {
            x *= 0.999 / d
            y *= 0.999 / d
          }
          const z = Math.sqrt(Math.max(0, 1 - x * x - y * y))
          const lat = Math.asin(y)
          const lo = Math.atan2(x, z)
          const sLa = Math.sin(lat), cLa = Math.cos(lat)
          const sLo = Math.sin(lo), cLo = Math.cos(lo)
          const ex = cLo, ez = -sLo
          const nx = -sLa * sLo, ny = cLa, nz = -sLa * cLo
          const mu0 = x * lx + y * ly + z * lz
          const le = ex * lx + ez * lz
          const ln = nx * lx + ny * ly + nz * lz
          const lt = Math.max(1e-4, Math.hypot(le, ln))
          const cosC = Math.max(cLa, 0.06)
          idx[count] = py * size + pxx
          lon[count] = lo
          row[count] = Math.min(TEX_H - 1, Math.floor((0.5 - lat / Math.PI) * TEX_H))
          invCos[count] = 1 / cosC
          geo.set([x, y, z, ex, 0, ez, nx, ny, nz], count * 9)
          sun.set([mu0, mu0 / lt, le / lt / (cosC * dLon), -ln / lt / dLat], count * 4)
          alpha[count] = Math.round(cover * 255)
          count++
        }
      }
      px = { count, idx, lon, row, invCos, geo, sun, alpha, image: ctx.createImageData(size, size) }
    }

    const draw = (time: number) => {
      if (!px || !texture) return
      const { height, albedo } = texture
      const dLon2 = (4 * Math.PI) / TEX_W
      const dLat2 = (2 * Math.PI) / TEX_H
      const { count, idx, lon, row, invCos, geo, sun, alpha, image } = px
      const data = image.data
      const rot = ((time / 1000) / SPIN_SECONDS) * 2 * Math.PI
      const twoPi = 2 * Math.PI

      for (let k = 0; k < count; k++) {
        const o = idx[k] * 4
        const g = k * 9
        const sk = k * 4
        let u = (lon[k] + rot) / twoPi
        u = (u - Math.floor(u)) * TEX_W
        const t = row[k] * TEX_W + Math.min(TEX_W - 1, u | 0)
        let s = 0

        if (sun[sk] > -0.08) {
          // Relief tilts the surface normal
          const rowStart = t - (t % TEX_W)
          const xi = t - rowStart
          const east = height[rowStart + (xi + 1 === TEX_W ? 0 : xi + 1)] - height[rowStart + (xi === 0 ? TEX_W - 1 : xi - 1)]
          const north = height[row[k] > 0 ? t - TEX_W : t] - height[row[k] < TEX_H - 1 ? t + TEX_W : t]
          let ge = (east / dLon2) * invCos[k] * BUMP
          let gn = (north / dLat2) * BUMP
          // Keep tilts sane where the map is stretched (near the poles)
          const tilt = Math.hypot(ge, gn)
          if (tilt > 0.7) {
            ge *= 0.7 / tilt
            gn *= 0.7 / tilt
          }
          const nx = geo[g] - ge * geo[g + 3] - gn * geo[g + 6]
          const ny = geo[g + 1] - gn * geo[g + 7]
          const nz = geo[g + 2] - ge * geo[g + 5] - gn * geo[g + 8]
          const mu0 = (nx * lx + ny * ly + nz * lz) / Math.sqrt(nx * nx + ny * ny + nz * nz)
          if (mu0 > 0) {
            // Lommel–Seeliger with a little Lambert: flat disc, sharp terminator
            s = Math.min(1, ((2 * mu0) / (mu0 + geo[g + 2] + 0.02)) ** 0.5)
            // Long shadows near the terminator: march towards the sun over the height map
            const tanEl = sun[sk + 1]
            if (tanEl < 0.45) {
              const h0 = height[t]
              let dist = 0.005
              let over = 0
              for (let step = 0; step < 8; step++) {
                let su = u + sun[sk + 2] * dist
                su -= Math.floor(su / TEX_W) * TEX_W
                const sv = Math.min(TEX_H - 1, Math.max(0, row[k] + sun[sk + 3] * dist))
                over = Math.max(over, height[(sv | 0) * TEX_W + Math.min(TEX_W - 1, su | 0)] - h0 - dist * tanEl)
                dist *= 1.55
              }
              s *= 1 - 0.95 * smoothstep(0.001, 0.004, over)
            }
          }
        }

        const a = albedo[t]
        // Step the light into a few flat tones, with a soft edge between them
        const v = Math.min(1, s * a) * BANDS
        const band = Math.floor(v)
        const day = Math.min(1, (band + smoothstep(0.88, 1, v - band)) / BANDS)
        // Faint earthshine: the maria still read on the night side
        const night = 1 + (s > 0 ? 0 : 0.4 * (1 - a))
        data[o] = DARK[0] * night + (LIT[0] - DARK[0] * night) * day
        data[o + 1] = DARK[1] * night + (LIT[1] - DARK[1] * night) * day
        data[o + 2] = DARK[2] * night + (LIT[2] - DARK[2] * night) * day
        data[o + 3] = alpha[k] * OPACITY
      }
      ctx.putImageData(image, 0, 0)
    }

    // Each rock: lit grey, with the dark body offset away from the Sun, so the
    // lit edge always faces left whichever way the rock tumbles
    const drawRocks = (time: number) => {
      const size = back.canvas.width
      const unit = size / ROCK_FIELD / 2 // moon radius in rock-canvas pixels
      const c = size / 2
      back.clearRect(0, 0, size, size)
      front.clearRect(0, 0, size, size)
      const t = time / 1000
      for (const r of rocks) {
        const a = r.phase + r.speed * t
        const depth = Math.sin(a)
        const ox = Math.cos(a) * r.orbit
        const oy = (depth * 0.42 + r.lift) * r.orbit
        const x = c + (ox * Math.cos(RING_TILT) - oy * Math.sin(RING_TILT)) * unit
        const y = c + (ox * Math.sin(RING_TILT) + oy * Math.cos(RING_TILT)) * unit
        const scale = r.size * unit * (1 + 0.18 * depth)
        const turn = r.turn + r.spin * t
        const g = depth < 0 ? back : front
        const path = new Path2D()
        r.shape.forEach(([px, py], i) => {
          const qx = x + (px * Math.cos(turn) - py * Math.sin(turn)) * scale
          const qy = y + (px * Math.sin(turn) + py * Math.cos(turn)) * scale
          if (i === 0) path.moveTo(qx, qy)
          else path.lineTo(qx, qy)
        })
        path.closePath()
        g.save()
        g.globalAlpha = depth < 0 ? 0.55 : 0.9
        g.fillStyle = ROCK_LIT
        g.fill(path)
        g.clip(path)
        g.translate(scale * 0.34, scale * 0.1)
        g.fillStyle = ROCK_DARK
        g.fill(path)
        g.restore()
      }
    }

    const loop = (time: number) => {
      frame = requestAnimationFrame(loop)
      if (!visible) return
      drawRocks(time)
      if (time - last < 66) return // 15 fps is plenty for the moon's slow turn
      last = time
      draw(time)
    }

    const sizeRocks = () => {
      for (const g of [back, front]) {
        g.canvas.width = Math.max(2, Math.round(g.canvas.clientWidth * 2))
        g.canvas.height = g.canvas.width
      }
    }

    const start = () => {
      if (!texture) texture = buildTexture()
      layout()
      sizeRocks()
      drawRocks(still ? 0 : performance.now())
      draw(still ? 0 : performance.now())
      if (!still) frame = requestAnimationFrame(loop)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(canvas)

    const onResize = () => {
      layout()
      sizeRocks()
      drawRocks(still ? 0 : performance.now())
      draw(still ? 0 : performance.now())
    }
    window.addEventListener('resize', onResize)

    // Build the surface after first paint so the page appears straight away
    const timer = window.setTimeout(start, 50)

    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Rock canvases are larger than the moon and centred on it
  const offset = `${-((ROCK_FIELD - 1) / 2) * 100}%`
  const field = { left: offset, top: offset, width: `${ROCK_FIELD * 100}%`, height: `${ROCK_FIELD * 100}%` }
  return (
    <div className={`aspect-square ${className}`} aria-hidden="true">
      <div className="relative h-full w-full">
        <canvas ref={backRef} className="absolute" style={field} />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <canvas ref={frontRef} className="absolute" style={field} />
      </div>
    </div>
  )
}

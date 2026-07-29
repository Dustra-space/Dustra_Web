import { useEffect, useRef } from 'react'

type Grain = {
  x: number
  y: number
  z: number // depth 0..1 — drives size, speed and brightness
  vx: number
  vy: number
  charged: boolean
}

const GRAIN_COUNT = 150

/**
 * Slow-drifting field of dust grains behind the hero.
 * A minority are "charged" and stream faster with a short trail.
 */
export default function DustField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let grains: Grain[] = []
    let frame = 0
    let running = true

    const seed = (): Grain => {
      const z = Math.random()
      const charged = Math.random() < 0.12
      const speed = (0.05 + z * 0.32) * (charged ? 3.4 : 1)
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: speed,
        vy: (Math.random() - 0.5) * 0.06,
        charged,
      }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      grains = Array.from({ length: GRAIN_COUNT }, seed)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const g of grains) {
        const size = 0.4 + g.z * 1.5
        const alpha = 0.12 + g.z * 0.5

        if (g.charged) {
          const trail = 6 + g.z * 26
          const gradient = ctx.createLinearGradient(g.x - trail, g.y, g.x, g.y)
          gradient.addColorStop(0, 'rgba(255, 88, 65, 0)')
          gradient.addColorStop(1, `rgba(255, 120, 90, ${alpha})`)
          ctx.strokeStyle = gradient
          ctx.lineWidth = size
          ctx.beginPath()
          ctx.moveTo(g.x - trail, g.y)
          ctx.lineTo(g.x, g.y)
          ctx.stroke()

          ctx.fillStyle = `rgba(255, 160, 135, ${alpha + 0.2})`
          ctx.beginPath()
          ctx.arc(g.x, g.y, size * 0.8, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillStyle = `rgba(210, 220, 240, ${alpha * 0.6})`
          ctx.beginPath()
          ctx.arc(g.x, g.y, size * 0.6, 0, Math.PI * 2)
          ctx.fill()
        }

        if (!reduced) {
          g.x += g.vx
          g.y += g.vy
        }

        if (g.x - 40 > width) {
          g.x = -40
          g.y = Math.random() * height
        }
        if (g.y < -20) g.y = height + 20
        if (g.y > height + 20) g.y = -20
      }

      if (running && !reduced) frame = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frame)
      } else if (!running) {
        running = true
        if (!reduced) frame = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

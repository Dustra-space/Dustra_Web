type Props = {
  /** Index of the stage to highlight, or null for the resting state. */
  active: number | null
}

/** Highlight bands, matched to the four stages in `solution.stages`. */
const BANDS = [
  { x: 40, w: 145 },
  { x: 185, w: 155 },
  { x: 340, w: 360 },
  { x: 700, w: 175 },
]

const GRAINS = [
  { y: 150, delay: 0, dur: 3.4, r: 2 },
  { y: 138, delay: 0.9, dur: 3.9, r: 1.5 },
  { y: 162, delay: 1.7, dur: 3.6, r: 1.7 },
  { y: 146, delay: 2.4, dur: 4.2, r: 1.3 },
  { y: 156, delay: 3.1, dur: 3.7, r: 1.9 },
  { y: 150, delay: 4.0, dur: 4.0, r: 1.4 },
]

/** Accelerating-electrode ring positions along the channel. */
const RINGS = [365, 415, 470, 530, 595, 665]

const STROKE = '#3a3a3a'
const MUTED = '#7e7e7e'

export default function Accelerator({ active }: Props) {
  return (
    <svg
      viewBox="0 0 900 300"
      className="h-auto w-full"
      role="img"
      aria-label="Conceptual illustration of particle acceleration: controlled feed, charging, electrostatic acceleration, and beam diagnostics."
    >
      <defs>
        <linearGradient id="channel-fill" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff5841" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ff5841" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="plume-fill" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff5841" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff5841" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="charge-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ededed" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#ededed" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#ededed" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Highlight band for the hovered stage */}
      {active !== null && (
        <rect
          x={BANDS[active].x}
          y={34}
          width={BANDS[active].w}
          height={252}
          rx={8}
          fill="rgba(255,88,65,0.07)"
          stroke="rgba(255,88,65,0.4)"
          strokeDasharray="3 4"
        />
      )}

      {/* ---- 01 Dust feed ---- */}
      <g>
        <path d="M60 62h96l-22 46h-52Z" fill="rgba(237,237,237,0.05)" stroke={STROKE} strokeWidth="1.5" />
        <path d="M134 108h-52l14 22h24Z" fill="rgba(237,237,237,0.03)" stroke={STROKE} strokeWidth="1.5" />
        <g fill={MUTED}>
          <circle cx="88" cy="78" r="2.4" />
          <circle cx="102" cy="86" r="1.8" />
          <circle cx="118" cy="74" r="2" />
          <circle cx="108" cy="70" r="1.5" />
          <circle cx="96" cy="94" r="1.6" />
          <circle cx="124" cy="90" r="1.4" />
        </g>
        {[0, 0.7, 1.4].map((d) => (
          <circle
            key={d}
            cx="108"
            cy="140"
            r="1.8"
            fill="#ededed"
            style={{ animation: `dustFeed 2.1s ${d}s linear infinite` }}
          />
        ))}
        <text x="60" y="274" fill={MUTED} fontSize="11" letterSpacing="1.44">
          CONTROLLED FEED
        </text>
      </g>

      {/* ---- 02 Contact charging ---- */}
      <g>
        <rect x={200} y={104} width={120} height={92} rx={4} fill="url(#charge-fill)" />
        <rect x={200} y={100} width={120} height={7} rx={3.5} fill="#ededed" opacity="0.85" />
        <rect x={200} y={193} width={120} height={7} rx={3.5} fill="#ededed" opacity="0.85" />
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={216 + i * 30}
            y1={110}
            x2={216 + i * 30}
            y2={190}
            stroke="#ededed"
            strokeWidth="1"
            strokeDasharray="2 6"
            style={{ animation: `fieldPulse 2.4s ${i * 0.25}s ease-in-out infinite` }}
          />
        ))}
        <text x={200} y={274} fill="#ededed" fontSize="11" letterSpacing="1.44">
          + CONTACT CHARGING
        </text>
      </g>

      {/* ---- 03 Electrostatic acceleration ---- */}
      <g>
        <rect x={340} y={104} width={360} height={92} fill="url(#channel-fill)" />
        <line x1={340} y1={104} x2={700} y2={104} stroke={STROKE} strokeWidth="1.5" />
        <line x1={340} y1={196} x2={700} y2={196} stroke={STROKE} strokeWidth="1.5" />
        {RINGS.map((x, i) => {
          const strength = 0.35 + (i / (RINGS.length - 1)) * 0.65
          return (
            <g key={x}>
              <rect x={x} y={96} width={7} height={22} rx={2} fill="#ff5841" opacity={strength} />
              <rect x={x} y={182} width={7} height={22} rx={2} fill="#ff5841" opacity={strength} />
              <line
                x1={x + 3.5}
                y1={118}
                x2={x + 3.5}
                y2={182}
                stroke="#ff8f6d"
                strokeWidth="1"
                strokeDasharray="2 7"
                opacity={strength * 0.7}
                style={{ animation: `fieldPulse 2s ${i * 0.18}s ease-in-out infinite` }}
              />
            </g>
          )
        })}
        <text x={400} y={274} fill="#ff5841" fontSize="11" letterSpacing="1.44">
          ELECTRIC ACCELERATION
        </text>
      </g>

      {/* ---- 04 Exhaust ---- */}
      <g>
        <path d="M700 108 880 62v176l-180-42Z" fill="url(#plume-fill)" />
        <text x={760} y={274} fill={MUTED} fontSize="11" letterSpacing="1.44">
          BEAM DIAGNOSTICS
        </text>
      </g>

      {/* ---- Grains in flight ---- */}
      <g>
        {GRAINS.map((g, i) => (
          <g
            key={i}
            style={{
              animation: `dustRun ${g.dur}s ${g.delay}s cubic-bezier(0.6, 0, 0.9, 0.5) infinite`,
            }}
          >
            <circle cx={175} cy={g.y} r={g.r * 3} fill="#ff5841" opacity="0.28" />
            <circle cx={175} cy={g.y} r={g.r} fill="#ffe2d9" />
          </g>
        ))}
      </g>
    </svg>
  )
}

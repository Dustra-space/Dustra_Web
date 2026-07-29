import { headings, mission } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function TransferDiagram() {
  return (
    <svg
      viewBox="0 0 460 320"
      className="h-auto w-full"
      role="img"
      aria-label="Transfer trajectory between low Earth orbit and low lunar orbit under continuous low thrust."
    >
      <defs>
        <radialGradient id="earth" cx="34%" cy="28%">
          <stop offset="0%" stopColor="#3f5f7f" />
          <stop offset="70%" stopColor="#22313f" />
          <stop offset="100%" stopColor="#151d26" />
        </radialGradient>
        <radialGradient id="moon" cx="34%" cy="28%">
          <stop offset="0%" stopColor="#c9cdd3" />
          <stop offset="75%" stopColor="#9aa0a8" />
          <stop offset="100%" stopColor="#71767e" />
        </radialGradient>
      </defs>

      {/* Earth + LEO */}
      <circle cx="86" cy="196" r="52" fill="url(#earth)" />
      <ellipse cx="86" cy="196" rx="76" ry="72" fill="none" stroke="#c9c9c9" strokeWidth="1" strokeDasharray="3 5" />
      <text x="86" y="290" textAnchor="middle" fill="#5c5c5c" fontSize="11" letterSpacing="1.44">
        LEO
      </text>

      {/* Moon + low lunar orbit */}
      <circle cx="372" cy="96" r="26" fill="url(#moon)" />
      <ellipse cx="372" cy="96" rx="44" ry="42" fill="none" stroke="#c9c9c9" strokeWidth="1" strokeDasharray="3 5" />
      <text x="372" y="162" textAnchor="middle" fill="#5c5c5c" fontSize="11" letterSpacing="1.44">
        LOW LUNAR ORBIT
      </text>

      {/* Spiral transfer under continuous low thrust */}
      <path
        d="M156 170C210 134 246 178 264 140c18-38 52 6 78-32"
        fill="none"
        stroke="#ff5841"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.1"
      />
      <path
        d="M156 170C210 134 246 178 264 140c18-38 52 6 78-32"
        fill="none"
        stroke="#ff5841"
        strokeWidth="1.8"
        strokeDasharray="7 9"
        strokeLinecap="round"
        style={{ animation: 'dashFlow 9s linear infinite' }}
      />

      <g fontSize="11" letterSpacing="1.44">
        <text x="176" y="62" fill="#5c5c5c">
          CONTINUOUS LOW THRUST
        </text>
        <text x="176" y="80" fill="#ff5841">
          30 N · 70 t PROPELLANT
        </text>
      </g>
      <line x1="170" y1="68" x2="170" y2="152" stroke="#d6d6d6" strokeWidth="1" />

      <circle cx="372" cy="96" r="38" fill="none" stroke="#ff5841" strokeWidth="1" opacity="0.45" strokeDasharray="2 6" />
      <text x="372" y="42" textAnchor="middle" fill="#ff5841" fontSize="11" letterSpacing="1.44">
        IN-SITU REFUEL
      </text>
    </svg>
  )
}

export default function Mission() {
  return (
    <Section
      id="mission"
      tone="band"
      {...headings.mission}
      intro={<p>{mission.body}</p>}
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <TransferDiagram />
        </Reveal>

        <Reveal delay={100}>
          <dl className="border-t border-[color:var(--color-rule)]">
            {mission.figures.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-6 border-b border-[color:var(--color-rule)] py-5"
              >
                <dt className="text-grey text-[15px]">{f.label}</dt>
                <dd className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

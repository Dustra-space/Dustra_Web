import { useState } from 'react'
import { headings, solution } from '../content'
import Accelerator from './Accelerator'
import Reveal from './Reveal'
import Section from './Section'

export default function Solution() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Section
      id="how"
      tone="dark"
      {...headings.solution}
      intro={solution.body.map((p) => (
        <p key={p.slice(0, 24)} className="mb-5 last:mb-0">
          {p}
        </p>
      ))}
    >
      <Reveal className="rounded-xl bg-white/[0.035] p-4 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <p className="label text-grey-dark">Schematic — longitudinal section</p>
          <p className="label text-grey-dark">Not to scale</p>
        </div>
        <Accelerator active={active} />
      </Reveal>

      <ol className="mt-4 border-t border-[color:var(--color-rule-dark)]">
        {solution.stages.map((stage, i) => (
          <Reveal key={stage.id} delay={i * 60} as="li">
            <div
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              className={`grid gap-3 border-b border-[color:var(--color-rule-dark)] py-7 outline-none transition-colors duration-300 md:grid-cols-[7rem_18rem_1fr] md:items-baseline md:gap-8 ${
                active === i ? 'bg-white/[0.04]' : ''
              }`}
            >
              <span
                className={`text-4xl font-medium tracking-[-0.03em] transition-colors duration-300 md:text-5xl ${
                  active === i ? 'text-coral' : 'text-white'
                }`}
              >
                {stage.id}
              </span>
              <h3 className="text-lg">{stage.title}</h3>
              <p className="text-grey-dark max-w-2xl leading-relaxed">{stage.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

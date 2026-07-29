import { headings, milestones } from '../content'
import Reveal from './Reveal'
import Section from './Section'

const stateLabel: Record<string, { text: string; className: string }> = {
  active: { text: 'In progress', className: 'bg-coral text-white' },
  planned: { text: 'Planned', className: 'text-grey-dark border border-[color:var(--color-rule-dark)]' },
  stretch: {
    text: 'Stretch goal',
    className: 'text-grey-dark border border-dashed border-[color:var(--color-rule-dark)]',
  },
}

export default function Roadmap() {
  return (
    <Section id="roadmap" tone="dark" {...headings.roadmap}>
      <ol className="border-t border-[color:var(--color-rule-dark)]">
        {milestones.map((m, i) => {
          const badge = stateLabel[m.state]
          return (
            <Reveal key={m.n} delay={i * 70} as="li">
              <div className="grid gap-4 border-b border-[color:var(--color-rule-dark)] py-10 md:grid-cols-[8rem_1fr_1fr] md:gap-10">
                <span className="text-5xl leading-none font-medium tracking-[-0.03em] text-white md:text-6xl">
                  0{m.n}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl text-white">{m.title}</h3>
                    <span className={`label rounded px-1.5 py-1 ${badge.className}`}>
                      {badge.text}
                    </span>
                  </div>
                  <p className="label text-grey-dark mt-2.5">{m.window}</p>
                </div>

                <div>
                  <p className="text-grey-dark leading-relaxed">{m.body}</p>
                  <p className="mt-4 flex flex-wrap items-baseline gap-2.5">
                    <span className="label text-grey-dark">Target</span>
                    <span className="text-coral">{m.target}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}

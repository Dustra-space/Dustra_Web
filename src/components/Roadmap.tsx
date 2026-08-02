import { headings, roadmap } from '../content'
import Reveal from './Reveal'
import Section from './Section'

const badges = {
  active: { text: 'In development', className: 'bg-coral text-white' },
  planned: { text: 'Development target', className: 'border border-[color:var(--color-rule-dark)] text-grey-dark' },
  future: { text: 'Long-term objective', className: 'border border-dashed border-[color:var(--color-rule-dark)] text-grey-dark' },
}

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      tone="dark"
      {...headings.roadmap}
      intro={<p>Dates are development targets, not guaranteed technical or commercial timelines. Each phase depends on evidence from the one before it.</p>}
    >
      <ol className="border-t border-[color:var(--color-rule-dark)]">
        {roadmap.map((phase, index) => {
          const badge = badges[phase.state]
          return (
            <Reveal key={phase.n} delay={index * 60} as="li">
              <article className="grid gap-6 border-b border-[color:var(--color-rule-dark)] py-10 lg:grid-cols-[7rem_18rem_1fr] lg:gap-10">
                <span className="text-5xl font-medium leading-none tracking-[-0.03em] text-white">0{phase.n}</span>
                <div>
                  <span className={`label inline-block rounded px-2 py-1 ${badge.className}`}>{badge.text}</span>
                  <p className="label text-coral mt-4">{phase.window}</p>
                  <h3 className="mt-2 text-2xl text-white">{phase.title}</h3>
                  <p className="text-grey-dark mt-3 leading-relaxed">{phase.summary}</p>
                </div>
                <ul className="grid gap-x-8 sm:grid-cols-2">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="text-grey-dark flex gap-3 border-b border-[color:var(--color-rule-dark)] py-3.5 leading-snug">
                      <span className="text-coral" aria-hidden="true">+</span>{goal}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}

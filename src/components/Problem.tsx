import { headings, problem } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Problem() {
  return (
    <Section
      id="market"
      {...headings.problem}
      intro={problem.body.map((p) => (
        <p key={p.slice(0, 24)} className="mb-5 last:mb-0">
          {p}
        </p>
      ))}
    >
      <dl className="grid gap-x-12 gap-y-10 border-t border-[color:var(--color-rule)] pt-10 sm:grid-cols-3">
        {problem.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div>
              <dd className="text-coral text-4xl font-medium tracking-[-0.03em] md:text-5xl">
                {s.value}
              </dd>
              <dt className="mt-3 text-[17px]">{s.label}</dt>
              <p className="label text-grey-soft mt-2">{s.foot}</p>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}

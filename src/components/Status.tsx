import { headings, status } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Status() {
  return (
    <Section id="building" tone="band" {...headings.status} intro={<p>{status.next}</p>}>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">Technical priorities</p>
          <ul className="mt-4 grid gap-x-7 sm:grid-cols-2">
            {status.priorities.map((item) => (
              <li key={item} className="flex gap-3 border-b border-[color:var(--color-rule)] py-3.5">
                <span className="text-coral" aria-hidden="true">+</span>
                <span className="text-grey leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">Completed to date</p>
          <ul className="mt-5 space-y-4">
            {status.done.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="text-coral" aria-hidden="true">✓</span>
                <span className="text-grey leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-20">
        <Reveal><p className="label text-grey-soft">Initial engineering targets · not achieved results</p></Reveal>
        <dl className="mt-5 grid border-l border-t border-[color:var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
          {status.targets.map((target, i) => (
            <Reveal key={target.label} delay={(i % 4) * 40}>
              <div className="h-full border-b border-r border-[color:var(--color-rule)] p-6">
                <dd className="text-coral text-3xl font-medium tracking-[-0.03em]">{target.value}</dd>
                <dt className="text-grey mt-2 leading-snug">{target.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="mt-20">
        <Reveal><p className="label text-grey-soft">Engineering challenges</p></Reveal>
        <div className="mt-5 grid gap-x-12 md:grid-cols-2">
          {status.risks.map((risk, i) => (
            <Reveal key={risk.title} delay={i * 50}>
              <article className="border-t border-[color:var(--color-rule)] py-6">
                <h3 className="text-xl">{risk.title}</h3>
                <p className="text-grey mt-2 leading-relaxed">{risk.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

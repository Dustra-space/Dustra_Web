import { headings, resources } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Resources() {
  return (
    <Section id="resources" tone="band" {...headings.resources}>
      <div className="grid gap-x-14 gap-y-12 lg:grid-cols-3">
        <Reveal>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">
            Resources
          </p>
          <ul className="mt-6 space-y-6">
            {resources.needs.map((r) => (
              <li key={r.title}>
                <p className="text-[17px]">{r.title}</p>
                <p className="text-grey mt-1.5 leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">
            Collaborations
          </p>
          <ul className="mt-6 space-y-6">
            {resources.support.map((r) => (
              <li key={r.title}>
                <p className="text-[17px]">{r.title}</p>
                <p className="text-grey mt-1.5 leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">
            Competencies we are missing
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {resources.gaps.map((g) => (
              <li key={g} className="bg-coral rounded px-2.5 py-1.5 text-[13px] text-white">
                {g}
              </li>
            ))}
          </ul>
          <p className="text-grey mt-5 leading-relaxed">
            If high-voltage engineering or materials science is your field, we would like to hear
            from you.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

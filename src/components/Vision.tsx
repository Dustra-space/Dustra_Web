import { applications, headings } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Vision() {
  return (
    <Section id="applications" {...headings.vision}>
      <div className="grid gap-5 lg:grid-cols-3">
        {applications.map((group, index) => (
          <Reveal key={group.horizon} delay={index * 80}>
            <article className="h-full rounded-xl border border-[color:var(--color-rule)] p-6 md:p-8">
              <p className="label text-coral">{group.note}</p>
              <h3 className="mt-4 text-3xl">{group.horizon}</h3>
              <ul className="mt-7 border-t border-[color:var(--color-rule)]">
                {group.items.map((item) => (
                  <li key={item} className="text-grey border-b border-[color:var(--color-rule)] py-3.5 leading-snug">{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

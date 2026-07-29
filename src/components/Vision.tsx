import { headings, vision } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Vision() {
  return (
    <Section id="vision" {...headings.vision}>
      <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
        {vision.map((v, i) => (
          <Reveal key={v.n} delay={i * 70}>
            <article className="group border-t border-[color:var(--color-rule)] pt-6">
              <span className="text-grey-soft group-hover:text-coral text-[13px] transition-colors duration-300">
                {v.n}
              </span>
              <h3 className="mt-4 text-2xl">{v.title}</h3>
              <p className="text-grey mt-3 max-w-lg leading-relaxed">{v.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

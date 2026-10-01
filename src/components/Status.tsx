import { headings, status } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Status() {
  return (
    <Section id="building" tone="band" {...headings.status} intro={<p>{status.next}</p>}>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">What we’ll test</p>
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
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">Our starting point</p>
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

      <Reveal className="mt-14 border-t border-[color:var(--color-rule)] pt-6">
        <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
          <p className="label text-coral">ETH Zurich | Space</p>
          <div>
            <p className="text-xl">Selected among the Top 20 teams in the Liftoff Challenge 2026/27.</p>
            <p className="text-grey mt-3">A programme of technical support, mentoring, and milestone funding as we develop our prototype.</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

import { headings, status } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Status() {
  return (
    <Section id="status" tone="band" {...headings.status} intro={<p>{status.next}</p>}>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">
            Completed to date
          </p>
          <ul className="mt-6 space-y-5">
            {status.done.map((item) => (
              <li key={item.slice(0, 24)} className="flex gap-4">
                <svg
                  viewBox="0 0 16 16"
                  className="text-coral mt-1.5 h-3.5 w-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m3 8.5 3.2 3.2L13 5" />
                </svg>
                <span className="text-grey leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <p className="label text-grey-soft border-t border-[color:var(--color-rule)] pt-5">
            Known difficulties
          </p>
          <ul className="mt-2">
            {status.risks.map((r) => (
              <li key={r.title} className="border-b border-[color:var(--color-rule)] py-5">
                <h3 className="text-[17px]">{r.title}</h3>
                <p className="text-grey mt-1.5 leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

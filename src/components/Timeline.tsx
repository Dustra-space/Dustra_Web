import { challenge, headings } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Timeline() {
  return (
    <Section
      id="challenge"
      {...headings.challenge}
      intro={
        <p>
          Dustra is one of twenty teams selected from the 2026 application round. The challenge is
          run by {challenge.organisers}, and carries up to CHF 16,000 in staged funding alongside
          mentoring from space and business leaders.
        </p>
      }
      inset
    >
      <ol className="border-l border-[color:var(--color-rule)] pl-6 md:pl-10">
        {challenge.phases.map((p, i) => (
          <Reveal key={p.title} delay={i * 60} as="li" className="relative">
            <div
              className={`grid gap-1 md:grid-cols-[10rem_1fr] md:gap-8 ${
                i === challenge.phases.length - 1 ? '' : 'pb-14'
              }`}
            >
              <span
                className={`absolute top-2.5 -left-[27px] h-1.5 w-1.5 rounded-full md:-left-[43px] ${
                  p.state === 'upcoming' ? 'bg-[color:var(--color-rule)]' : 'bg-coral'
                }`}
                aria-hidden="true"
              />
              <p className="text-[15px] font-medium">{p.date}</p>
              <div>
                <h3 className="flex flex-wrap items-center gap-3 text-[17px] font-medium">
                  {p.title}
                  {p.state === 'done' && (
                    <span className="label text-coral border-coral/40 rounded border px-1.5 py-1">
                      Cleared
                    </span>
                  )}
                  {p.state === 'next' && (
                    <span className="label bg-coral rounded px-1.5 py-1 text-white">Next up</span>
                  )}
                </h3>
                <p className="text-grey mt-1.5">{p.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

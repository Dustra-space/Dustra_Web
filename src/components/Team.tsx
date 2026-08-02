import { headings, team } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Team() {
  return (
    <Section id="team" {...headings.team} intro={<p>{team.blurb}</p>}>
      <ol className="border-t border-[color:var(--color-rule)]">
        {team.members.map((m, i) => (
          <Reveal key={m.name} delay={i * 55} as="li">
            <div className="grid gap-3 border-b border-[color:var(--color-rule)] py-7 md:grid-cols-[4rem_16rem_1fr] md:items-baseline md:gap-8">
              <span className="text-grey-soft text-[13px]">0{i + 1}</span>
              <div>
                <h3 className="text-xl">{m.name}</h3>
                <p className="label text-coral mt-1.5">{m.focus}</p>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                {m.skills.map((s) => (
                  <li
                    key={s}
                    className="text-grey rounded border border-[color:var(--color-rule)] px-2.5 py-1 text-[13px]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="label text-grey-soft mt-8">
          All members are in their 6th semester of the BSc in Mechanical Engineering at ETH Zurich
        </p>
      </Reveal>
    </Section>
  )
}

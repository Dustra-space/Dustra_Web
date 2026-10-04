import { team } from '../content'
import Reveal from './Reveal'
import Section from './Section'

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

export default function Team() {
  return (
    <Section id="team" tone="dust" eyebrow={team.eyebrow} title={team.title} intro={<p>{team.blurb}</p>}>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {team.members.map((m, i) => (
          <Reveal key={m.name} delay={i * 50} as="li">
            <article>
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="bg-paper aspect-[4/5] w-full rounded-xl object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="bg-paper font-display text-pebble flex aspect-[4/5] w-full items-center justify-center rounded-xl text-5xl"
                >
                  {initials(m.name)}
                </div>
              )}
              <h3 className="text-charcoal mt-4 text-2xl">{m.name}</h3>
              <p className="label text-rust mt-1.5">{m.role}</p>
              <p className="text-stone mt-2.5 text-[15px] leading-relaxed">{m.bio}</p>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="label text-stone hover:text-rust mt-3 inline-block transition-colors"
                >
                  LinkedIn ↗
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

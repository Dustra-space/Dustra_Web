import { smallBodies } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function SmallBodies() {
  return (
    <Section id="small-bodies" label="Small bodies" lead="Local material as reaction mass." trail="A long-term possibility, carefully framed.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-xl border border-[color:var(--color-rule)] p-7 md:p-9">
            <p className="label text-coral">Asteroid operations</p>
            <h3 className="mt-4 text-3xl">Mining and mobility</h3>
            <p className="text-grey mt-5 leading-relaxed">{smallBodies.mining}</p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="h-full rounded-xl border border-[color:var(--color-rule)] p-7 md:p-9">
            <p className="label text-coral">Planetary defense</p>
            <h3 className="mt-4 text-3xl">Continuous, patient thrust</h3>
            <p className="text-grey mt-5 leading-relaxed">{smallBodies.defense}</p>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}

import { headings, physics } from '../content'
import Reveal from './Reveal'
import Section from './Section'

export default function Mission() {
  return (
    <Section id="physics" tone="band" {...headings.mission} intro={<p>{physics.body}</p>}>
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal>
          <dl className="border-t border-[color:var(--color-rule)]">
            {physics.equations.map((equation) => (
              <div key={equation.label} className="flex items-center justify-between gap-6 border-b border-[color:var(--color-rule)] py-6">
                <dt className="text-grey text-[15px]">{equation.label}</dt>
                <dd className="text-coral font-mono text-2xl tracking-[-0.03em] md:text-4xl">{equation.expression}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={100}>
          <div className="border-t border-[color:var(--color-rule)] pt-6">
            <p className="label text-grey-soft">Why solid particles?</p>
            <p className="mt-5 text-xl leading-relaxed">{physics.advantage}</p>
            <div className="mt-8 rounded-lg border border-[color:var(--color-rule)] bg-white p-6">
              <p className="label text-coral">Engineering reality</p>
              <p className="text-grey mt-3 leading-relaxed">{physics.caveat}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

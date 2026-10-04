import { progress, type Phase } from '../content'
import Reveal from './Reveal'
import Section from './Section'

/** Node style encodes the phase state: filled = active, solid ring = next, dashed = later. */
const nodes: Record<Phase['state'], string> = {
  active: 'bg-rust shadow-[0_0_0_5px_rgba(122,37,0,0.15)]',
  planned: 'bg-paper border-2 border-rust',
  future: 'bg-paper border-2 border-dashed border-pebble',
}

export default function Progress() {
  return (
    <Section
      id="progress"
      tone="paper"
      eyebrow={progress.eyebrow}
      title={progress.title}
    >
      <div className="relative">
        {/* The timeline: vertical on phones, horizontal on wide screens */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-[color:var(--color-rule)] lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
        />
        <ol className="relative grid gap-12 lg:grid-cols-3 lg:gap-10">
        {progress.phases.map((phase, i) => (
          <Reveal key={phase.title} delay={i * 70} as="li" className="relative pl-10 lg:pt-12 lg:pl-0">
            <span className={`absolute top-1 left-0 h-[15px] w-[15px] rounded-full lg:top-0 ${nodes[phase.state]}`} aria-hidden="true" />
            <p className="label text-rust">{phase.window}</p>
            <h3 className="text-charcoal mt-3 text-3xl md:text-[2.25rem]">{phase.title}</h3>
            <p className="text-stone mt-3 max-w-[34ch] leading-relaxed">{phase.summary}</p>
          </Reveal>
        ))}
        </ol>
      </div>
    </Section>
  )
}
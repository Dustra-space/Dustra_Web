import { useState } from 'react'
import { concept, sources } from '../content'
import Accelerator from './Accelerator'
import Reveal from './Reveal'
import Section from './Section'

export default function Concept() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Section
      id="concept"
      tone="dust"
      eyebrow={concept.eyebrow}
      title={concept.title}
      intro={concept.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
    >
      <Reveal className="bg-paper rounded-2xl p-4 md:p-8">
        <div className="label text-stone mb-4 flex justify-between gap-4">
          <span>Conceptual illustration</span>
          <span>Not to scale</span>
        </div>
        <div className="-mx-1 overflow-x-auto">
          <div className="min-w-[560px] px-1">
            <Accelerator active={active} />
          </div>
        </div>

        {/* Hovering or focusing a stage highlights it in the drawing */}
        <ol className="mt-6 grid gap-px overflow-hidden rounded-xl bg-[color:var(--color-rule)] sm:grid-cols-3">
          {concept.stages.map((stage, i) => (
            <li
              key={stage.id}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={`p-5 transition-colors duration-300 ${active === i ? 'bg-dust' : 'bg-paper'}`}
            >
              <p className="flex items-baseline gap-3">
                <span className={`label transition-colors ${active === i ? 'text-rust' : 'text-stone'}`}>
                  {stage.id}
                </span>
                <span className="font-display text-charcoal text-2xl">{stage.title}</span>
              </p>
              <p className="text-stone mt-2 text-[15px] leading-relaxed">{stage.detail}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-10">
        <p className="label text-ink">Research background</p>
        <p className="text-stone mt-3 text-[15px] leading-relaxed">{concept.priorArt}</p>

        <details className="group text-stone mt-5">
          <summary className="label text-ink flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
            <span className="text-rust transition-transform group-open:rotate-90" aria-hidden="true">›</span>
            Sources ({sources.length})
          </summary>
          <ol className="mt-4 space-y-3 text-[14px] leading-relaxed">
            {sources.map((s) => (
              <li key={s.n} className="flex gap-3">
                <span className="label text-stone pt-0.5">[{s.n}]</span>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-rust underline decoration-[color:var(--color-rule)] underline-offset-4"
                  >
                    {s.text}
                  </a>
                ) : (
                  <span>{s.text}</span>
                )}
              </li>
            ))}
          </ol>
        </details>
      </Reveal>
    </Section>
  )
}

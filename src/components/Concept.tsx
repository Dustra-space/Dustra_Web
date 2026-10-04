import { useState } from 'react'
import { concept, sources } from '../content'
import Accelerator from './Accelerator'
import Reveal from './Reveal'
import Section from './Section'

/**
 * Turns "[1]" or "[2, 3]" in a sentence into small superscript links that
 * scroll to the matching entry in the sources list below.
 */
function withCitations(text: string, cite: (n: number) => void) {
  const parts = text.split(/\[([\d,\s]+)\]/)
  return parts.map((part, i) => {
    if (i % 2 === 0) {
      // Drop the space before a marker so it sits right against the word
      return i < parts.length - 1 ? part.replace(/\s+$/, '') : part
    }
    const numbers = part.split(',').map((n) => Number(n.trim()))
    return (
      <sup key={i} className="ml-px text-[0.7em] font-medium">
        {numbers.map((n, j) => (
          <span key={n}>
            {j > 0 && ','}
            <a
              href={`#source-${n}`}
              onClick={(e) => {
                e.preventDefault()
                cite(n)
              }}
              className="text-rust hover:underline"
              aria-label={`Source ${n}`}
            >
              {n}
            </a>
          </span>
        ))}
      </sup>
    )
  })
}

export default function Concept() {
  const [active, setActive] = useState<number | null>(null)

  const cite = (n: number) =>
    document.getElementById(`source-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <Section
      id="concept"
      tone="dust"
      eyebrow={concept.eyebrow}
      title={concept.title}
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
        <p className="text-stone mt-3 text-[15px] leading-relaxed">{withCitations(concept.priorArt, cite)}</p>

        <ol className="text-stone mt-5 space-y-2 text-[13px] leading-relaxed">
          {sources.map((s) => (
            <li key={s.n} id={`source-${s.n}`} className="flex gap-2">
              <span className="text-rust w-3 shrink-0 font-medium">{s.n}</span>
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
      </Reveal>
    </Section>
  )
}
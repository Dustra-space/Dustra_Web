import type { ReactNode } from 'react'
import Reveal from './Reveal'

/** The four-point star that precedes every section label on the Liftoff site. */
export function Spark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={`h-2.5 w-2.5 shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M6 0c.5 3.2 2.3 5 5.5 6-3.2 1-5 2.8-5.5 6-.5-3.2-2.3-5-5.5-6C3.7 5 5.5 3.2 6 0Z" />
    </svg>
  )
}

export function Label({ children, tone = 'light' }: { children: ReactNode; tone?: Tone }) {
  return (
    <p className={`label flex items-center gap-2.5 ${tone === 'dark' ? 'text-chalk' : 'text-ink'}`}>
      <Spark />
      {children}
    </p>
  )
}

export type Tone = 'light' | 'band' | 'dark'

type Props = {
  id?: string
  label: string
  /** First line of the headline, set in the primary colour. */
  lead: string
  /** Second line, set in grey — the Liftoff two-tone headline. */
  trail?: string
  intro?: ReactNode
  children?: ReactNode
  tone?: Tone
  /** Indent the children into the right-hand content column. */
  inset?: boolean
}

const toneClasses: Record<Tone, string> = {
  light: 'bg-paper text-ink',
  band: 'bg-band text-ink',
  dark: 'bg-black text-chalk',
}

export default function Section({
  id,
  label,
  lead,
  trail,
  intro,
  children,
  tone = 'light',
  inset = false,
}: Props) {
  const dark = tone === 'dark'

  return (
    <section id={id} className={`px-6 py-24 md:py-32 ${toneClasses[tone]}`}>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-6">
          <Reveal>
            <Label tone={dark ? 'dark' : 'light'}>{label}</Label>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="h-section max-w-4xl text-balance">
              {lead}
              {trail && (
                <>
                  <br />
                  <span className={dark ? 'text-grey-dark' : 'text-grey-soft'}>{trail}</span>
                </>
              )}
            </h2>
            {intro && (
              <div className={`mt-8 max-w-2xl ${dark ? 'text-grey-dark' : 'text-grey'}`}>{intro}</div>
            )}
          </Reveal>
        </div>

        {children && (
          <div
            className={
              inset ? 'mt-16 lg:ml-[calc(26rem+1.5rem)] lg:mt-20' : 'mt-16 md:mt-24'
            }
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

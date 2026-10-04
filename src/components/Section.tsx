import type { ReactNode } from 'react'
import Reveal from './Reveal'

export type Tone = 'paper' | 'dust' | 'void'

/** Three dots and a streak: the particle trail from the logo's D, used as the eyebrow mark. */
export function Streak({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 8" className={`h-2 w-[30px] shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <circle cx="1.5" cy="4" r="1.3" />
      <circle cx="6" cy="4" r="1.3" />
      <rect x="9.5" y="3.25" width="20.5" height="1.5" rx="0.75" />
    </svg>
  )
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${dark ? 'text-ash' : 'text-stone'}`}>
      <Streak className={dark ? 'text-ember' : 'text-rust'} />
      {children}
    </p>
  )
}

type Props = {
  id?: string
  eyebrow: string
  title: string
  intro?: ReactNode
  tone?: Tone
  children?: ReactNode
}

const tones: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  dust: 'bg-dust text-ink',
  void: 'bg-void text-moon',
}

export default function Section({ id, eyebrow, title, intro, tone = 'paper', children }: Props) {
  const dark = tone === 'void'

  return (
    <section id={id} className={`px-5 py-20 md:px-8 md:py-28 ${tones[tone]}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
          <h2 className="h-section mt-5 max-w-3xl">{title}</h2>
          {intro && (
            <div className={`mt-6 max-w-[62ch] space-y-4 ${dark ? 'text-ash' : 'text-stone'}`}>{intro}</div>
          )}
        </Reveal>
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </div>
    </section>
  )
}

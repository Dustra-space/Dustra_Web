import { challenge, hero } from '../content'
import DustField from './DustField'
import HeroArt from './HeroArt'
import Reveal from './Reveal'
import { Streak } from './Section'

export default function Hero() {
  return (
    <section id="top" className="bg-paper relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 bottom-0 md:top-0">
        <HeroArt />
      </div>
      <DustField />

      <div className="relative flex min-h-[640px] flex-col px-5 pt-14 md:min-h-[820px] md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <Reveal>
            <a
              href={challenge.url}
              target="_blank"
              rel="noreferrer"
              className="label text-rust hover:text-rust-deep inline-flex items-center gap-3 transition-colors"
            >
              <Streak className="text-rust" />
              {challenge.name} · {challenge.status}
            </a>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="h-hero text-charcoal mt-8 max-w-[11ch]">{hero.title}</h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-stone mt-8 max-w-[34rem] text-lg leading-relaxed">{hero.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#concept" className="btn btn-rust">
                How it works
              </a>
              <a href="#contact" className="btn btn-line bg-paper/70">
                Work with us
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom rail: scroll cue left, principles centred, lockup right */}
        <Reveal delay={180} className="mx-auto mt-16 w-full max-w-6xl pb-8">
          <div className="flex flex-col items-start gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-end">
            <a
              href="#why"
              className="label text-stone hover:text-ink hidden items-center gap-2.5 justify-self-start transition-colors lg:flex"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M8 2v11M4 9.5 8 13.5 12 9.5" />
              </svg>
              Scroll to learn more
            </a>

            <dl className="bg-paper/75 grid gap-x-10 gap-y-3 rounded-2xl border border-[color:var(--color-rule)] px-6 py-5 backdrop-blur-md sm:grid-cols-[repeat(3,auto)] lg:justify-self-center">
              {hero.principles.map((p) => (
                <div key={p.value} className="flex flex-col-reverse">
                  <dt className="text-stone mt-1 text-[14px] leading-snug sm:whitespace-nowrap">{p.label}</dt>
                  <dd className="font-display text-charcoal text-lg leading-tight">{p.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={challenge.url}
              target="_blank"
              rel="noreferrer"
              className="text-stone hover:text-rust shrink-0 text-[14px] leading-snug transition-colors lg:justify-self-end lg:text-right"
            >
              <span className="text-ink block font-medium">ETH Zürich | Space</span>
              <span className="block">{challenge.name}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
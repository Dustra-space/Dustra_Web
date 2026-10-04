import { challenge, hero, site } from '../content'
import DustField from './DustField'
import HeroArt from './HeroArt'
import Moon from './Moon'
import Reveal from './Reveal'
import { Streak } from './Section'

export default function Hero() {
  return (
    <section id="top" className="bg-paper relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 bottom-0 md:top-0">
        <HeroArt />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden px-8 md:block" aria-hidden="true">
        <div className="relative mx-auto max-w-6xl">
          <Moon className="absolute top-28 right-0 w-[clamp(220px,25vw,360px)] lg:top-32" />
        </div>
      </div>
      <DustField />

      <div className="relative flex min-h-[640px] flex-col px-5 pt-14 md:min-h-[820px] md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <Reveal>
            <p className="label text-rust inline-flex items-center gap-3">
              <Streak className="text-rust" />
              {site.field}
            </p>
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

        {/* Bottom rail: selection centred, organiser lockup right */}
        <Reveal delay={180} className="mx-auto mt-16 w-full max-w-6xl pb-8">
          <div className="flex flex-col items-start gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-end">
            <a
              href={challenge.url}
              target="_blank"
              rel="noreferrer"
              className="bg-paper/75 hover:border-rust/40 flex flex-col rounded-2xl border border-[color:var(--color-rule)] px-6 py-4 backdrop-blur-md transition-colors lg:col-start-2"
            >
              <span className="font-display text-charcoal text-lg leading-tight">{hero.selected.value}</span>
              <span className="text-stone mt-1 text-[14px] leading-snug">{hero.selected.label}</span>
            </a>

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
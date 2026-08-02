import { challenge, keyFigures, project } from '../content'
import DustField from './DustField'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-[#060708]">
      {/* Planet limb, standing in for the Liftoff hero photograph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[95vh] -left-[10vw] h-[170vh] w-[170vh] rounded-full"
        style={{
          background: 'radial-gradient(circle at 34% 22%, #23344a 0%, #131c28 45%, #080c11 72%)',
          boxShadow:
            '0 0 90px 6px rgba(120, 175, 255, 0.16), inset 0 6px 60px rgba(150, 205, 255, 0.18)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 78% 12%, rgba(255,88,65,0.14), transparent 60%)',
        }}
      />

      <DustField />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pt-32 pb-10">
        <Reveal>
          <span className="bg-coral label inline-flex items-center gap-2 rounded-md px-2.5 py-2 text-white">
            {challenge.status}
          </span>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="h-hero mt-7 max-w-5xl text-white">
            Accelerating particles.
            <br />
            <span className="text-grey-dark">Enabling new space systems.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-chalk/70 mt-8 max-w-xl text-[17px] leading-relaxed">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            <a href="#how" className="btn btn-coral">
              Explore the technology
            </a>
            <a href="#roadmap" className="btn btn-ghost-dark">
              View our roadmap
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom rail — figures, scroll cue and the institutional lockup */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-8">
        <Reveal delay={280}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <a
              href="#market"
              className="label text-chalk/55 hover:text-chalk order-2 flex items-center gap-2.5 transition-colors lg:order-1"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M8 2v11M4 9.5 8 13.5 12 9.5" />
              </svg>
              Scroll to learn more
            </a>

            <div className="order-1 flex flex-col items-start gap-6 lg:order-2 lg:flex-row lg:items-end">
              <dl className="grid grid-cols-2 gap-x-10 gap-y-5 rounded-lg bg-white/[0.07] px-6 py-5 backdrop-blur-md sm:grid-cols-4">
                {keyFigures.map((f) => (
                  <div key={f.label}>
                    <dd className="flex items-baseline gap-1 text-white">
                      <span className="text-2xl font-medium tracking-[-0.03em]">{f.value}</span>
                      <span className="text-coral text-sm">{f.unit}</span>
                    </dd>
                    <dt className="text-chalk/55 mt-1 text-[11px] leading-tight">{f.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="text-chalk/55 shrink-0 text-[11px] leading-snug">
                <p className="text-chalk font-medium">ETH Zürich | Space</p>
                <p>Liftoff Challenge 2026/27</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

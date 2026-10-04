import { why } from '../content'
import Reveal from './Reveal'
import { Eyebrow } from './Section'

export default function Why() {
  const [problem, idea] = why.body

  return (
    <section id="why" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        <Reveal>
          <Eyebrow>{why.eyebrow}</Eyebrow>
          <h2 className="h-section text-charcoal mt-5">{why.title}</h2>
        </Reveal>

        <Reveal delay={80} className="text-stone space-y-5 md:pt-11">
          <p className="text-ink text-xl leading-relaxed">{problem}</p>
          <p>{idea}</p>
        </Reveal>
      </div>
    </section>
  )
}

import { challenge, contact, headings, project, sources } from '../content'
import ContactForm from './ContactForm'
import Logo from './Logo'
import Reveal from './Reveal'
import { Label } from './Section'

export default function Contact() {
  return (
    <footer id="contact" className="bg-black text-chalk px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-6">
          <Reveal>
            <Label tone="dark">{headings.contact.label}</Label>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="h-section max-w-4xl text-balance">
              {headings.contact.lead}
              <br />
              <span className="text-grey-dark">{headings.contact.trail}</span>
            </h2>
            <p className="text-grey-dark mt-8 max-w-2xl">
              We are looking for high-voltage and materials expertise, test-facility access, and
              partners who want to see whether dust can move a spacecraft.
            </p>

            <p className="text-grey-dark mt-4 text-[13px]">
              Messages reach {contact.person}, {contact.role.toLowerCase()}.
            </p>

            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-24">
          <p className="label text-grey-dark border-t border-[color:var(--color-rule-dark)] pt-5">
            References
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {sources.map((s) => (
              <li key={s.n} className="text-grey-dark flex gap-3 text-[15px] leading-relaxed">
                <span className="shrink-0">[{s.n}]</span>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-coral underline decoration-[color:var(--color-rule-dark)] underline-offset-4 transition-colors"
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

        <div className="mt-20 flex flex-col gap-6 border-t border-[color:var(--color-rule-dark)] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-chalk flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div className="leading-tight">
              <p className="text-[17px] font-semibold tracking-[-0.02em]">Dustra</p>
              <p className="text-grey-dark text-[13px]">
                {project.thematicArea} · {project.institution}
              </p>
            </div>
          </div>

          <div className="text-grey-dark flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            <a
              href={challenge.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-chalk transition-colors"
            >
              Liftoff Challenge 2026/27
            </a>
            <span>{challenge.organisers}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

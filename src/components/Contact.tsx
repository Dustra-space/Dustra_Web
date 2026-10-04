import { challenge, contact, site } from '../content'
import Logo from './Logo'
import { Streak } from './Section'

const LINKEDIN = 'https://www.linkedin.com/company/dustra/'

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-rust text-moon px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="label text-moon/70 flex items-center gap-3">
            <Streak className="text-moon/70" />
            {contact.eyebrow}
          </p>

          {/* Heading and text on the left; email and LinkedIn centred against them on the right */}
          <div className="mt-5 grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <h2 className="h-section">{contact.title}</h2>
              <p className="text-moon/80 mt-5 max-w-[56ch]">{contact.ask}</p>
            </div>

            <div className="flex flex-col items-start gap-5 md:items-end">
              <a
                href={`mailto:${site.email}`}
                className="font-display decoration-moon/30 hover:decoration-moon text-3xl [overflow-wrap:anywhere] underline underline-offset-[6px] transition-colors md:text-4xl"
              >
                {site.email}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="DUSTRA on LinkedIn"
                className="text-moon/80 hover:text-moon transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.48 2.5 0 1 1-4.96 0 2.48 2.5 0 0 1 4.96 0ZM.5 8h4v15h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.730 1.85-2.73 3.76V23h-4V8Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-paper px-5 py-8 md:px-8">
        <div className="text-stone mx-auto flex max-w-6xl flex-col gap-5 text-[14px] md:flex-row md:items-center md:justify-between">
          <Logo className="text-charcoal h-5 w-auto" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={challenge.url} target="_blank" rel="noreferrer" className="hover:text-rust transition-colors">
              {challenge.name} ↗
            </a>
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </footer>
    </>
  )
}
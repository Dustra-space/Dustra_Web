import { useState } from 'react'
import { challenge, contact, site } from '../content'
import Logo from './Logo'
import { Streak } from './Section'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be unavailable; the address stays selectable.
    }
  }

  return (
    <>
      <section id="contact" className="bg-rust text-moon px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="label text-moon/70 flex items-center gap-3">
              <Streak className="text-moon/70" />
              {contact.eyebrow}
            </p>
            <h2 className="h-section mt-5">{contact.title}</h2>
            <p className="text-moon/80 mt-5 max-w-[56ch]">{contact.ask}</p>
          </div>

          <div className="md:text-right">
            <a
              href={`mailto:${site.email}`}
              className="font-display decoration-moon/30 hover:decoration-moon text-3xl [overflow-wrap:anywhere] underline underline-offset-[6px] transition-colors md:text-4xl"
            >
              {site.email}
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end">
              <button
                type="button"
                onClick={copy}
                className="label text-moon border-moon/30 hover:border-moon rounded-full border px-3 py-1.5 transition-colors"
              >
                <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-paper px-5 py-8 md:px-8">
        <div className="text-stone mx-auto flex max-w-6xl flex-col gap-5 text-[14px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Logo className="text-charcoal h-5 w-auto" />
            <span>{site.field}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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

import { useEffect, useState } from 'react'
import { nav } from '../content'
import Logo from './Logo'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-paper/92 border-b border-[color:var(--color-rule)] backdrop-blur-xl' : ''
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className={`flex items-center gap-2.5 ${solid ? 'text-ink' : 'text-white'}`}
        >
          <Logo className="h-7 w-7" />
          <span className="text-[19px] font-semibold tracking-[-0.02em]">Dustra</span>
        </a>

        <nav className="hidden items-center gap-1.5 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`label rounded-md px-3 py-2.5 transition-colors ${
                solid
                  ? 'text-ink hover:bg-ink/[0.06]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-coral hidden sm:inline-flex">
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`rounded-md p-2 lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="bg-paper border-t border-[color:var(--color-rule)] px-6 py-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label text-ink block py-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="label text-coral block py-3"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { nav } from '../content'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`bg-paper/90 sticky top-0 z-50 backdrop-blur-lg transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_var(--color-rule)]' : ''
      }`}
    >
      <div className="px-5 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 py-4">
        <a href="#top" aria-label="DUSTRA, back to top" className="-my-1 py-1">
          <Logo className="text-charcoal h-6 w-auto md:h-7" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="label text-stone hover:text-ink transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-rust py-2.5">
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink -mr-2 rounded-md p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-[color:var(--color-rule)] px-5 pb-4 md:hidden">
          <ul className="flex flex-col">
            {[...nav, { href: '#contact', label: 'Contact' }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label text-ink block border-b border-[color:var(--color-rule)] py-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

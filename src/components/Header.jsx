import { useState } from 'react'
import Logo from './Logo'

const links = [
  { id: 'ch-accueil',        label: 'Accueil' },
  { id: 'ch-offre',          label: 'Nos services' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement' },
  { id: 'ch-garanties',      label: 'Nos garanties' },
  { id: 'ch-contact',        label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  function goTerritoire() {
    window.location.hash = '#territoire'
    setOpen(false)
  }

  function goVictor() {
    window.location.hash = '#victor'
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/96 backdrop-blur-md border-b border-cream-deeper">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 h-14 lg:h-16">

        {/* Mobile: hamburger left */}
        <button
          className="lg:hidden p-2 rounded-xl text-noir hover:bg-cream-dark transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        {/* Desktop: section links left */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-heading font-semibold text-noir/60 hover:text-brand-orange hover:bg-brand-orange/8 transition-all duration-200 px-3 py-2 rounded-lg text-[14px] whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={goTerritoire}
            className="font-heading font-semibold text-brand-olive hover:text-brand-olive-dark hover:bg-brand-olive/8 transition-all duration-200 px-3 py-2 rounded-lg text-[14px] whitespace-nowrap"
          >
            Notre territoire
          </button>
          <button
            onClick={goVictor}
            className="font-heading font-semibold text-brand-olive hover:text-brand-olive-dark hover:bg-brand-olive/8 transition-all duration-200 px-3 py-2 rounded-lg text-[14px] whitespace-nowrap"
          >
            Qui suis-je ?
          </button>
          <a
            href="tel:0620711975"
            className="ml-3 inline-flex items-center gap-2 bg-brand-orange text-white font-heading font-bold text-sm px-4 py-2 rounded-xl hover:bg-brand-orange-dark transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Nous appeler
          </a>
        </nav>

        {/* Logo — always top right */}
        <button onClick={() => go('ch-accueil')} className="hover:opacity-75 transition-opacity flex-shrink-0">
          <Logo size="sm" />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-cream/98 backdrop-blur-md px-4 pb-5 pt-2 flex flex-col gap-0.5 border-t border-cream-deeper">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-heading font-semibold text-noir/70 hover:text-brand-orange transition-colors py-3 text-base text-left border-b border-cream-deeper/50"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={goTerritoire}
            className="font-heading font-semibold text-brand-olive hover:text-brand-olive-dark transition-colors py-3 text-base text-left border-b border-cream-deeper/50"
          >
            Notre territoire 🗺️
          </button>
          <button
            onClick={goVictor}
            className="font-heading font-semibold text-brand-olive hover:text-brand-olive-dark transition-colors py-3 text-base text-left border-b border-cream-deeper/50"
          >
            Qui suis-je ? 👋
          </button>
          <a
            href="tel:0620711975"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-heading font-bold text-sm px-4 py-3 rounded-xl hover:bg-brand-orange-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler maintenant
          </a>
        </div>
      </div>
    </header>
  )
}

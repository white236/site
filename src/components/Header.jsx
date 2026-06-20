import { useState } from 'react'
import Logo from './Logo'

const links = [
  { id: 'ch-accueil',        label: 'Accueil' },
  { id: 'ch-defi',           label: 'Le défi' },
  { id: 'ch-offre',          label: 'Nos services' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement' },
  { id: 'ch-garanties',      label: 'Nos garanties' },
  { id: 'ch-securite',       label: 'Sécurité' },
  { id: 'ch-contact',        label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-deeper">
      <div className="flex items-center justify-between px-4 h-14">
        <button onClick={() => go('ch-accueil')} className="flex-shrink-0 hover:opacity-75 transition-opacity">
          <Logo size="sm" />
        </button>

        <button
          className="p-2 rounded-xl text-noir hover:bg-cream-dark transition-colors"
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
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-cream/98 backdrop-blur-md px-4 pb-5 pt-2 flex flex-col gap-0.5 border-t border-cream-deeper">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-heading font-semibold text-noir/70 hover:text-brand-orange transition-colors py-2.5 text-base text-left"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0620711975"
            className="btn-orange text-sm mt-3"
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

import Logo from './Logo'

const links = [
  { id: 'ch-accueil',        label: 'Accueil' },
  { id: 'ch-offre',          label: 'Nos services' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement' },
  { id: 'ch-contact',        label: 'Contact' },
]

export default function Header() {
  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function goTerritoire() {
    window.location.hash = '#territoire'
  }

  function goVictor() {
    window.location.hash = '#victor'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/96 backdrop-blur-md border-b border-cream-deeper">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 h-14 lg:h-16">

        {/* Mobile: logo left */}
        <button onClick={() => go('ch-accueil')} className="lg:hidden hover:opacity-75 transition-opacity flex-shrink-0">
          <Logo size="sm" />
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

        {/* Desktop: logo right */}
        <button onClick={() => go('ch-accueil')} className="hidden lg:flex hover:opacity-75 transition-opacity flex-shrink-0">
          <Logo size="sm" />
        </button>

        {/* Mobile: phone CTA right */}
        <a
          href="tel:0620711975"
          className="lg:hidden inline-flex items-center gap-1.5 bg-brand-orange text-white font-heading font-bold text-sm px-3 py-2 rounded-xl hover:bg-brand-orange-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Appeler
        </a>
      </div>
    </header>
  )
}

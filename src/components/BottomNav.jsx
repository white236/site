function NavItem({ icon, label, active, onClick, href }) {
  const cls = `flex-1 flex flex-col items-center justify-center gap-1 py-2 transition-colors duration-200 ${
    active ? 'text-brand-orange' : 'text-noir/35'
  }`
  if (href) return (
    <a href={href} className={cls}>
      {icon}
      <span className="font-heading font-bold text-[10px] leading-none">{label}</span>
    </a>
  )
  return (
    <button onClick={onClick} className={cls}>
      {icon}
      <span className="font-heading font-bold text-[10px] leading-none">{label}</span>
    </button>
  )
}

export default function BottomNav({ currentPage = 'accueil' }) {
  function goAccueil() {
    if (window.location.hash) {
      window.location.hash = ''
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function goSection(id) {
    if (window.location.hash) {
      window.location.hash = ''
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-cream/96 backdrop-blur-md border-t border-cream-deeper">
      <div className="flex items-stretch h-16">
        <NavItem
          active={currentPage === 'accueil'}
          label="Accueil"
          onClick={goAccueil}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
        />
        <NavItem
          active={false}
          label="Services"
          onClick={() => goSection('ch-offre')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          }
        />
        <NavItem
          active={currentPage === 'victor'}
          label="Qui suis-je ?"
          onClick={() => { window.location.hash = '#victor' }}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        <NavItem
          active={false}
          label="Appeler"
          href="tel:0620711975"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />
      </div>
    </nav>
  )
}

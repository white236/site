import { useState, useEffect } from 'react'

const sections = [
  { id: 'ch-accueil',        label: 'Accueil' },
  { id: 'ch-defi',           label: 'Le défi' },
  { id: 'ch-offre',          label: 'Nos services' },
  { id: 'ch-gen',            label: 'Nouvelle génération' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement' },
  { id: 'ch-garanties',      label: 'Nos garanties' },
  { id: 'ch-securite',       label: 'Sécurité' },
  { id: 'ch-esprit',         label: "L'esprit du Ventoux" },
  { id: 'ch-territoire',     label: 'Notre territoire' },
  { id: 'ch-contact',        label: 'Contact' },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function SectionNav() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrollY / total : 0)

      const trigger = scrollY + window.innerHeight * 0.4
      let idx = 0
      sections.forEach(({ id }, i) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= trigger) idx = i
      })
      setActive(idx)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const fillPct = sections.length > 1 ? (active / (sections.length - 1)) * 100 : 0

  return (
    <>
      {/* Desktop right-side dots */}
      <nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-[14px]"
        aria-label="Navigation sections"
      >
        {/* Vertical track line */}
        <div className="absolute top-0 bottom-0 w-px bg-noir/12 left-1/2 -translate-x-1/2 pointer-events-none" />
        {/* Orange fill */}
        <div
          className="absolute top-0 w-px bg-brand-orange left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500"
          style={{ height: `${fillPct}%` }}
        />

        {sections.map(({ id, label }, i) => {
          const isActive = i === active
          const isPast   = i < active
          return (
            <button
              key={id}
              onClick={() => go(id)}
              aria-label={label}
              className="group relative z-10 flex items-center justify-center"
            >
              <div className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-brand-orange shadow-[0_0_10px_rgba(125,140,255,0.7)]'
                  : isPast
                  ? 'w-2 h-2 bg-brand-orange/40 group-hover:bg-brand-orange/70'
                  : 'w-2 h-2 bg-noir/18 group-hover:bg-brand-orange/50'
              }`} />

              {/* Tooltip label */}
              <span className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 whitespace-nowrap
                font-heading font-bold text-[11px] text-white bg-noir/88 backdrop-blur-sm
                px-2.5 py-1 rounded-lg
                opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0
                transition-all duration-200">
                {label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Mobile reading progress bar — thin line at very top */}
      <div
        aria-hidden="true"
        className="lg:hidden fixed top-0 left-0 right-0 h-[3px] z-[200] pointer-events-none"
      >
        <div
          className="h-full bg-brand-orange origin-left transition-all duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </>
  )
}

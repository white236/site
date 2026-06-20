import { useState, useEffect } from 'react'

const sections = [
  { id: 'ch-accueil',        label: 'Accueil',             number: '01' },
  { id: 'ch-defi',           label: 'Le défi',             number: '02' },
  { id: 'ch-offre',          label: 'Nos services',        number: '03' },
  { id: 'ch-gen',            label: 'Nouvelle génération', number: '04' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement',      number: '05' },
  { id: 'ch-garanties',      label: 'Nos garanties',       number: '06' },
  { id: 'ch-securite',       label: 'Sécurité',            number: '07' },
  { id: 'ch-esprit',         label: "L'esprit du Ventoux", number: '08' },
  { id: 'ch-territoire',     label: 'Notre territoire',    number: '09' },
  { id: 'ch-contact',        label: 'Contact',             number: '10' },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function SectionNav() {
  const [active, setActive]   = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY
      const total   = document.body.scrollHeight - window.innerHeight
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
      {/* ── Desktop: right-side dot rail ── */}
      <nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-[14px]"
        aria-label="Navigation sections"
      >
        {/* Track line */}
        <div className="absolute top-0 bottom-0 w-px bg-noir/10 left-1/2 -translate-x-1/2 pointer-events-none" />
        {/* Orange fill */}
        <div
          className="absolute top-0 w-px bg-brand-orange left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ height: `${fillPct}%` }}
        />
        {/* Glowing moving tip */}
        {fillPct > 1 && fillPct < 99 && (
          <div
            className="absolute w-[7px] h-[7px] rounded-full bg-brand-orange left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              top: `calc(${fillPct}% - 3.5px)`,
              boxShadow: '0 0 10px 3px rgba(125,140,255,0.65)',
            }}
          />
        )}

        {sections.map(({ id, label }, i) => {
          const isActive = i === active
          const isPast   = i < active
          return (
            <button
              key={id}
              onClick={() => go(id)}
              aria-label={label}
              className="group relative z-10 flex items-center justify-center p-[5px]"
            >
              {/* Pulse ring on active */}
              {isActive && (
                <span className="dot-pulse-ring absolute w-[14px] h-[14px] rounded-full border border-brand-orange pointer-events-none" />
              )}

              {/* Dot */}
              <div className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-[11px] h-[11px] bg-brand-orange shadow-[0_0_10px_rgba(125,140,255,0.75)]'
                  : isPast
                  ? 'w-2 h-2 bg-brand-orange/45 group-hover:bg-brand-orange/80 group-hover:scale-125'
                  : 'w-[6px] h-[6px] bg-noir/15 group-hover:bg-brand-orange/50 group-hover:scale-150'
              } transition-transform duration-200`} />

              {/* Active: permanent label to the left */}
              {isActive && (
                <span
                  key={active}
                  className="count-flip-in absolute right-[22px] top-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-bold text-[11.5px] text-noir pointer-events-none"
                >
                  {label}
                </span>
              )}

              {/* Inactive: tooltip on hover */}
              {!isActive && (
                <span className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-bold text-[11px] text-white bg-noir/90 backdrop-blur-sm px-2.5 py-[5px] rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                  {label}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* ── Mobile: reading progress bar with glowing dot tip ── */}
      <div
        aria-hidden="true"
        className="lg:hidden fixed top-0 left-0 right-0 h-[4px] z-[200] pointer-events-none"
        style={{ background: 'rgba(44,58,32,0.06)' }}
      >
        <div className="relative h-full">
          <div
            className="h-full bg-brand-orange"
            style={{ width: `${progress * 100}%`, transition: 'width 0.1s linear' }}
          />
          {progress > 0.01 && progress < 0.99 && (
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-brand-orange"
              style={{
                left:      `calc(${progress * 100}% - 4.5px)`,
                boxShadow: '0 0 8px 2px rgba(125,140,255,0.7)',
                transition: 'left 0.1s linear',
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}

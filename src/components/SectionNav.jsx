import { useState, useEffect } from 'react'

const sections = [
  { id: 'ch-accueil',        label: 'Accueil'             },
  { id: 'ch-defi',           label: 'Le défi'             },
  { id: 'ch-offre',          label: 'Nos services'        },
  { id: 'ch-gen',            label: 'Nouvelle génération' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement'      },
  { id: 'ch-garanties',      label: 'Nos garanties'       },
  { id: 'ch-territoire',     label: 'Notre territoire'    },
  { id: 'ch-contact',        label: 'Contact'             },
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

  return (
    <>
      {/* ── Desktop: right-side dot rail ── */}
      <nav
        className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-[14px]"
        aria-label="Navigation sections"
      >
        {/* Track line */}
        <div className="absolute top-0 bottom-0 w-px bg-noir/10 left-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Orange progress fill — uses continuous scroll progress, not active index */}
        <div
          className="absolute top-0 w-px bg-brand-orange left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ height: `${progress * 100}%`, transition: 'height 0.12s linear' }}
        />

        {/* Glowing tip that moves with scroll */}
        {progress > 0.01 && progress < 0.99 && (
          <div
            className="absolute w-[7px] h-[7px] rounded-full bg-brand-orange left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              top:       `calc(${progress * 100}% - 3.5px)`,
              boxShadow: '0 0 10px 3px rgba(125,140,255,0.65)',
              transition: 'top 0.12s linear',
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

              {/* Tooltip — appears on hover only, extends LEFT, stays within rail width */}
              <span className="pointer-events-none absolute right-[22px] top-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-bold text-[11px] text-white bg-noir/90 backdrop-blur-sm px-2.5 py-[5px] rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                {label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* ── Mobile: reading progress bar ── */}
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
                left:       `calc(${progress * 100}% - 4.5px)`,
                boxShadow:  '0 0 8px 2px rgba(125,140,255,0.7)',
                transition: 'left 0.1s linear',
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}

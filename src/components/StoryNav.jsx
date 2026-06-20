import { useState, useEffect } from 'react'
import Logo from './Logo'

const chapters = [
  { id: 'ch-accueil',        label: 'Accueil',              number: '01' },
  { id: 'ch-defi',           label: 'Le défi',              number: '02' },
  { id: 'ch-offre',          label: 'Nos services',         number: '03' },
  { id: 'ch-gen',            label: 'Nouvelle génération',  number: '04' },
  { id: 'ch-fonctionnement', label: 'Fonctionnement',       number: '05' },
  { id: 'ch-garanties',      label: 'Nos garanties',        number: '06' },
  { id: 'ch-securite',       label: 'Sécurité',             number: '07' },
  { id: 'ch-esprit',         label: "L'esprit du Ventoux",  number: '08' },
  { id: 'ch-territoire',     label: 'Notre territoire',     number: '09' },
  { id: 'ch-contact',        label: 'Contact',              number: '10' },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function StoryNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrollY / total : 0)

      const trigger = scrollY + window.innerHeight * 0.38
      let active = 0
      chapters.forEach(({ id }, i) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= trigger) active = i
      })
      setActiveIndex(active)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const prev = activeIndex > 0 ? chapters[activeIndex - 1] : null
  const next = activeIndex < chapters.length - 1 ? chapters[activeIndex + 1] : null
  const fillPct = chapters.length > 1
    ? (activeIndex / (chapters.length - 1)) * 100
    : 0

  return (
    <>
      {/* ── Reading progress bar (full width, top of page) ── */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-cream-deeper/60"
      >
        <div
          className="h-full bg-brand-orange origin-left"
          style={{ width: `${progress * 100}%`, transition: 'width 0.12s linear' }}
        />
      </div>

      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[220px] z-50 flex-col bg-cream border-r border-cream-deeper shadow-[2px_0_20px_rgba(44,58,32,0.06)]">

        {/* Logo + tagline */}
        <div className="px-6 pt-8 pb-5 flex-shrink-0">
          <button onClick={() => go('ch-accueil')} className="block text-left hover:opacity-75 transition-opacity">
            <Logo size="sm" />
          </button>
          <p className="mt-2 text-noir/32 font-body text-[11px] leading-relaxed">
            Conciergerie courte durée<br />au pied du Ventoux
          </p>
        </div>

        <div className="mx-6 h-px bg-cream-deeper flex-shrink-0" />

        {/* Chapter list */}
        <nav className="flex-1 overflow-y-auto py-5 px-5 min-h-0" aria-label="Chapitres">
          <p className="text-noir/22 font-heading font-bold text-[9px] uppercase tracking-[0.2em] mb-4 px-1">
            Chapitres
          </p>

          <div className="relative">
            {/* Track line */}
            <div className="absolute left-[5px] top-3 bottom-3 w-px bg-cream-deeper" />
            {/* Progress fill */}
            <div
              className="absolute left-[5px] top-3 w-px bg-brand-orange"
              style={{
                height: `calc(${fillPct}% - 6px)`,
                transition: 'height 0.45s cubic-bezier(0.4,0,0.2,1)',
              }}
            />

            <ul className="space-y-[2px]">
              {chapters.map((ch, i) => {
                const isActive = i === activeIndex
                const isPast   = i < activeIndex
                return (
                  <li key={ch.id}>
                    <button
                      onClick={() => go(ch.id)}
                      className="group flex items-center gap-3 w-full text-left px-1 py-[8px] rounded-lg transition-all duration-200 hover:bg-brand-orange/[0.06]"
                    >
                      {/* Dot */}
                      <div className="relative z-10 flex-shrink-0 w-[11px] h-[11px]">
                        <div className={`w-full h-full rounded-full border-2 transition-all duration-350 ${
                          isActive
                            ? 'bg-brand-orange border-brand-orange scale-[1.3] shadow-[0_0_7px_rgba(125,140,255,0.55)]'
                            : isPast
                            ? 'bg-brand-orange/30 border-brand-orange/30'
                            : 'bg-cream border-cream-deeper group-hover:border-brand-orange/45'
                        }`} />
                      </div>

                      {/* Label */}
                      <div className="min-w-0 flex-1">
                        <div className={`font-heading font-black text-[10px] tracking-wider transition-colors duration-200 ${
                          isActive ? 'text-brand-orange' : 'text-noir/18'
                        }`}>
                          {ch.number}
                        </div>
                        <div className={`font-heading text-[12.5px] leading-snug truncate transition-all duration-200 ${
                          isActive
                            ? 'font-bold text-noir'
                            : isPast
                            ? 'font-medium text-noir/38 group-hover:text-noir/65'
                            : 'font-medium text-noir/28 group-hover:text-noir/55'
                        }`}>
                          {ch.label}
                        </div>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        <div className="mx-6 h-px bg-cream-deeper flex-shrink-0" />

        {/* Contact footer of sidebar */}
        <div className="px-6 py-5 flex-shrink-0">
          <a
            href="tel:0620711975"
            className="flex items-center gap-2 text-brand-orange font-heading font-bold text-sm hover:opacity-70 transition-opacity"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06 20 71 19 75
          </a>
          <p className="text-noir/25 font-body text-[11px] mt-0.5 mb-3">Disponible 7j/7</p>
          <button
            onClick={() => go('ch-contact')}
            className="text-xs font-heading font-bold text-noir/40 hover:text-brand-orange transition-colors flex items-center gap-1"
          >
            Me contacter
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </aside>

      {/* ── Mobile bottom chapter navigator ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-cream/96 backdrop-blur-md border-t border-cream-deeper shadow-[0_-4px_24px_rgba(44,58,32,0.09)]">
        {/* Chapter progress line */}
        <div className="h-[3px] bg-cream-deeper">
          <div
            className="h-full bg-brand-orange"
            style={{
              width: `${fillPct}%`,
              transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>

        <div className="flex items-center px-4 py-3 gap-3">
          {/* Previous */}
          <button
            onClick={() => prev && go(prev.id)}
            disabled={!prev}
            className="w-12 h-12 rounded-2xl bg-cream-dark flex items-center justify-center text-noir/55 disabled:opacity-20 hover:bg-brand-orange/10 hover:text-brand-orange active:scale-95 transition-all flex-shrink-0"
            aria-label="Chapitre précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Current chapter info */}
          <button
            onClick={() => go(chapters[activeIndex].id)}
            className="flex-1 text-center min-w-0 py-0.5"
          >
            <div className="text-brand-orange font-heading font-black text-[11px] tracking-widest mb-0.5">
              {chapters[activeIndex].number} · {String(chapters.length).padStart(2, '0')}
            </div>
            <div className="font-heading font-bold text-noir text-[15px] leading-tight truncate">
              {chapters[activeIndex].label}
            </div>
          </button>

          {/* Next */}
          <button
            onClick={() => next && go(next.id)}
            disabled={!next}
            className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center text-white disabled:bg-cream-dark disabled:text-noir/30 hover:bg-brand-orange-dark active:scale-95 transition-all flex-shrink-0 shadow-orange"
            aria-label="Chapitre suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

import { useRef, useState } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'

const steps = [
  {
    number: '01',
    icon: '☕',
    title: 'On échange',
    desc: "On parle de votre logement, de vos attentes et du potentiel en courte durée. Sans engagement, à votre rythme.",
  },
  {
    number: '02',
    icon: '🏠',
    title: 'Je visite',
    desc: "Je viens voir votre logement sur place pour mieux comprendre ce que je peux mettre en place pour vous.",
  },
  {
    number: '03',
    icon: '🚀',
    title: "On prépare l'annonce",
    desc: "Photos, description, tarifs adaptés au marché : on prépare tout pour que votre logement soit attractif.",
  },
  {
    number: '04',
    icon: '🔄',
    title: 'Je gère les séjours',
    desc: "Messages, arrivées, départs, ménage, suivi : je prends le relais sur le terrain. Vous recevez un résumé mensuel.",
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)
  useRevealChildren(containerRef)

  const prev = active > 0 ? active - 1 : null
  const next = active < steps.length - 1 ? active + 1 : null

  return (
    <section id="fonctionnement" className="py-12 sm:py-28 bg-cream relative overflow-hidden" ref={containerRef}>
      <FloatingParticles seed={18} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/[0.05] rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-olive/[0.06] rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-noir text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Fonctionnement
          </span>
          <h2 className="section-title max-w-xl mx-auto text-balance">
            Comment ça{' '}
            <span className="text-brand-orange">se passe ?</span>
          </h2>
          <p className="mt-4 text-noir/48 text-lg max-w-md mx-auto font-body">
            Simple, direct, local.
          </p>
        </div>

        {/* ── Desktop: editorial two-column ── */}
        <div className="hidden lg:grid grid-cols-[2fr_3fr] gap-20 items-center min-h-[380px]">

          {/* Left: step list nav */}
          <div className="space-y-1">
            {steps.map((step, i) => {
              const isActive = i === active
              const isPast   = i < active
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group ${
                    isActive ? 'bg-noir' : 'hover:bg-noir/[0.04]'
                  }`}
                >
                  {/* Step number circle */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-heading font-black text-sm flex-shrink-0 transition-all duration-300 ${
                    isActive ? 'bg-brand-orange text-white'
                    : isPast  ? 'bg-brand-orange/20 text-brand-orange'
                    : 'bg-cream-deeper text-noir/35 group-hover:bg-brand-orange/10 group-hover:text-brand-orange/60'
                  }`}>
                    {step.number}
                  </div>
                  {/* Step title */}
                  <span className={`font-heading font-bold text-base transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-noir/50 group-hover:text-noir'
                  }`}>
                    {step.title}
                  </span>
                  {/* Active arrow */}
                  {isActive && (
                    <svg className="w-4 h-4 text-brand-orange ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: big animated content */}
          <div className="relative">
            {/* Giant ghost number */}
            <div
              key={`num-${active}`}
              className="count-flip-in absolute -top-8 -left-6 font-heading font-black leading-none text-noir/[0.04] select-none pointer-events-none"
              style={{ fontSize: 160 }}
              aria-hidden="true"
            >
              {steps[active].number}
            </div>

            {/* Animated content */}
            <div key={active} className="count-flip-in relative z-10">
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-white border border-cream-deeper shadow-card-hover flex items-center justify-center text-4xl mb-7">
                {steps[active].icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-3xl text-noir leading-tight mb-4">
                {steps[active].title}
              </h3>

              {/* Description */}
              <p className="font-body text-lg text-noir/55 leading-relaxed mb-8 max-w-md">
                {steps[active].desc}
              </p>

              {/* Prev / Next navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => prev !== null && setActive(prev)}
                  disabled={prev === null}
                  className="w-11 h-11 rounded-2xl bg-cream-deeper flex items-center justify-center text-noir/50 disabled:opacity-25 hover:bg-noir hover:text-white transition-all duration-200 active:scale-90"
                  aria-label="Étape précédente"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => next !== null && setActive(next)}
                  disabled={next === null}
                  className="w-11 h-11 rounded-2xl bg-brand-orange flex items-center justify-center text-white disabled:opacity-25 hover:bg-brand-orange-dark transition-all duration-200 active:scale-90 shadow-orange"
                  aria-label="Étape suivante"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-1.5 ml-3">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === active ? 'w-5 h-[6px] bg-brand-orange' : 'w-[6px] h-[6px] bg-noir/15 hover:bg-brand-orange/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-cream-deeper" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative pl-14 pb-10`}>
                {/* Dot on the line */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-cream border-2 border-brand-orange/30 flex items-center justify-center text-lg z-10">
                  {step.icon}
                </div>
                <div className="absolute left-[14px] top-[2px] w-[10px] h-[10px] rounded-full bg-brand-orange" style={{ zIndex: 11 }} />

                <div className="pt-1">
                  <span className="font-heading font-black text-brand-orange text-xs tracking-widest">{step.number}</span>
                  <h3 className="font-heading font-bold text-noir text-lg mt-0.5 mb-2">{step.title}</h3>
                  <p className="text-noir/50 font-body text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="#ch-contact"
            onClick={e => { e.preventDefault(); document.getElementById('ch-contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-orange shadow-orange"
          >
            On en parle ?
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

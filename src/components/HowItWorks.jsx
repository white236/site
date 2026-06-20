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
  const [activeStep, setActiveStep] = useState(0)
  useRevealChildren(containerRef)

  return (
    <section id="fonctionnement" className="py-20 sm:py-28 bg-cream relative overflow-hidden" ref={containerRef}>
      <FloatingParticles seed={18} />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-orange/[0.05] rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-olive/[0.06] rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
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

        {/* Desktop: horizontal interactive timeline */}
        <div className="hidden lg:block">
          {/* Timeline row */}
          <div className="flex items-start gap-0 relative">
            {/* Base track */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-cream-deeper" />
            {/* Orange fill up to active step */}
            <div
              className="absolute top-8 h-px bg-brand-orange transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: '12.5%',
                width: `calc(${(activeStep / (steps.length - 1)) * 75}%)`,
              }}
            />

            {steps.map((step, i) => {
              const isActive = i === activeStep
              const isPast   = i < activeStep
              return (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`reveal reveal-delay-${i + 1} flex-1 flex flex-col items-center text-center px-5 group focus:outline-none transition-all duration-300 ${isActive ? '-translate-y-2' : 'hover:-translate-y-1'}`}
                >
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-5 transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-orange border-2 border-brand-orange shadow-orange scale-110'
                      : isPast
                      ? 'bg-white border-2 border-brand-orange/50 shadow-card'
                      : 'bg-white border-2 border-cream-deeper shadow-card group-hover:border-brand-orange/40 group-hover:shadow-card-hover'
                  }`}>
                    <span className={isActive ? 'grayscale-0' : ''}>{step.icon}</span>
                    <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full font-heading font-black text-xs flex items-center justify-center transition-all duration-300 ${
                      isActive || isPast ? 'bg-brand-orange text-white' : 'bg-cream-deeper text-noir/40'
                    }`}>
                      {i + 1}
                    </span>
                  </div>
                  <h3 className={`font-heading font-bold text-base mb-2 leading-snug transition-colors duration-300 ${isActive ? 'text-brand-orange' : 'text-noir group-hover:text-brand-orange/70'}`}>
                    {step.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed transition-all duration-300 ${isActive ? 'text-noir/70' : 'text-noir/40 group-hover:text-noir/55'}`}>
                    {step.desc}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Active step detail panel */}
          <div className="mt-8 reveal">
            <div
              key={activeStep}
              className="bg-noir rounded-3xl p-6 flex items-start gap-5 count-flip-in"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                {steps[activeStep].icon}
              </div>
              <div>
                <div className="text-brand-orange font-heading font-black text-xs tracking-widest uppercase mb-1">
                  Étape {steps[activeStep].number}
                </div>
                <h4 className="text-white font-heading font-bold text-lg mb-1.5">
                  {steps[activeStep].title}
                </h4>
                <p className="text-white/60 font-body text-sm leading-relaxed max-w-xl">
                  {steps[activeStep].desc}
                </p>
              </div>
              <div className="ml-auto flex gap-2 flex-shrink-0">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeStep ? 'w-6 h-2 bg-brand-orange' : 'w-2 h-2 bg-white/20 hover:bg-white/45'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} flex gap-5 bg-white rounded-3xl p-5 shadow-card border border-cream-deeper hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border-2 border-brand-orange/20 flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-cream-deeper mt-2 min-h-[1.5rem]" />
                )}
              </div>
              <div className="pt-1">
                <span className="font-heading font-black text-brand-orange text-xs">{step.number}</span>
                <h3 className="font-heading font-bold text-noir text-base mb-1.5 mt-0.5">{step.title}</h3>
                <p className="text-noir/50 font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#contact" className="btn-orange shadow-orange">
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

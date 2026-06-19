import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

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
  useRevealChildren(containerRef)

  return (
    <section id="fonctionnement" className="py-20 sm:py-28 bg-cream" ref={containerRef}>
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

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex-1 flex flex-col items-center text-center px-5`}>
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-cream-deeper shadow-card flex items-center justify-center text-2xl mb-5 transition-all duration-300 hover:border-brand-orange hover:shadow-orange hover:-translate-y-1">
                <span>{step.icon}</span>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-orange text-white font-heading font-black text-xs flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-noir text-base mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-noir/48 font-body text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
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

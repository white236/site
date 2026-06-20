import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'

const steps = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8H19L17 20H7Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12"/>
        <path d="M19 10C19 10 22 10 22 13C22 16 19 16 19 16"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="4" y1="20" x2="18" y2="20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M9 5C9 5 9 3.5 10 3C11 2.5 11 1 12 1"
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M13 5C13 5 13 3.5 14 3C15 2.5 15 1 16 1"
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.55"/>
      </svg>
    ),
    title: 'On échange',
    desc: "On parle de votre logement, de vos attentes et du potentiel en courte durée. Sans engagement, à votre rythme.",
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10L12 2L22 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9V20H20V9"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
          fill="currentColor" fillOpacity="0.1"/>
        <rect x="9" y="13" width="6" height="7" rx="1"
          fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="14" cy="16.5" r="0.8" fill="currentColor"/>
        <line x1="2" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Je visite',
    desc: "Je viens voir votre logement sur place pour mieux comprendre ce que je peux mettre en place pour vous.",
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7C2 6.4 2.4 6 3 6H6L7.5 4H16.5L18 6H21C21.6 6 22 6.4 22 7V17C22 17.6 21.6 18 21 18H3C2.4 18 2 17.6 2 17Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity="0.35"/>
        <path d="M19 1L20 3L22 4L20 5L19 7L18 5L16 4L18 3Z"
          fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round"/>
      </svg>
    ),
    title: "On prépare l'annonce",
    desc: "Photos, description, tarifs adaptés au marché : on prépare tout pour que votre logement soit attractif.",
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 6.5 6.5 2 12 2C16.5 2 20.3 4.7 21.7 8.5"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M19.5 6L22 9.5L17.5 10"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12C22 17.5 17.5 22 12 22C7.5 22 3.7 19.3 2.3 15.5"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M4.5 18L2 14.5L6.5 14"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Je gère les séjours',
    desc: "Messages, arrivées, départs, ménage, suivi : je prends le relais sur le terrain. Vous recevez un résumé mensuel.",
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
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

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex-1 flex flex-col items-center text-center px-5`}>
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-cream-deeper shadow-card flex items-center justify-center text-brand-orange mb-5 transition-all duration-300 hover:border-brand-orange hover:shadow-orange hover:-translate-y-1">
                {step.icon}
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
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border-2 border-brand-orange/20 flex items-center justify-center text-brand-orange">
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

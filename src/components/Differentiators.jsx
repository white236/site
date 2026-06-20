import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7C2 6.4 2.4 6 3 6H6L7.5 4H16.5L18 6H21C21.6 6 22 6.4 22 7V17C22 17.6 21.6 18 21 18H3C2.4 18 2 17.6 2 17Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10.5 12L11.5 13.5L13.5 10.5"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Photos avant / après séjour',
    desc: "Chaque séjour est documenté. Photos à l'arrivée et au départ. Votre logement est protégé.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="14" height="18" rx="1.5"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1"/>
        <rect x="7" y="2" width="6" height="4" rx="1"
          stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.18"/>
        <line x1="6" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <line x1="6" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M7 18L9 20L13 15"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Suivi des ménages',
    desc: "Rapport après chaque passage. Je vérifie moi-même que tout est en ordre avant l'arrivée suivante.",
  },
  {
    icon: (
      <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L3 6V13C3 17.5 6.5 21.5 11 23C15.5 21.5 19 17.5 19 13V6Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <path d="M7.5 12.5L10 15L14.5 9.5"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Prestataires déclarés',
    desc: "Tous les prestataires que je mandate sont déclarés et assurés. Pas d'improvisation.",
  },
  {
    icon: (
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5C3 4.4 3.4 4 4 4H7L9 9L6.5 10.5C7.8 13.2 8.8 14.2 11.5 15.5L13 13L18 15V18C18 18.6 17.6 19 17 19C9.3 19 3 12.7 3 5Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12"/>
        <path d="M15 3C17.8 3 20 5.2 20 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M15 6.5C16.4 6.5 17.5 7.6 17.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Contact direct',
    desc: "Pas de standard. Pas de formulaire. Un contact humain et réactif pour vous et vos voyageurs.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10C4 7.8 5.8 6 8 6H12C14.2 6 16 7.8 16 10"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <rect x="2" y="10" width="16" height="12" rx="2"
          stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="10" cy="16" r="2" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="10" y1="18" x2="10" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Votre compte Airbnb reste le vôtre',
    desc: "Vous gardez accès à votre compte, vos réservations et vos revenus. En permanence.",
  },
  {
    icon: (
      <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3C7.5 3 5 6 5 10V16H17V10C17 6 14.5 3 11 3Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <path d="M4 16H18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M9 16C9 17.1 9.9 18 11 18C12.1 18 13 17.1 13 16"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="17.5" cy="5" r="3" fill="currentColor" fillOpacity="0.75"/>
        <line x1="17.5" y1="3.5" x2="17.5" y2="5.5" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
        <circle cx="17.5" cy="6.5" r="0.6" fill="white"/>
      </svg>
    ),
    title: 'Signalement rapide des problèmes',
    desc: "Tout problème est signalé immédiatement avec photos à l'appui. Zéro surprise.",
  },
]

export default function Differentiators() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/[0.05] rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-olive/[0.06] rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="absolute top-16 left-10 w-2 h-2 rounded-full bg-brand-orange/30 animate-float hidden sm:block" />
      <div className="absolute top-32 left-20 w-1.5 h-1.5 rounded-full bg-brand-olive/40 animate-float-delay hidden sm:block" />
      <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-brand-orange/25 animate-float-slow hidden sm:block" />

      <FloatingParticles seed={6} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div className="reveal">
            <span className="inline-block bg-brand-olive/15 text-brand-olive-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Notre approche
            </span>
            <h2 className="section-title text-balance mb-5">
              Jeune, oui.{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Improvisé, non.</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-brand-orange/20 -skew-x-1 -z-0 rounded" />
              </span>
            </h2>
            <p className="font-body text-lg text-noir/55 leading-relaxed">
              Le Lokal Ventoux, c'est une conciergerie nouvelle génération : de l'énergie, de la réactivité, et une gestion carrée. Suivi des ménages, photos avant/après, prestataires déclarés, contact direct et process clair en cas d'imprévu.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="bg-cream rounded-3xl p-7 border border-cream-deeper">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0">
                  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10L11 2L20 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 9V19H18V9"
                      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
                      fill="currentColor" fillOpacity="0.08"/>
                    <path d="M8 13L10.5 15.5L14.5 10.5"
                      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-noir text-base mb-1">
                    Une conciergerie fraîche, locale et carrée autour du Ventoux.
                  </h3>
                  <p className="text-noir/50 font-body text-sm leading-relaxed">
                    Je m'occupe du quotidien, vous gardez la main. Les revenus vont directement sur votre compte, la commission ne part qu'une fois le séjour confirmé.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-heading font-bold text-brand-olive-dark">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponible 7j/7 · 06 20 71 19 75
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group flex items-start gap-4 bg-cream rounded-3xl p-6
                border border-cream-deeper hover:border-brand-orange/20 hover:bg-white hover:shadow-card-hover hover:-translate-y-2
                transition-all duration-300 cursor-default`}
            >
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-brand-orange flex-shrink-0 shadow-card group-hover:bg-brand-orange/10 transition-colors duration-300">
                {card.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-noir text-sm mb-1 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-noir/50 font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

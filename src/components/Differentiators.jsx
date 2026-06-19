import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import LavenderSprig from './LavenderSprig'

const cards = [
  {
    icon: '📷',
    title: 'Photos avant / après séjour',
    desc: "Chaque séjour est documenté. Photos à l'arrivée et au départ. Votre logement est protégé.",
  },
  {
    icon: '✅',
    title: 'Suivi des ménages',
    desc: "Rapport après chaque passage. Je vérifie moi-même que tout est en ordre avant l'arrivée suivante.",
  },
  {
    icon: '📋',
    title: 'Prestataires déclarés',
    desc: "Tous les prestataires que je mandate sont déclarés et assurés. Pas d'improvisation.",
  },
  {
    icon: '💬',
    title: 'Contact direct',
    desc: "Pas de standard. Pas de formulaire. Un contact humain et réactif pour vous et vos voyageurs.",
  },
  {
    icon: '🔐',
    title: 'Votre compte Airbnb reste le vôtre',
    desc: "Vous gardez accès à votre compte, vos réservations et vos revenus. En permanence.",
  },
  {
    icon: '🚨',
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

      {/* Dots décoratifs */}
      <div className="absolute top-16 left-10 w-2 h-2 rounded-full bg-brand-orange/30 animate-float hidden sm:block" />
      <div className="absolute top-32 left-20 w-1.5 h-1.5 rounded-full bg-brand-olive/40 animate-float-delay hidden sm:block" />
      <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-brand-orange/25 animate-float-slow hidden sm:block" />

      {/* Lavender sprigs */}
      <LavenderSprig className="w-8 h-16 absolute top-10 right-8 hidden xl:block opacity-30" variant="slow" />
      <LavenderSprig className="w-6 h-12 absolute bottom-10 left-6 hidden xl:block opacity-20" variant="alt" />

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
              Le Lokal Ventoux garde l'énergie d'une conciergerie fraîche, mais avec une gestion carrée : suivi des ménages, photos avant/après, prestataires déclarés, contact direct et process clair en cas d'imprévu.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="bg-cream rounded-3xl p-7 border border-cream-deeper">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0">
                  🤝
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
                hover:bg-cream-dark hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-card group-hover:bg-brand-orange/10 transition-colors duration-300">
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

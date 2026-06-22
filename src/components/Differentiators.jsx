import { useRef, useState } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

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
  const [open, setOpen] = useState(null)

  return (
    <section
      className="py-12 sm:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EDE4F5 0%, #E8DCF2 40%, #EBE0F4 70%, #EDE4F5 100%)' }}
      ref={containerRef}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/[0.05] rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-olive/[0.06] rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />



      {/* Lavender sprigs */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-6 sm:mb-14">
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

            <div className="mt-7 bg-cream rounded-3xl p-6 border border-cream-deeper inline-block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-heading font-bold text-noir text-sm">Vous restez propriétaire à 100 %</span>
              </div>
              <p className="text-noir/55 text-sm font-body">
                Votre logement, votre compte, votre argent. On gère l'opérationnel, vous gardez le contrôle.
              </p>
            </div>
          </div>

          <div className="hidden lg:block reveal reveal-delay-2">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-cream rounded-3xl p-4 sm:p-6
                border border-cream-deeper sm:hover:border-brand-orange/20 sm:hover:bg-white sm:hover:shadow-card-hover sm:hover:-translate-y-2
                transition-all duration-300 cursor-pointer`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center gap-3 sm:items-start">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-2xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-card group-hover:bg-brand-orange/10 transition-colors duration-300">
                  <span className="absolute -top-1.5 -right-1.5 text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300 select-none">🌿</span>
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-noir text-sm flex-1 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                  {card.title}
                </h3>
                <svg
                  className="sm:hidden w-4 h-4 text-noir/30 flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className={`text-noir/50 font-body text-sm leading-relaxed ${open === i ? 'mt-2 sm:mt-1' : 'hidden sm:block sm:mt-1'}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

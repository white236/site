import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const cards = [
  {
    icon: '⚡',
    title: 'Réactif',
    desc: 'Un contact direct, sans attendre trois jours une réponse. Disponible 7j/7, je réponds vite.',
  },
  {
    icon: '📍',
    title: 'Local',
    desc: 'Je connais le secteur, les villages, les saisons et le terrain. Pas une gestion à distance.',
  },
  {
    icon: '✨',
    title: 'Moderne',
    desc: 'Photos, annonce soignée, messages voyageurs, suivi numérique : tout doit être propre et actuel.',
  },
  {
    icon: '✅',
    title: 'Carré',
    desc: 'Photos avant/après, prestataires déclarés, suivi des ménages et process clair en cas d\'imprévu.',
  },
]

export default function NouvelleGeneration() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-12 sm:py-32 bg-noir relative overflow-hidden" ref={containerRef}>
      {/* Lavande ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange opacity-[0.13] rounded-full blur-[90px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-[0.08] rounded-full blur-[70px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-brand-orange opacity-[0.05] rounded-full blur-[50px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />


      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-brand-orange/18 text-brand-orange-light font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
            Nouvelle génération
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
            La nouvelle génération<br className="hidden sm:block" />
            <span className="text-brand-orange"> de conciergerie.</span>
          </h2>
          <p className="font-body text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Le Lokal Ventoux, c'est une approche plus jeune, plus directe et plus vivante
            de la location courte durée. Pas de plateforme froide, pas de discours compliqué :
            un contact humain, une gestion claire, quelqu'un du coin qui suit vraiment votre logement.
          </p>
        </div>

        {/* 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative rounded-3xl p-7 border border-white/[0.08]
                bg-white/[0.03] hover:bg-brand-orange/10 hover:border-brand-orange/30
                hover:-translate-y-3 hover:shadow-orange-lg
                transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Hover lavende accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange/0 via-brand-orange to-brand-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Small flower on hover */}
              <div className="absolute top-3 right-4 text-base opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:-translate-y-0.5">
                🌿
              </div>

              <div className="w-14 h-14 bg-white/[0.07] rounded-2xl flex items-center justify-center text-2xl mb-5
                group-hover:bg-brand-orange/20 group-hover:scale-110 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-heading font-black text-white text-xl mb-3 group-hover:text-brand-orange-light transition-colors duration-300">
                {card.title}
              </h3>
              <p className="font-body text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center reveal">
          <p className="font-heading font-bold text-2xl sm:text-3xl text-brand-orange/70 italic leading-relaxed">
            "Plus de proximité, meilleure satisfaction."
          </p>
          <p className="mt-4 font-body text-white/35 text-sm tracking-wide">
            Victor · Le Lokal Ventoux · Autour du Mont Ventoux
          </p>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const problems = [
  {
    icon: '💬',
    title: 'Messages voyageurs',
    desc: 'Répondre rapidement à toute heure, gérer questions et demandes spéciales.',
  },
  {
    icon: '🧹',
    title: 'Ménage entre séjours',
    desc: 'Coordonner prestataires, contrôler la qualité, respecter les délais.',
  },
  {
    icon: '🔑',
    title: 'Check-in / Check-out',
    desc: "Accueillir les voyageurs, gérer les clés, faire l'état des lieux.",
  },
  {
    icon: '📊',
    title: 'Optimisation des prix',
    desc: 'Ajuster les tarifs selon la saison, les événements, la concurrence.',
  },
  {
    icon: '⚡',
    title: 'Imprévus',
    desc: "Gestion des pannes, oublis de voyageurs, urgences à n'importe quelle heure.",
  },
  {
    icon: '⭐',
    title: 'Avis clients',
    desc: 'Maintenir une note excellente, répondre aux avis, fidéliser.',
  },
]

export default function Problem() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="bg-noir py-20 sm:py-28 relative overflow-hidden" ref={containerRef}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-olive opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-orange/15 text-brand-orange font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Le vrai défi
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-2xl mx-auto text-balance">
            Louer en courte durée, c'est rentable.{' '}
            <span className="text-brand-orange">Mais ça prend du temps.</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto font-body">
            Entre les voyageurs, le ménage, les clés et l'optimisation, gérer seul sa location devient vite un deuxième travail.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-noir-light rounded-3xl p-6 border border-white/[0.07]
                hover:border-brand-orange/30 hover:bg-white/[0.04] transition-all duration-300 cursor-default`}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-brand-orange transition-colors">
                {p.title}
              </h3>
              <p className="text-white/50 font-body text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div className="text-center mt-12 reveal">
          <p className="text-white/40 font-body text-base mb-4">
            Et si vous n'aviez plus à y penser ?
          </p>
          <a href="#offre" className="btn-orange shadow-orange">
            Découvrir notre offre
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

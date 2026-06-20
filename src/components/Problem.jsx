import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const problems = [
  {
    icon: '💬',
    title: 'Messages voyageurs',
    desc: "Répondre vite, à toute heure, gérer questions et demandes spéciales. Tous les jours.",
  },
  {
    icon: '🧹',
    title: 'Ménage entre séjours',
    desc: "Coordonner les prestataires, contrôler la qualité, respecter les délais serrés.",
  },
  {
    icon: '🔑',
    title: 'Check-in / Check-out',
    desc: "Accueillir les voyageurs, gérer les clés, faire l'état des lieux. À chaque séjour.",
  },
  {
    icon: '📊',
    title: 'Prix à ajuster',
    desc: "Adapter les tarifs à la saison, aux événements, à la concurrence. En permanence.",
  },
  {
    icon: '⚡',
    title: 'Imprévus',
    desc: "Pannes, oublis, urgences : gérer l'inattendu à n'importe quelle heure.",
  },
  {
    icon: '⭐',
    title: 'Avis clients',
    desc: "Maintenir une bonne note, répondre aux avis, soigner chaque départ.",
  },
]

export default function Problem() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="bg-noir py-20 sm:py-28 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-olive opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-orange/15 text-brand-orange font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Le vrai défi
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-2xl mx-auto text-balance">
            Louer en courte durée, c'est rentable.{' '}
            <span className="text-brand-orange">Mais ça prend du temps.</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-xl mx-auto font-body">
            Entre les messages, le ménage, les clés et les avis : gérer seul sa location, c'est vite un deuxième travail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-noir-light rounded-3xl p-6 border border-white/[0.06]
                hover:border-brand-orange/25 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-white/45 font-body text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-white/38 font-body text-base mb-4">
            Et si quelqu'un gérait ça pour vous ?
          </p>
          <a href="#offre" className="btn-orange shadow-orange">
            Voir ce que je gère
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2Q2 1 3 1H21Q22 1 22 2V13Q22 14 21 14H13L9.5 18V14H3Q2 14 2 13Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="6" y1="6.5" x2="17" y2="6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="6" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Messages voyageurs',
    desc: "Répondre vite, à toute heure, gérer questions et demandes spéciales. Tous les jours.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="14" y1="1" x2="5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 17C4.5 13.5 8 18 10 18C12 18 15 13.5 17.5 17L5 18Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"
          fill="currentColor" fillOpacity="0.22"/>
        <line x1="4" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Ménage entre séjours',
    desc: "Coordonner les prestataires, contrôler la qualité, respecter les délais serrés.",
  },
  {
    icon: (
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8.5" cy="8.5" r="2.5" fill="currentColor" fillOpacity="0.2"/>
        <line x1="13.5" y1="13.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="18" x2="18" y2="21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="21" y1="15" x2="21" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Check-in / Check-out',
    desc: "Accueillir les voyageurs, gérer les clés, faire l'état des lieux. À chaque séjour.",
  },
  {
    icon: (
      <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <rect x="3" y="11" width="4" height="7" rx="1"
          fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="9" y="6" width="4" height="12" rx="1"
          fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="15" y="2" width="4" height="16" rx="1"
          fill="currentColor" fillOpacity="0.55" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'Prix à ajuster',
    desc: "Adapter les tarifs à la saison, aux événements, à la concurrence. En permanence.",
  },
  {
    icon: (
      <svg viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L3 13H8L5 23L14 11H9Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
          fill="currentColor" fillOpacity="0.22"/>
      </svg>
    ),
    title: 'Imprévus',
    desc: "Pannes, oublis, urgences : gérer l'inattendu à n'importe quelle heure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L14.4 8.8L21 9.1L16.1 13.8L17.6 20.5L12 17.2L6.4 20.5L7.9 13.8L3 9.1L9.6 8.8Z"
          stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
          fill="currentColor" fillOpacity="0.22"/>
      </svg>
    ),
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
              <div className="w-10 h-10 text-brand-orange mb-4">
                {p.icon}
              </div>
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

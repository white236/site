import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const points = [
  {
    icon: '📍',
    title: 'Conciergerie locale',
    desc: 'Basés autour du Ventoux, on connaît le territoire, les prestataires et les voyageurs de la région.',
  },
  {
    icon: '✨',
    title: 'Image moderne',
    desc: 'Annonces soignées, photos pro, communication fluide : votre logement mérite le meilleur.',
  },
  {
    icon: '⚡',
    title: 'Réactivité WhatsApp',
    desc: 'Pas de standard téléphonique. Un contact direct, humain et rapide pour vous et vos voyageurs.',
  },
  {
    icon: '🔍',
    title: 'Transparence totale',
    desc: 'Vous gardez l\'accès à votre compte Airbnb et voyez chaque réservation, chaque avis, chaque euro.',
  },
  {
    icon: '📋',
    title: 'Rapport mensuel simple',
    desc: 'Un résumé clair chaque mois : revenus, taux d\'occupation, avis reçus, actions réalisées.',
  },
  {
    icon: '🔓',
    title: 'Aucun engagement long',
    desc: 'Pas de contrat annuel. On prouve notre valeur tous les mois. Vous restez libre.',
  },
  {
    icon: '📸',
    title: 'Photos offertes',
    desc: 'Pour les premiers logements rejoignant la conciergerie, session photo professionnelle incluse.',
  },
]

export default function Differentiators() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-20 sm:py-28 bg-brand-olive/[0.06] relative overflow-hidden" ref={containerRef}>
      {/* Organic decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-olive/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-olive/20 text-brand-olive-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Notre différence
          </span>
          <h2 className="section-title max-w-2xl mx-auto text-balance">
            Pourquoi{' '}
            <span className="relative">
              <span className="relative z-10">Le Lokal Ventoux</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-brand-orange/25 -skew-x-1 -z-0 rounded" />
            </span>{' '}
            ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.slice(0, 6).map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-11 h-11 bg-brand-olive/10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-noir text-base mb-1">{p.title}</h3>
                <p className="text-noir/55 font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last point – highlighted */}
        <div className="mt-5 reveal reveal-delay-1">
          <div className="flex items-start gap-4 bg-brand-jaune/30 border border-brand-jaune/50 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="w-11 h-11 bg-brand-jaune/60 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
              {points[6].icon}
            </div>
            <div>
              <span className="inline-block text-xs font-heading font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full mb-1">
                Offre de lancement
              </span>
              <h3 className="font-heading font-bold text-noir text-base mb-1">{points[6].title}</h3>
              <p className="text-noir/60 font-body text-sm leading-relaxed">{points[6].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

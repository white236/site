import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'

const services = [
  {
    icon: '📝',
    title: "Création de l'annonce",
    desc: "Un texte clair, des mots-clés qui portent et des tarifs adaptés au marché local autour du Ventoux.",
  },
  {
    icon: '📸',
    title: 'Photos offertes au lancement',
    desc: "Je prends les photos professionnelles pour les premiers logements qui me rejoignent. Inclus, offert.",
  },
  {
    icon: '💬',
    title: 'Messages voyageurs',
    desc: "Je réponds à vos voyageurs 7j/7. Rapide, humain et pro. Vous n'avez rien à suivre.",
  },
  {
    icon: '🔑',
    title: 'Check-in / Check-out',
    desc: "J'accueille vos voyageurs ou je coordonne un accès autonome. Arrivée et départ gérés.",
  },
  {
    icon: '🧹',
    title: 'Ménage & linge',
    desc: "Je coordonne le ménage et le linge avec des prestataires de confiance. Rien laissé au hasard.",
  },
  {
    icon: '🛒',
    title: 'Réassort consommables',
    desc: "Café, savon, papier : je veille à ce que votre logement soit toujours prêt à accueillir.",
  },
  {
    icon: '🏠',
    title: 'Suivi du logement',
    desc: "Je passe régulièrement et je vous signale ce qui ne va pas. Avant que vos voyageurs ne le fassent.",
  },
  {
    icon: '📊',
    title: 'Rapport simple au propriétaire',
    desc: "Chaque mois, un résumé clair : séjours, avis, revenus. Transparent, sans jargon.",
  },
]

export default function Offer() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section id="offre" className="py-20 sm:py-28 bg-cream relative overflow-hidden" ref={containerRef}>
      <FloatingParticles seed={3} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-olive/[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-orange text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Ce que je gère
          </span>
          <h2 className="section-title max-w-2xl mx-auto text-balance">
            Ce que je gère{' '}
            <span className="text-brand-orange">pour vous</span>
          </h2>
          <p className="mt-4 text-noir/50 text-lg max-w-xl mx-auto font-body">
            Un seul interlocuteur. Une gestion complète.{' '}
            <strong className="text-noir/70">20 % seulement quand le logement est loué.</strong>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-white rounded-3xl p-5 shadow-card
                hover:shadow-card-hover hover:-translate-y-2 hover:border-brand-orange/30
                transition-all duration-300 border border-cream-deeper`}
            >
              <div className="relative w-12 h-12 bg-cream-dark rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-orange/10 transition-colors duration-300">
                {s.icon}
                <span className="absolute -top-1.5 -right-1.5 text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300 select-none">🌿</span>
              </div>
              <h3 className="font-heading font-extrabold text-noir text-base mb-1.5 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-noir/48 font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Commission highlight */}
        <div className="mt-12 bg-brand-orange rounded-4xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
          <div>
            <p className="text-white/70 font-body text-sm mb-1 font-medium">Mon modèle, simple</p>
            <h3 className="font-heading font-black text-white text-2xl sm:text-3xl leading-tight">
              20 % seulement quand<br />le logement est loué
            </h3>
            <p className="text-white/70 font-body text-sm mt-2 max-w-sm">
              Pas de réservation, pas de commission. On est alignés.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-brand-orange font-heading font-black text-base px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 shadow-orange"
          >
            Discuter du logement →
          </a>
        </div>
      </div>
    </section>
  )
}

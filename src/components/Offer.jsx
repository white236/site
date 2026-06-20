import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'

const services = [
  {
    icon: (
      <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3C4 2.4 4.4 2 5 2H14L18 6V21C18 21.6 17.6 22 17 22H5C4.4 22 4 21.6 4 21Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <polyline points="14,2 14,6 18,6" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
        <line x1="7" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <line x1="7" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <line x1="7" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M15 19.5L20 14.5L21.5 16L16.5 21Z"
          stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="currentColor" fillOpacity="0.25"/>
      </svg>
    ),
    title: "Création de l'annonce",
    desc: "Un texte clair, des mots-clés qui portent et des tarifs adaptés au marché local autour du Ventoux.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7C2 6.4 2.4 6 3 6H6L7.5 4H16.5L18 6H21C21.6 6 22 6.4 22 7V17C22 17.6 21.6 18 21 18H3C2.4 18 2 17.6 2 17Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity="0.35"/>
        <rect x="18.5" y="7.5" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.5"/>
      </svg>
    ),
    title: 'Photos offertes au lancement',
    desc: "Je prends les photos professionnelles pour les premiers logements qui me rejoignent. Inclus, offert.",
  },
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
    desc: "Je réponds à vos voyageurs 7j/7. Rapide, humain et pro. Vous n'avez rien à suivre.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="9" cy="9" r="3" fill="currentColor" fillOpacity="0.15"/>
        <line x1="14" y1="14" x2="23" y2="23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="19" y1="19" x2="19" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="22" y1="16" x2="22" y2="19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Check-in / Check-out',
    desc: "J'accueille vos voyageurs ou je coordonne un accès autonome. Arrivée et départ gérés.",
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
    title: 'Ménage & linge',
    desc: "Je coordonne le ménage et le linge avec des prestataires de confiance. Rien laissé au hasard.",
  },
  {
    icon: (
      <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8H19L17 22H5Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <path d="M8 8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M10.5 14C10.5 13.2 11.2 12.5 12 12.5C12.8 12.5 13.5 13.2 13.5 14C13.5 14.8 12 16.5 12 16.5C12 16.5 10.5 14.8 10.5 14Z"
          stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3"/>
      </svg>
    ),
    title: 'Réassort consommables',
    desc: "Café, savon, papier : je veille à ce que votre logement soit toujours prêt à accueillir.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10L12 2L22 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9V20H9V14H15V20H20V9"
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
          fill="currentColor" fillOpacity="0.08"/>
        <ellipse cx="12" cy="15" rx="3.5" ry="2" stroke="currentColor" strokeWidth="1.1"/>
        <circle cx="12" cy="15" r="1.1" fill="currentColor" fillOpacity="0.5"/>
      </svg>
    ),
    title: 'Suivi du logement',
    desc: "Je passe régulièrement et je vous signale ce qui ne va pas. Avant que vos voyageurs ne le fassent.",
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
        <path d="M5 11L11 6L17 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeDasharray="1.8 1.2"/>
      </svg>
    ),
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
              <div className="w-12 h-12 bg-cream-dark rounded-2xl flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange/10 transition-colors duration-300">
                {s.icon}
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

import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'
import WindyVines from './WindyVines'

const cards = [
  {
    title: "L'âme locale",
    desc: "Comme la lavande qui pousse ici sans forcer, mon approche est naturelle et ancrée. Pas de grande agence — juste quelqu'un du coin qui connaît le territoire.",
    icon: (
      <svg viewBox="0 0 24 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-10">
        {/* Tige principale */}
        <line x1="12" y1="46" x2="12" y2="14" stroke="#8E9B72" strokeWidth="1.7" strokeLinecap="round" />
        {/* Branches basses */}
        <line x1="12" y1="36" x2="5"  y2="28" stroke="#8E9B72" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="12" y1="36" x2="19" y2="28" stroke="#8E9B72" strokeWidth="1.2" strokeLinecap="round" />
        {/* Branches hautes */}
        <line x1="12" y1="26" x2="5"  y2="19" stroke="#8E9B72" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="12" y1="26" x2="19" y2="19" stroke="#8E9B72" strokeWidth="1.1" strokeLinecap="round" />
        {/* Fleurs du sommet */}
        <ellipse cx="12" cy="11" rx="2.6" ry="4.2" fill="#7D8CFF" />
        <ellipse cx="12" cy="6"  rx="2.1" ry="3.3" fill="#A8B0FF" />
        <ellipse cx="12" cy="2"  rx="1.6" ry="2.5" fill="#7D8CFF" opacity="0.75" />
        {/* Fleurs des branches basses */}
        <ellipse cx="4.5"  cy="26" rx="2" ry="3.1" fill="#A8B0FF" opacity="0.88" />
        <ellipse cx="19.5" cy="26" rx="2" ry="3.1" fill="#A8B0FF" opacity="0.88" />
        {/* Fleurs des branches hautes */}
        <ellipse cx="4.5"  cy="17" rx="1.8" ry="2.8" fill="#7D8CFF" opacity="0.78" />
        <ellipse cx="19.5" cy="17" rx="1.8" ry="2.8" fill="#7D8CFF" opacity="0.78" />
      </svg>
    ),
  },
  {
    title: 'Ancré au terrain',
    desc: "Je connais les prestataires locaux, les habitudes des villages, les chemins de traverse. Je ne gère pas votre logement à distance — je suis là, en vrai.",
    icon: (
      <svg viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-6">
        {/* Massif du Ventoux */}
        <path
          d="M1 26 L11 14 L18 5 L21 1 L24 5 L31 14 L41 26 Z"
          fill="#8E9B72" fillOpacity="0.18"
          stroke="#6A7550" strokeWidth="1.4" strokeLinejoin="round"
        />
        {/* Crête secondaire gauche */}
        <path d="M1 26 L11 14 L18 5" stroke="#6A7550" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        {/* Calotte neigeuse */}
        <path
          d="M17 8 L21 1 L25 8 L23 12 L21 5 L19 12 Z"
          fill="#FAF5EC" fillOpacity="0.95"
        />
        {/* Ligne de sol */}
        <line x1="1" y1="26" x2="41" y2="26" stroke="#8E9B72" strokeWidth="0.9" strokeOpacity="0.35" />
      </svg>
    ),
  },
  {
    title: 'Soin du détail',
    desc: "Comme une parcelle de vigne, votre logement demande une attention régulière. Photos avant/après séjour, suivi des ménages, signalement immédiat — rien n'est laissé au hasard.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        {/* Feuille de vigne */}
        <path
          d="M14 2 C20 0 26 6 24 13 C22 19 18 24 14 26 C10 24 6 19 4 13 C2 6 8 0 14 2Z"
          fill="#8E9B72" fillOpacity="0.22"
          stroke="#6A7550" strokeWidth="1.3"
        />
        {/* Nervure principale */}
        <line x1="14" y1="4"  x2="14" y2="24" stroke="#6A7550" strokeWidth="1"   strokeLinecap="round" />
        {/* Nervures latérales */}
        <line x1="14" y1="9"  x2="7"  y2="6"  stroke="#6A7550" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
        <line x1="14" y1="9"  x2="21" y2="6"  stroke="#6A7550" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
        <line x1="14" y1="14" x2="6"  y2="11" stroke="#6A7550" strokeWidth="0.65" strokeLinecap="round" opacity="0.55" />
        <line x1="14" y1="14" x2="22" y2="11" stroke="#6A7550" strokeWidth="0.65" strokeLinecap="round" opacity="0.55" />
        <line x1="14" y1="19" x2="8"  y2="17" stroke="#6A7550" strokeWidth="0.55" strokeLinecap="round" opacity="0.4" />
        <line x1="14" y1="19" x2="20" y2="17" stroke="#6A7550" strokeWidth="0.55" strokeLinecap="round" opacity="0.4" />
        {/* Pétiole */}
        <line x1="14" y1="24" x2="14" y2="27" stroke="#8E9B72" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Votre liberté',
    desc: "Vous partez l'esprit tranquille. Je reste disponible 7j/7, aux clés de votre bien, pour que chaque séjour se passe exactement comme il faut.",
    icon: (
      <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        {/* Anneau de la clé */}
        <circle cx="10" cy="10" r="7" stroke="#7D8CFF" strokeWidth="1.8" fill="none" />
        <circle cx="10" cy="10" r="3.5" fill="#7D8CFF" fillOpacity="0.18" />
        <circle cx="10" cy="10" r="1.5" fill="#7D8CFF" fillOpacity="0.5" />
        {/* Tige de la clé */}
        <line x1="15.5" y1="14" x2="26" y2="24.5" stroke="#7D8CFF" strokeWidth="1.8" strokeLinecap="round" />
        {/* Dents */}
        <line x1="22" y1="20.5" x2="22" y2="24"   stroke="#7D8CFF" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="25" y1="17.5" x2="25" y2="21"   stroke="#7D8CFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function EspritVentoux() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden" ref={containerRef}>
      <FloatingParticles seed={12} />
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-orange/[0.07] rounded-full blur-3xl pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-olive/[0.07] rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4" />

      {/* Decorative lavender sprigs */}
      <WindyVines />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-orange/12 text-brand-orange-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            L'esprit du Ventoux
          </span>
          <h2 className="section-title max-w-2xl mx-auto text-balance">
            Un service ancré{' '}
            <span className="text-brand-orange">dans le territoire.</span>
          </h2>
          <p className="mt-4 font-body text-noir/50 text-lg max-w-xl mx-auto leading-relaxed">
            La lavande, les sentiers, les vignes… autour du Ventoux, tout pousse à son rythme.
            Ma façon de gérer votre logement aussi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-3xl p-7
                border border-cream-deeper hover:border-brand-orange/25
                hover:shadow-card-hover hover:-translate-y-2
                transition-all duration-300 cursor-default`}
            >
              <div className="w-14 h-14 bg-brand-orange/8 rounded-2xl flex items-center justify-center mb-5
                group-hover:bg-brand-orange/15 group-hover:scale-110 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-noir text-base mb-2 group-hover:text-brand-orange transition-colors duration-300">
                {card.title}
              </h3>
              <p className="font-body text-noir/50 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

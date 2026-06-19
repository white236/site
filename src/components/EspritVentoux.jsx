import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import LavenderSprig from './LavenderSprig'
import FloatingParticles from './FloatingParticles'

const cards = [
  {
    title: "L'âme locale",
    desc: "Comme la lavande qui pousse ici sans forcer, mon approche est naturelle et ancrée. Pas de grande agence — juste quelqu'un du coin qui connaît le territoire.",
    icon: (
      <svg viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-10">
        <line x1="14" y1="48" x2="14" y2="16" stroke="#8FA06B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="14" y1="36" x2="8"  y2="29" stroke="#8FA06B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="14" y1="36" x2="20" y2="29" stroke="#8FA06B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="14" y1="27" x2="8"  y2="20" stroke="#8FA06B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="14" y1="27" x2="20" y2="20" stroke="#8FA06B" strokeWidth="1.4" strokeLinecap="round" />
        <ellipse cx="14" cy="14" rx="3"   ry="4.5" fill="#9BAFF2" opacity="0.95" />
        <ellipse cx="14" cy="9"  rx="2.5" ry="3.5" fill="#7B9DE4" opacity="0.95" />
        <ellipse cx="14" cy="5"  rx="2"   ry="3"   fill="#8B9FE8" opacity="0.95" />
        <ellipse cx="8"  cy="27" rx="2"   ry="3"   fill="#9BAFF2" opacity="0.8"  />
        <ellipse cx="20" cy="27" rx="2"   ry="3"   fill="#9BAFF2" opacity="0.8"  />
        <ellipse cx="8"  cy="18" rx="2"   ry="3"   fill="#7B9DE4" opacity="0.8"  />
        <ellipse cx="20" cy="18" rx="2"   ry="3"   fill="#7B9DE4" opacity="0.8"  />
      </svg>
    ),
  },
  {
    title: 'Ancré au terrain',
    desc: "Je connais les prestataires locaux, les habitudes des villages, les chemins de traverse. Je ne gère pas votre logement à distance — je suis là, en vrai.",
    icon: (
      <svg viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-7">
        <path
          d="M2 24 L10 10 L15 4 L20 10 L30 24 Z"
          stroke="#6B7A50" strokeWidth="1.5" strokeLinejoin="round"
          fill="#8FA06B" fillOpacity="0.18"
        />
        <path
          d="M12 8 L15 4 L18 8 L16.5 11 L15 7 L13.5 11 Z"
          fill="white" fillOpacity="0.9"
        />
        <line x1="2" y1="24" x2="30" y2="24" stroke="#6B7A50" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Soin du détail',
    desc: "Comme une parcelle de vigne, votre logement demande une attention régulière. Photos avant/après séjour, suivi des ménages, signalement immédiat — rien n'est laissé au hasard.",
    icon: (
      <svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-8">
        <circle cx="12" cy="4"  r="2.2" fill="#7B9DE4" opacity="0.65" />
        <line x1="12" y1="4" x2="12" y2="8" stroke="#8FA06B" strokeWidth="1.2" />
        <circle cx="9"  cy="10" r="2.2" fill="#9BAFF2" opacity="0.8" />
        <circle cx="15" cy="10" r="2.2" fill="#9BAFF2" opacity="0.8" />
        <circle cx="6"  cy="16" r="2.2" fill="#7B9DE4" opacity="0.8" />
        <circle cx="12" cy="16" r="2.2" fill="#7B9DE4" />
        <circle cx="18" cy="16" r="2.2" fill="#7B9DE4" opacity="0.8" />
        <circle cx="9"  cy="22" r="2.2" fill="#5878C0" opacity="0.7" />
        <circle cx="15" cy="22" r="2.2" fill="#5878C0" opacity="0.7" />
        <circle cx="12" cy="27" r="1.8" fill="#5878C0" opacity="0.55" />
        <path d="M9.5 2 Q7.5 0 5.5 1" stroke="#8FA06B" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Votre liberté',
    desc: "Vous partez l'esprit tranquille. Je reste disponible 7j/7, aux clés de votre bien, pour que chaque séjour se passe exactement comme il faut.",
    icon: (
      <svg viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-6">
        <circle cx="9" cy="9" r="6.5" stroke="#7B9DE4" strokeWidth="1.8" fill="none" />
        <circle cx="9" cy="9" r="3"   fill="#7B9DE4" fillOpacity="0.25" />
        <path d="M14.5 12 L25 22.5" stroke="#7B9DE4" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 20.5 L22 23.5" stroke="#7B9DE4" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M25 18 L25 21"     stroke="#7B9DE4" strokeWidth="1.8" strokeLinecap="round" />
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
      <LavenderSprig className="w-8 h-16 absolute top-10 right-10 hidden xl:block opacity-30" variant="slow" />
      <LavenderSprig className="w-6 h-12 absolute bottom-14 left-8 hidden xl:block opacity-20" variant="alt" />

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

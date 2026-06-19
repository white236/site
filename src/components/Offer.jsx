import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const services = [
  { icon: '📝', title: 'Création & optimisation d\'annonce', desc: 'Textes percutants, mots-clés optimisés, prix dynamiques pour maximiser votre potentiel.' },
  { icon: '📸', title: 'Photos professionnelles offertes', desc: 'Session photo incluse pour les premiers logements. Des visuels qui convertissent.' },
  { icon: '💬', title: 'Communication voyageurs', desc: 'Réponse rapide 7j/7, gestion des avis, relation client irréprochable.' },
  { icon: '🔑', title: 'Check-in / Check-out', desc: 'Accueil personnalisé ou autonome, remise des clés, état des lieux entrée/sortie.' },
  { icon: '🧹', title: 'Coordination ménage & linge', desc: 'Prestataires de confiance, contrôle qualité après chaque passage.' },
  { icon: '🛒', title: 'Réassort consommables', desc: 'Café, savon, papier : on s\'assure que votre logement est toujours prêt.' },
  { icon: '🏠', title: 'Suivi du logement', desc: 'Signalement des problèmes, petites interventions, œil de propriétaire.' },
  { icon: '📊', title: 'Rapport mensuel propriétaire', desc: 'Revenus, taux d\'occupation, avis reçus : visibilité totale sur votre bien.' },
]

export default function Offer() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section id="offre" className="py-20 sm:py-28 bg-cream relative overflow-hidden" ref={containerRef}>
      {/* Decorative shape top-right */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/8 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-olive/8 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-orange text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Notre offre
          </span>
          <h2 className="section-title max-w-2xl mx-auto text-balance">
            On s'occupe de tout.{' '}
            <span className="text-brand-orange">Vous gardez le contrôle.</span>
          </h2>
          <p className="mt-4 text-noir/50 text-lg max-w-xl mx-auto font-body">
            Un seul interlocuteur, une gestion complète, une commission transparente : <strong className="text-noir/70">20 %</strong> uniquement sur les revenus générés.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group bg-white rounded-3xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-cream-deeper`}
            >
              <div className="w-12 h-12 bg-cream-dark rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-orange/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-heading font-extrabold text-noir text-base mb-1.5 leading-snug group-hover:text-brand-orange transition-colors">
                {s.title}
              </h3>
              <p className="text-noir/50 font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Commission highlight */}
        <div className="mt-12 bg-brand-orange rounded-4xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
          <div>
            <p className="text-white/80 font-body text-sm mb-1">Notre modèle</p>
            <h3 className="font-heading font-black text-white text-2xl sm:text-3xl leading-tight">
              20 % uniquement sur vos<br />revenus générés
            </h3>
            <p className="text-white/70 font-body text-sm mt-2 max-w-sm">
              Zéro frais fixe. Si vous ne gagnez pas, nous ne gagnons pas. On est alignés.
            </p>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-white text-brand-orange font-heading font-black text-base px-8 py-4 rounded-full hover:bg-cream transition-colors shadow-orange">
            Discuter de mon logement →
          </a>
        </div>
      </div>
    </section>
  )
}

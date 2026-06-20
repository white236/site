import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const securityPoints = [
  {
    icon: '📷',
    title: 'Photos avant / après séjour',
    desc: 'Chaque séjour est documenté visuellement pour protéger votre logement.',
  },
  {
    icon: '✅',
    title: 'Suivi des ménages',
    desc: 'Rapport de ménage systématique avec vérification de l\'état du logement.',
  },
  {
    icon: '📋',
    title: 'Prestataires déclarés',
    desc: 'Tous nos prestataires sont déclarés, assurés et sélectionnés avec soin.',
  },
  {
    icon: '🚨',
    title: 'Signalement rapide',
    desc: 'Tout problème (casse, dégât) est signalé immédiatement avec photos à l\'appui.',
  },
  {
    icon: '🔐',
    title: 'Votre compte Airbnb reste le vôtre',
    desc: 'Vous gardez la main sur votre compte, vos réservations et vos avis.',
  },
  {
    icon: '💳',
    title: 'Revenus directement à vous',
    desc: 'Les paiements sont versés directement sur votre compte. Nous percevons notre commission séparément.',
  },
]

export default function Security() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section
      id="securite"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg,#FAF5EC 0%,rgba(168,128,205,.07) 35%,rgba(188,148,215,.10) 55%,rgba(168,128,205,.06) 75%,#FAF5EC 100%)' }}
      ref={containerRef}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(107,122,80,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(242,101,34,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div className="reveal">
            <span className="inline-block bg-brand-olive/15 text-brand-olive-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Sécurité & sérieux
            </span>
            <h2 className="section-title mb-6 text-balance">
              Une gestion moderne,{' '}
              <span className="text-brand-olive">mais sérieuse.</span>
            </h2>
            <p className="font-body text-lg text-noir/55 leading-relaxed mb-8">
              Conciergerie nouvelle génération ne veut pas dire légèreté. Votre bien est notre priorité, et on le prouve à chaque séjour.
            </p>

            <div className="bg-cream rounded-3xl p-6 border border-cream-deeper inline-block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-heading font-bold text-noir text-sm">Vous restez propriétaire à 100 %</span>
              </div>
              <p className="text-noir/55 text-sm font-body">
                Votre logement, votre compte, votre argent. On gère l'opérationnel, vous gardez le contrôle.
              </p>
            </div>
          </div>

          {/* Right: grid of points */}
          <div className="grid sm:grid-cols-2 gap-4">
            {securityPoints.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-cream rounded-2xl p-5 hover:bg-cream-dark transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-heading font-bold text-noir text-sm mb-1 group-hover:text-brand-olive-dark transition-colors">
                  {p.title}
                </h3>
                <p className="text-noir/50 font-body text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

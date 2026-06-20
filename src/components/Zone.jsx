import { useRef, Suspense, lazy } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'
import FloatingParticles from './FloatingParticles'
import WindyVines from './WindyVines'
import ProvençalHouse from './ProvençalHouse'

const InteractiveMap = lazy(() => import('./InteractiveMap'))

const cities = [
  { name: 'Bédoin', note: 'Porte du Ventoux' },
  { name: 'Malaucène', note: 'Versant nord' },
  { name: 'Mazan', note: 'Village de caractère' },
  { name: 'Caromb', note: 'Fontaine légendaire' },
  { name: 'Mormoiron', note: 'Vignoble & collines' },
  { name: 'Villes-sur-Auzon', note: 'Gorges de la Nesque' },
  { name: 'Venasque', note: 'Village perché' },
  { name: 'Pernes-les-Fontaines', note: 'Cité des fontaines' },
  { name: 'Carpentras', note: 'Cœur du Comtat' },
  { name: 'Aubignan', note: 'Pays du Ventoux' },
  { name: 'Beaumes-de-Venise', note: 'Muscat & dentelles' },
  { name: 'Crillon-le-Brave', note: 'Face au sommet' },
  { name: 'Saint-Pierre-de-Vassols', note: 'Hameau secret' },
  { name: 'Modène', note: 'Entre vigne et garrigue' },
  { name: 'Saint-Didier', note: 'Sud Ventoux' },
  { name: "L'Isle-sur-la-Sorgue", note: 'Venise provençale' },
]

export default function Zone() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-20 sm:py-28 bg-cream-dark relative overflow-hidden" ref={containerRef}>
      <FloatingParticles seed={15} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-olive/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/[0.07] rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <WindyVines />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-brand-olive text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Zone d'intervention
          </span>
          <h2 className="section-title max-w-2xl mx-auto text-balance">
            Autour du Ventoux,{' '}
            <span className="text-brand-orange">au plus proche du terrain.</span>
          </h2>
          <p className="mt-4 text-noir/50 text-lg max-w-xl mx-auto font-body">
            Le Lokal Ventoux accompagne les propriétaires à Bédoin, Malaucène, Mazan, Caromb et dans tous les villages autour du Ventoux.
          </p>
        </div>

        {/* Interactive map */}
        <div className="mb-6 reveal">
          <Suspense fallback={
            <div className="rounded-3xl bg-cream border border-cream-deeper animate-pulse" style={{ height: 420 }} />
          }>
            <InteractiveMap />
          </Suspense>
          <p className="text-center text-noir/35 font-body text-xs mt-2.5 italic">
            Cliquez sur un village pour en savoir plus · Zoom avec les boutons ↗
          </p>
        </div>

        <div className="bg-white rounded-4xl p-7 sm:p-10 shadow-card border border-cream-deeper relative overflow-hidden">
          {/* Watermark illustration */}
          <div className="absolute right-0 bottom-0 w-48 opacity-[0.07] pointer-events-none hidden lg:block translate-x-8 translate-y-4">
            <ProvençalHouse className="w-full h-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((city, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} group bg-cream rounded-2xl px-4 py-3.5
                  hover:bg-brand-orange/8 hover:border-brand-orange/20 border border-transparent
                  transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="relative flex-shrink-0 w-4 h-4 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-brand-orange block" />
                    <span className="absolute inset-0 rounded-full bg-brand-orange/30 hidden group-hover:block pulse-ring" />
                  </div>
                  <span className="font-heading font-bold text-noir text-sm group-hover:text-brand-orange transition-colors duration-300 flex-1">
                    {city.name}
                  </span>
                  <span className="text-[10px] font-heading font-bold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    ✓ Couvert
                  </span>
                </div>
                <p className="text-noir/38 font-body text-xs pl-6">{city.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-noir/38 font-body text-sm italic">
            … et bien d'autres villages autour du Ventoux.
          </p>

          <div className="mt-6 pt-6 border-t border-cream-deeper text-center reveal">
            <p className="text-noir/45 font-body text-sm">
              Autre village autour du Ventoux ?{' '}
              <a href="#contact" className="text-brand-orange font-heading font-bold hover:underline">
                Contactez-moi, j'étudie toutes les demandes.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

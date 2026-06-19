import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-olive/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/[0.07] rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />

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

        <div className="bg-white rounded-4xl p-7 sm:p-10 shadow-card border border-cream-deeper">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((city, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} group bg-cream rounded-2xl px-4 py-3.5
                  hover:bg-brand-orange/8 hover:border-brand-orange/20 border border-transparent
                  transition-all duration-250 hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-heading font-bold text-noir text-sm group-hover:text-brand-orange transition-colors duration-250">
                    {city.name}
                  </span>
                </div>
                <p className="text-noir/38 font-body text-xs pl-3.5">{city.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-cream-deeper text-center reveal">
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

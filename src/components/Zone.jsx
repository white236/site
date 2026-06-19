import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const cities = [
  { name: 'Bédoin', note: 'Porte du Ventoux' },
  { name: 'Malaucène', note: 'Versant nord' },
  { name: 'Mazan', note: 'Village de caractère' },
  { name: 'Caromb', note: 'Fontaine légendaire' },
  { name: 'Mormoiron', note: 'Vignoble & collines' },
  { name: 'Pernes-les-Fontaines', note: 'Cité des fontaines' },
  { name: 'Carpentras', note: 'Cœur du Comtat' },
  { name: 'Venasque', note: 'Village perché' },
]

export default function Zone() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-20 sm:py-28 bg-cream-dark relative overflow-hidden" ref={containerRef}>
      {/* Mountain silhouette decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-olive/[0.07] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-olive text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Zone d'intervention
          </span>
          <h2 className="section-title max-w-xl mx-auto">
            Autour du{' '}
            <span className="text-brand-orange">Ventoux</span>
          </h2>
          <p className="mt-4 text-noir/50 text-lg max-w-lg mx-auto font-body">
            Conciergerie locale : on connaît chaque village, chaque prestataire, chaque spécificité du territoire.
          </p>
        </div>

        {/* Map placeholder with cities */}
        <div className="relative bg-white rounded-4xl p-8 sm:p-10 shadow-card border border-cream-deeper overflow-hidden">
          {/* Decorative Ventoux peak visual */}
          <div className="absolute top-6 right-6 sm:right-10 text-right">
            <div className="flex items-end gap-1 justify-end opacity-10">
              <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-brand-olive" />
              <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[80px] border-l-transparent border-r-transparent border-b-brand-olive -ml-2" />
              <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-brand-olive" />
            </div>
            <p className="text-xs font-heading font-bold text-brand-olive/40 mt-1 tracking-widest">MONT VENTOUX</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {cities.map((city, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} group bg-cream rounded-2xl px-4 py-4 hover:bg-brand-orange/5 hover:border-brand-orange/20 border border-transparent transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                  <span className="font-heading font-bold text-noir text-base group-hover:text-brand-orange transition-colors">
                    {city.name}
                  </span>
                </div>
                <p className="text-noir/45 font-body text-xs pl-4">{city.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-cream-deeper text-center reveal">
            <p className="text-noir/50 font-body text-sm">
              Votre commune n'est pas listée ?{' '}
              <a href="#contact" className="text-brand-orange font-heading font-bold hover:underline">
                Contactez-nous, on étudie toutes les demandes.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

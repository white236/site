import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

export default function CTAFinal() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section className="py-20 sm:py-28 bg-brand-orange relative overflow-hidden" ref={containerRef}>
      {/* Organic blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-noir/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      {/* Decorative dots */}
      <div className="absolute top-12 left-16 w-3 h-3 bg-white/30 rounded-full animate-float hidden sm:block" />
      <div className="absolute top-20 left-32 w-2 h-2 bg-white/20 rounded-full animate-float-delay hidden sm:block" />
      <div className="absolute bottom-16 right-20 w-4 h-4 bg-white/20 rounded-full animate-float hidden sm:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" ref={containerRef}>
        <div className="reveal">
          <span className="inline-block bg-white/20 text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Passez à l'action
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
            Vous avez un logement autour du Ventoux ?
          </h2>
          <p className="text-white/80 font-body text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Recevez une estimation gratuite et découvrez si votre bien peut être mieux exploité en location courte durée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-brand-orange font-heading font-black text-base px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 shadow-orange-lg inline-flex items-center gap-2"
            >
              Demander mon estimation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-heading font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-brand-orange transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contacter sur WhatsApp
            </a>
          </div>

          <p className="mt-8 text-white/50 text-sm font-body">
            Estimation 100 % gratuite · Sans engagement · Réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  )
}

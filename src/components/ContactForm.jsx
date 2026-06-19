import { useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

export default function ContactForm() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(242,101,34,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Main contact card */}
        <div className="reveal bg-white rounded-[2.5rem] overflow-hidden shadow-card-hover border border-cream-deeper">

          {/* Top orange stripe */}
          <div className="bg-brand-orange h-2" />

          <div className="p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="inline-block bg-brand-orange/10 text-brand-orange font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
                Contact direct
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-noir leading-tight mb-4 text-balance">
                Vous avez un logement autour du Ventoux ?
              </h2>
              <p className="font-body text-lg text-noir/55 leading-relaxed max-w-xl mx-auto">
                Appelez-moi directement ou envoyez-moi un message. On regarde ensemble si votre logement peut être mieux exploité en courte durée.
              </p>
            </div>

            {/* Phone number — very prominent */}
            <div className="flex justify-center mb-8">
              <a
                href="tel:0620711975"
                className="group flex flex-col items-center gap-1 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <span className="text-noir/40 font-body text-sm tracking-wide">Appeler Victor</span>
                <span className="font-heading font-black text-4xl sm:text-5xl text-noir group-hover:text-brand-orange transition-colors duration-200 tracking-tight">
                  06 20 71 19 75
                </span>
                <span className="flex items-center gap-1.5 text-brand-orange font-heading font-semibold text-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  Disponible 7j/7
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-cream-deeper" />
              <span className="text-noir/30 font-body text-sm">ou</span>
              <div className="flex-1 h-px bg-cream-deeper" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="tel:0620711975"
                className="group flex-1 sm:flex-none sm:min-w-[220px] bg-brand-orange text-white font-heading font-black text-base px-8 py-4 rounded-2xl hover:bg-brand-orange-dark transition-all duration-300 hover:-translate-y-0.5 shadow-orange flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler Victor
              </a>
              <a
                href="https://wa.me/33620711975"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 sm:flex-none sm:min-w-[220px] bg-[#25D366] text-white font-heading font-black text-base px-8 py-4 rounded-2xl hover:bg-[#1ebe5d] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Envoyer un WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-cream-deeper">
              {[
                { icon: '⚡', label: 'Réponse rapide' },
                { icon: '📍', label: 'Conciergerie locale' },
                { icon: '🔓', label: 'Sans engagement' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-heading font-semibold text-noir/50 text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Below card: Victor identity */}
        <div className="reveal reveal-delay-2 mt-8 text-center">
          <p className="font-body text-noir/40 text-sm">
            <span className="font-heading font-bold text-noir/60">Victor</span> · Le Lokal Ventoux · Conciergerie courte durée · Autour du Mont Ventoux
          </p>
        </div>
      </div>
    </section>
  )
}

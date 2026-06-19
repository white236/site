import Logo from './Logo'

const badges = [
  { icon: '💰', text: '20 % seulement quand le logement est loué' },
  { icon: '📸', text: 'Photos offertes au lancement' },
  { icon: '💬', text: 'Contact direct' },
  { icon: '🏔️', text: 'Autour du Ventoux' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20">
      {/* Background blobs – lavande */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange opacity-[0.08] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-olive opacity-[0.08] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-brand-jaune opacity-[0.12] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Petits points décoratifs animés */}
      <div className="absolute top-28 right-20 w-3 h-3 rounded-full bg-brand-orange opacity-50 animate-float hidden lg:block" />
      <div className="absolute top-44 right-40 w-2 h-2 rounded-full bg-brand-orange opacity-30 animate-float-delay hidden lg:block" />
      <div className="absolute top-64 right-16 w-1.5 h-1.5 rounded-full bg-brand-olive opacity-40 animate-float-slow hidden lg:block" />
      <div className="absolute bottom-36 left-24 w-2.5 h-2.5 rounded-full bg-brand-orange opacity-35 animate-float hidden lg:block" />
      <div className="absolute bottom-52 left-12 w-2 h-2 rounded-full bg-brand-olive opacity-30 animate-float-delay hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-cream-dark border border-cream-deeper rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-soft" />
              <span className="text-sm font-heading font-semibold text-noir/65 tracking-wide">
                Conciergerie locale · Ventoux
              </span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-noir leading-[1.08] text-balance">
              La conciergerie{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-orange">fraîche et locale</span>
                <span className="absolute bottom-0.5 left-0 right-0 h-3 bg-brand-jaune/50 -skew-x-2 -z-0 rounded" />
              </span>
              {' '}autour du Ventoux.
            </h1>

            <p className="font-body text-lg sm:text-xl text-noir/60 leading-relaxed max-w-xl">
              Vous avez un logement à louer ?{' '}
              <strong className="text-noir/80 font-semibold">Je m'occupe du quotidien</strong> : messages, arrivées, départs, ménage, suivi et voyageurs.
              Vous gardez la main, je gère le terrain.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <a
                href="tel:0620711975"
                className="btn-orange shadow-orange text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                M'appeler
              </a>
              <a
                href="https://wa.me/33620711975"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            <p className="text-sm font-body text-noir/38 font-medium">
              ✓ Disponible 7j/7 · ✓ Réponse rapide · ✓ Local, humain, direct
            </p>
          </div>

          {/* Right: logo + badges */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-4xl p-10 shadow-card-hover border border-cream-deeper">
              <Logo size="2xl" />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 w-full max-w-sm">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl p-3.5 shadow-card border border-cream-deeper flex items-start gap-2.5
                    ${i % 2 === 0 ? 'animate-float' : 'animate-float-delay'}`}
                >
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <span className="text-xs font-heading font-bold text-noir leading-snug">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F0E8D8" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  )
}

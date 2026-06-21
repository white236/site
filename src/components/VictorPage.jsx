import Logo from './Logo'
import Footer from './Footer'

function goBack() {
  window.location.hash = ''
}

// ─── Replace this with the real photo once victor.jpg is in src/assets/ ───
// import victorImg from '../assets/victor.jpg'
// Then swap <AvatarPlaceholder /> for:
// <img src={victorImg} alt="Victor" className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover object-top border-4 border-white shadow-[0_20px_60px_rgba(125,140,255,0.28)] flex-shrink-0" />
function AvatarPlaceholder() {
  return (
    <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full flex-shrink-0 border-4 border-white shadow-[0_20px_60px_rgba(125,140,255,0.28)] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EDE4F5 0%, #E0E3FF 50%, #EDE4F5 100%)' }}
    >
      <span className="font-heading font-black text-brand-orange/35" style={{ fontSize: 110 }}>V</span>
    </div>
  )
}

const pillars = [
  {
    icon: '🎓',
    title: 'Étudiant en économie',
    desc: "Je comprends les enjeux financiers derrière votre logement — rentabilité, taux d'occupation, stratégie tarifaire selon les saisons.",
  },
  {
    icon: '🏔️',
    title: 'Local du Ventoux',
    desc: "Je connais chaque village, chaque prestataire, chaque route du massif. Ce n'est pas une carte pour moi — c'est mon quotidien.",
  },
  {
    icon: '🤝',
    title: 'Passionné de commerce',
    desc: "Annonce soignée, photos travaillées, accueil chaleureux des voyageurs : votre logement mérite d'être bien représenté.",
  },
  {
    icon: '📞',
    title: 'Disponible 7j/7',
    desc: "Un numéro direct, une vraie réponse rapide. Pas de boîte noire, pas d'agence entre nous — juste moi.",
  },
]

export default function VictorPage() {
  return (
    <div className="min-h-screen bg-cream page-fade-in">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/96 backdrop-blur-md border-b border-cream-deeper">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 h-14 lg:h-16">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 font-heading font-semibold text-noir/65 hover:text-brand-orange transition-colors text-sm px-3 py-2 rounded-xl hover:bg-brand-orange/8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
          <button onClick={goBack} className="hover:opacity-75 transition-opacity">
            <Logo size="sm" />
          </button>
        </div>
      </header>

      <main className="pt-14 lg:pt-16">

        {/* ── Hero ── */}
        <section className="py-16 sm:py-24 bg-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange opacity-[0.07] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-olive opacity-[0.07] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

              {/* Photo */}
              <div className="flex-shrink-0 flex justify-center">
                <AvatarPlaceholder />
              </div>

              {/* Text */}
              <div>
                <span className="inline-block bg-brand-orange/15 text-brand-orange font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
                  Qui suis-je ?
                </span>
                <h1 className="font-heading font-black text-4xl sm:text-5xl text-noir leading-tight mb-5">
                  Bonjour, je suis{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-brand-orange">Victor.</span>
                    <span className="absolute bottom-0.5 left-0 right-0 h-3 bg-brand-jaune/50 -skew-x-2 -z-0 rounded" />
                  </span>
                </h1>
                <p className="font-body text-lg sm:text-xl text-noir/65 leading-relaxed mb-5">
                  Étudiant en <strong className="text-noir/85 font-semibold">licence d'économie</strong>, j'ai grandi autour du Ventoux et j'ai toujours été passionné par la vente, la gestion et les relations humaines. J'ai lancé Le Lokal Ventoux pour faire quelque chose de{' '}
                  <strong className="text-noir/85 font-semibold">concret, ici, sur ce territoire que je connais depuis l'enfance.</strong>
                </p>
                <p className="font-body text-base text-noir/50 leading-relaxed">
                  Ce n'est pas une agence. C'est moi — disponible, honnête, et vraiment présent sur le terrain.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a href="tel:0620711975" className="btn-orange shadow-orange text-base">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    M'appeler directement
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
              </div>
            </div>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-14 sm:py-20 bg-noir relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange opacity-[0.10] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange opacity-[0.06] rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <span className="inline-block bg-brand-orange/18 text-brand-orange-light font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
              Mon parcours
            </span>
            <blockquote className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug mb-10 text-balance">
              "J'ai toujours voulu créer quelque chose de moi-même — pas juste un job, un vrai projet."
            </blockquote>
            <div className="space-y-5 text-left">
              <p className="font-body text-white/65 text-base sm:text-lg leading-relaxed">
                En faculté d'économie, j'ai compris très vite ce qui m'animait vraiment : analyser un marché, trouver la bonne stratégie de prix, convaincre et fidéliser. La location courte durée cochait toutes ces cases — et en plus, c'était autour du Ventoux, là où je vis.
              </p>
              <p className="font-body text-white/65 text-base sm:text-lg leading-relaxed">
                J'ai observé que de nombreux propriétaires avaient un logement à valoriser mais ni le temps ni l'envie de gérer les voyageurs, les ménages et les imprévus du quotidien. C'est là que j'ai vu ma place : être la personne fiable, locale et réactive qu'ils n'avaient pas encore trouvée.
              </p>
              <p className="font-body text-white/65 text-base sm:text-lg leading-relaxed">
                Le Lokal Ventoux, c'est ce projet — concret, ancré ici, et géré avec le sérieux que mérite quelqu'un qui me confie sa maison.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pourquoi me faire confiance ── */}
        <section className="py-14 sm:py-20 bg-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-brand-olive/15 text-brand-olive-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
                Ce que j'apporte
              </span>
              <h2 className="section-title text-balance">
                Pourquoi me{' '}
                <span className="text-brand-orange">faire confiance ?</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-7 border border-cream-deeper shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-4 text-2xl">
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-bold text-noir text-lg mb-2">{p.title}</h3>
                  <p className="font-body text-noir/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 sm:py-16 bg-cream-dark text-center">
          <div className="max-w-lg mx-auto px-4">
            <p className="font-heading font-bold text-noir text-xl sm:text-2xl mb-2">
              Vous avez un logement autour du Ventoux ?
            </p>
            <p className="font-body text-noir/50 text-base mb-8">
              Parlons-en directement — sans engagement, sans pression.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0620711975" className="btn-orange shadow-orange">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler Victor
              </a>
              <button onClick={goBack} className="btn-outline">
                ← Retour à l'accueil
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

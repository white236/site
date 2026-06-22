import { useEffect, useState } from 'react'
import victorImg from './assets/image.jpg'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Offer from './components/Offer'
import NouvelleGeneration from './components/NouvelleGeneration'
import HowItWorks from './components/HowItWorks'
import MaisonVivante from './components/MaisonVivante'
import Differentiators from './components/Differentiators'
import CTAFinal from './components/CTAFinal'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import TerritoirePage from './components/TerritoirePage'
import VictorPage from './components/VictorPage'
import BottomNav from './components/BottomNav'

export default function App() {
  const [page, setPage] = useState(() => {
    if (window.location.hash === '#territoire') return 'territoire'
    if (window.location.hash === '#victor') return 'victor'
    return 'accueil'
  })

  // Hash-based page routing
  useEffect(() => {
    const onHash = () => {
      let target = 'accueil'
      if (window.location.hash === '#territoire') target = 'territoire'
      if (window.location.hash === '#victor') target = 'victor'
      setPage(target)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Reveal observer — re-runs when returning to main page
  useEffect(() => {
    if (page !== 'accueil') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [page])

  if (page === 'territoire') return <><TerritoirePage /><BottomNav currentPage="territoire" /></>
  if (page === 'victor')     return <><VictorPage /><BottomNav currentPage="victor" /></>

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      <main className="pt-14 lg:pt-16">
        <div id="ch-accueil"><Hero /></div>
        <div id="ch-defi"><Problem /></div>
        <div id="ch-offre"><Offer /></div>
        <div id="ch-gen" className="hidden sm:block"><NouvelleGeneration /></div>
        <div id="ch-fonctionnement"><HowItWorks /></div>
        <MaisonVivante />
        <div id="ch-garanties"><Differentiators /></div>

        {/* ── Victor teaser ── */}
        <div className="py-8 sm:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-5 bg-cream rounded-3xl p-6 border border-cream-deeper">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden">
                  <img src={victorImg} alt="Victor" className="w-full h-full object-cover object-[center_8%]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-cream" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-noir text-base mb-0.5">
                  Derrière tout ça, il y a <span className="text-brand-orange">Victor.</span>
                </p>
                <p className="font-body text-noir/50 text-sm leading-relaxed mb-3">
                  Étudiant en économie, local du Ventoux, disponible 7j/7.
                </p>
                <button
                  onClick={() => { window.location.hash = '#victor' }}
                  className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-brand-orange hover:text-brand-orange-dark transition-colors"
                >
                  Qui suis-je ?
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Territoire teaser ── */}
        <div
          id="ch-territoire"
          className="py-12 sm:py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(155deg, #EAE0CC 0%, #EDE4F5 45%, #EAE0CC 100%)' }}
        >
          {/* Ventoux silhouette */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-16" fill="none">
              <path
                d="M0 60V40L200 30L400 20L560 8L660 0L720 4L780 0L880 8L1040 20L1240 30L1440 40V60Z"
                fill="#8E9B72"
                fillOpacity="0.13"
              />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <span className="inline-block bg-brand-olive text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Zone d'intervention
            </span>
            <h2 className="section-title mb-4 text-balance">
              Autour du Ventoux,{' '}
              <span className="text-brand-orange">au plus proche du terrain.</span>
            </h2>
            <p className="font-body text-noir/55 text-base sm:text-lg mb-6 max-w-md mx-auto leading-relaxed">
              Bédoin, Malaucène, Mazan, Caromb… Découvrez notre zone d'intervention et l'esprit qui nous anime.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['Bédoin', 'Malaucène', 'Mazan', 'Caromb', 'Carpentras', '+ 10 villages'].map((v) => (
                <span
                  key={v}
                  className="bg-white/80 backdrop-blur-sm text-noir font-heading font-bold text-xs px-3 py-1.5 rounded-full border border-cream-deeper"
                >
                  {v}
                </span>
              ))}
            </div>
            <button
              onClick={() => { window.location.hash = '#territoire' }}
              className="btn-orange shadow-orange"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Voir la carte et notre territoire
            </button>
          </div>
        </div>

        <div id="ch-contact">
          <CTAFinal />
          <ContactForm />
        </div>
      </main>
      <div className="h-16 lg:hidden" />
      <Footer />
      <BottomNav currentPage={page} />
    </div>
  )
}

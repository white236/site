import Logo from './Logo'
import EspritVentoux from './EspritVentoux'
import Zone from './Zone'
import Footer from './Footer'

function goBack() {
  window.location.hash = ''
}

export default function TerritoirePage() {
  return (
    <div className="min-h-screen bg-cream page-fade-in">

      {/* Minimal header with back button */}
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
        <EspritVentoux />
        <Zone />

        {/* Back to home */}
        <div className="py-10 bg-cream text-center">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 font-heading font-semibold text-noir/50 hover:text-brand-orange transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

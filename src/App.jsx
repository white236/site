import { useState, useCallback, useEffect, useRef } from 'react'
import CursorGlow from './components/CursorGlow'
import MistralParticles from './components/MistralParticles'
import ScrollPetals from './components/ScrollPetals'
import Header from './components/Header'
import ChapterPill from './components/ChapterPill'
import Logo from './components/Logo'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Offer from './components/Offer'
import NouvelleGeneration from './components/NouvelleGeneration'
import HowItWorks from './components/HowItWorks'
import Differentiators from './components/Differentiators'
import Security from './components/Security'
import EspritVentoux from './components/EspritVentoux'
import Zone from './components/Zone'
import CTAFinal from './components/CTAFinal'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function ContactChapter() {
  return <><CTAFinal /><ContactForm /><Footer /></>
}

const CHAPTERS = [
  { label: 'Accueil',             number: '01', Render: Hero },
  { label: 'Le défi',             number: '02', Render: Problem },
  { label: 'Nos services',        number: '03', Render: Offer },
  { label: 'Nouvelle génération', number: '04', Render: NouvelleGeneration },
  { label: 'Fonctionnement',      number: '05', Render: HowItWorks },
  { label: 'Nos garanties',       number: '06', Render: Differentiators },
  { label: 'Sécurité',            number: '07', Render: Security },
  { label: "L'esprit du Ventoux", number: '08', Render: EspritVentoux },
  { label: 'Notre territoire',    number: '09', Render: Zone },
  { label: 'Contact',             number: '10', Render: ContactChapter },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    if (index === current || transitioning || index < 0 || index >= CHAPTERS.length) return

    clearTimeout(timerRef.current)
    setTransitioning(true)
    setPrev(current)
    setCurrent(index)

    requestAnimationFrame(() => {
      const el = document.getElementById('ch-current')
      if (el) el.scrollTop = 0
    })

    timerRef.current = setTimeout(() => {
      setPrev(null)
      setTransitioning(false)
    }, 520)
  }, [current, transitioning])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1)
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, current])

  const PrevSection    = prev !== null ? CHAPTERS[prev].Render    : null
  const CurrentSection = CHAPTERS[current].Render

  return (
    <div className="fixed inset-0 overflow-hidden bg-cream">
      <MistralParticles />
      <ScrollPetals />
      <CursorGlow />

      {/* Mobile header */}
      <Header goTo={goTo} chapters={CHAPTERS} />

      {/* Desktop logo */}
      <div className="hidden lg:block fixed top-6 left-8 z-[80]">
        <button onClick={() => goTo(0)} className="hover:opacity-70 transition-opacity duration-200">
          <Logo size="sm" />
        </button>
      </div>

      {/* Exiting chapter — sits behind the entering one */}
      {PrevSection && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0 overflow-y-auto chapter-exit"
          style={{ zIndex: 10 }}
          aria-hidden="true"
        >
          <div className="pt-14 lg:pt-0 pb-24 lg:pb-40">
            <PrevSection />
          </div>
        </div>
      )}

      {/* Active chapter */}
      <div
        key={`curr-${current}`}
        id="ch-current"
        className={`absolute inset-0 overflow-y-auto${transitioning ? ' chapter-enter' : ''}`}
        style={{ zIndex: 20 }}
      >
        <div className="pt-14 lg:pt-0 pb-24 lg:pb-40">
          <CurrentSection />
        </div>
      </div>

      <ChapterPill
        chapters={CHAPTERS}
        current={current}
        goTo={goTo}
      />
    </div>
  )
}

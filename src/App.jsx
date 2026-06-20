import { useEffect } from 'react'
import CursorGlow from './components/CursorGlow'
import MistralParticles from './components/MistralParticles'
import ScrollPetals from './components/ScrollPetals'
import NouvelleGeneration from './components/NouvelleGeneration'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Offer from './components/Offer'
import EspritVentoux from './components/EspritVentoux'
import HowItWorks from './components/HowItWorks'
import Differentiators from './components/Differentiators'
import Security from './components/Security'
import Zone from './components/Zone'
import CTAFinal from './components/CTAFinal'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <MistralParticles />
      <ScrollPetals />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <NouvelleGeneration />
        <HowItWorks />
        <Differentiators />
        <Security />
        <EspritVentoux />
        <Zone />
        <CTAFinal />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

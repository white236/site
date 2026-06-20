import { useEffect } from 'react'
import CursorGlow from './components/CursorGlow'
import MistralParticles from './components/MistralParticles'
import ScrollPetals from './components/ScrollPetals'
import Header from './components/Header'
import SectionNav from './components/SectionNav'
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

export default function App() {
  useEffect(() => {
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
  }, [])

  return (
    <div className="min-h-screen">
      <MistralParticles />
      <ScrollPetals />
      <CursorGlow />
      <Header />
      <SectionNav />
      <main className="pt-14 lg:pt-0">
        <div id="ch-accueil"><Hero /></div>
        <div id="ch-defi"><Problem /></div>
        <div id="ch-offre"><Offer /></div>
        <div id="ch-gen"><NouvelleGeneration /></div>
        <div id="ch-fonctionnement"><HowItWorks /></div>
        <div id="ch-garanties"><Differentiators /></div>
        <div id="ch-securite"><Security /></div>
        <div id="ch-esprit"><EspritVentoux /></div>
        <div id="ch-territoire"><Zone /></div>
        <div id="ch-contact">
          <CTAFinal />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Offer from './components/Offer'
import Differentiators from './components/Differentiators'
import HowItWorks from './components/HowItWorks'
import Security from './components/Security'
import Zone from './components/Zone'
import CTAFinal from './components/CTAFinal'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  // Global scroll reveal observer
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
      <Header />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <Differentiators />
        <HowItWorks />
        <Security />
        <Zone />
        <CTAFinal />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

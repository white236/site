import { useState, useEffect, useRef } from 'react'
import maisonImg from '../assets/istockphoto-175970870-612x612.jpg'

const stages = [
  {
    number: '01',
    icon: '🏠',
    title: 'La maison vous attend',
    desc: "Votre logement est disponible. Tout est calme. En attendant la prochaine réservation, votre conciergerie veille.",
    windowColor: '#1C2814',
  },
  {
    number: '02',
    icon: '📷',
    title: 'Photos avant le séjour',
    desc: "Avant chaque arrivée, je documente l'état complet du logement. Chaque pièce est photographiée. Votre bien est protégé.",
    windowColor: '#7D8CFF',
  },
  {
    number: '03',
    icon: '🧳',
    title: 'Les voyageurs arrivent',
    desc: "Accueil chaleureux, remise des clés, consignes claires. Vos voyageurs sont pris en charge du début à la fin.",
    windowColor: '#F5A623',
  },
  {
    number: '04',
    icon: '🧹',
    title: 'Le ménage intervient',
    desc: "Au départ des voyageurs, notre prestataire déclaré passe. Rapport de ménage + vérification complète du logement.",
    windowColor: '#C8E6C9',
  },
  {
    number: '05',
    icon: '📱',
    title: 'Vous recevez un résumé',
    desc: "Un message récapitulatif vous est envoyé : séjour terminé, logement vérifié, revenus en cours de virement. Vous restez informé.",
    windowColor: '#C5CAE9',
  },
  {
    number: '06',
    icon: '✅',
    title: 'Prêt pour la prochaine réservation',
    desc: "Votre logement est de nouveau impeccable et disponible. Le cycle recommence — sans que vous ayez rien à faire.",
    windowColor: '#A5D6A7',
  },
]

const stageOverlays = [
  { tint: null,                     badge: null,  check: false, pulse: false },
  { tint: 'rgba(125,140,255,0.20)', badge: '📷',  check: false, pulse: false },
  { tint: 'rgba(245,166,35,0.16)',  badge: '🧳',  check: false, pulse: false },
  { tint: 'rgba(142,155,114,0.20)', badge: '🧹',  check: false, pulse: false },
  { tint: 'rgba(197,202,233,0.24)', badge: '📱',  check: false, pulse: true  },
  { tint: 'rgba(76,175,80,0.18)',   badge: null,  check: true,  pulse: false },
]

function HouseIllustration({ stageIndex }) {
  const ov = stageOverlays[stageIndex]

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,58,32,0.22)]">
      <img
        src={maisonImg}
        alt="Maison provençale au pied du Ventoux"
        className="w-full object-cover"
        style={{ aspectRatio: '4/3' }}
      />

      {/* Color tint overlay — transitions between stages */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{ background: ov.tint ?? 'transparent' }}
      />

      {/* Emoji badge — top right */}
      {ov.badge && (
        <div
          className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
          style={{ fontSize: 28 }}
        >
          {ov.badge}
          {ov.pulse && (
            <span className="absolute -top-1.5 -right-1.5 flex">
              <span className="animate-ping absolute w-4 h-4 rounded-full bg-brand-orange opacity-75" />
              <span className="w-4 h-4 rounded-full bg-brand-orange" />
            </span>
          )}
        </div>
      )}

      {/* Green checkmark for stage 6 */}
      {ov.check && (
        <div className="absolute top-4 right-4 w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Stage counter — bottom left */}
      <div className="absolute bottom-4 left-4 bg-noir/60 backdrop-blur-sm text-white font-heading font-black text-xs px-3 py-1.5 rounded-full tracking-widest">
        {stages[stageIndex].number} / 06
      </div>
    </div>
  )
}

function StageDots({ current }) {
  return (
    <div className="flex justify-center gap-2">
      {stages.map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-500 ${
            i === current  ? 'w-7 h-[7px] bg-brand-orange'
            : i < current ? 'w-[7px] h-[7px] bg-brand-orange/35'
            : 'w-[7px] h-[7px] bg-noir/12'
          }`}
        />
      ))}
    </div>
  )
}

function StageCard({ s, i, active }) {
  return (
    <div className={`w-full rounded-3xl border-2 transition-all duration-500 ${
      i === active
        ? 'bg-white border-brand-orange/25 shadow-[0_12px_40px_rgba(125,140,255,0.13)] -translate-y-1'
        : 'bg-cream-dark border-cream-deeper opacity-55'
    }`}>
      <div className="p-7 sm:p-9">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-heading font-black text-noir/10 leading-none" style={{ fontSize: 52 }}>
            {s.number}
          </span>
          <span style={{ fontSize: 36 }}>{s.icon}</span>
        </div>
        <h3 className="font-heading font-bold text-noir text-xl sm:text-2xl mb-3 leading-snug">
          {s.title}
        </h3>
        <p className="font-body text-noir/60 text-base sm:text-lg leading-relaxed">
          {s.desc}
        </p>
        {i === active && (
          <div className="mt-5 inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange font-heading font-bold text-xs px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            En cours
          </div>
        )}
      </div>
    </div>
  )
}

export default function MaisonVivante() {
  const [stage, setStage] = useState(0)
  // Separate ref arrays so display:none doesn't confuse IntersectionObserver
  const desktopRefs = useRef([])
  const mobileRefs  = useRef([])

  useEffect(() => {
    const observe = (refs) => refs.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setStage(i) },
        { rootMargin: '-35% 0px -35% 0px' }
      )
      obs.observe(el)
      return obs
    })
    const d = observe(desktopRefs.current)
    const m = observe(mobileRefs.current)
    return () => { d.forEach(o => o?.disconnect()); m.forEach(o => o?.disconnect()) }
  }, [])

  return (
    // NO overflow:hidden — would break position:sticky
    <section className="bg-cream relative">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-10 text-center">
        <span className="inline-block bg-brand-orange/15 text-brand-orange font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
          Le cycle d'un séjour
        </span>
        <h2 className="section-title mb-4 text-balance max-w-lg mx-auto">
          Votre maison,{' '}
          <span className="text-brand-orange">on s'en occupe.</span>
        </h2>
        <p className="font-body text-lg text-noir/55 max-w-md mx-auto leading-relaxed">
          6 étapes claires, du moment où votre logement est vide jusqu'à la prochaine réservation.
        </p>
      </div>

      {/* ── Desktop: sticky left panel + scrollable right cards ── */}
      <div className="hidden lg:flex max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="w-[46%] pr-14 self-start sticky top-16">
          <HouseIllustration stageIndex={stage} />
          <div className="mt-6"><StageDots current={stage} /></div>
          <div key={`dlbl-${stage}`} className="count-flip-in text-center mt-4">
            <div className="font-heading font-black text-brand-orange/60 text-xs tracking-[0.2em] uppercase">
              Étape {stages[stage].number} sur 06
            </div>
            <div className="font-heading font-bold text-noir text-lg mt-1">
              {stages[stage].icon} {stages[stage].title}
            </div>
          </div>
        </div>
        <div className="w-[54%]">
          {stages.map((s, i) => (
            <div key={i} ref={el => { desktopRefs.current[i] = el }} className="min-h-[82vh] flex items-center">
              <StageCard s={s} i={i} active={stage} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: sticky house panel + scrollable cards ── */}
      <div className="lg:hidden">

        {/* Sticky house — top-14 accounts for the fixed mobile header */}
        <div
          className="sticky top-14 z-20 bg-cream pb-4 pt-3"
          style={{ boxShadow: '0 4px 20px rgba(44,58,32,0.08)' }}
        >
          <div className="w-[200px] mx-auto">
            <HouseIllustration stageIndex={stage} />
          </div>
          <div className="mt-3"><StageDots current={stage} /></div>
          <div key={`mlbl-${stage}`} className="count-flip-in text-center mt-2">
            <div className="font-heading font-black text-brand-orange/60 text-[10px] tracking-[0.18em] uppercase">
              Étape {stages[stage].number} sur 06
            </div>
            <div className="font-heading font-bold text-noir text-sm mt-0.5">
              {stages[stage].icon} {stages[stage].title}
            </div>
          </div>
        </div>

        {/* Stage cards — each tall enough to scroll cleanly into the observer zone */}
        <div className="px-4 pb-16 pt-2">
          {stages.map((s, i) => (
            <div
              key={i}
              ref={el => { mobileRefs.current[i] = el }}
              className="min-h-[65vh] flex items-center py-4"
            >
              <StageCard s={s} i={i} active={stage} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

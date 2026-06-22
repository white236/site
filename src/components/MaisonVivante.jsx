import { useState, useEffect, useRef } from 'react'
import maisonImg from '../assets/istockphoto-175970870-612x612.jpg'

const stages = [
  {
    number: '01',
    icon: '🏠',
    title: 'La maison vous attend',
    desc: "Votre logement est disponible. Tout est calme. En attendant la prochaine réservation, votre conciergerie veille.",
  },
  {
    number: '02',
    icon: '📷',
    title: 'Photos avant le séjour',
    desc: "Avant chaque arrivée, je documente l'état complet du logement. Chaque pièce est photographiée. Votre bien est protégé.",
  },
  {
    number: '03',
    icon: '🧳',
    title: 'Les voyageurs arrivent',
    desc: "Accueil chaleureux, remise des clés, consignes claires. Vos voyageurs sont pris en charge du début à la fin.",
  },
  {
    number: '04',
    icon: '🧹',
    title: 'Le ménage intervient',
    desc: "Au départ des voyageurs, notre prestataire déclaré passe. Rapport de ménage + vérification complète du logement.",
  },
  {
    number: '05',
    icon: '📱',
    title: 'Vous recevez un résumé',
    desc: "Un message récapitulatif vous est envoyé : séjour terminé, logement vérifié, revenus en cours de virement. Vous restez informé.",
  },
  {
    number: '06',
    icon: '✅',
    title: 'Prêt pour la prochaine réservation',
    desc: "Votre logement est de nouveau impeccable et disponible. Le cycle recommence — sans que vous ayez rien à faire.",
  },
]

// Per-stage visual accent: glow color, tint, badge
const stageAccents = [
  { tint: null,                       color: '#8E9B72', shadow: 'rgba(142,155,114,0.28)', badge: null,  check: false, pulse: false },
  { tint: 'rgba(125,140,255,0.18)',   color: '#7D8CFF', shadow: 'rgba(125,140,255,0.32)', badge: '📷',  check: false, pulse: false },
  { tint: 'rgba(245,166,35,0.15)',    color: '#F5A623', shadow: 'rgba(245,166,35,0.28)',  badge: '🧳',  check: false, pulse: false },
  { tint: 'rgba(144,194,143,0.18)',   color: '#A5D6A7', shadow: 'rgba(144,194,143,0.28)', badge: '🧹',  check: false, pulse: false },
  { tint: 'rgba(121,134,203,0.22)',   color: '#7986CB', shadow: 'rgba(121,134,203,0.32)', badge: '📱',  check: false, pulse: true  },
  { tint: 'rgba(76,175,80,0.16)',     color: '#4CAF50', shadow: 'rgba(76,175,80,0.32)',   badge: null,  check: true,  pulse: false },
]

// Subtle Ken Burns: each stage drifts/zooms to a different target
const kbTransforms = [
  'scale(1.04) translate(0%, 0%)',
  'scale(1.08) translate(-1.2%, -0.8%)',
  'scale(1.06) translate(1.0%, -0.7%)',
  'scale(1.09) translate(-0.6%, 0.8%)',
  'scale(1.05) translate(0.8%, 0.4%)',
  'scale(1.10) translate(-0.3%, -0.5%)',
]

function HouseIllustration({ stageIndex }) {
  const ac = stageAccents[stageIndex]
  const progress = ((stageIndex + 1) / 6) * 100

  return (
    <div
      className="relative rounded-3xl overflow-hidden transition-[box-shadow] duration-700"
      style={{
        boxShadow: `0 16px 48px ${ac.shadow}, 0 0 0 2.5px ${ac.color}66`,
      }}
    >
      {/* Ken Burns — each stage has a different zoom+pan target, transitions slowly */}
      <img
        src={maisonImg}
        alt="Maison provençale au pied du Ventoux"
        className="w-full object-cover transition-transform duration-[3500ms] ease-in-out"
        style={{ aspectRatio: '4/3', transform: kbTransforms[stageIndex] }}
      />

      {/* Color tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{ background: ac.tint ?? 'transparent' }}
      />


      {/* Ambient top-left glow — shifts color per stage */}
      <div
        className="absolute top-0 left-0 w-28 h-28 pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(ellipse at top left, ${ac.color}40 0%, transparent 70%)` }}
      />

      {/* Badge — remounts per stage → spring pop animation */}
      {ac.badge && (
        <div
          key={`badge-${stageIndex}`}
          className="badge-pop absolute top-4 right-4 w-14 h-14 bg-white/92 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
          style={{ fontSize: 28 }}
        >
          {ac.badge}
          {ac.pulse && (
            <span className="absolute -top-1.5 -right-1.5 flex">
              <span className="animate-ping absolute w-4 h-4 rounded-full bg-brand-orange opacity-75" />
              <span className="w-4 h-4 rounded-full bg-brand-orange" />
            </span>
          )}
        </div>
      )}

      {/* Animated checkmark — stage 6 */}
      {ac.check && (
        <div key="check-badge" className="badge-pop absolute top-4 right-4 w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
          >
            <path className="check-draw" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Progress bar — fills from 0% on each stage change (via key) */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-noir/18">
        <div
          key={`bar-${stageIndex}`}
          className="progress-fill h-full rounded-r-full"
          style={{ width: `${progress}%`, background: ac.color }}
        />
      </div>

      {/* Stage counter */}
      <div className="absolute bottom-3 left-3 bg-noir/65 backdrop-blur-sm text-white font-heading font-black text-xs px-3 py-1.5 rounded-full tracking-widest">
        {stages[stageIndex].number} / 06
      </div>
    </div>
  )
}

function StageDots({ current, onDotClick }) {
  return (
    <div className="flex justify-center gap-2">
      {stages.map((_, i) => {
        const ac = stageAccents[i]
        return (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className="rounded-full transition-all duration-500 hover:scale-125 focus:outline-none"
            style={
              i === current
                ? { width: 28, height: 7, background: ac.color }
                : i < current
                ? { width: 7, height: 7, background: `${ac.color}60` }
                : { width: 7, height: 7, background: 'rgba(44,58,32,0.12)' }
            }
          />
        )
      })}
    </div>
  )
}

function StageCard({ s, i, active }) {
  const isActive = i === active
  const ac = stageAccents[i]
  return (
    <div
      className={`relative w-full rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
        isActive
          ? 'bg-white shadow-[0_12px_40px_rgba(125,140,255,0.13)] -translate-y-1'
          : 'bg-cream-dark border-cream-deeper opacity-55'
      }`}
      style={isActive ? { borderColor: `${ac.color}35` } : {}}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-700"
        style={{ background: isActive ? ac.color : 'transparent' }}
      />

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
        {isActive && (
          <div
            className="mt-5 inline-flex items-center gap-2 font-heading font-bold text-xs px-3 py-1.5 rounded-full"
            style={{ background: `${ac.color}18`, color: ac.color }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: ac.color }}
            />
            En cours
          </div>
        )}
      </div>
    </div>
  )
}

export default function MaisonVivante() {
  const [stage, setStage] = useState(0)
  const desktopRefs = useRef([])
  const mobileRefs  = useRef([])

  function handleDotClick(i) {
    const isMobile = window.innerWidth < 1024
    const ref = isMobile ? mobileRefs.current[i] : desktopRefs.current[i]
    ref?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

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

  const ac = stageAccents[stage]

  return (
    // NO overflow:hidden — would break position:sticky
    <section className="bg-cream relative">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
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
          <div className="mt-6"><StageDots current={stage} onDotClick={handleDotClick} /></div>
          <div key={`dlbl-${stage}`} className="count-flip-in text-center mt-4">
            <div
              className="font-heading font-black text-xs tracking-[0.2em] uppercase transition-colors duration-700"
              style={{ color: `${ac.color}99` }}
            >
              Étape {stages[stage].number} sur 06
            </div>
            <div className="font-heading font-bold text-noir text-lg mt-1">
              {stages[stage].icon} {stages[stage].title}
            </div>
          </div>
        </div>
        <div className="w-[54%]">
          {stages.map((s, i) => (
            <div key={i} ref={el => { desktopRefs.current[i] = el }} className="min-h-[55vh] flex items-center">
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
          <div className="mt-3"><StageDots current={stage} onDotClick={handleDotClick} /></div>
          <div className="flex justify-center gap-3 mt-3">
            <button
              onClick={() => mobileRefs.current[Math.max(0, stage - 1)]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              disabled={stage === 0}
              className="w-9 h-9 rounded-xl bg-cream-dark border border-cream-deeper flex items-center justify-center text-noir/50 disabled:opacity-25 hover:bg-noir hover:text-white transition-all duration-200 active:scale-90"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => mobileRefs.current[Math.min(stages.length - 1, stage + 1)]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              disabled={stage === stages.length - 1}
              className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center text-white disabled:opacity-25 hover:bg-brand-orange-dark transition-all duration-200 active:scale-90 shadow-orange"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div key={`mlbl-${stage}`} className="count-flip-in text-center mt-2">
            <div
              className="font-heading font-black text-[10px] tracking-[0.18em] uppercase"
              style={{ color: `${ac.color}99` }}
            >
              Étape {stages[stage].number} sur 06
            </div>
            <div className="font-heading font-bold text-noir text-sm mt-0.5">
              {stages[stage].icon} {stages[stage].title}
            </div>
          </div>
        </div>

        {/* Stage cards */}
        <div className="px-4 pb-16 pt-2">
          {stages.map((s, i) => (
            <div
              key={i}
              ref={el => { mobileRefs.current[i] = el }}
              className="min-h-[28vh] flex items-center py-3"
            >
              <StageCard s={s} i={i} active={stage} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

import { useState, useEffect, useRef } from 'react'

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

function HouseIllustration({ stageIndex }) {
  const wc = stages[stageIndex].windowColor

  return (
    <svg
      viewBox="0 0 320 268"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ filter: 'drop-shadow(0 12px 24px rgba(44,58,32,0.14))' }}
    >
      <defs>
        <linearGradient id="mv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF5EC" />
          <stop offset="100%" stopColor="#F0EBF7" />
        </linearGradient>
        <linearGradient id="mv-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DDD0B0" />
          <stop offset="100%" stopColor="#C8BA98" />
        </linearGradient>
      </defs>
      <rect width="320" height="268" fill="url(#mv-sky)" />
      <polygon points="160,28 248,128 72,128" fill="#C8B8A0" opacity="0.28" />
      <polygon points="160,36 218,128 102,128" fill="#D8C8B0" opacity="0.18" />
      <polygon points="160,28 172,50 148,50" fill="white" opacity="0.55" />
      <rect x="0" y="212" width="320" height="56" fill="url(#mv-ground)" />
      <rect x="0" y="212" width="320" height="5" fill="#C0B090" />
      {[58, 70, 80, 242, 254, 264].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="220" x2={x} y2="212" stroke="#7A8060" strokeWidth="1.5" />
          <ellipse cx={x} cy="212" rx="5" ry="9" fill="#9B89C4" opacity="0.65" />
        </g>
      ))}
      <rect x="80" y="128" width="160" height="88" fill="#D4C0A0" />
      <line x1="80" y1="148" x2="240" y2="148" stroke="#C0AC88" strokeWidth="0.8" />
      <line x1="80" y1="168" x2="240" y2="168" stroke="#C0AC88" strokeWidth="0.8" />
      <line x1="80" y1="188" x2="240" y2="188" stroke="#C0AC88" strokeWidth="0.8" />
      {[106, 140, 180, 214].map((x, i) => (
        <line key={i} x1={x} y1="128" x2={x} y2="148" stroke="#C0AC88" strokeWidth="0.6" />
      ))}
      {[122, 198].map((x, i) => (
        <line key={i} x1={x} y1="168" x2={x} y2="188" stroke="#C0AC88" strokeWidth="0.6" />
      ))}
      <rect x="194" y="78" width="16" height="44" fill="#C4B09A" />
      <rect x="191" y="76" width="22" height="7" fill="#B0A080" rx="1" />
      <polygon points="66,132 160,65 254,132" fill="#9A6B45" />
      <polygon points="66,132 160,65 254,132" fill="#000" opacity="0.12" />
      <polyline points="66,132 160,65 254,132" fill="none" stroke="#7A4428" strokeWidth="2" />
      <rect x="88" y="142" width="9" height="46" fill="#7A8060" opacity="0.55" rx="1" />
      <rect x="97" y="142" width="52" height="46" fill="#8B7050" rx="2" />
      <rect x="101" y="146" width="44" height="38" rx="1" fill={wc} style={{ transition: 'fill 1s ease' }} />
      <line x1="123" y1="146" x2="123" y2="184" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <line x1="101" y1="165" x2="145" y2="165" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <rect x="152" y="142" width="9" height="46" fill="#7A8060" opacity="0.55" rx="1" />
      <rect x="171" y="142" width="9" height="46" fill="#7A8060" opacity="0.55" rx="1" />
      <rect x="180" y="142" width="52" height="46" fill="#8B7050" rx="2" />
      <rect x="184" y="146" width="44" height="38" rx="1" fill={wc} style={{ transition: 'fill 1s ease' }} />
      <line x1="206" y1="146" x2="206" y2="184" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <line x1="184" y1="165" x2="228" y2="165" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <rect x="235" y="142" width="9" height="46" fill="#7A8060" opacity="0.55" rx="1" />
      <rect x="139" y="184" width="42" height="36" fill="#7A5838" rx="3 3 0 0" />
      <rect x="143" y="188" width="14" height="11" fill="none" stroke="#5A3A1A" strokeWidth="1" rx="1" />
      <rect x="163" y="188" width="14" height="11" fill="none" stroke="#5A3A1A" strokeWidth="1" rx="1" />
      <rect x="143" y="203" width="14" height="11" fill="none" stroke="#5A3A1A" strokeWidth="1" rx="1" />
      <rect x="163" y="203" width="14" height="11" fill="none" stroke="#5A3A1A" strokeWidth="1" rx="1" />
      <circle cx="174" cy="203" r="3" fill="#C4A060" />
      <path d="M139,184 Q160,168 181,184" fill="none" stroke="#9A6840" strokeWidth="1.5" />
      {stageIndex === 1 && (
        <g>
          <circle cx="160" cy="96" r="22" fill="#7D8CFF" opacity="0.1">
            <animate attributeName="r" values="18;30;18" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.01;0.1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="147" y="112" fontSize="24" style={{ userSelect: 'none' }}>📷</text>
        </g>
      )}
      {stageIndex === 2 && <text x="236" y="226" fontSize="30" style={{ userSelect: 'none' }}>🧳</text>}
      {stageIndex === 3 && <text x="34" y="226" fontSize="30" style={{ userSelect: 'none' }}>🧹</text>}
      {stageIndex === 4 && (
        <g>
          <text x="254" y="178" fontSize="26" style={{ userSelect: 'none' }}>📱</text>
          <circle cx="277" cy="154" r="5" fill="#F26122">
            <animate attributeName="r" values="4;7;4" dur="1.1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.5;1" dur="1.1s" repeatCount="indefinite" />
          </circle>
        </g>
      )}
      {stageIndex === 5 && (
        <g>
          <circle cx="160" cy="44" r="20" fill="#4CAF50" />
          <path d="M150,44 L157,51 L172,37" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )}
    </svg>
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

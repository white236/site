import { useRef, useState, useEffect, useCallback } from 'react'

const stages = [
  {
    number: '01',
    label: 'Maison vide',
    desc: "Votre logement est libre, calme, en attente. Personne pour s'en occuper — jusqu'ici.",
  },
  {
    number: '02',
    label: 'Photos prises',
    desc: "On passe faire les photos. Lumière naturelle, chaque pièce mise en valeur pour que l'annonce donne envie.",
  },
  {
    number: '03',
    label: 'Les voyageurs arrivent',
    desc: "Les réservations tombent. J'accueille les voyageurs, je gère les messages et le check-in en personne.",
  },
  {
    number: '04',
    label: 'Le ménage passe',
    desc: "Après chaque séjour, l'équipe intervient. Je vérifie moi-même et je documente l'état du logement.",
  },
  {
    number: '05',
    label: 'Vous recevez un virement',
    desc: "Les revenus vont directement sur votre compte. Je vous envoie un résumé mensuel. Notre commission est prélevée séparément.",
  },
  {
    number: '06',
    label: 'Prête pour le suivant',
    desc: "La maison brille, l'annonce est à jour, le prochain séjour attend. Et ça recommence — sans que vous ayez à lever le petit doigt.",
  },
]

/* ─── SVG House ──────────────────────────────────────────────── */
function HouseSVG({ stage }) {
  const winColor  = stage === 0 ? '#5B7BA8' : '#FFF5C0'
  const winStroke = stage === 0 ? '#4A6090' : '#D4B040'

  return (
    <svg
      viewBox="0 0 400 310"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[380px] drop-shadow-xl"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mvSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F0E8D8" />
          <stop offset="100%" stopColor="#E4D4B8" />
        </linearGradient>
        <radialGradient id="mvGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F6D779" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F6D779" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="310" fill="url(#mvSky)" />

      {/* Ventoux silhouette */}
      <path
        d="M0 195 L60 175 L110 158 L155 145 L185 135 L200 108 L205 100 L210 108 L240 133 L278 148 L330 168 L385 185 L400 190 L400 310 L0 310 Z"
        fill="#CBBFA8"
        opacity="0.55"
      />
      {/* Snow cap */}
      <path d="M198 112 L205 100 L212 112 L208 117 L205 110 L202 117 Z" fill="white" opacity="0.75" />

      {/* Ground */}
      <rect x="0" y="260" width="400" height="50" fill="#BCA882" />

      {/* Lavender bushes */}
      <ellipse cx="92"  cy="261" rx="26" ry="11" fill="#9E7EC8" opacity="0.75" />
      <ellipse cx="100" cy="256" rx="18" ry="9"  fill="#B090D8" opacity="0.65" />
      <ellipse cx="308" cy="261" rx="24" ry="10" fill="#9E7EC8" opacity="0.75" />
      <ellipse cx="316" cy="257" rx="17" ry="8"  fill="#B090D8" opacity="0.65" />

      {/* House shadow */}
      <rect x="138" y="168" width="154" height="96" rx="3" fill="#A88850" opacity="0.2" transform="translate(5,5)" />

      {/* House body */}
      <rect x="136" y="164" width="152" height="96" rx="3" fill="#EAD0A4" />
      {[185,200,215,230,245].map(y => (
        <line key={y} x1="136" y1={y} x2="288" y2={y} stroke="#D4BC8C" strokeWidth="0.6" opacity="0.55" />
      ))}

      {/* Roof */}
      <polygon points="115,167 212,100 309,167" fill="#C96B48" />
      <polygon points="115,167 126,167 223,103 212,100" fill="#A85535" />

      {/* Chimney */}
      <rect x="250" y="118" width="20" height="38" fill="#C96B48" />
      <rect x="246" y="115" width="28" height="7" rx="2" fill="#A85535" />

      {/* Windows — always render, color changes with stage */}
      {/* Left window glow */}
      {stage > 0 && <ellipse cx="175" cy="205" rx="30" ry="22" fill="#FFF5C0" opacity="0.2" />}
      <rect   x="151" y="182" width="46" height="42" rx="3" fill={winColor} />
      <rect   x="139" y="182" width="14" height="42" rx="2" fill="#4A6890" />
      <rect   x="197" y="182" width="14" height="42" rx="2" fill="#4A6890" />
      <line  x1="174" y1="182" x2="174" y2="224" stroke={winStroke} strokeWidth="1.5" />
      <line  x1="151" y1="203" x2="197" y2="203" stroke={winStroke} strokeWidth="1.5" />

      {/* Right window */}
      {stage > 0 && <ellipse cx="237" cy="205" rx="30" ry="22" fill="#FFF5C0" opacity="0.2" />}
      <rect   x="215" y="182" width="46" height="42" rx="3" fill={winColor} />
      <rect   x="203" y="182" width="14" height="42" rx="2" fill="#4A6890" />
      <rect   x="261" y="182" width="14" height="42" rx="2" fill="#4A6890" />
      <line  x1="238" y1="182" x2="238" y2="224" stroke={winStroke} strokeWidth="1.5" />
      <line  x1="215" y1="203" x2="261" y2="203" stroke={winStroke} strokeWidth="1.5" />

      {/* Door */}
      <path d="M186 260 L186 218 Q186 210 196 210 Q206 210 206 218 L206 260 Z" fill="#8B5E30" />
      <circle cx="203" cy="238" r="3.5" fill="#D4A86A" />

      {/* ── Stage overlays ── */}

      {/* 0: night / empty */}
      <g style={{ opacity: stage === 0 ? 1 : 0, transition: 'opacity .6s' }}>
        <circle cx="330" cy="45" r="22" fill="#F8E870" opacity="0.6" />
        <circle cx="342" cy="38" r="22" fill="#E4D4B4" opacity="0.95" />
        {[[60,55],[90,35],[155,50],[270,62],[360,80],[42,80]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%2===0?2:1.5} fill="white" opacity="0.75" />
        ))}
      </g>

      {/* 1: camera + flash */}
      <g style={{ opacity: stage === 1 ? 1 : 0, transition: 'opacity .6s' }}>
        <rect x="296" y="55" width="60" height="42" rx="8" fill="#2C3A20" />
        <circle cx="326" cy="76" r="15" fill="#3F5230" />
        <circle cx="326" cy="76" r="10" fill="#2C3A20" />
        <circle cx="326" cy="76" r="5.5" fill="#5B7BA8" opacity="0.9" />
        <circle cx="323" cy="73" r="2" fill="white" opacity="0.45" />
        <rect x="300" y="49" width="14" height="9"  rx="3" fill="#2C3A20" />
        <rect x="346" y="58" width="10" height="7"  rx="2" fill="#3F5230" />
        {/* Flash lines */}
        <line x1="318" y1="42" x2="312" y2="26" stroke="#FFF8DC" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <line x1="326" y1="40" x2="326" y2="24" stroke="#FFF8DC" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <line x1="334" y1="42" x2="340" y2="26" stroke="#FFF8DC" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      </g>

      {/* 2: guests arriving */}
      <g style={{ opacity: stage === 2 ? 1 : 0, transition: 'opacity .6s' }}>
        {/* Person A */}
        <circle cx="48"  cy="222" r="14" fill="#D4A86A" />
        <rect   x="36"  y="236" width="24" height="26" rx="5" fill="#5B7BA8" />
        <line  x1="48"  y1="251" x2="40" y2="268" stroke="#5B7BA8" strokeWidth="3.5" strokeLinecap="round" />
        <line  x1="48"  y1="251" x2="56" y2="268" stroke="#5B7BA8" strokeWidth="3.5" strokeLinecap="round" />
        {/* Bag */}
        <rect   x="60"  y="248" width="18" height="22" rx="3" fill="#C96B48" />
        <rect   x="64"  y="245" width="10" height="5"  rx="2" fill="#A85535" />
        <line  x1="78"  y1="248" x2="78" y2="270" stroke="#8B4828" strokeWidth="2" />
        {/* Person B */}
        <circle cx="98"  cy="224" r="12" fill="#C96B48" />
        <rect   x="88"  y="236" width="20" height="24" rx="5" fill="#8E9B72" />
        <line  x1="98"  y1="249" x2="91" y2="266" stroke="#8E9B72" strokeWidth="3"   strokeLinecap="round" />
        <line  x1="98"  y1="249" x2="105" y2="266" stroke="#8E9B72" strokeWidth="3" strokeLinecap="round" />
        {/* Dashed arrow to door */}
        <path d="M116 254 Q153 254 182 254" stroke="#7D8CFF" strokeWidth="1.8" strokeDasharray="5 4" fill="none" />
        <polygon points="182,251 190,254 182,257" fill="#7D8CFF" />
      </g>

      {/* 3: cleaning */}
      <g style={{ opacity: stage === 3 ? 1 : 0, transition: 'opacity .6s' }}>
        {/* Person */}
        <circle cx="322" cy="218" r="13" fill="#D4A86A" />
        <rect   x="312" y="231" width="20" height="27" rx="5" fill="#9B7DC8" />
        {/* Mop stick */}
        <line  x1="334" y1="226" x2="303" y2="268" stroke="#8B6035" strokeWidth="3.5" strokeLinecap="round" />
        {/* Mop head */}
        <ellipse cx="297" cy="271" rx="16" ry="6" fill="#C4B090" transform="rotate(-42 297 271)" />
        <line x1="290" y1="276" x2="304" y2="266" stroke="#A89060" strokeWidth="1.2" opacity="0.7" />
        <line x1="292" y1="279" x2="306" y2="269" stroke="#A89060" strokeWidth="1.2" opacity="0.7" />
        {/* Sparkles */}
        {[[152,272],[180,268],[218,271]].map(([x,y], i) => (
          <path key={i} d={`M${x} ${y} L${x+2} ${y-6} L${x+4} ${y} L${x+10} ${y+2} L${x+4} ${y+4} L${x+2} ${y+10} L${x} ${y+4} L${x-6} ${y+2} Z`} fill="#7D8CFF" opacity="0.75" />
        ))}
      </g>

      {/* 4: notification */}
      <g style={{ opacity: stage === 4 ? 1 : 0, transition: 'opacity .6s' }}>
        {/* Phone */}
        <rect x="176" y="30" width="30" height="54" rx="6" fill="#2C3A20" />
        <rect x="179" y="34" width="24" height="44" rx="4" fill="#3F5230" />
        <circle cx="191" cy="79" r="3.5" fill="#7B8CA8" />
        {/* Bubble */}
        <rect x="195" y="16" width="80" height="36" rx="9" fill="#7D8CFF" />
        <polygon points="200,52 213,52 206,63" fill="#7D8CFF" />
        <text x="202" y="31" fontSize="9.5" fill="white" fontFamily="Nunito,sans-serif" fontWeight="700">Virement reçu</text>
        <text x="202" y="44" fontSize="9"   fill="rgba(255,255,255,.85)" fontFamily="sans-serif">+ 960 €</text>
        {/* Glow */}
        <circle cx="191" cy="57" r="22" fill="#7D8CFF" opacity="0.08" />
      </g>

      {/* 5: ready / stars */}
      <g style={{ opacity: stage === 5 ? 1 : 0, transition: 'opacity .6s' }}>
        {/* Warm glow */}
        <ellipse cx="212" cy="210" rx="110" ry="58" fill="url(#mvGlow)" />
        {/* Check circle */}
        <circle cx="212" cy="65" r="24" fill="#2C3A20" />
        <path d="M200 65 L210 75 L227 55" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Stars */}
        {[
          [80, 82, 1.0],
          [326, 88, 0.95],
          [46, 155, 0.7],
          [362, 148, 0.7],
          [138, 50, 0.65],
          [288, 52, 0.65],
        ].map(([x, y, op], i) => (
          <path
            key={i}
            d={`M${x} ${y} L${x+2.5} ${y-7} L${x+5} ${y} L${x+12} ${y+2.5} L${x+5} ${y+5} L${x+2.5} ${y+12} L${x} ${y+5} L${x-7} ${y+2.5} Z`}
            fill="#F6D779"
            opacity={op}
          />
        ))}
      </g>
    </svg>
  )
}

/* ─── Stage panel (right column) ────────────────────────────── */
function StagePanel({ number, label, desc, index, onActivate }) {
  const ref = useRef(null)
  const cbRef = useRef(onActivate)
  useEffect(() => { cbRef.current = onActivate })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) cbRef.current() },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="min-h-[65vh] flex items-center py-16 px-6 sm:px-10 lg:px-14">
      <div>
        <span className="inline-block text-brand-orange font-heading font-black text-xs tracking-[0.25em] uppercase mb-4">
          {number} · 06
        </span>
        <h3 className="font-heading font-black text-3xl sm:text-4xl text-noir leading-tight mb-5 text-balance">
          {label}
        </h3>
        <p className="font-body text-lg text-noir/55 leading-relaxed max-w-md">
          {desc}
        </p>
        {/* Dot row */}
        <div className="flex gap-1.5 mt-8">
          {stages.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-400 ${
                i === index
                  ? 'w-6 h-[6px] bg-brand-orange'
                  : i < index
                  ? 'w-[6px] h-[6px] bg-brand-orange/35'
                  : 'w-[6px] h-[6px] bg-noir/12'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────────── */
export default function MaisonVivante() {
  const [stage, setStage] = useState(0)

  return (
    <section className="bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/[0.04] rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* ── Desktop: sticky left + scrolling right ── */}
      <div className="hidden lg:flex relative">

        {/* Sticky house panel */}
        <div className="sticky top-0 w-[46%] h-screen flex flex-col items-center justify-center px-10 flex-shrink-0">
          {/* Section header above house */}
          <div className="text-center mb-8">
            <span className="inline-block bg-noir text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-3 tracking-wide">
              La maison vivante
            </span>
            <h2 className="font-heading font-black text-2xl text-noir leading-snug">
              Votre logement,{' '}
              <span className="text-brand-orange">géré de A à Z.</span>
            </h2>
          </div>
          <HouseSVG stage={stage} />
          {/* Stage label below house */}
          <div className="mt-6 text-center h-6">
            <span key={stage} className="count-flip-in font-heading font-bold text-sm text-noir/45">
              {stages[stage].label}
            </span>
          </div>
        </div>

        {/* Scrollable stages */}
        <div className="flex-1 border-l border-cream-deeper/60">
          {stages.map((s, i) => (
            <StagePanel
              key={i}
              {...s}
              index={i}
              onActivate={() => setStage(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile: header + house + list ── */}
      <div className="lg:hidden">
        <div className="px-4 pt-16 pb-8 text-center">
          <span className="inline-block bg-noir text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide">
            La maison vivante
          </span>
          <h2 className="font-heading font-black text-3xl text-noir leading-snug mb-2">
            Votre logement,{' '}
            <span className="text-brand-orange">géré de A à Z.</span>
          </h2>
        </div>

        {/* Static house at stage 5 (ready) on mobile */}
        <div className="px-6 pb-10">
          <HouseSVG stage={5} />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-cream-deeper" />
          {stages.map((s, i) => (
            <div key={i} className="relative pl-16 pr-6 pb-10">
              <div className={`absolute left-5 top-1 w-6 h-6 rounded-full flex items-center justify-center font-heading font-black text-[10px] z-10 ${
                i === stages.length - 1 ? 'bg-brand-orange text-white' : 'bg-white border-2 border-cream-deeper text-noir/40'
              }`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="font-heading font-black text-brand-orange text-[10px] tracking-[0.2em] uppercase">{s.number} · 06</span>
              <h3 className="font-heading font-bold text-noir text-lg mt-0.5 mb-2">{s.label}</h3>
              <p className="text-noir/50 font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Provençal elements drifting across the full viewport, carried by the Mistral.
// Fixed overlay — single instance in App.jsx.

const LavenderSVG = ({ size }) => (
  <svg
    width={size}
    height={Math.round(size * 2.5)}
    viewBox="0 0 22 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <line x1="11" y1="54" x2="11" y2="14" stroke="#8E9B72" strokeWidth="1.6" strokeLinecap="round" />
    {/* Lower branches */}
    <line x1="11" y1="42" x2="4"  y2="32" stroke="#8E9B72" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11" y1="42" x2="18" y2="32" stroke="#8E9B72" strokeWidth="1.2" strokeLinecap="round" />
    {/* Upper branches */}
    <line x1="11" y1="29" x2="4"  y2="20" stroke="#8E9B72" strokeWidth="1.1" strokeLinecap="round" />
    <line x1="11" y1="29" x2="18" y2="20" stroke="#8E9B72" strokeWidth="1.1" strokeLinecap="round" />
    {/* Tip flowers */}
    <ellipse cx="11" cy="12" rx="2.6" ry="4.2" fill="#A8B0FF" />
    <ellipse cx="11" cy="7"  rx="2.1" ry="3.4" fill="#7D8CFF" />
    <ellipse cx="11" cy="3"  rx="1.6" ry="2.6" fill="#8B9AFF" />
    {/* Lower flower pairs */}
    <ellipse cx="4"  cy="30" rx="2.1" ry="3.2" fill="#A8B0FF" opacity="0.88" />
    <ellipse cx="18" cy="30" rx="2.1" ry="3.2" fill="#A8B0FF" opacity="0.88" />
    {/* Upper flower pairs */}
    <ellipse cx="4"  cy="18" rx="1.9" ry="3"   fill="#7D8CFF" opacity="0.82" />
    <ellipse cx="18" cy="18" rx="1.9" ry="3"   fill="#7D8CFF" opacity="0.82" />
    {/* Tiny leaf nubs */}
    <ellipse cx="11" cy="20" rx="1"   ry="1.5" fill="#8E9B72" opacity="0.5" />
    <ellipse cx="11" cy="33" rx="1"   ry="1.5" fill="#8E9B72" opacity="0.4" />
  </svg>
)

const PetalSVG = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 5 petals — lavande */}
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#A8B0FF" opacity="0.92" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#A8B0FF" opacity="0.85" transform="rotate(72 12 12)" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#A8B0FF" opacity="0.85" transform="rotate(144 12 12)" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#A8B0FF" opacity="0.85" transform="rotate(216 12 12)" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#A8B0FF" opacity="0.85" transform="rotate(288 12 12)" />
    {/* Pollen centre */}
    <circle cx="12" cy="12" r="3"   fill="#E8DEBC" />
    <circle cx="12" cy="12" r="1.5" fill="#D4C49A" />
  </svg>
)

const RosePetalSVG = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 5 petals — rose pierre */}
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#D9A7A0" opacity="0.90" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#D9A7A0" opacity="0.82" transform="rotate(72 12 12)" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#D9A7A0" opacity="0.82" transform="rotate(144 12 12)" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#C08880" opacity="0.82" transform="rotate(216 12 12)" />
    <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill="#C08880" opacity="0.82" transform="rotate(288 12 12)" />
    {/* Pollen centre */}
    <circle cx="12" cy="12" r="3"   fill="#F0D8C8" />
    <circle cx="12" cy="12" r="1.5" fill="#DDB898" />
  </svg>
)

const LeafSVG = ({ size }) => (
  <svg
    width={size}
    height={Math.round(size * 0.9)}
    viewBox="0 0 34 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Vine leaf silhouette */}
    <path
      d="M17 2 C23 0 32 7 30 15 C28 22 23 27 17 29 C11 27 6 22 4 15 C2 7 11 0 17 2Z"
      fill="#8E9B72"
      opacity="0.68"
    />
    {/* Main vein */}
    <line x1="17" y1="4"  x2="17" y2="27" stroke="#5A6B40" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
    {/* Side veins */}
    <line x1="17" y1="10" x2="9"  y2="6"  stroke="#5A6B40" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
    <line x1="17" y1="10" x2="25" y2="6"  stroke="#5A6B40" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
    <line x1="17" y1="17" x2="8"  y2="14" stroke="#5A6B40" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    <line x1="17" y1="17" x2="26" y2="14" stroke="#5A6B40" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    <line x1="17" y1="22" x2="11" y2="20" stroke="#5A6B40" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
    <line x1="17" y1="22" x2="23" y2="20" stroke="#5A6B40" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
    {/* Petiole */}
    <line x1="17" y1="27" x2="17" y2="30" stroke="#8E9B72" strokeWidth="1"   strokeLinecap="round" opacity="0.5" />
  </svg>
)

// Each element: type, vertical position (% viewport height), animation delay (s),
// duration (s), size (px wide), opacity, drift direction, start/end rotation (deg), end Y offset (px)
const ELEMENTS = [
  // Mobile-visible (first 5)
  { type: 'lavender',   top: 10, delay: 0,  dur: 32, size: 44, op: 0.40, dir: 'right', rs: -14, re: 10,  ye: -55 },
  { type: 'petal',      top: 40, delay: 9,  dur: 24, size: 22, op: 0.52, dir: 'right', rs: 20,  re: 100, ye: -28 },
  { type: 'lavender',   top: 65, delay: 18, dur: 36, size: 36, op: 0.36, dir: 'left',  rs: 12,  re: -20, ye: 38  },
  { type: 'petal-rose', top: 78, delay: 5,  dur: 20, size: 17, op: 0.50, dir: 'right', rs: -50, re: 30,  ye: -20 },
  { type: 'leaf',       top: 52, delay: 26, dur: 28, size: 28, op: 0.38, dir: 'left',  rs: -10, re: -36, ye: 24  },
  // Desktop-only (last 5)
  { type: 'lavender',   top: 28, delay: 14, dur: 30, size: 40, op: 0.34, dir: 'right', rs: -6,  re: 16,  ye: -42 },
  { type: 'leaf',       top: 20, delay: 22, dur: 26, size: 24, op: 0.38, dir: 'left',  rs: 18,  re: -8,  ye: 20  },
  { type: 'petal-rose', top: 85, delay: 31, dur: 22, size: 20, op: 0.44, dir: 'left',  rs: 60,  re: 140, ye: 15  },
  { type: 'lavender',   top: 45, delay: 7,  dur: 34, size: 32, op: 0.30, dir: 'right', rs: -8,  re: 12,  ye: -38 },
  { type: 'petal',      top: 33, delay: 40, dur: 26, size: 18, op: 0.46, dir: 'left',  rs: -30, re: 80,  ye: -18 },
]

const SVG_MAP = { lavender: LavenderSVG, petal: PetalSVG, 'petal-rose': RosePetalSVG, leaf: LeafSVG }

export default function MistralParticles() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      {ELEMENTS.map((el, i) => {
        const Svg = SVG_MAP[el.type]
        const anim = el.dir === 'right' ? 'mistralRight' : 'mistralLeft'
        return (
          <div
            key={i}
            className={`mistral-el absolute${i >= 5 ? ' hidden sm:block' : ''}`}
            style={{
              top: `${el.top}vh`,
              left: 0,
              '--rs':  `${el.rs}deg`,
              '--re':  `${el.re}deg`,
              '--ye':  `${el.ye}px`,
              '--mop': el.op,
              animation: `${anim} ${el.dur}s linear ${el.delay}s infinite backwards`,
              willChange: 'transform, opacity',
            }}
          >
            <Svg size={el.size} />
          </div>
        )
      })}
    </div>
  )
}

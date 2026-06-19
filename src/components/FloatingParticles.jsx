// Particles: first 3 have mobile:true (show always), rest are desktop only
const PARTICLES = [
  { x: 5,  b: 8,  size: 13, op: 0.32, delay: 0,   dur: 13, dir: 'R', mobile: true  },
  { x: 22, b: 22, size: 7,  op: 0.22, delay: 2.8, dur: 10, dir: 'L', mobile: true  },
  { x: 42, b: 6,  size: 10, op: 0.28, delay: 5.5, dur: 15, dir: 'R', mobile: true  },
  { x: 57, b: 18, size: 12, op: 0.30, delay: 1.2, dur: 12, dir: 'L', mobile: false },
  { x: 68, b: 10, size: 8,  op: 0.20, delay: 3.8, dur: 11, dir: 'R', mobile: false },
  { x: 78, b: 28, size: 11, op: 0.27, delay: 7.2, dur: 16, dir: 'L', mobile: false },
  { x: 88, b: 12, size: 9,  op: 0.24, delay: 0.8, dur: 14, dir: 'R', mobile: false },
  { x: 96, b: 22, size: 6,  op: 0.18, delay: 4.6, dur: 9,  dir: 'L', mobile: false },
]

function Sprig({ size }) {
  return (
    <svg width={Math.round(size * 0.65)} height={size} viewBox="0 0 20 40" fill="none" aria-hidden="true">
      <line x1="10" y1="40" x2="10" y2="10" stroke="#8FA06B" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="30" x2="5"  y2="23" stroke="#8FA06B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="30" x2="15" y2="23" stroke="#8FA06B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="22" x2="6"  y2="15" stroke="#8FA06B" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10" y1="22" x2="14" y2="15" stroke="#8FA06B" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="10" cy="9"  rx="2.5" ry="4"   fill="#9BAFF2" />
      <ellipse cx="10" cy="4"  rx="2"   ry="3"   fill="#7B9DE4" />
      <ellipse cx="5"  cy="21" rx="2"   ry="3"   fill="#9BAFF2" />
      <ellipse cx="15" cy="21" rx="2"   ry="3"   fill="#9BAFF2" />
      <ellipse cx="6"  cy="13" rx="1.8" ry="2.6" fill="#7B9DE4" />
      <ellipse cx="14" cy="13" rx="1.8" ry="2.6" fill="#7B9DE4" />
    </svg>
  )
}

function Petal({ size }) {
  return (
    <svg width={size} height={Math.round(size * 1.5)} viewBox="0 0 10 16" fill="none" aria-hidden="true">
      <ellipse cx="5" cy="8" rx="4" ry="7.5" fill="#A8C2EE" opacity="0.85" />
      <ellipse cx="5" cy="8" rx="2" ry="4"   fill="#7B9DE4" opacity="0.55" />
    </svg>
  )
}

function Dot({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="5" fill="#9BAFF2" />
    </svg>
  )
}

const SHAPES = [Sprig, Petal, Dot]

export default function FloatingParticles({ seed = 0 }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => {
        const Shape = SHAPES[i % 3]
        const delay = ((p.delay + seed) % p.dur).toFixed(1)
        return (
          <div
            key={i}
            className={`particle${p.mobile ? '' : ' hidden sm:block'}`}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              bottom: `${p.b}%`,
              animation: `floatParticle${p.dir} ${p.dur}s ease-in-out ${delay}s infinite`,
              willChange: 'transform, opacity',
              '--p-op': p.op,
            }}
          >
            <Shape size={p.size} />
          </div>
        )
      })}
    </div>
  )
}

// A row of small vine blades that sway gently at the bottom of a section.
// The parent section must have position:relative overflow:hidden.

const BLADES = [
  { x: 5,  h: 24, cls: 'lavender-sway',      delay: 0    },
  { x: 12, h: 18, cls: 'lavender-sway-alt',  delay: 0.5  },
  { x: 20, h: 26, cls: 'lavender-sway-slow', delay: 0.2  },
  { x: 32, h: 20, cls: 'lavender-sway',      delay: 0.9  },
  { x: 45, h: 22, cls: 'lavender-sway-alt',  delay: 0.4  },
  { x: 55, h: 19, cls: 'lavender-sway-slow', delay: 1.1  },
  { x: 65, h: 25, cls: 'lavender-sway',      delay: 0.7  },
  { x: 75, h: 17, cls: 'lavender-sway-alt',  delay: 0.15 },
  { x: 84, h: 23, cls: 'lavender-sway-slow', delay: 0.6  },
  { x: 93, h: 20, cls: 'lavender-sway',      delay: 1.3  },
]

const VineBlade = ({ h }) => (
  <svg width="9" height={h} viewBox={`0 0 9 ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Curved stem */}
    <path
      d={`M4.5 ${h} C3.5 ${Math.round(h * 0.7)} 5.5 ${Math.round(h * 0.45)} 4.5 2`}
      stroke="#8FA06B" strokeWidth="1.3" strokeLinecap="round" fill="none"
    />
    {/* Left leaf */}
    <path
      d={`M4.5 ${Math.round(h * 0.55)} C1.5 ${Math.round(h * 0.44)} 1 ${Math.round(h * 0.33)} 3.5 ${Math.round(h * 0.3)} C4.2 ${Math.round(h * 0.38)} 4.5 ${Math.round(h * 0.5)} 4.5 ${Math.round(h * 0.55)}Z`}
      fill="#8FA06B" opacity="0.62"
    />
    {/* Right leaf */}
    <path
      d={`M4.5 ${Math.round(h * 0.35)} C7.5 ${Math.round(h * 0.24)} 8 ${Math.round(h * 0.13)} 5.5 ${Math.round(h * 0.1)} C4.8 ${Math.round(h * 0.18)} 4.5 ${Math.round(h * 0.3)} 4.5 ${Math.round(h * 0.35)}Z`}
      fill="#8FA06B" opacity="0.52"
    />
  </svg>
)

export default function WindyVines({ className = '' }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-8 pointer-events-none hidden sm:block ${className}`}
      aria-hidden="true"
    >
      {BLADES.map((b, i) => (
        <div
          key={i}
          className={`absolute bottom-0 ${b.cls}`}
          style={{ left: `${b.x}%`, animationDelay: `${b.delay}s` }}
        >
          <VineBlade h={b.h} />
        </div>
      ))}
    </div>
  )
}

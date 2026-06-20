// Scroll-triggered petal burst. Fixed overlay, no re-renders on scroll (uses refs).
import { useEffect, useRef } from 'react'

const POOL_SIZE = 7

// Alternating lavande / rose petals
const PETAL_COLORS = [
  { fill: '#A8B0FF', center: '#E8DEBC' },
  { fill: '#D9A7A0', center: '#F0D8C8' },
  { fill: '#7D8CFF', center: '#E8DEBC' },
  { fill: '#D9A7A0', center: '#F0D8C8' },
  { fill: '#A8B0FF', center: '#E8DEBC' },
  { fill: '#C08880', center: '#F0D8C8' },
  { fill: '#7D8CFF', center: '#E8DEBC' },
]

function PetalSVG({ fill, center }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill={fill} opacity="0.92" />
      <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill={fill} opacity="0.85" transform="rotate(72 12 12)" />
      <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill={fill} opacity="0.85" transform="rotate(144 12 12)" />
      <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill={fill} opacity="0.85" transform="rotate(216 12 12)" />
      <ellipse cx="12" cy="4.5" rx="2.8" ry="5"   fill={fill} opacity="0.85" transform="rotate(288 12 12)" />
      <circle  cx="12" cy="12" r="2.5"             fill={center} />
    </svg>
  )
}

export default function ScrollPetals() {
  const poolRef = useRef([])
  const activeRef = useRef(new Set())
  const lastScrollRef = useRef(0)
  const lastSpawnRef = useRef(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const spawnPetal = () => {
      const now = Date.now()
      if (now - lastSpawnRef.current < 550) return
      lastSpawnRef.current = now

      const available = [...Array(POOL_SIZE).keys()].filter(i => !activeRef.current.has(i))
      if (!available.length) return

      const idx = available[Math.floor(Math.random() * available.length)]
      const el = poolRef.current[idx]
      if (!el) return

      activeRef.current.add(idx)

      const x    = 8 + Math.random() * 84
      const y    = 15 + Math.random() * 65
      const size = 13 + Math.random() * 11
      const dur  = 2.4 + Math.random() * 2
      const dx   = (Math.random() - 0.5) * 70
      const rot  = (Math.random() - 0.5) * 200

      el.style.cssText = `
        left: ${x}vw;
        top: ${y}vh;
        width: ${size}px;
        height: ${size}px;
        --pdx: ${dx}px;
        --prot: ${rot}deg;
        animation: scrollPetal ${dur}s ease-out forwards;
        opacity: 0;
      `

      const cleanup = setTimeout(() => {
        if (el) el.style.cssText = 'opacity:0;animation:none;'
        activeRef.current.delete(idx)
      }, dur * 1000 + 100)

      return () => clearTimeout(cleanup)
    }

    const handleScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollRef.current)
      lastScrollRef.current = window.scrollY
      if (delta > 25) spawnPetal()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 4 }}
      aria-hidden="true"
    >
      {PETAL_COLORS.map((colors, i) => (
        <div
          key={i}
          ref={el => { poolRef.current[i] = el }}
          className="absolute"
          style={{ opacity: 0, animation: 'none' }}
        >
          <PetalSVG fill={colors.fill} center={colors.center} />
        </div>
      ))}
    </div>
  )
}

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const raf = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      const LERP = 0.11
      current.current.x += (target.current.x - current.current.x) * LERP
      current.current.y += (target.current.y - current.current.y) * LERP
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${current.current.x - 18}px, ${current.current.y - 18}px)`
      }
      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-50 hidden sm:block"
      style={{
        width: 36,
        height: 36,
        willChange: 'transform',
        borderRadius: '50%',
        background: 'rgba(123, 157, 228, 0.18)',
        filter: 'blur(8px)',
      }}
      aria-hidden="true"
    />
  )
}

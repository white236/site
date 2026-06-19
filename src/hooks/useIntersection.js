import { useEffect, useRef, useState } from 'react'

export function useIntersection(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, ...options }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export function useRevealChildren(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.reveal')
            children.forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])
}

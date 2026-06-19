import { useEffect, useState, type RefObject } from 'react'

export function useHeroInView(heroRef: RefObject<HTMLElement | null>) {
  const [heroInView, setHeroInView] = useState(true)

  useEffect(() => {
    const element = heroRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [heroRef])

  return heroInView
}

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    let frame = 0
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`
        dotRef.current.style.top = `${mouse.current.y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }

      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid/40"
      />
    </>
  )
}

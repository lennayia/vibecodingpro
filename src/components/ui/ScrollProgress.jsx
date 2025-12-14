import { useState, useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef(null)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous frame if still pending
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Schedule update for next frame (throttle to 60fps)
      rafRef.current = requestAnimationFrame(() => {
        const currentScroll = window.scrollY

        // Only update if scroll changed significantly (optimization)
        if (Math.abs(currentScroll - lastScrollRef.current) > 5) {
          const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const progress = (currentScroll / totalHeight) * 100
          setScrollProgress(progress)
          lastScrollRef.current = currentScroll
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999] pointer-events-none">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--color-accent-dark)',
          boxShadow: '0 0 10px rgba(13, 221, 13, 0.5)'
        }}
      />
    </div>
  )
}

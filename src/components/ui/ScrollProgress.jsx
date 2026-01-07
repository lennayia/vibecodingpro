import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const rafRef = useRef(null)
  const lastScrollRef = useRef(0)
  const totalHeightCache = useRef(0)

  useEffect(() => {
    // Cache total height - prevents forced reflow on every scroll
    const updateTotalHeight = () => {
      totalHeightCache.current = document.documentElement.scrollHeight - document.documentElement.clientHeight
    }

    // Initial height
    updateTotalHeight()

    // Update cached height on resize (debounced)
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(updateTotalHeight, 200)
    }
    window.addEventListener('resize', handleResize, { passive: true })

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
          const progress = (currentScroll / totalHeightCache.current) * 100
          setScrollProgress(progress)
          lastScrollRef.current = currentScroll
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return createPortal(
    <div
      style={{
        // Fixed positioning required for portal
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        zIndex: 9999,
        pointerEvents: 'none',
        transform: 'none',
      }}
    >
      <div
        className="h-full bg-accent shadow-[0_0_10px_rgba(0,255,136,0.5)] transition-[width] duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`, // Dynamic width based on scroll
        }}
      />
    </div>,
    document.body
  )
}

export default ScrollProgress

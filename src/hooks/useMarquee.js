import { useEffect, useRef } from 'react'

/**
 * Custom hook for smooth marquee animation using requestAnimationFrame
 * More stable than CSS animations for text scrolling
 */
export function useMarquee(speed = 1) {
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const positionRef = useRef(null)
  const containerWidthRef = useRef(0)
  const contentWidthRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Calculate widths ONCE to avoid reflow in animation loop
    const parent = container.parentElement
    if (parent) {
      containerWidthRef.current = parent.offsetWidth
    }
    contentWidthRef.current = container.offsetWidth

    // Start from right side of container
    if (positionRef.current === null) {
      positionRef.current = containerWidthRef.current
    }

    const animate = () => {
      positionRef.current -= speed

      // Reset to right when completely off left side
      if (positionRef.current < -contentWidthRef.current) {
        positionRef.current = containerWidthRef.current
      }

      // Use transform for GPU acceleration
      container.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed])

  return containerRef
}

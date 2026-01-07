import { useRef, useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import '../../styles/button.css'

// Throttle utility - limits function calls to once per interval
function throttle(func, limit) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Performance: Animation transition outside component
const buttonTransition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1
}

// Performance: Constants for magnetic effect
const MAX_DISTANCE = 150
const MAX_MOVE = 20
const THROTTLE_MS = 16 // 60 FPS

function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const baseClass = "btn"
  const variantClass = variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : ""
  const sizeClass = size === "lg" ? "btn-lg" : ""

  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRectCache = useRef({ centerX: 0, centerY: 0 })

  useEffect(() => {
    if (window.innerWidth < 768) return // Disable on mobile

    const button = buttonRef.current
    if (!button) return

    // Cache button position - prevents forced reflow on every mousemove
    const updateButtonRect = () => {
      const rect = button.getBoundingClientRect()
      buttonRectCache.current = {
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2
      }
    }

    // Initial rect
    updateButtonRect()

    // Update cached rect on scroll/resize (debounced)
    const handleScrollResize = throttle(updateButtonRect, 200)
    window.addEventListener('scroll', handleScrollResize, { passive: true })
    window.addEventListener('resize', handleScrollResize, { passive: true })

    const handleMouseMove = (e) => {
      const { centerX, centerY } = buttonRectCache.current

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < MAX_DISTANCE) {
        const strength = 1 - distance / MAX_DISTANCE
        const moveX = (distanceX / distance) * MAX_MOVE * strength
        const moveY = (distanceY / distance) * MAX_MOVE * strength
        setPosition({ x: moveX, y: moveY })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    // Throttle to max 60 FPS
    const throttledMouseMove = throttle(handleMouseMove, THROTTLE_MS)

    document.addEventListener('mousemove', throttledMouseMove)

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove)
      window.removeEventListener('scroll', handleScrollResize)
      window.removeEventListener('resize', handleScrollResize)
    }
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      {...props}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      style={{ ...props.style, position: 'relative' }}
      animate={{ x: position.x, y: position.y }}
      transition={buttonTransition}
    >
      {children}
    </motion.button>
  )
}

export default memo(Button)

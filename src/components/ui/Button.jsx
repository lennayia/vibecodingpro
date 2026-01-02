import { useRef, useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'

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

  useEffect(() => {
    if (window.innerWidth < 768) return // Disable on mobile

    const handleMouseMove = (e) => {
      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const buttonCenterX = rect.left + rect.width / 2
      const buttonCenterY = rect.top + rect.height / 2

      const distanceX = e.clientX - buttonCenterX
      const distanceY = e.clientY - buttonCenterY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      const maxDistance = 150
      const maxMove = 20

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance
        const moveX = (distanceX / distance) * maxMove * strength
        const moveY = (distanceY / distance) * maxMove * strength
        setPosition({ x: moveX, y: moveY })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    // Throttle to max 60 FPS (16ms interval)
    const throttledMouseMove = throttle(handleMouseMove, 16)

    document.addEventListener('mousemove', throttledMouseMove)
    return () => document.removeEventListener('mousemove', throttledMouseMove)
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      {...props}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      style={{ ...props.style, position: 'relative' }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  )
}

export default memo(Button)

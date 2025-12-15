import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) {
  const baseClass = "btn"
  const variantClass = variant === "primary" ? "btn-primary" : ""
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

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      style={{ padding: '0.875rem 1.75rem' }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

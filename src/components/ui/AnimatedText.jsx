import { memo, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

// Memoized animated counter component
export const AnimatedCounter = memo(function AnimatedCounter({ from, to, duration = 2, className = '' }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, { duration, delay: 0.5 })
    return () => controls.stop()
  }, [count, to, duration])

  return <motion.span className={className}>{rounded}</motion.span>
})

// Memoized animated stat value component with number parsing
export const AnimatedStatValue = memo(function AnimatedStatValue({ value, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    // Parse the value to extract number
    const match = value.match(/(\d+(?:,\d+)?)/)?.[1]
    if (!match) return value

    const num = parseFloat(match.replace(',', '.'))
    const current = Math.round(latest * 10) / 10

    // Format the number back
    if (value.includes(',')) {
      return value.replace(match, current.toString().replace('.', ','))
    }
    return value.replace(match, Math.round(current).toString())
  })

  useEffect(() => {
    if (isInView) {
      // Extract the number from value
      const match = value.match(/(\d+(?:,\d+)?)/)?.[1]
      if (match) {
        const targetNum = parseFloat(match.replace(',', '.'))

        // Start animation after delay
        const timer = setTimeout(() => {
          animate(count, targetNum, {
            duration: 2,
            ease: "easeOut"
          })
        }, delay * 1000)

        return () => clearTimeout(timer)
      }
    }
  }, [isInView, value, count, delay])

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>
})

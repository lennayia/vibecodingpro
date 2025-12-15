import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, memo } from 'react'

function StatCard({ value, label, delay = 0 }) {
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

  return (
    <motion.div
      ref={ref}
      className="h-full flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#05050f] hover:scale-105 transition-transform border border-gray-200 dark:border-[#070716]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <h3 className="mb-4">
        <motion.span className="text-accent">{rounded}</motion.span>
      </h3>
      <div>
        {label}
      </div>
    </motion.div>
  )
}

export default memo(StatCard)

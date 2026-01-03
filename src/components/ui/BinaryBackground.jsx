import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function BinaryBackground({ count = 30 }) {
  const binaryDigits = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      digit: Math.random() > 0.5 ? '1' : '0',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 1 + Math.random() * 1.5, // 1-2.5rem
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {binaryDigits.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-mono text-accent opacity-5"
          style={{
            left: item.left, // Dynamic positioning
            top: item.top, // Dynamic positioning
            fontSize: `${item.size}rem`, // Dynamic size
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.digit}
        </motion.div>
      ))}
    </div>
  )
}

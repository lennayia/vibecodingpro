import { memo } from 'react'
import { motion } from 'framer-motion'

function Card({
  children,
  className = "",
  background = "light",
  animate = true,
  delay = 0,
  ...props
}) {
  // Glassmorphism backgrounds with backdrop blur
  const bgClasses = {
    light: "bg-white/40 dark:bg-[#070716]/80 backdrop-blur-xl",
    dark: "bg-black/30 dark:bg-[#05050f]/80 backdrop-blur-xl",
    holographic: "bg-[#B56C4E]/40 dark:bg-[#05050f]/80 backdrop-blur-xl"
  }

  // Glassmorphism borders
  const borderClasses = {
    light: "border border-white/60 dark:border-white/20 shadow-lg shadow-white/5",
    dark: "border border-white/20 dark:border-white/20 shadow-lg shadow-black/20",
    holographic: "border border-holo/60 dark:border-holo/40"
  }

  const CardWrapper = animate ? motion.div : "div"

  const animationProps = animate ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay },
    viewport: { once: true }
  } : {}

  return (
    <CardWrapper
      className={`${bgClasses[background]} ${borderClasses[background]} rounded-3xl card-py-fluid card-px-fluid relative ${className}`}
      {...animationProps}
      {...props}
    >
      {/* Subtle gradient shine overlay for glassmorphism effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none overflow-hidden" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </CardWrapper>
  )
}

export default memo(Card)

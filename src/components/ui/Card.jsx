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
  const bgClasses = {
    light: "bg-gray-50 dark:bg-[#070716]/60",
    dark: "bg-gray-50 dark:bg-[#05050f]/60"
  }

  const borderClasses = {
    light: "border border-gray-200 dark:border-[#05050f]",
    dark: "border border-gray-200 dark:border-[#070716]"
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
      className={`${bgClasses[background]} ${borderClasses[background]} rounded-3xl py-4 px-8 ${className}`}
      {...animationProps}
      {...props}
    >
      {children}
    </CardWrapper>
  )
}

export default memo(Card)

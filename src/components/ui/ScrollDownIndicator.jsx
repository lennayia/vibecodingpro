import { memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function ScrollDownIndicator() {
  const handleScroll = useCallback(() => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }, [])

  return (
    <motion.button
      onClick={handleScroll}
      className="hidden md:flex absolute bottom-2 inset-x-0 mx-auto z-20 items-center justify-center w-12 h-12 rounded-full bg-[#D4C5B5]/30 dark:bg-white/10 backdrop-blur-sm border border-[#D4C5B5]/50 dark:border-white/20 hover:bg-[#D4C5B5]/50 dark:hover:bg-white/20 transition-all cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 3,
        duration: 0.5
      }}
      whileHover={{ scale: 1.1 }}
      aria-label="Scroll to next section"
    >
      <motion.div
        animate={{
          y: [0, 5, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-6 h-6 text-[#B56C4E] dark:text-white" strokeWidth={2} />
      </motion.div>
    </motion.button>
  )
}

export default memo(ScrollDownIndicator)

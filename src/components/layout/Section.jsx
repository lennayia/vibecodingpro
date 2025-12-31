import { memo } from 'react'
import ScrollDownIndicator from '../ui/ScrollDownIndicator'

const bgClasses = {
  light: "bg-white dark:bg-[#0a0a1a]",
  dark: "bg-[#f2f2f2] dark:bg-[#05050f]",
  gradient: "bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9] to-[#D4C5B5]/20 dark:from-[#0a0a1a] dark:to-[#0a0a1a]",
  none: ""
}

function Section({ children, className = "", background = "light", showScrollIndicator = false, maxWidth = null, backgroundElement = null, centered = false, id = undefined }) {
  const maxWidthClass = maxWidth || "max-w-7xl"
  const centeredClasses = centered ? "min-h-[calc(100vh-4rem)] mt-16 flex items-center justify-center" : ""
  const paddingClasses = centered ? "px-[4%]" : "py-4 md:py-28 lg:py-32 px-[4%]"

  return (
    <section id={id} className={`${paddingClasses} ${bgClasses[background]} ${centeredClasses} ${className} relative overflow-hidden`}>
      {backgroundElement}
      <div className={`${maxWidthClass} w-full mx-auto relative z-10`}>
        {children}
      </div>
      {showScrollIndicator && <ScrollDownIndicator />}
    </section>
  )
}

export default memo(Section)
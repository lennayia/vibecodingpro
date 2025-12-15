import { memo } from 'react'
import ScrollDownIndicator from '../ui/ScrollDownIndicator'

const bgClasses = {
  light: "bg-white dark:bg-[#0a0a1a]",
  dark: "bg-[#f2f2f2] dark:bg-[#05050f]",
  none: ""
}

function Section({ children, className = "", background = "light", showScrollIndicator = false, maxWidth = null, backgroundElement = null }) {
  const maxWidthClass = maxWidth || "max-w-7xl"

  return (
    <section className={`py-4 md:py-28 lg:py-32 px-[4%] ${bgClasses[background]} ${className} relative overflow-hidden`}>
      {backgroundElement}
      <div className={`${maxWidthClass} w-full mx-auto relative z-10`}>
        {children}
      </div>
      {showScrollIndicator && <ScrollDownIndicator />}
    </section>
  )
}

export default memo(Section)
import { memo } from 'react'
import ScrollDownIndicator from '../ui/ScrollDownIndicator'

const bgClasses = {
  light: "bg-white dark:bg-[#0a0a1a]",
  dark: "bg-[#f2f2f2] dark:bg-[#05050f]",
  holographic: "bg-[#05050f]",
  gradient: "bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9] to-[#FFFDF9] dark:from-[#0a0a1a] dark:to-[#0a0a1a]",
  none: ""
}

function Section({ children, className = "", background = "light", showScrollIndicator = false, maxWidth = null, backgroundElement = null, centered = false, id = undefined }) {
  const maxWidthClass = maxWidth || "max-w-7xl"
  const centeredClasses = centered ? "min-h-screen flex items-center justify-center" : ""
  const paddingClasses = centered ? "px-[4%] py-10" : "py-4 md:py-28 lg:py-32 px-[4%]"
  const contentPadding = centered ? "pt-6" : "" // Top padding for centered content
  const forceDarkMode = background === "holographic" ? "dark" : ""
  const holographicText = background === "holographic" ? "holographic-text" : ""

  return (
    <section id={id} className={`${paddingClasses} ${bgClasses[background]} ${centeredClasses} ${forceDarkMode} ${holographicText} ${className} relative overflow-hidden`}>
      {backgroundElement}
      <div className={`${maxWidthClass} w-full mx-auto relative z-10 ${contentPadding}`}>
        {children}
      </div>
      {showScrollIndicator && <ScrollDownIndicator />}
    </section>
  )
}

export default memo(Section)
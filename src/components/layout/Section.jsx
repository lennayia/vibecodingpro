import { memo } from 'react'
import ScrollDownIndicator from '../ui/ScrollDownIndicator'
import '../../styles/section.css'

// Background theme configurations
const bgClasses = {
  light: "bg-[#FFFDF9] dark:bg-[#0a0a1a]",
  dark: "bg-[#F5EDE5] dark:bg-[#05050f]",
  holographic: "bg-[#050403] dark:bg-[#05050f]",
  gradient: "bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9] to-[#FFFDF9] dark:from-[#0a0a1a] dark:to-[#0a0a1a]",
  none: ""
}

// Layout configuration constants
const LAYOUT_CONFIG = {
  MAX_WIDTH_DEFAULT: "max-w-7xl",
  HORIZONTAL_PADDING: "px-[4%]",
  CENTERED_VERTICAL_PADDING: "py-10",
  STANDARD_VERTICAL_PADDING: "py-4 md:py-28 lg:py-32",
  CONTENT_TOP_PADDING: "pt-6"
}

function Section({ children, className = "", background = "light", showScrollIndicator = false, maxWidth = null, backgroundElement = null, centered = false, id = undefined }) {
  const maxWidthClass = maxWidth || LAYOUT_CONFIG.MAX_WIDTH_DEFAULT
  const centeredClasses = centered ? "min-h-screen flex items-center justify-center" : ""
  const paddingClasses = centered
    ? `${LAYOUT_CONFIG.HORIZONTAL_PADDING} ${LAYOUT_CONFIG.CENTERED_VERTICAL_PADDING}`
    : `${LAYOUT_CONFIG.STANDARD_VERTICAL_PADDING} ${LAYOUT_CONFIG.HORIZONTAL_PADDING}`
  const contentPadding = centered ? LAYOUT_CONFIG.CONTENT_TOP_PADDING : ""
  const holographicText = background === "holographic" ? "holographic-text" : ""

  return (
    <section id={id} className={`${paddingClasses} ${bgClasses[background]} ${centeredClasses} ${holographicText} ${className} relative overflow-hidden`}>
      {backgroundElement}
      <div className={`${maxWidthClass} w-full mx-auto relative z-10 ${contentPadding}`}>
        {children}
      </div>
      {showScrollIndicator && <ScrollDownIndicator isDarkBg={background === "holographic"} />}
    </section>
  )
}

export default memo(Section)
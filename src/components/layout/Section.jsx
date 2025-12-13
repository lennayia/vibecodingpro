import ScrollDownIndicator from '../ui/ScrollDownIndicator'

export default function Section({ children, className = "", background = "light", showScrollIndicator = false, maxWidth = null }) {
  const bgClasses = {
    light: "dark:bg-[#0a0a1a]",
    dark: "dark:bg-[#05050f]",
    none: ""
  }

  // Určení šířky podle pozadí: light = široké (max-w-6xl/1152px), dark = užší (max-w-4xl/896px)
  // Pokud je maxWidth specifikován, použije se místo automatického
  const maxWidthClass = maxWidth || (background === "light" ? "max-w-6xl" : background === "dark" ? "max-w-4xl" : "")

  return (
    <section className={`py-4 md:py-28 lg:py-32 px-2 md:px-4 ${bgClasses[background]} ${className} relative`}>
      <div className={`${maxWidthClass} w-full mx-auto relative`}>
        {children}
      </div>
      {showScrollIndicator && <ScrollDownIndicator />}
    </section>
  )
}

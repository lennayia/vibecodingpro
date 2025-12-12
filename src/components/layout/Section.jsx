export default function Section({ children, className = "", background = "light" }) {
  const bgClasses = {
    light: "dark:bg-[#070716]",
    dark: "dark:bg-[#05050f]",
    none: ""
  }

  return (
    <section className={`py-32 px-6 ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  )
}

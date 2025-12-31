import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark' || !savedTheme
    setIsDark(prefersDark)

    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    // Dispatch custom event for theme change
    window.dispatchEvent(new Event('themeChange'))
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative z-10 p-2 rounded-lg hover:opacity-80 transition-opacity group"
      aria-label="Přepnout motiv"
      title={isDark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
    >
      {isDark ? (
        <Sun className="w-9 h-9 text-[#0DDD0D]" strokeWidth={3} />
      ) : (
        <Moon className="w-9 h-9 text-[#B56C4E]" strokeWidth={3} />
      )}

      {/* Tooltip - vlevo jako u ostatních ikon */}
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {isDark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
      </span>
    </button>
  )
}

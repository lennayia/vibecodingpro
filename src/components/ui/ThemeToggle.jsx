import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import Tooltip from './Tooltip'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  const tooltipText = isDark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"

  return (
    <button
      onClick={toggleTheme}
      className="relative z-10 hover:opacity-80 transition-opacity group"
      aria-label="Přepnout motiv"
    >
      {isDark ? (
        <Sun className="nav-icon-fluid text-[#0DDD0D]" strokeWidth={3} />
      ) : (
        <Moon className="nav-icon-fluid text-[#B56C4E]" strokeWidth={3} />
      )}

      <Tooltip text={tooltipText} />
    </button>
  )
}

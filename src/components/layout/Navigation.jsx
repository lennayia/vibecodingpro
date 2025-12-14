import { Sun, Moon } from 'lucide-react'

export default function Navigation({ isDark, setIsDark }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f2f2f2]/80 dark:bg-[#070716]/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-display font-bold text-2xl flex items-center gap-3">
          <span>Vibe</span>
          <span className="text-accent">|</span>
          <span>Prompt</span>
          <span className="text-accent">|</span>
          <span>Build</span>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#05050f] transition-colors relative group"
          title={isDark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <span className="absolute right-0 top-full mt-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isDark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
          </span>
        </button>
      </div>
    </nav>
  )
}

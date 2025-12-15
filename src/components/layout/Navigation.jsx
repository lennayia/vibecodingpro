import { memo } from 'react'
import { Sun, Moon } from 'lucide-react'

function Navigation({ isDark, setIsDark }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#f2f2f2]/80 dark:bg-[#070716]/80 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-text {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Levý okraj - pozadí */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-[#f2f2f2]/80 dark:bg-[#070716]/80 backdrop-blur-md z-10" />

        {/* Pravý okraj - pozadí */}
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-[#f2f2f2]/80 dark:bg-[#070716]/80 backdrop-blur-md z-10" />

        {/* Logo s pozadím */}
        <div className="font-display font-bold text-2xl flex items-center gap-3 relative z-10 px-4 -ml-4 bg-[#f2f2f2]/80 dark:bg-[#070716]/80 backdrop-blur-md">
          <img
            src={isDark ? "/vibecoding-logo-bile.webp" : "/vibecoding-logo.webp"}
            alt="Vibecoding"
            className="h-10 w-auto"
          />
          <span>Vibe</span>
          <span className="text-accent">|</span>
          <span>Prompt</span>
          <span className="text-accent">|</span>
          <span>Build</span>
        </div>

        {/* Běžící slogan */}
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
          <div className="marquee-text whitespace-nowrap font-light text-lg text-white opacity-100">
            Teď víc než kdy dřív platí: „Můžeme mít všechno, co si dokážeme představit."
          </div>
        </div>

        {/* Theme toggle s pozadím */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#05050f] transition-colors relative group z-10 bg-[#f2f2f2]/80 dark:bg-[#070716]/80 backdrop-blur-md"
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

export default memo(Navigation)

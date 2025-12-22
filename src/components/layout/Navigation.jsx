import { memo, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AlignRight } from 'lucide-react'
import SlideOutMenu from '../ui/SlideOutMenu'

function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Check theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark' || !savedTheme)

    // Listen for theme changes
    const handleStorage = () => {
      const theme = localStorage.getItem('theme')
      setIsDark(theme === 'dark' || !theme)
    }

    window.addEventListener('storage', handleStorage)

    // Custom event for same-page theme changes
    const handleThemeChange = () => {
      const theme = localStorage.getItem('theme')
      setIsDark(theme === 'dark' || !theme)
    }

    window.addEventListener('themeChange', handleThemeChange)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('themeChange', handleThemeChange)
    }
  }, [])

  return createPortal(
    <nav
      className="sticky-header w-full backdrop-blur-md bg-[#f2f2f2]/80 dark:bg-[#070716]/80"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999
      }}
    >
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

        .sticky-header {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 9999 !important;
        }
      `}</style>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-6 py-0.5 flex justify-between items-center relative">
        {/* Logo - jen ikona */}
        <div className="relative z-10">
          <img
            src={isDark ? "/vibecoding-logo-bile.webp" : "/vibecoding-logo.webp"}
            alt="Vibecoding"
            width="40"
            height="40"
            className="h-10 w-auto"
          />
        </div>

        {/* Right side: CTA + Menu button */}
        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing-section')
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-4 py-2 rounded-full font-semibold text-sm bg-accent text-white dark:text-[#070716] border-2 border-accent hover:opacity-90 transition-opacity"
          >
            Chci začít
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-lg hover:opacity-80 transition-opacity"
            aria-label="Otevřít menu"
          >
            <AlignRight className="w-8 h-8 text-gray-900 dark:text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Běžící slogan - pod hlavní navigací */}
      <div className="w-full overflow-hidden">
        <div className="pt-0.5 pb-1">
          <div className="marquee-text whitespace-nowrap text-[#374151] dark:text-[#f2f2f2]" style={{ fontSize: '1rem', fontWeight: 400 }}>
            <span className="font-bold">Vibe <span className="text-accent">|</span> Prompt <span className="text-accent">|</span> Build</span> — Teď víc než kdy dřív platí: „Můžeme mít všechno, co si dokážeme představit."
          </div>
        </div>
      </div>

      {/* Slide-out menu */}
      <SlideOutMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>,
    document.body
  )
}

export default memo(Navigation)

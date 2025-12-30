import { memo, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import SlideOutMenu from '../ui/SlideOutMenu'

function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark' || !savedTheme)

    const handleStorage = () => {
      const theme = localStorage.getItem('theme')
      setIsDark(theme === 'dark' || !theme)
    }

    window.addEventListener('storage', handleStorage)

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
      className="sticky-header w-full backdrop-blur-2xl bg-white/60 dark:bg-black/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,205,0.25)]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999
      }}
    >
      {/* Glassmorphism gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent dark:from-[#000080]/20 dark:via-[#000080]/8 dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 dark:from-transparent dark:via-[#000080]/15 dark:to-transparent pointer-events-none" />
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
        {/* Logo */}
        <div className="relative z-10">
          <img
            src={isDark ? "/vibecoding-logo-bile.webp" : "/vibecoding-logo.webp"}
            alt="Vibecoding"
            width="40"
            height="40"
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Fixed right side: CTA button + Menu */}
      <div
        className="flex items-center gap-3 transition-all duration-300"
        style={{
          position: 'fixed',
          top: '0.5rem',
          right: isMenuOpen ? 'calc(4rem + 1.5rem)' : '1.5rem',
          zIndex: 10000
        }}
      >
        <button
          onClick={() => {
            const pricingSection = document.getElementById('pricing-section')
            if (pricingSection) {
              pricingSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="px-4 py-2 rounded-full font-semibold text-sm bg-[#0000CD] dark:bg-[#0DDD0D] text-white dark:text-[#070716] border-2 border-[#0000CD] dark:border-[#0DDD0D] hover:opacity-90 transition-opacity"
        >
          Chci začít
        </button>

        {/* Menu s plovoucím dropdownem */}
        <SlideOutMenu
          isOpen={isMenuOpen}
          onOpen={() => setIsMenuOpen(true)}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>

      {/* Běžící slogan */}
      <div className="w-full overflow-hidden">
        <div className="pt-0.5 pb-1">
          <div className="marquee-text whitespace-nowrap text-[#374151] dark:text-[#f2f2f2]" style={{ fontSize: '1rem', fontWeight: 400 }}>
            <span className="font-bold">Vibe <span className="text-[#0000CD] dark:text-[#0DDD0D]">|</span> Prompt <span className="text-[#0000CD] dark:text-[#0DDD0D]">|</span> Build</span> — Teď víc než kdy dřív platí: „Můžeme mít všechno, co si dokážeme představit."
          </div>
        </div>
      </div>
    </nav>,
    document.body
  )
}

export default memo(Navigation)
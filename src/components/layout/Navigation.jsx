import { memo, useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import SlideOutMenu from '../ui/SlideOutMenu'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import { scrollToSection } from '../../utils/scroll'

function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handlePricingClick = useCallback(() => {
    scrollToSection('pricing-section')
  }, [])

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
      className="sticky-header w-full backdrop-blur-2xl bg-[#FFFDF9]/60 dark:bg-black/60 shadow-[0_4px_20px_rgba(181,108,78,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,205,0.25)]"
    >
      {/* Glassmorphism gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/50 via-[#FFFDF9]/20 to-transparent dark:from-[#000080]/20 dark:via-[#000080]/8 dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/20 via-[#FFFDF9]/40 to-[#FFFDF9]/20 dark:from-transparent dark:via-[#000080]/15 dark:to-transparent pointer-events-none" />
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
      <div className="max-w-7xl mx-auto px-6 py-0.5 relative">
        {/* Spacer to maintain height */}
        <div className="h-10 w-10" aria-hidden="true"></div>
      </div>

      {/* Fixed left: Logo */}
      <div className="fixed left-6 top-2 z-[10000]">
        <img
          src={isDark ? "/vibecoding-logo-bile.webp" : "/vibecoding-logo.webp"}
          alt="Vibecoding"
          width="36"
          height="36"
          className="h-9 w-auto"
        />
      </div>

      {/* Fixed right: CTA button + Theme Toggle + Menu */}
      <div
        className={`nav-logo-container flex items-center gap-3 ${isMenuOpen ? 'right-[calc(4rem+1.5rem)]' : 'right-6'}`}
      >
        <Button onClick={handlePricingClick} variant="primary">
          Chci začít
        </Button>

        {/* Theme Toggle + Menu with minimal spacing */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <SlideOutMenu
            isOpen={isMenuOpen}
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </div>

      {/* Běžící slogan */}
      <div className="w-full overflow-hidden">
        <div className="pt-0.5 pb-1">
          <div className="marquee-text whitespace-nowrap text-[#2E2E2E] dark:text-[#f2f2f2]">
            <span className="font-bold">Vibe <span className="text-[#B56C4E] dark:text-[#0DDD0D]">|</span> Prompt <span className="text-[#B56C4E] dark:text-[#0DDD0D]">|</span> Build</span> — Teď víc než kdy dřív platí: „Můžeme mít všechno, co si dokážeme představit."
          </div>
        </div>
      </div>
    </nav>,
    document.body
  )
}

export default memo(Navigation)
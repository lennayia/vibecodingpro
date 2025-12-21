import { memo, useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import { scrollToSection } from '../../utils/scroll'

function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [showCTA, setShowCTA] = useState(false)

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

  // Show CTA button after scrolling starts
  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 100px
      setShowCTA(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = useCallback(() => {
    scrollToSection('pricing-section')
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
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center relative">
        {/* Logo */}
        <div className="font-display font-bold text-2xl flex items-center gap-3 relative z-10">
          <img
            src={isDark ? "/vibecoding-logo-bile.webp" : "/vibecoding-logo.webp"}
            alt="Vibecoding"
            width="40"
            height="40"
            className="h-10 w-auto"
          />
          <span>Vibe</span>
          <span className="text-accent">|</span>
          <span>Prompt</span>
          <span className="text-accent">|</span>
          <span>Build</span>
        </div>

        {/* Right side: CTA + Theme Toggle */}
        <div className="flex items-center gap-3 relative z-10">
          {/* Sticky CTA Button */}
          <AnimatePresence>
            {showCTA && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                onClick={handleCTAClick}
                className="hidden md:block px-6 py-2 rounded-full font-semibold text-sm bg-accent text-white dark:text-[#070716] border-2 border-accent hover:shadow-lg transition-all"
                style={{
                  boxShadow: isDark
                    ? '0 0 15px rgba(13, 221, 13, 0.3)'
                    : '0 0 15px rgba(0, 0, 205, 0.3)'
                }}
              >
                Chci začít
              </motion.button>
            )}
          </AnimatePresence>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Běžící slogan - pod hlavní navigací */}
      <div className="w-full overflow-hidden">
        <div className="pt-0.5 pb-1">
          <div className="marquee-text whitespace-nowrap text-[#374151] dark:text-[#f2f2f2]" style={{ fontSize: '1rem', fontWeight: 400 }}>
            Teď víc než kdy dřív platí: „Můžeme mít všechno, co si dokážeme představit."
          </div>
        </div>
      </div>
    </nav>,
    document.body
  )
}

export default memo(Navigation)

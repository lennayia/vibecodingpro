import { memo, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import SlideOutMenu from '../ui/SlideOutMenu'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import GlassmorphismOverlay from '../ui/GlassmorphismOverlay'
import { scrollToSection } from '../../utils/scroll'
import { useTheme } from '../../contexts/ThemeContext'
import { SECTION_IDS } from '../../constants/data'
import { useMarquee } from '../../hooks/useMarquee'
import '../../styles/header.css'
import '../../styles/animations.css'

function Navigation() {
  const { isDark } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const marqueeRef = useMarquee(1) // 1px per frame

  const handlePricingClick = useCallback(() => {
    scrollToSection(SECTION_IDS.PRICING)
  }, [])

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true)
  }, [])

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return createPortal(
    <nav
      className="sticky-header w-full backdrop-blur-xl bg-[#C9987E]/75 dark:bg-black/60 shadow-[0_6px_30px_rgba(181,108,78,0.45)] dark:shadow-[0_4px_20px_rgba(0,0,205,0.25)]"
    >
      {/* Glassmorphism gradient overlays */}
      <GlassmorphismOverlay />

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
          loading="lazy"
          className="nav-logo-fluid"
        />
      </div>

      {/* Fixed right: CTA button + Theme Toggle + Menu */}
      <div
        className={`nav-logo-container flex items-center nav-gap-fluid ${isMenuOpen ? 'right-[4.5rem]' : 'right-6'}`}
      >
        <Button onClick={handlePricingClick} variant="primary" className="nav-btn-fluid">
          Chci začít
        </Button>

        {/* Theme Toggle + Menu */}
        <div className="flex items-center nav-gap-inner-fluid">
          <ThemeToggle />
          <SlideOutMenu
            isOpen={isMenuOpen}
            onOpen={handleMenuOpen}
            onClose={handleMenuClose}
          />
        </div>
      </div>

      {/* Běžící slogan */}
      <div className="w-full overflow-hidden">
        <div className="pt-0.5 pb-1">
          <div className="marquee-container">
            <div ref={marqueeRef} className="marquee-content whitespace-nowrap text-[#2E2E2E] dark:text-[#f2f2f2]">
              <span className="font-bold">Vibe <span className="text-[#B56C4E] dark:text-[#0DDD0D]">|</span> Prompt <span className="text-[#B56C4E] dark:text-[#0DDD0D]">|</span> Build</span> — Teď víc než kdy dřív platí: „Můžeme mít všechno, co si dokážeme představit."
            </div>
          </div>
        </div>
      </div>
    </nav>,
    document.body
  )
}

export default memo(Navigation)
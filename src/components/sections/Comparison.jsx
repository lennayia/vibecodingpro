import { motion } from 'framer-motion'
import { useState, useEffect, useMemo, memo } from 'react'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import Carousel from '../ui/Carousel'
import { comparisonData } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

// Carousel configuration
const CAROUSEL_CONFIG = {
  MOBILE_WIDTH: "75%",
  TABLET_WIDTH: "85%",
  GAP: 3,
  SHOW_ARROWS: true,
  SHOW_DOTS: true,
  DRAG_ENABLED: true
}

// ComparisonCard configuration
const CARD_CONFIG = {
  DIRECTION: "center",
  DELAY: 0,
  BACKGROUND: "holographic"
}

// Theme color configuration (RGB values)
const THEME_COLORS = {
  PRIMARY: {
    DARK: '13, 221, 13',    // Green (matches --color-accent-dark)
    LIGHT: '181, 108, 78'   // Copper
  },
  SECONDARY: {
    DARK: '0, 200, 255',    // Cyan
    LIGHT: '212, 197, 181'  // Beige
  }
}

// Performance: Animation objects outside component
const meshGradientAnimation = {
  scale: [1, 1.08, 1.02, 1],
}

const meshGradientTransition = {
  duration: 20,
  repeat: Infinity,
  ease: 'easeInOut'
}

const imageOpacityAnimation = {
  opacity: [0.4, 0.38, 0.42, 0.4],
}

const imageOpacityTransition = {
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut'
}

const imageXTransition = {
  duration: 1,
  repeat: Infinity,
  repeatDelay: 10
}

const imageScaleTransition = {
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut'
}

const imageRotateTransition = {
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut'
}

const leftImageAnimation = {
  x: [0, 0.3, -0.3, 0],
  scale: [1, 1.02, 0.98, 1.01, 1],
  rotate: [0, 1.5, -1.5, 1, -1, 0],
}

const rightImageAnimation = {
  x: [0, -0.3, 0.3, 0],
  scale: [1, 1.02, 0.98, 1.01, 1],
  rotate: [0, -1.5, 1.5, -1, 1, 0],
}

const scanlinesAnimation = {
  y: [0, -100],
  opacity: [0.4, 0.6, 0.4],
}

const scanlinesTransition = {
  y: {
    duration: 8,
    repeat: Infinity,
    ease: 'linear'
  },
  opacity: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

const colorShiftTransition = {
  background: {
    duration: 10,
    repeat: Infinity,
    ease: 'linear'
  },
  y: {
    duration: 12,
    repeat: Infinity,
    ease: 'linear'
  }
}

const colorShiftAnimation = {
  y: [-200, 200],
}

function ComparisonSeo() {
  // Initialize based on actual dark mode state (safe for SSR)
  // Default to dark mode for SSR to prevent flash of light mode colors
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return true
  })

  // Performance: Memoize slides array
  const slides = useMemo(() => [comparisonData.martina, comparisonData.julie], [])

  // Track theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()

    const handleThemeChange = () => checkTheme()
    window.addEventListener('themeChange', handleThemeChange)
    return () => window.removeEventListener('themeChange', handleThemeChange)
  }, [])

  // Section is always dark, but colors adapt to theme
  const primaryColor = isDark ? THEME_COLORS.PRIMARY.DARK : THEME_COLORS.PRIMARY.LIGHT
  const secondaryColor = isDark ? THEME_COLORS.SECONDARY.DARK : THEME_COLORS.SECONDARY.LIGHT

  return (
    <Section id="story" background="holographic" centered={true} className="relative overflow-hidden" showScrollIndicator={true}>
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        {/* Multi-point mesh gradient with organic movement */}
        <motion.div
          className="absolute inset-0 blur-2xl md:blur-3xl will-change-transform"
          animate={{
            ...meshGradientAnimation,
            background: [
              `radial-gradient(circle at 20% 20%, rgba(${primaryColor}, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 80% 30%, rgba(${secondaryColor}, 0.5) 0%, transparent 50%),
               radial-gradient(circle at 40% 70%, rgba(${primaryColor}, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 70% 80%, rgba(${secondaryColor}, 0.4) 0%, transparent 50%)`,

              `radial-gradient(circle at 25% 25%, rgba(${secondaryColor}, 0.5) 0%, transparent 50%),
               radial-gradient(circle at 75% 35%, rgba(${primaryColor}, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 35% 75%, rgba(${secondaryColor}, 0.35) 0%, transparent 50%),
               radial-gradient(circle at 65% 85%, rgba(${primaryColor}, 0.45) 0%, transparent 50%)`,

              `radial-gradient(circle at 30% 15%, rgba(${primaryColor}, 0.45) 0%, transparent 50%),
               radial-gradient(circle at 85% 25%, rgba(${secondaryColor}, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 45% 65%, rgba(${primaryColor}, 0.35) 0%, transparent 50%),
               radial-gradient(circle at 75% 75%, rgba(${secondaryColor}, 0.5) 0%, transparent 50%)`,

              `radial-gradient(circle at 20% 20%, rgba(${primaryColor}, 0.4) 0%, transparent 50%),
               radial-gradient(circle at 80% 30%, rgba(${secondaryColor}, 0.5) 0%, transparent 50%),
               radial-gradient(circle at 40% 70%, rgba(${primaryColor}, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 70% 80%, rgba(${secondaryColor}, 0.4) 0%, transparent 50%)`,
            ],
          }}
          transition={meshGradientTransition}
        />

        {/* Background image LEFT */}
        <div className="hidden md:flex absolute inset-0 items-start justify-start -ml-12 pt-6">
          <motion.img
            src="/thumbnails/Vibecoding-koucka-jana.webp"
            alt=""
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
            className="h-1/3 w-auto object-cover"
            style={{
              filter: isDark
                ? `drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`
                : `hue-rotate(-90deg) saturate(1.2) drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`,
              willChange: 'transform, opacity',
            }}
            animate={{
              ...imageOpacityAnimation,
              ...leftImageAnimation,
            }}
            transition={{
              opacity: imageOpacityTransition,
              x: imageXTransition,
              scale: imageScaleTransition,
              rotate: imageRotateTransition,
            }}
          />
        </div>

        {/* Background image RIGHT - original */}
        <div className="hidden md:flex absolute inset-0 items-start justify-end -mr-12 pt-6">
          <motion.img
            src="/thumbnails/koucka.webp"
            alt=""
            width="368"
            height="385"
            loading="lazy"
            decoding="async"
            className="h-1/3 w-auto object-cover"
            style={{
              filter: isDark
                ? `drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`
                : `hue-rotate(-90deg) saturate(1.2) drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`,
              willChange: 'transform, opacity',
            }}
            animate={{
              ...imageOpacityAnimation,
              ...rightImageAnimation,
            }}
            transition={{
              opacity: imageOpacityTransition,
              x: imageXTransition,
              scale: imageScaleTransition,
              rotate: imageRotateTransition,
            }}
          />
        </div>

        {/* Scanlines - covering whole section */}
        <motion.div
          className="hidden md:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(${primaryColor}, 0.35) 2px, rgba(${primaryColor}, 0.35) 4px)`,
            willChange: 'transform, opacity',
          }}
          animate={scanlinesAnimation}
          transition={scanlinesTransition}
        />

        {/* Color shift overlay - covering whole section */}
        <motion.div
          className="hidden md:block absolute inset-0 mix-blend-overlay will-change-transform"
          animate={{
            ...colorShiftAnimation,
            background: [
              `linear-gradient(180deg, rgba(${primaryColor},0) 0%, rgba(${primaryColor},0.2) 50%, rgba(${primaryColor},0) 100%)`,
              `linear-gradient(180deg, rgba(${secondaryColor},0) 0%, rgba(${secondaryColor},0.2) 50%, rgba(${secondaryColor},0) 100%)`,
              `linear-gradient(180deg, rgba(${primaryColor},0) 0%, rgba(${primaryColor},0.2) 50%, rgba(${primaryColor},0) 100%)`,
            ],
          }}
          transition={colorShiftTransition}
        />
      </div>

      <div className="relative z-10">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-fluid-sm text-center leading-tight">
            {comparisonData.heading}
          </h2>
          <h3 className="font-display font-bold mb-fluid-lg text-center">
            {comparisonData.subheading}
          </h3>
          <div className="mb-fluid-lg text-center max-w-3xl mx-auto">
            <p>
              <span className="block">{comparisonData.intro.line1}</span>
              <span className="block">{comparisonData.intro.line2}</span>
              <span className="block mt-4 md:mt-2">{comparisonData.intro.line3}</span>
            </p>
          </div>

          {/* Carousel Component */}
          <Carousel
            slides={slides}
            renderSlide={(slide, index) => (
              <ComparisonCard
                data={slide}
                direction={CARD_CONFIG.DIRECTION}
                delay={CARD_CONFIG.DELAY}
                background={CARD_CONFIG.BACKGROUND}
              />
            )}
            mobileCardWidth={CAROUSEL_CONFIG.MOBILE_WIDTH}
            tabletCardWidth={CAROUSEL_CONFIG.TABLET_WIDTH}
            gap={CAROUSEL_CONFIG.GAP}
            showArrows={CAROUSEL_CONFIG.SHOW_ARROWS}
            showDots={CAROUSEL_CONFIG.SHOW_DOTS}
            dragEnabled={CAROUSEL_CONFIG.DRAG_ENABLED}
          />
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(ComparisonSeo)

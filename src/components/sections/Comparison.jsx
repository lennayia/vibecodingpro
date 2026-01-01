import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import Carousel from '../ui/Carousel'
import { comparisonData } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

export default function ComparisonSeo() {
  // Initialize based on actual dark mode state (safe for SSR)
  // Default to dark mode for SSR to prevent flash of light mode colors
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return true
  })
  const slides = [comparisonData.martina, comparisonData.julie]

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

  // Section is always dark, but colors adapt to theme:
  // Light mode: copper holographic effects
  // Dark mode: green holographic effects
  const primaryColor = isDark ? '0, 255, 136' : '181, 108, 78' // Green in dark, Copper in light
  const secondaryColor = isDark ? '0, 200, 255' : '212, 197, 181' // Cyan in dark, Beige in light

  return (
    <Section id="story" background="holographic" centered={true} className="!pt-12 md:!pt-2 !pb-12 md:!pb-6 lg:!pt-4 lg:!pb-8 relative overflow-hidden" showScrollIndicator={true}>
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        {/* Multi-point mesh gradient with organic movement */}
        <motion.div
          className="absolute inset-0 blur-2xl md:blur-3xl will-change-transform"
          animate={{
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
            scale: [1, 1.08, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Background image LEFT - horizontally flipped */}
        <div className="hidden md:flex absolute inset-0 items-start justify-start -ml-12 pt-16">
          <motion.img
            src="/Vibecoding-koucka-jana.webp"
            alt=""
            className="h-1/3 w-auto object-cover"
            style={{
              filter: isDark
                ? `drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`
                : `hue-rotate(-90deg) saturate(1.2) drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`,
              willChange: 'transform, opacity',
            }}
            animate={{
              opacity: [0.4, 0.38, 0.42, 0.4],
              x: [0, 0.3, -0.3, 0],
              scaleX: [-1, -1.02, -0.98, -1.01, -1],
              scaleY: [1, 1.02, 0.98, 1.01, 1],
              rotate: [0, 1.5, -1.5, 1, -1, 0],
            }}
            transition={{
              opacity: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              x: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 10
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          />
        </div>

        {/* Background image RIGHT - original */}
        <div className="hidden md:flex absolute inset-0 items-start justify-end -mr-12 pt-6">
          <motion.img
            src="/koucka.webp"
            alt=""
            className="h-1/3 w-auto object-cover"
            style={{
              filter: isDark
                ? `drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`
                : `hue-rotate(-90deg) saturate(1.2) drop-shadow(0.5px 0 0 rgba(${primaryColor},0.3)) drop-shadow(-0.5px 0 0 rgba(${secondaryColor},0.3))`,
              willChange: 'transform, opacity',
            }}
            animate={{
              opacity: [0.4, 0.38, 0.42, 0.4],
              x: [0, -0.3, 0.3, 0],
              scale: [1, 1.02, 0.98, 1.01, 1],
              rotate: [0, -1.5, 1.5, -1, 1, 0],
            }}
            transition={{
              opacity: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              x: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 10
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }
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
          animate={{
            y: [0, -100],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
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
          }}
        />

        {/* Color shift overlay - covering whole section */}
        <motion.div
          className="hidden md:block absolute inset-0 mix-blend-overlay will-change-transform"
          animate={{
            background: [
              `linear-gradient(180deg, rgba(${primaryColor},0) 0%, rgba(${primaryColor},0.2) 50%, rgba(${primaryColor},0) 100%)`,
              `linear-gradient(180deg, rgba(${secondaryColor},0) 0%, rgba(${secondaryColor},0.2) 50%, rgba(${secondaryColor},0) 100%)`,
              `linear-gradient(180deg, rgba(${primaryColor},0) 0%, rgba(${primaryColor},0.2) 50%, rgba(${primaryColor},0) 100%)`,
            ],
            y: [-200, 200],
          }}
          transition={{
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
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-4 md:mb-2 text-center leading-tight">
            Dobré nástroje posouvají
          </h2>
          <h3 className="font-display font-bold mb-6 md:mb-4 text-center">
            Dvě ženy. Jeden obor. Dvě cesty.
          </h3>
          <p className="mb-8 md:mb-2 text-center max-w-3xl mx-auto text-xl font-light">
            <span className="block text-xl font-light">Martina a Julie: obě učí klientky zdravě spát.</span>
            <span className="block text-xl font-light">Stejné znalosti, stejná vášeň pomáhat.</span>
            <span className="block mt-4 md:mt-2 text-xl font-light">Ale jejich podnikání funguje naprosto odlišně.</span>
          </p>

          {/* Carousel Component */}
          <Carousel
            slides={slides}
            renderSlide={(slide, index) => (
              <ComparisonCard
                data={slide}
                direction="center"
                delay={0}
                background="dark"
              />
            )}
            mobileCardWidth="75%"
            tabletCardWidth="85%"
            gap={3}
            showArrows={true}
            showDots={true}
            dragEnabled={true}
          />
        </motion.div>
      </div>
    </Section>
  )
}

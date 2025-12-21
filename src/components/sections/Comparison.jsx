import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import Carousel from '../ui/Carousel'
import { comparisonData } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

export default function ComparisonSeo() {
  const [isDark, setIsDark] = useState(true)
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

  // Colors based on theme
  // Light mode: blue tones
  // Dark mode: green/cyan tones
  const primaryColor = isDark ? '0, 255, 136' : '0, 0, 205'
  const secondaryColor = isDark ? '0, 200, 255' : '65, 105, 225' // RoyalBlue for light mode

  return (
    <Section background="light" centered={true} className="!pt-1 !pb-4 md:!pt-2 md:!pb-6 lg:!pt-4 lg:!pb-8 relative overflow-hidden" showScrollIndicator={true}>
      {/* Holographic background */}
      <div className="absolute inset-0 z-0 opacity-80">
        {/* Gentle Holographic glow - expanded to right */}
        <motion.div
          className="absolute inset-0 blur-xl md:blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            background: [
              `radial-gradient(circle at 70% 30%, rgba(${primaryColor}, 0.5), rgba(${secondaryColor}, 0.35) 40%, rgba(${primaryColor}, 0.2) 70%, transparent)`,
              `radial-gradient(circle at 75% 35%, rgba(${secondaryColor}, 0.5), rgba(${primaryColor}, 0.35) 40%, rgba(${secondaryColor}, 0.2) 70%, transparent)`,
              `radial-gradient(circle at 65% 25%, rgba(${primaryColor}, 0.5), rgba(${secondaryColor}, 0.35) 40%, rgba(${primaryColor}, 0.2) 70%, transparent)`,
              `radial-gradient(circle at 70% 30%, rgba(${primaryColor}, 0.5), rgba(${secondaryColor}, 0.35) 40%, rgba(${primaryColor}, 0.2) 70%, transparent)`,
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
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
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(${primaryColor}, 0.15) 2px, rgba(${primaryColor}, 0.15) 4px)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -100],
            opacity: [0.2, 0.3, 0.2],
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
          className="hidden md:block absolute inset-0 mix-blend-overlay"
          style={{ willChange: 'transform' }}
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
          <h2 className="font-display font-bold mb-2 text-center" style={{ lineHeight: '1.3' }}>
            Dobré nástroje posouvají
          </h2>
          <h3 className="font-display font-bold mb-4 text-center">
            Dvě ženy. Jeden obor. Dvě cesty.
          </h3>
          <p className="mb-2 text-center max-w-3xl mx-auto text-xl font-light">
            <span className="block text-xl font-light">Martina a Julie: obě učí klientky zdravě spát.</span>
            <span className="block text-xl font-light">Stejné znalosti. Stejná vášeň pomáhat.</span>
            <span className="block mt-2 text-xl font-light">Ale jejich podnikání funguje naprosto odlišně.</span>
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

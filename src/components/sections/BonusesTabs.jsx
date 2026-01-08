import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useCallback, memo } from 'react'
import Section from '../layout/Section'
import AnimatedBackground from '../ui/AnimatedBackground'
import { Gift, Check, ChevronLeft, ChevronRight, Tag } from 'lucide-react'
import { fadeIn } from '../../constants/animations'
import { bonusItems, bonusPackages } from '../../constants/data'

// ============================================
// SUB-COMPONENTS
// ============================================

// BonusCard - Individual bonus item card
const BonusCard = memo(function BonusCard({ item, index, pkg, pkgIndex }) {
  const value = item.isPreviousPackage ? true : item[pkg.key]
  const IconComponent = item.icon

  // Calculate discount display for higher packages
  let discountDisplay = value
  let isIncrementalDiscount = false
  if (!item.isPreviousPackage && value !== true && item.icon === Tag && pkgIndex > 0) {
    const previousPkg = bonusPackages[pkgIndex - 1]
    const previousValue = parseInt(item[previousPkg.key])
    const currentValue = parseInt(value)
    const increment = currentValue - previousValue
    discountDisplay = `Kupón ${increment} (celkem ${currentValue})`
    isIncrementalDiscount = true
  } else if (!item.isPreviousPackage && value !== true && item.icon === Tag) {
    // For first package with Tag icon
    discountDisplay = `Kupón ${value}`
    isIncrementalDiscount = true
  }

  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-3 pb-2 rounded-xl bg-white/90 dark:bg-[#0a0a1a]/90 border border-accent/20 dark:border-gray-700 hover:border-accent/40 dark:hover:border-accent/40 transition-all backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        {/* Icon with accent background */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
        </div>
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2 md:mb-fluid-bonuses-sm">
            <h4 className="font-bold">{item.name}</h4>
            {!item.isPreviousPackage && value !== true && (
              <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                {isIncrementalDiscount ? discountDisplay : `Kupón ${discountDisplay} Kč`}
              </span>
            )}
          </div>
          {item.description && (
            <p
              className="font-light text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
})

// BonusPrevButton - Previous slide button
const BonusPrevButton = memo(function BonusPrevButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-accent/10 rounded-full p-2 cursor-pointer hover:bg-accent/20 transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-accent" strokeWidth={2} />
    </button>
  )
})

// BonusNextButton - Next slide button
const BonusNextButton = memo(function BonusNextButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-accent/10 rounded-full p-2 cursor-pointer hover:bg-accent/20 transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
    </button>
  )
})

// BonusPackageHeader - Package name with glow animation
const BonusPackageHeader = memo(function BonusPackageHeader({ packageName }) {
  return (
    <motion.div
      key={packageName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative min-w-[200px] flex justify-center"
    >
      <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" style={{ willChange: 'opacity' }} />
      <h3 className="relative font-display font-bold text-accent drop-shadow-package-header">
        varianta {packageName}
      </h3>
    </motion.div>
  )
})

// ============================================
// MAIN COMPONENT
// ============================================

const BonusesTabsSeo = memo(function BonusesTabsSeo() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const BONUSES_PER_SLIDE = 4 // Number of bonuses per slide

  const particleBackground = useMemo(() => <AnimatedBackground type="particles" particleCount={40} />, [])

  // Group bonuses by package into slides - MEMOIZED for performance
  const bonusSlides = useMemo(() => {
    const slides = []
    bonusPackages.forEach((pkg, pkgIndex) => {
    let packageBonuses = []

    // Add "Everything from previous variant" item for higher bonusPackages
    if (pkg.previousPackage) {
      packageBonuses.push({
        name: `Všechno z varianty ${pkg.previousPackage}`,
        description: "",
        icon: Check,
        isPreviousPackage: true
      })
    }

    // Get only NEW bonuses for this package (not in previous bonusPackages)
    const newBonuses = bonusItems.filter(item => {
      const hasInCurrent = item[pkg.key] !== false
      if (!hasInCurrent) return false

      // Always include discount bonus (has different values for each package)
      if (item.icon === Tag) return true

      // Check if this bonus was in any previous package
      const previousPackages = bonusPackages.slice(0, pkgIndex)
      const wasInPrevious = previousPackages.some(prevPkg => item[prevPkg.key] !== false)

      return !wasInPrevious
    })

    packageBonuses = packageBonuses.concat(newBonuses)

    // Split package bonuses into slides of BONUSES_PER_SLIDE
    for (let i = 0; i < packageBonuses.length; i += BONUSES_PER_SLIDE) {
      slides.push({
        package: pkg.name,
        bonuses: packageBonuses.slice(i, i + BONUSES_PER_SLIDE)
      })
    }
  })
    return slides
  }, []) // Empty dependency array - data is static

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bonusSlides.length)
  }, [bonusSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bonusSlides.length) % bonusSlides.length)
  }, [bonusSlides.length])

  return (
    <Section background="none" className="bg-white dark:bg-[#0a0a1a] mobile-section-spacing-top" centered={true} showScrollIndicator={true} backgroundElement={particleBackground}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          {/* Fixed header */}
          <div className="text-center mb-6 md:mb-fluid-bonuses-lg">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-fluid-bonuses-md">
              <Gift className="w-8 h-8 text-accent" strokeWidth={2} />
              <h2 className="font-display font-bold leading-tight">
                Bonusy, které vám usnadní cestu
              </h2>
            </div>

            {/* Package selector with arrows */}
            <div className="relative flex items-center justify-center gap-4">
              <BonusPrevButton onClick={prevSlide} />
              <BonusPackageHeader packageName={bonusSlides[currentSlide].package} />
              <BonusNextButton onClick={nextSlide} />
            </div>
          </div>

          {/* Bonus carousel */}
          <div className="max-w-2xl mx-auto relative mt-6 md:mt-fluid-bonuses-lg min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 w-full"
              >
                {bonusSlides[currentSlide]?.bonuses.map((item, index) => {
                  const pkg = bonusPackages.find(p => p.name === bonusSlides[currentSlide].package)
                  const pkgIndex = bonusPackages.findIndex(p => p.name === bonusSlides[currentSlide].package)

                  return (
                    <BonusCard
                      key={item.name}
                      item={item}
                      index={index}
                      pkg={pkg}
                      pkgIndex={pkgIndex}
                    />
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="flex justify-center gap-3 flex-wrap max-w-md mx-auto mt-4 md:mt-fluid-bonuses-sm">
              {bonusSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full cursor-pointer transition-all ${
                    index === currentSlide
                      ? 'bg-accent w-12 h-3'
                      : 'bg-gray-400 dark:bg-gray-600 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
})

export default BonusesTabsSeo

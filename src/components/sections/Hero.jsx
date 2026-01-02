import { motion } from 'framer-motion'
import { useCallback, useMemo, memo } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import AnimatedBackground from '../ui/AnimatedBackground'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { scrollToSection } from '../../utils/scroll'
import { heroContent } from '../../constants/hero'

// Performance: Animation variants outside component to avoid re-creating objects
const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

function Hero() {
  // Neural network background animation
  const neuralBackground = <AnimatedBackground type="neural" count={15} />
  const typingText = heroContent.heading.typingText
  const { displayedText, showCursor } = useTypingEffect(typingText, 60, 500)

  // Performance: memoize text parts to avoid re-splitting on every render
  const textParts = useMemo(() => {
    const parts = displayedText.split('. ')
    return {
      first: parts[0],
      second: parts[1],
      hasDot: displayedText.includes('. '),
      hasSecond: displayedText.includes('Vyšší')
    }
  }, [displayedText])

  const handlePricingClick = useCallback(() => {
    scrollToSection('pricing-section')
  }, [])

  const handleScrollDown = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }, [])

  // Single screen layout
  const heroLayout = (
  <motion.div
    initial="initial"
    animate="animate"
    variants={containerVariants}
    className="hero-text-align w-full md:max-w-[60%] flex flex-col relative vignette-gradient md:ml-[5%]"
  >
      {/* Badge */}
      <motion.div variants={itemVariants} className="inline-block hero-badge-spacing">
        <span
          className="px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-xl font-normal border border-accent/40 text-accent text-sm"
        >
          {heroContent.badge.text}
        </span>
      </motion.div>

      {/* Main Heading - combined for SEO (only 1 h1 per page) */}
      <motion.h1
        variants={itemVariants}
        className="flex flex-col hero-items-align gap-0 leading-tight"
      >
        {/* Brand Name */}
        <span className="font-medium text-gradient text-fluid-hero-h1">
          {heroContent.heading.brandName}
        </span>
        {/* Elegant copper divider line */}
        <span className="copper-divider-line mt-4 hero-divider-spacing" />
        {/* Main Message with typing effect - split into two lines */}
        <span className="text-hero-heading block">
          {textParts.first}{textParts.hasDot && '.'}
        </span>
        {textParts.hasSecond && (
          <span className="text-hero-heading block">
            <span className="text-gradient-always">
              {textParts.second}
            </span>
            {showCursor && (
              <span className="inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse" />
            )}
          </span>
        )}
      </motion.h1>

      {/* Subheading/Tagline */}
      <motion.h2
        variants={itemVariants}
        className="font-semibold text-gradient text-fluid-hero-h2"
      >
        {heroContent.heading.tagline}
      </motion.h2>

      {/* Paragraph - List with elegant bullets */}
      <motion.ul
        variants={itemVariants}
        className="max-w-3xl mx-auto md:mx-0 hero-text-align font-light space-y-2 text-base text-text-light dark:text-text-muted-dark hero-list"
      >
        <li className="hero-list-item">
          <span className="text-accent font-mono text-[1.2em]">&gt;</span>
          <span className="font-light">{heroContent.features[0]}</span>
        </li>
        <li className="hero-list-item">
          <span className="text-accent font-mono text-[1.2em]">&gt;</span>
          <span className="font-light">{heroContent.features[1]}</span>
        </li>
      </motion.ul>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col hero-items-align max-w-2xl mx-auto md:mx-0 hero-cta-spacing"
      >
        <p
          className="hero-text-align text-base text-text-light dark:text-text-muted-dark leading-relaxed font-light"
        >
          {heroContent.cta.description}
        </p>
        <Button onClick={handleScrollDown} variant="primary">
          {heroContent.cta.primaryButton}
        </Button>
        <Button onClick={handlePricingClick} variant="secondary">
          {heroContent.cta.secondaryButton}
        </Button>
      </motion.div>
    </motion.div>
  )

  return (
    <Section
      background="gradient"
      centered={true}
      className="relative overflow-hidden"
      showScrollIndicator={true}
      backgroundElement={neuralBackground}
    >
      <div className="relative z-10 w-full">
  {heroLayout}
</div>
    </Section>
  )
}

export default memo(Hero)

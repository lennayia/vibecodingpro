import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import AnimatedBackground from '../ui/AnimatedBackground'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { scrollToSection } from '../../utils/scroll'

export default function Hero() {
  // Optimized for performance and full screen coverage
  const particleBackground = <AnimatedBackground type="neural" count={15} />
  const typingText = 'Vlastní nástroje. Vyšší\u00A0příjmy.'
  const { displayedText, showCursor } = useTypingEffect(typingText, 60, 500)

  // Custom slower animations for Hero
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
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const handlePricingClick = useCallback(() => {
    scrollToSection('pricing-section')
  }, [])

  const handleScrollDown = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }, [])

  // Single screen layout
  const heroContent = (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="text-center md:text-left w-full md:max-w-[60%] flex flex-col justify-center gap-6 md:gap-[clamp(1rem,2vh,1.5rem)] relative vignette-gradient md:ml-[5%]"
    >
      {/* Badge */}
      <motion.div variants={itemVariants} className="inline-block hero-badge-spacing">
        <span
          className="px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-xl font-normal border border-accent/40 text-accent text-sm"
        >
          Máte vizi? To stačí.
        </span>
      </motion.div>

      {/* Brand Name */}
      <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
        <motion.h1 className="font-display font-medium text-gradient text-fluid-hero-h1">
          Vibecoding
        </motion.h1>
        {/* Elegant copper divider line */}
        <div className="copper-divider-line mt-4 hero-divider-spacing" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={itemVariants}
        className="font-display font-bold dark:font-medium hero-main-heading"
      >
        {displayedText.split('. ')[0]}{displayedText.includes('. ') && '.'}
        <br className="hidden min-[700px]:block" />
        {displayedText.includes('Vyšší') && (
          <span className="text-gradient">
            {' '}{displayedText.split('. ')[1]}
          </span>
        )}
        {showCursor && (
          <span className="inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse" />
        )}
      </motion.h1>

      {/* Subheading/Tagline */}
      <motion.h2
        variants={itemVariants}
        className="font-display font-semibold text-gradient text-fluid-hero-h2"
      >
        Tvořte. Automatizujte. Vydělávejte.
      </motion.h2>

      {/* Paragraph - List with elegant bullets */}
      <motion.ul
        variants={itemVariants}
        className="max-w-3xl mx-auto md:mx-0 text-center md:text-left font-light space-y-2 text-base text-[#2E2E2E] dark:text-[#e1e1e1] hero-list"
      >
        <li className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-accent font-mono text-[1.2em]">&gt;</span>
          <span className="font-light">Ať systémy pracují za vás 24/7</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-accent font-mono text-[1.2em]">&gt;</span>
          <span className="font-light">Vy si užívejte růst a svobodu</span>
        </li>
      </motion.ul>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center md:items-start max-w-2xl mx-auto md:mx-0 hero-cta-spacing"
      >
        <p
          className="text-center md:text-left text-base text-[#2E2E2E] dark:text-[#e1e1e1] leading-relaxed font-light"
        >
          Podívejte se, co všechno můžete vytvořit.
        </p>
        <Button onClick={handleScrollDown} variant="primary">
          To si nenechám ujít
        </Button>
        <Button onClick={handlePricingClick} variant="secondary">
          Nejdřív jdu na ceník
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
      backgroundElement={particleBackground}
    >
      <div className="relative z-10 w-full">
        {heroContent}
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import ParticleBackground from '../ui/ParticleBackground'
import { fadeInUp } from '../../constants/animations'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { scrollToSection } from '../../utils/scroll'

export default function Hero() {
  const particleBackground = <ParticleBackground />
  const typingText = 'Tvořte vlastní nástroje a navyšujte svoje příjmy'
  const { displayedText, showCursor } = useTypingEffect(typingText, 60, 500)

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
      className="text-center w-full px-4"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 'clamp(1.5rem, 3vh, 2.5rem)',
        paddingTop: 'clamp(2rem, 5vh, 4rem)',
        paddingBottom: 'clamp(0.5rem, 2vh, 1.5rem)'
      }}
    >
      {/* Badge */}
      <motion.div variants={fadeInUp} className="inline-block">
        <span
          className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100/80 dark:bg-[#05050f]/80 backdrop-blur-sm rounded-full font-medium border border-gray-200 dark:border-[#070716]"
          style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5vh, 1.25rem)' }}
        >
          Vibecoding – cesta pro neprogramátory
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="font-display font-bold"
        style={{
          fontSize: 'clamp(1.75rem, 4vw + 2vh, 4rem)',
          lineHeight: '1.2'
        }}
      >
        {displayedText.split('navyšujte')[0]}
        {displayedText.includes('navyšujte') && (
          <span className="text-gradient">
            {displayedText.split('navyšujte')[1] ? 'navyšujte' + displayedText.split('navyšujte')[1] : displayedText.split('a ')[1]}
          </span>
        )}
        {showCursor && (
          <span className="inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse" />
        )}
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeInUp}
        className="max-w-3xl mx-auto text-center font-light"
        style={{
          fontSize: 'clamp(0.875rem, 1.2vw + 0.8vh, 1.25rem)',
          lineHeight: '1.6',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(0.75rem, 2vh, 1.5rem)'
        }}
      >
        <span className="block font-light">Už nechcete měnit čas za peníze.</span>
        <span className="block font-light">Chcete nástroje, které doplní vaše podnikání o konkurenční výhodu.</span>
        <span className="block font-light">Pracují za vás 24/7 a pomáhají vám i stovkám vašich klientek – zatímco vy si užíváte růst a svobodu.</span>
      </motion.p>

      {/* Warning + Buttons */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center max-w-2xl mx-auto"
        style={{
          gap: 'clamp(0.75rem, 2vh, 1.25rem)',
          paddingTop: 'clamp(2rem, 4vh, 3rem)',
          paddingBottom: '0'
        }}
      >
        <p className="text-center font-light">
          ⚠️ Varování: Stránka je dlouhá.
        </p>
        <Button onClick={handlePricingClick} variant="primary">
          Radši hned přeskočím na ceník →
        </Button>
        <p
          className="font-light text-center"
          style={{
            marginTop: 'clamp(1rem, 2vh, 1.5rem)'
          }}
        >
          ⚠️ ⚠️ Varování: Stránka je showcase různých možností použití vibecodingu na webu.
        </p>
        <Button onClick={handleScrollDown} variant="primary">
          To si nenechám ujít
        </Button>
      </motion.div>
    </motion.div>
  )

  return (
    <Section
      background="light"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      showScrollIndicator={true}
      backgroundElement={particleBackground}
    >
      <div className="relative z-10 w-full">
        {heroContent}
      </div>
    </Section>
  )
}

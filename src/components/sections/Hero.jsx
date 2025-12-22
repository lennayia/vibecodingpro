import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import AnimatedBackground from '../ui/AnimatedBackground'
import { fadeInUp } from '../../constants/animations'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { scrollToSection } from '../../utils/scroll'

export default function Hero() {
  // Optimized for performance and full screen coverage
  const particleBackground = <AnimatedBackground type="neural" count={15} />
  const typingText = 'Tvořte vlastní nástroje a\u00A0navyšujte svoje příjmy'
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
      className="text-center w-full px-4 flex flex-col justify-center gap-6 md:gap-[clamp(1rem,2vh,1.5rem)] pt-28 md:pt-[clamp(4rem,8vh,6rem)] pb-10 md:pb-[clamp(0.5rem,2vh,1.5rem)] bg-white/50 md:bg-transparent dark:bg-transparent rounded-2xl md:rounded-none"
    >
      {/* Badge */}
      <motion.div variants={fadeInUp} className="inline-block" style={{ marginBottom: 'clamp(-0.5rem, -1vh, -0.25rem)' }}>
        <span
          className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100/80 dark:bg-[#05050f]/80 backdrop-blur-sm rounded-full font-medium border border-gray-200 dark:border-[#070716]"
          style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5vh, 1.25rem)' }}
        >
          Vibecoding – cesta pro neprogramátorky
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="font-display font-bold"
        style={{
          fontSize: 'clamp(1.75rem, 4vw + 2vh, 4rem)',
          lineHeight: '1.2',
          marginTop: 'clamp(-0.5rem, -1vh, -0.25rem)'
        }}
      >
        {displayedText.split('a\u00A0navyšujte')[0]}
        <br className="hidden min-[700px]:block" />
        {displayedText.includes('navyšujte') && (
          <span className="text-gradient">
            {displayedText.split('a\u00A0navyšujte')[1] ? 'a\u00A0navyšujte' + displayedText.split('a\u00A0navyšujte')[1] : displayedText.split('nástroje ')[1]}
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
          gap: 'clamp(0.1rem, 0.5vh, 0.25rem)',
          paddingTop: 'clamp(1rem, 2vh, 2rem)'
        }}
      >
        <span className="block font-light">Už nechcete měnit čas za peníze.</span>
        <span className="block font-light">Chcete nástroje, které doplní vaše podnikání o konkurenční výhodu.</span>
        <span className="block font-light">Pracují za vás 24/7 a pomáhají vám i stovkám vašich klientek – zatímco vy si užíváte růst a svobodu.</span>
      </motion.p>

      {/* CTA Section */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center max-w-2xl mx-auto"
        style={{
          gap: 'clamp(0.75rem, 2vh, 1.25rem)',
          paddingTop: 'clamp(4rem, 8vh, 6rem)',
          paddingBottom: '0'
        }}
      >
        <p
          className="font-light text-center"
        >
          Prozkoumejte showcase různých možností vibecodingu.
        </p>
        <Button onClick={handleScrollDown} variant="primary">
          To si nenechám ujít
        </Button>
        <a
          onClick={handlePricingClick}
          className="text-accent hover:underline cursor-pointer font-light"
          style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)', marginTop: 'clamp(0.5rem, 1vh, 1rem)' }}
        >
          Radši hned přeskočím na ceník →
        </a>
      </motion.div>
    </motion.div>
  )

  return (
    <Section
      background="light"
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

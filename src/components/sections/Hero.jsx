import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import ParticleBackground from '../ui/ParticleBackground'
import { fadeInUp, stagger } from '../../constants/animations'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { scrollToSection } from '../../utils/scroll'

export default function Hero() {
  const particleBackground = <ParticleBackground />
  const typingText = 'Vytvořte si vlastní nástroje a škálujte svoje podnikání'
  const { displayedText, showCursor } = useTypingEffect(typingText, 60, 500)

  const handlePricingClick = useCallback(() => {
    scrollToSection('pricing-section')
  }, [])

  return (
    <Section
      background="light"
      className="min-h-screen flex items-center justify-center !py-4 md:!py-8 lg:!py-12 relative"
      showScrollIndicator={true}
      backgroundElement={particleBackground}
    >
      <motion.div
        className="text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 bg-gray-100/80 dark:bg-[#05050f]/80 backdrop-blur-sm rounded-full text-xl font-medium border border-gray-200 dark:border-[#070716]">
            Vibecoding – cesta pro neprogramátory
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold mb-8"
        >
          {displayedText.split('škálujte')[0]}
          {displayedText.includes('škálujte') && (
            <span className="text-gradient">
              {displayedText.split('škálujte')[1] ? 'škálujte' + displayedText.split('škálujte')[1] : displayedText.split('a ')[1]}
            </span>
          )}
          {showCursor && (
            <span className="inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse" />
          )}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-12 max-w-3xl mx-auto text-center text-xl font-light"
        >
          <span className="block text-xl font-light">Už nechcete měnit čas za peníze.</span>
          <span className="block text-xl font-light mt-6">Chcete nástroje, které doplní vaše podnikání o konkurenční výhodu.</span>
          <span className="block text-xl font-light">Pracují za vás 24/7 a pomáhají vám i stovkám vašich klientek – zatímco vy si užíváte růst a svobodu.</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center"
        >
          <Button onClick={handlePricingClick}>
            Zobrazit ceník
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}

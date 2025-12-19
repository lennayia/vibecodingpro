import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { BadgeCheck } from 'lucide-react'
import { fadeIn, slideUp } from '../../constants/animations'

export default function PricingGuaranteeNew() {
  const [shouldShake, setShouldShake] = useState(false)

  return (
    <Section background="dark" centered={true} showScrollIndicator={true}>
      {/* Main container - relative positioning for absolute stamps */}
      <div className="max-w-4xl mx-auto relative" style={{ minHeight: 'clamp(600px, 80vh, 900px)' }}>

        {/* Help text */}
        <motion.div
          className="text-center"
          style={{ marginBottom: 'clamp(2rem, 4vh, 4rem)' }}
          {...slideUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl font-light">
            Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi,</a> pomůžu vám vybrat. Možná vás podpoří záruka vrácení peněz nebo odpovědi na otázky, které můžou vzbuzovat obavy.
          </p>
        </motion.div>

        {/* Guarantee card - simple, no overflow tricks */}
        <motion.div {...fadeIn}>
          <div
            className="rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700"
            style={{
              paddingTop: 'clamp(2rem, 4vh, 4rem)',
              paddingBottom: 'clamp(3rem, 6vh, 6rem)',
              paddingLeft: 'clamp(1.5rem, 3vw, 3rem)',
              paddingRight: 'clamp(1.5rem, 3vw, 3rem)'
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-center"
              style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)', marginBottom: 'clamp(1.5rem, 3vh, 3rem)' }}
            >
              <BadgeCheck className="w-8 h-8 text-accent" strokeWidth={2} />
              <h2 className="font-display font-bold text-accent text-3xl">Osobní garance</h2>
            </div>

            {/* Guarantee text */}
            <p className="text-center text-xl font-light max-w-2xl mx-auto">
              Věřím tomu, co dělám. Pokud vám spolupráce do týdne od uběhnutí první 55min. konzultace nedá jasno, férově vám vrátím peníze.
            </p>
          </div>
        </motion.div>

        {/* Stamp imprint - kousek vlevo a dolů od středu */}
        <motion.img
          src="/vibecodingotisk-razitka.webp"
          alt="Otisk razítka"
          initial={{ y: -200, opacity: 0, rotate: 0 }}
          whileInView={shouldShake ? {
            y: 0,
            opacity: 1,
            rotate: [0, -6, 6, -4, 4, -2, 2, 0]
          } : {
            y: 0,
            opacity: 1,
            rotate: 0
          }}
          viewport={{ once: true }}
          transition={shouldShake ? {
            y: { duration: 0 },
            opacity: { duration: 0 },
            rotate: {
              duration: 1.8,
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
              ease: "easeInOut"
            }
          } : {
            delay: 1.5,
            type: "spring",
            stiffness: 300,
            damping: 10
          }}
          className="absolute object-contain"
          style={{
            width: 'clamp(5.5rem, 13vw, 12rem)',
            height: 'clamp(5.5rem, 13vw, 12rem)',
            left: '35%',
            top: '68%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5
          }}
        />

        {/* Floating stamp - MOBILE - vpravo a nahoru od středu */}
        <img
          src="/vibecoding-razitko.webp"
          alt="Razítko"
          className="block sm:hidden absolute object-contain pointer-events-none"
          style={{
            width: 'clamp(9rem, 24vw, 12rem)',
            height: 'clamp(9rem, 24vw, 12rem)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            left: '55%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
        />

        {/* Floating stamp - DESKTOP - vpravo a nahoru od středu */}
        <motion.img
          src="/vibecoding-razitko.webp"
          alt="Razítko"
          initial={{ x: 600, y: -300, opacity: 0, rotate: 0 }}
          animate={shouldShake ? {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: [0, -6, 6, -4, 4, -2, 2, 0]
          } : {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0
          }}
          transition={shouldShake ? {
            x: { duration: 0 },
            y: { duration: 0 },
            opacity: { duration: 0 },
            rotate: {
              duration: 1.8,
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
              ease: "easeInOut"
            }
          } : {
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut"
          }}
          onAnimationComplete={() => {
            if (!shouldShake) {
              setTimeout(() => setShouldShake(true), 0)
            }
          }}
          className="hidden sm:block absolute object-contain pointer-events-none"
          style={{
            width: 'clamp(13rem, 18vw, 20rem)',
            height: 'clamp(13rem, 18vw, 20rem)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            left: '55%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
        />
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { BadgeCheck } from 'lucide-react'
import { fadeIn, slideUp } from '../../constants/animations'

export default function PricingGuarantee() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)

  return (
    <Section background="dark" centered={true} className="overflow-visible" showScrollIndicator={true}>
      <div className="w-full relative overflow-visible" style={{ padding: 'clamp(1rem, 2vh, 2rem)' }}>
        {/* Help text */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: 'clamp(3rem, 6vh, 6rem)' }}
          {...slideUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl font-light">
            Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi,</a> pomůžu vám vybrat. Možná vás podpoří záruka vrácení peněz nebo odpovědi na otázky, které můžou vzbuzovat obavy.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          onAnimationComplete={() => {
            setTimeout(() => setShouldAnimate(true), 200)
          }}
        >
          {/* Wrapper - razítka jsou relativní k tomuto kontejneru */}
          <div className="max-w-3xl mx-auto relative">
            
            {/* Hlavní karta */}
            <div 
              className="rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700 relative overflow-visible" 
              style={{ 
                paddingTop: 'clamp(2rem, 4vh, 4rem)', 
                paddingBottom: 'clamp(10rem, 18vh, 14rem)', 
                paddingLeft: 'clamp(2rem, 4vh, 4rem)', 
                paddingRight: 'clamp(2rem, 4vh, 4rem)' 
              }}
            >
              {/* Nadpis */}
              <div className="flex items-center justify-center" style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)', marginBottom: 'clamp(1.5rem, 3vh, 3rem)' }}>
                <BadgeCheck className="w-8 h-8 text-accent" strokeWidth={2} />
                <h2 className="font-display font-bold text-accent text-3xl">Osobní garance</h2>
              </div>
              
              {/* Text */}
              <p className="text-center text-xl font-light max-w-2xl mx-auto">
                Věřím tomu, co dělám. Pokud vám spolupráce do týdne od uběhnutí první 55min. konzultace nedá jasno, férově vám vrátím peníze.
              </p>

              {/* ===== OTISK RAZÍTKA ===== */}
              <motion.img
                src="/vibecodingotisk-razitka.webp"
                alt="Otisk razítka"
                initial={{ 
                  y: -250, 
                  opacity: 0, 
                  rotate: -5,
                  scale: 0.8
                }}
                animate={shouldAnimate ? {
                  y: 0,
                  opacity: 1,
                  rotate: shouldShake ? [0, -4, 4, -3, 3, -1, 1, 0] : 0,
                  scale: 1
                } : {
                  y: -250,
                  opacity: 0,
                  rotate: -5,
                  scale: 0.8
                }}
                transition={shouldShake ? {
                  rotate: {
                    duration: 0.6,
                    times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
                    ease: "easeInOut"
                  }
                } : {
                  duration: 0.5,
                  delay: 0.8,
                  ease: "easeOut"
                }}
                className="absolute object-contain"
                style={{
                  width: 'clamp(4rem, 7vw, 5.5rem)',
                  height: 'clamp(4rem, 7vw, 5.5rem)',
                  left: 'clamp(30%, 35%, 40%)',
                  bottom: 'clamp(2rem, 5vw, 4rem)',
                  zIndex: 10
                }}
              />
            </div>

            {/* ===== RAZÍTKO - STATIC pro mobily ===== */}
            <img
              src="/vibecoding-razitko.webp"
              alt="Razítko"
              className="block sm:hidden absolute object-contain"
              style={{
                width: 'clamp(4rem, 12vw, 5rem)',
                height: 'clamp(4rem, 12vw, 5rem)',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))',
                right: 'clamp(28%, 32%, 36%)',
                bottom: 'clamp(2rem, 5vw, 4rem)',
                zIndex: 100
              }}
            />

            {/* ===== RAZÍTKO - ANIMOVANÉ pro desktop ===== */}
            <motion.img
              src="/vibecoding-razitko.webp"
              alt="Razítko"
              initial={{ 
                x: 300, 
                y: -250, 
                opacity: 0, 
                rotate: 20 
              }}
              animate={shouldAnimate ? {
                x: 0,
                y: 0,
                opacity: 1,
                rotate: shouldShake ? [0, -6, 6, -4, 4, -2, 2, 0] : 0
              } : {
                x: 300,
                y: -250,
                opacity: 0,
                rotate: 20
              }}
              transition={shouldShake ? {
                rotate: {
                  duration: 0.6,
                  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
                  ease: "easeInOut"
                }
              } : {
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
              }}
              onAnimationComplete={() => {
                if (shouldAnimate && !shouldShake) {
                  setTimeout(() => setShouldShake(true), 100)
                }
              }}
              className="hidden sm:block absolute object-contain"
              style={{
                width: 'clamp(5rem, 8vw, 7rem)',
                height: 'clamp(5rem, 8vw, 7rem)',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))',
                right: 'clamp(28%, 33%, 38%)',
                bottom: 'clamp(2rem, 5vw, 4rem)',
                zIndex: 50
              }}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
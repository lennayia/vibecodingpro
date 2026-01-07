import { motion } from 'framer-motion'
import { useState, memo } from 'react'
import Section from '../layout/Section'
import { BadgeCheck } from 'lucide-react'
import { fadeIn, slideUp } from '../../constants/animations'

// Constants for consistent sizing
const ICON_SIZE = 'guarantee-icon-size'
const STROKE_WIDTH = 2

const PricingGuaranteeNew = memo(function PricingGuaranteeNew() {
  const [shouldShake, setShouldShake] = useState(false)
  const [shouldShakeRazitko, setShouldShakeRazitko] = useState(false)

  return (
    <Section background="dark" centered={true} showScrollIndicator={true} className="mobile-section-spacing-top">
      {/* Main container - relative positioning for absolute stamps */}
      <div className="max-w-4xl mx-auto relative guarantee-container-min-height">

        {/* Help text */}
        <motion.div
          className="text-center guarantee-help-mb"
          {...slideUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-fluid-guarantee-help font-light">
            Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi,</a> pomůžu vám vybrat. Možná vás podpoří záruka vrácení peněz nebo odpovědi na otázky, které můžou vzbuzovat obavy.
          </p>
        </motion.div>

        {/* Guarantee card - simple, no overflow tricks */}
        <motion.div {...fadeIn}>
          <div className="rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700 guarantee-card-padding">
            {/* Header */}
            <div className="flex items-center justify-center guarantee-header-gap guarantee-header-mb">
              <BadgeCheck className={`${ICON_SIZE} text-accent`} strokeWidth={STROKE_WIDTH} />
              <h2 className="font-display font-bold text-accent text-fluid-guarantee-title">Osobní garance</h2>
            </div>

            {/* Guarantee text */}
            <p className="text-center text-fluid-guarantee-text font-light max-w-2xl mx-auto">
              Věřím tomu, co dělám. Pokud vám spolupráce do týdne od uběhnutí první hod. konzultace nedá jasno, férově vám vrátím peníze.
            </p>
          </div>
        </motion.div>

        {/* Stamp imprint - MOBILE - kousek vlevo a dolů od středu */}
        <motion.img
          src="/vibecodingotisk-razitka.webp"
          alt="Otisk razítka"
          width="512"
          height="238"
          loading="lazy"
          decoding="async"
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
          className="block sm:hidden absolute object-contain stamp-imprint"
          style={{
            width: 'clamp(5.5rem, 13vw, 12rem)',
            height: 'clamp(5.5rem, 13vw, 12rem)',
            left: 'calc(27% + 2vw)',
            top: 'calc(68% + 4vh)',
            transform: 'translate(-50%, -50%)',
            zIndex: 5
          }}
        />

        {/* Stamp imprint - DESKTOP - na středu horizontálně */}
        <motion.img
          src="/vibecodingotisk-razitka.webp"
          alt="Otisk razítka"
          width="512"
          height="238"
          loading="lazy"
          decoding="async"
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
          className="hidden sm:block absolute object-contain stamp-imprint"
          style={{
            width: 'clamp(6rem, 17vw, 16rem)',
            height: 'clamp(6rem, 17vw, 16rem)',
            left: '40%',
            top: 'calc(68% + 4vh)',
            transform: 'translate(-50%, -50%)',
            zIndex: 5
          }}
        />

        {/* Floating stamp - MOBILE - vpravo a dolů */}
        <img
          src="/vibecoding-razitko.webp"
          alt="Razítko"
          width="480"
          height="276"
          loading="lazy"
          decoding="async"
          className="block sm:hidden absolute object-contain pointer-events-none"
          style={{
            width: 'clamp(9rem, 24vw, 12rem)',
            height: 'clamp(9rem, 24vw, 12rem)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            left: 'calc(58% + 3vw)',
            top: 'calc(58% + 4vh)',
            transform: 'translate(-50%, -50%) rotate(-10deg)',
            zIndex: 10
          }}
        />

        {/* Floating stamp - DESKTOP - vpravo a nahoru od středu */}
        <motion.img
          src="/vibecoding-razitko.webp"
          alt="Razítko"
          width="480"
          height="276"
          loading="lazy"
          decoding="async"
          initial={{ x: 150, y: -100, opacity: 0, rotate: -10 }}
          whileInView={shouldShakeRazitko ? {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: [-10, -16, -4, -14, -6, -12, -8, -10]
          } : {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: -10
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={shouldShakeRazitko ? {
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
            if (!shouldShakeRazitko) {
              setTimeout(() => setShouldShakeRazitko(true), 0)
            }
          }}
          className="hidden sm:block absolute object-contain pointer-events-none"
          style={{
            width: 'clamp(9.6rem, 24vw, 30rem)',
            height: 'clamp(9.6rem, 24vw, 30rem)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            left: 'calc(60% + 3vw)',
            top: 'calc(52% - 3.5vh)',
            transform: 'translate(-50%, -50%) rotate(-10deg)',
            zIndex: 10
          }}
        />
      </div>
    </Section>
  )
})

export default PricingGuaranteeNew

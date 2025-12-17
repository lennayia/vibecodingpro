import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { BadgeCheck } from 'lucide-react'
import { fadeIn, slideUp } from '../../constants/animations'

export default function PricingGuarantee() {
  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center overflow-visible" showScrollIndicator={true}>
      <div className="w-full relative overflow-visible">
        {/* Help text */}
        <motion.div
          className="mb-12 text-center max-w-3xl mx-auto"
          {...slideUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl font-light">
            Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi,</a> pomůžu vám vybrat. Možná vám pomůže záruka vrácení peněz nebo odpovědi na otázky, které můžou vzbuzovat obavy.
          </p>
        </motion.div>

        <motion.div {...fadeIn}>
          <div className="max-w-3xl mx-auto">
            <div className="pt-8 pb-6 px-8 rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-6">
                <BadgeCheck className="w-8 h-8 text-accent" strokeWidth={2} />
                <h2 className="font-display font-bold text-accent text-3xl">Osobní garance</h2>
              </div>
              <p className="text-center text-xl font-light max-w-2xl mx-auto mb-36">
                Věřím tomu, co dělám. Pokud vám spolupráce do týdne od uběhnutí 2hodinové úvodní konzultace nedá jasno, férově vám vrátím peníze.
              </p>

              {/* Stamp imprint */}
              <div className="flex justify-center pt-8 pb-4">
                <motion.img
                  src="/vibecodingotisk-razitka.webp"
                  alt="Otisk razítka"
                  initial={{ y: -200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                  className="w-48 h-48 object-contain -ml-18"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stamp tool - positioned relative to entire section */}
        <motion.img
          src="/vibecoding-razitko.webp"
          alt="Razítko"
          initial={{ x: 600, y: -300, opacity: 0, rotate: 0 }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: [0, -5, 5, -5, 5, -3, 3, 0]
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            rotate: {
              delay: 1.5,
              duration: 1.2,
              ease: "easeInOut"
            }
          }}
          className="absolute w-64 h-64 object-contain z-50"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            right: '25%',
            top: '35%'
          }}
        />
      </div>
    </Section>
  )
}

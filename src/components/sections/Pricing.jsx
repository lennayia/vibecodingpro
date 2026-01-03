import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { BadgeCheck, Clock, Gift } from 'lucide-react'
import { pricingPackages } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

export default function Pricing() {

  return (
    <Section background="dark" centered={true} showScrollIndicator={true}>
      <div id="pricing-section">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center pt-12 md:pt-0 mb-12 md:mb-[clamp(2rem,4vh,4rem)] leading-tight">
            Kolik služba stojí?
          </h2>

          <motion.div
            className="max-w-3xl mx-auto mb-12 md:mb-[clamp(2rem,4vh,4rem)]"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-2xl bg-gray-100 dark:bg-[#05050f] border border-gray-200 dark:border-gray-700 p-8 md:p-[clamp(1.5rem,3vh,2rem)]">
              <div className="flex items-center justify-center gap-4 md:gap-[clamp(0.5rem,1vh,0.75rem)] mb-6 md:mb-[clamp(1rem,2vh,1.5rem)]">
                <Clock className="w-6 h-6" strokeWidth={2} />
                <h3 className="font-display font-bold">Zaváděcí ceny</h3>
              </div>

              <p className="text-center text-xl font-light mb-6 md:mb-[clamp(1rem,2vh,1.5rem)] pb-8 md:pb-[clamp(1.5rem,3vh,3rem)]">
                platí pro objednání do 4. 1. 2026 do 23:59 hod. Počet míst je omezený.
              </p>

              <div className="mb-6 md:mb-[clamp(1rem,2vh,1.5rem)]">
                <CountdownTimer targetDate="2026-01-04T22:00:00" />
              </div>

              <div className="text-center flex flex-col gap-4 md:gap-[clamp(0.5rem,1vh,0.75rem)]">
                <p className="font-semibold pb-12 md:pb-[clamp(3rem,6vh,6rem)]">
                  Pak se ceny postupně zvýší až na 5 500 / 13 900 / 29 900 Kč podle variant.
                </p>
                <ul className="text-xl font-light mx-auto max-w-fit flex flex-col gap-2 md:gap-[clamp(0.25rem,0.5vh,0.5rem)]">
                  <li className="flex items-center justify-center gap-4 md:gap-[clamp(0.5rem,1vh,0.75rem)]">
                    <span className="text-accent">✦</span>
                    <span>Kdo dřív přijde, na toho se dostane</span>
                    <span className="text-accent">✦</span>
                  </li>
                  <li className="flex items-center justify-center gap-4 md:gap-[clamp(0.5rem,1vh,0.75rem)]">
                    <span className="text-accent">✦</span>
                    <span>Víc ušetří</span>
                    <span className="text-accent">✦</span>
                  </li>
                  <li className="flex items-center justify-center gap-4 md:gap-[clamp(0.5rem,1vh,0.75rem)]">
                    <span className="text-accent">✦</span>
                    <span>Nabídne dřív vlastní digi produkt</span>
                    <span className="text-accent">✦</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export function PricingPackages() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-12 !pb-12 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div id="pricing-packages-section">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-12 md:mb-[clamp(2rem,3vh,3rem)]">
            Vyberte si cestu, která vám sedí
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-[clamp(1rem,2vh,2rem)]">
            {pricingPackages.map((pkg, index) => (
              <PricingCard
                key={index}
                {...pkg}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

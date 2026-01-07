import { motion } from 'framer-motion'
import { memo } from 'react'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { Clock } from 'lucide-react'
import { pricingPackages } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

function Pricing() {
  return (
    <Section background="none" className="bg-white dark:bg-[#05050f] mobile-section-spacing-top" centered={true} showScrollIndicator={true}>
      <div id="pricing-section">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center pt-12 md:pt-0 mb-12 md:mb-fluid-pricing-xl leading-tight">
            Kolik služba stojí?
          </h2>

          <motion.div
            className="max-w-3xl mx-auto mb-12 md:mb-fluid-pricing-xl"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-2xl border border-accent/20 dark:border-gray-700 p-8 md:p-fluid-pricing-lg">
              <div className="flex items-center justify-center gap-4 md:gap-fluid-pricing-sm mb-6 md:mb-fluid-pricing-md">
                <Clock className="w-6 h-6" strokeWidth={2} />
                <h3 className="font-display font-bold">Zaváděcí ceny</h3>
              </div>

              <p className="text-center text-xl font-light mb-6 md:mb-fluid-pricing-md pb-8 md:pb-fluid-pricing-lg">
                platí pro objednání do 11. 1. 2026 do 23:59 hod. Počet míst je omezený.
              </p>

              <div className="mb-6 md:mb-fluid-pricing-md">
                <CountdownTimer targetDate="2026-01-11T22:00:00" />
              </div>

              <div className="text-center flex flex-col gap-4 md:gap-fluid-pricing-sm">
                <p className="font-semibold pb-12 md:pb-fluid-pricing-xxl">
                  Pak se ceny začnou zvyšovat až na 5 500 / 13 900 / 29 900 Kč podle variant.
                </p>
                <ul className="text-xl font-light mx-auto max-w-fit flex flex-col gap-2 md:gap-fluid-pricing-xs">
                  <li className="flex items-center justify-center gap-4 md:gap-fluid-pricing-sm">
                    <span className="text-accent">✦</span>
                    <span>Kdo dřív přijde, na toho se dostane</span>
                    <span className="text-accent">✦</span>
                  </li>
                  <li className="flex items-center justify-center gap-4 md:gap-fluid-pricing-sm">
                    <span className="text-accent">✦</span>
                    <span>Víc ušetří</span>
                    <span className="text-accent">✦</span>
                  </li>
                  <li className="flex items-center justify-center gap-4 md:gap-fluid-pricing-sm">
                    <span className="text-accent">✦</span>
                    <span>Dřív nabídne vlastní digi produkt</span>
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

export default memo(Pricing)

function PricingPackages() {
  return (
    <Section background="light" customPadding="pt-12 pb-12 md:pt-4 md:pb-8 lg:pt-8 lg:pb-16 px-[4%]" className="min-h-screen flex items-center justify-center mobile-section-spacing-top" showScrollIndicator={true}>
      <div id="pricing-packages-section">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center pt-12 md:pt-12 lg:pt-16 mb-12 md:mb-fluid-pricing-lg">
            Vyberte si cestu, která vám sedí
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-fluid-pricing-md">
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

export { PricingPackages }
export const MemoizedPricingPackages = memo(PricingPackages)

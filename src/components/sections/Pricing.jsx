import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { BadgeCheck, Clock } from 'lucide-react'
import { pricingPackages } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

export default function Pricing() {

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div id="pricing-section">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Kolik to stojí?
          </h2>

          <motion.div
            className="mb-16 max-w-3xl mx-auto"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-gray-100 dark:bg-[#05050f] border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-6 h-6" strokeWidth={2} />
                <h3 className="font-display font-bold">Zaváděcí ceny</h3>
              </div>

              <p className="text-center mb-6 text-xl font-light">
                platí pro objednání do 24. 12. 2025 do 16:00 hod. Počet míst je omezený.
              </p>

              <div className="mb-6">
                <CountdownTimer targetDate="2025-12-24T16:00:00" />
              </div>

              <div className="text-center space-y-3">
                <p className="font-semibold">
                  Pak se ceny postupně zvýší na 5 500 / 13 900 / 29 900 Kč podle variant.
                </p>
                <ul className="text-xl font-light space-y-2 inline-block text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span>Kdo dřív přijde, na toho se dostane</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span>Víc ušetří</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✦</span>
                    <span>Nabídne dřív vlastní digi produkt</span>
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
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div id="pricing-packages-section">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-12 text-center">
            Vyberte si cestu, která vám sedí
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
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

export function PricingGuarantee() {
  return (
    <Section background="dark" className="flex items-center justify-center !pt-2 !pb-12 md:!pt-2 md:!pb-12 lg:!pt-4 lg:!pb-16" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div
          {...fadeIn}
          className="w-full"
        >

        </motion.div>
      </div>
    </Section>
  )
}


import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { BadgeCheck, Clock } from 'lucide-react'
import { pricingPackages } from '../../constants/data'

export default function Pricing() {

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div id="pricing-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Kolik to stojí?
          </h2>

          <motion.div
            className="mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gray-100 dark:bg-[#05050f] border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-6 h-6" strokeWidth={2} />
                <h3 className="font-display font-bold">Zaváděcí ceny</h3>
              </div>

              <p className="text-center mb-6 text-xl font-light">
                platí jen do 17. 12. 2025 do 22:00 hod.
              </p>

              <div className="mb-6">
                <CountdownTimer targetDate="2025-12-17T22:00:00" />
              </div>

              <div className="text-center space-y-3">
                <p className="font-semibold">
                  Pak se ceny zvýší na 4 500 / 13 900 / 29 900 Kč podle variant.
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
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div id="pricing-packages-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-bold mb-16 text-center">
            Vyberte si cestu, která vám sedí
          </h3>

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <motion.div
            className="mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi,</a> pomůžu vám vybrat. Možná vám pomůže záruka vrácení peněz nebo odpovědi na otázky, které můžou vzbuzovat obavy.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="pt-2 pb-10 px-8 rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BadgeCheck className="w-6 h-6 text-accent" strokeWidth={2} />
                <h3 className="font-display font-bold text-accent">Osobní garance</h3>
              </div>
              <p className="text-center text-xl font-light">
                Věřím tomu, co dělám. Pokud vám spolupráce nedá jasno, férově vám vrátím peníze.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

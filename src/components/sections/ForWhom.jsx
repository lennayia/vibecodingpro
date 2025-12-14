import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from '../layout/Section'

export default function ForWhom() {
  const targetGroups = [
    "Koučky a mentorky",
    "Terapeutky a poradkyně",
    "Lektorky a vzdělávačky",
    "Online podnikatelky",
    "Tvůrkyně kurzů a programů"
  ]

  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !py-4 md:!py-8 lg:!py-12" showScrollIndicator={true}>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Pro koho je vibecoding?
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <ul className="space-y-4">
              {targetGroups.map((group, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent">✦</span>
                  <span className="text-xl">{group}</span>
                  <span className="text-accent">✦</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl mb-3">
              Společné máte jedno:
            </p>
            <p className="text-xl font-semibold">
              Chcete pomoct víc lidem – ale nechcete dřít víc hodin.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

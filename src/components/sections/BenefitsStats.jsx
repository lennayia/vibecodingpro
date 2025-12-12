import { motion } from 'framer-motion'
import Section from '../layout/Section'
import StatCard from '../ui/StatCard'
import { benefits } from '../../constants/data'

export default function BenefitsStats() {
  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-bold text-5xl md:text-6xl mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Reálný dopad
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <StatCard
              key={index}
              value={benefit.value}
              label={benefit.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PhaseCard from '../ui/PhaseCard'
import { phases } from '../../constants/data'

export default function Phases() {
  return (
    <Section background="dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center">
            7 fází k vaší aplikaci
          </h2>
          <p className="mb-20 text-center max-w-3xl mx-auto">
            Strukturovaný proces, který vás provede od nápadu až po spuštěnou aplikaci
          </p>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <PhaseCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

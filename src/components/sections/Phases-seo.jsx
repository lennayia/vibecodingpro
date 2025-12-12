import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PhaseCard from '../ui/PhaseCard'
import { phases } from '../../constants/data'

export default function PhasesSeo() {
  return (
    <Section background="dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Jak společně rozběhneme tvorbu vaší aplikace
          </h2>
          <p className="mb-20 text-center max-w-3xl mx-auto text-xl font-light">
            Krok za krokem od nápadu až po funkční aplikaci
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

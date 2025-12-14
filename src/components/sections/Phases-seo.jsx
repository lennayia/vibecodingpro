import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PhaseCard from '../ui/PhaseCard'
import { phases } from '../../constants/data'

export default function PhasesSeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-6 md:mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Společně rozběhneme tvorbu
          </h2>
          <p className="mb-8 md:mb-12 lg:mb-16 text-center max-w-3xl mx-auto text-xl font-light">
            Krok za krokem od nápadu až po funkční aplikaci
          </p>

          <div className="grid md:grid-cols-2 gap-2 md:gap-6">
            {phases.map((phase, index) => (
              <PhaseCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

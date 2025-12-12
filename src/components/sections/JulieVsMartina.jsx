import { motion } from 'framer-motion'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import { comparisonData } from '../../constants/data'

export default function JulieVsMartina() {
  return (
    <Section background="dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center">
            Dvě cesty. Jeden obor.
          </h2>
          <p className="mb-16 text-center max-w-3xl mx-auto">
            Obě učí ženy zdravě spát. Ale jejich život vypadá úplně jinak.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              data={comparisonData.martina}
              direction="left"
              delay={0}
            />

            <ComparisonCard
              data={comparisonData.julie}
              direction="right"
              delay={0}
            />
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold mb-4">
              Stejné znalosti. Stejná vášeň pomáhat.
            </p>
            <p className="font-display font-bold">
              Úplně jiný život.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

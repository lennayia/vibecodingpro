import { motion } from 'framer-motion'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import { comparisonData } from '../../constants/data'

export default function ComparisonSeo() {
  return (
    <Section background="dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Aplikace může změnit vaše podnikání
          </h2>
          <h3 className="font-display font-bold mb-6 text-center">
            Dvě ženy. Jeden obor. Dvě cesty.
          </h3>
          <p className="mb-24 text-center max-w-3xl mx-auto text-xl font-light">
            <span className="block text-xl font-light">Martina a Julie: obě učí klientky zdravě spát.</span>
            <span className="block text-xl font-light">Stejné znalosti. Stejná vášeň pomáhat.</span>
            <span className="block mt-6 text-xl font-light">Ale životy mají jiné.</span>
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
        </motion.div>
      </div>
    </Section>
  )
}

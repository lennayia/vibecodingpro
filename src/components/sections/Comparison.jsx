import { motion } from 'framer-motion'
import Section from '../layout/Section'
import ComparisonCard from '../ui/ComparisonCard'
import { comparisonData } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

export default function ComparisonSeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-1 !pb-4 md:!pt-2 md:!pb-6 lg:!pt-4 lg:!pb-8" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Dobré nástroje posouvají
          </h2>
          <h3 className="font-display font-bold mb-6 text-center">
            Dvě ženy. Jeden obor. Dvě cesty.
          </h3>
          <p className="mb-8 md:mb-12 lg:mb-16 text-center max-w-3xl mx-auto text-xl font-light">
            <span className="block text-xl font-light">Martina a Julie: obě učí klientky zdravě spát.</span>
            <span className="block text-xl font-light">Stejné znalosti. Stejná vášeň pomáhat.</span>
            <span className="block mt-6 text-xl font-light">Ale životy mají jiné.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              data={comparisonData.martina}
              direction="left"
              delay={0}
              background="dark"
            />

            <ComparisonCard
              data={comparisonData.julie}
              direction="right"
              delay={0}
              background="dark"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

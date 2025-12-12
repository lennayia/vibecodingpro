import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Button from '../ui/Button'

export default function CTASeo() {
  return (
    <Section background="light">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-5xl md:text-7xl mb-8">
          Jste ready na vlastní aplikaci?
        </h2>
        <p className="mb-4">
          Přestaňte snít a začněte tvořit. Vaše klientky na vás čekají.
        </p>
        <p className="mb-12">
          Za 6 měsíců budete mít hotovou aplikaci. Za rok budete pomáhat stovkám lidí.
          A cítit se svobodně.
        </p>
        <Button size="lg">
          Objednat konzultaci
        </Button>
        <p className="text-gray-500 dark:text-gray-500 mt-6">
          Změna začíná rozhodnutím. Udělejte ho dnes.
        </p>
      </motion.div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Button from '../ui/Button'

export default function CTASeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={false}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold mb-8">
          Věřím, že se už těšíte na svoji budoucí aplikaci
        </h2>
        <p className="mb-4 text-xl font-light">
          Přestaňte snít a začněte tvořit. Vaše klientky na vás čekají.
        </p>
        <p className="mb-12 text-xl font-light">
          Za 6 měsíců budete mít hotovou aplikaci. Za rok budete pomáhat stovkám lidí.
          A cítit se svobodně.
        </p>
        <Button size="lg">
          Už chci začít
        </Button>
        <p className="text-gray-500 dark:text-gray-500 mt-6 text-xl font-light">
          Změna začíná rozhodnutím. Udělejte ho dnes.
        </p>
      </motion.div>
    </Section>
  )
}

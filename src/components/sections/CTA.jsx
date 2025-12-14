import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'

export default function CTA() {
  const handleClick = useCallback(() => {
    document.getElementById('pricing-packages-section')?.scrollIntoView({ behavior: 'smooth' })
  }, [])
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
        <ul className="mb-12 text-xl font-light space-y-3 mx-auto max-w-fit">
          <li className="flex items-center gap-3 justify-center">
            <span className="text-accent">✦</span>
            <span>Přestaňte snít a začněte tvořit</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <span className="text-accent">✦</span>
            <span>Vaše klientky na vás čekají</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <span className="text-accent">✦</span>
            <span>Za 6 měsíců budete mít hotovou aplikaci</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <span className="text-accent">✦</span>
            <span>Za rok budete pomáhat stovkám lidí</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <span className="text-accent">✦</span>
            <span>A cítit se svobodně</span>
            <span className="text-accent">✦</span>
          </li>
        </ul>
        <Button size="lg" onClick={handleClick}>
          Už chci začít
        </Button>
        <h3 className="text-gray-500 dark:text-gray-500 mt-6 font-display font-bold">
          Změna začíná rozhodnutím. Udělejte ho dnes.
        </h3>
      </motion.div>
    </Section>
  )
}

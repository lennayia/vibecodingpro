import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { slideUpLarge } from '../../constants/animations'

export default function CTA() {
  const handleClick = useCallback(() => {
    document.getElementById('pricing-packages-section')?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={false}>
      <motion.div
        className="text-center"
        {...slideUpLarge}
      >
        <h2 className="font-display font-bold mb-8">
          Věřím, že se už těšíte na svůj budoucí digitální nástroj
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
            <span>Už brzy můžete mít hotovo</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center gap-3 justify-center">
            <span className="text-accent">✦</span>
            <span>Třeba za rok budete pomáhat stovkám lidí</span>
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
        <div className="mt-6">
          <h3 className="font-display font-bold">
            Změna začíná rozhodnutím.
          </h3>
          <h3 className="font-display font-bold">
            Udělejte ho dneska.
          </h3>
        </div>
      </motion.div>
    </Section>
  )
}

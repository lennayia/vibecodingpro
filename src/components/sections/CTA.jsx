import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { slideUpLarge } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

export default function CTA() {
  const handleClick = useCallback(() => {
    scrollToSection('pricing-packages-section')
  }, [])
  return (
    <Section background="light" centered={true} showScrollIndicator={false}>
      <motion.div
        className="text-center"
        {...slideUpLarge}
      >
        <h2 className="font-display font-bold" style={{ marginBottom: 'clamp(2rem, 4vh, 4rem)' }}>
          Věřím, že se už těšíte na svůj budoucí digitální nástroj
        </h2>
        <ul
          className="text-xl font-light mx-auto max-w-fit"
          style={{
            marginBottom: 'clamp(3rem, 6vh, 6rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(0.75rem, 1.5vh, 1.5rem)'
          }}
        >
          <li className="flex items-center justify-center" style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
            <span className="text-accent">✦</span>
            <span>Přestaňte snít a začněte tvořit</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center" style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
            <span className="text-accent">✦</span>
            <span>Vaše klientky na vás čekají</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center" style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
            <span className="text-accent">✦</span>
            <span>Už brzy můžete mít hotovo</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center" style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
            <span className="text-accent">✦</span>
            <span>Třeba za rok budete pomáhat stovkám lidí</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center" style={{ gap: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
            <span className="text-accent">✦</span>
            <span>A cítit se svobodně</span>
            <span className="text-accent">✦</span>
          </li>
        </ul>
        <Button size="lg" onClick={handleClick}>
          Už chci začít
        </Button>
        <div style={{ marginTop: 'clamp(1.5rem, 3vh, 3rem)' }}>
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

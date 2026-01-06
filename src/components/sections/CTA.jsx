import { motion } from 'framer-motion'
import { useCallback, memo } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { slideUpLarge } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

const CTA = memo(function CTA() {
  const handleClick = useCallback(() => {
    scrollToSection('pricing-packages-section')
  }, [])
  return (
    <Section background="light" centered={true} showScrollIndicator={false}>
      <motion.div
        className="text-center"
        {...slideUpLarge}
      >
        <h2 className="font-display font-bold text-fluid-cta-heading cta-heading-mb">
          Věřím, že se už těšíte na svůj budoucí digitální nástroj
        </h2>
        <ul className="text-fluid-cta-list font-light mx-auto max-w-fit cta-list-mb flex flex-col cta-list-gap">
          <li className="flex items-center justify-center cta-list-item-gap">
            <span className="text-accent">✦</span>
            <span>Přestaňte snít a začněte tvořit</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center cta-list-item-gap">
            <span className="text-accent">✦</span>
            <span>Vaše klientky na vás čekají</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center cta-list-item-gap">
            <span className="text-accent">✦</span>
            <span>Už brzy můžete mít hotovo</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center cta-list-item-gap">
            <span className="text-accent">✦</span>
            <span>Třeba za rok budete pomáhat stovkám lidí</span>
            <span className="text-accent">✦</span>
          </li>
          <li className="flex items-center justify-center cta-list-item-gap">
            <span className="text-accent">✦</span>
            <span>A cítit se svobodně</span>
            <span className="text-accent">✦</span>
          </li>
        </ul>
        <Button size="lg" onClick={handleClick}>
          Už chci začít
        </Button>
        <div className="cta-subheading-mt">
          <h3 className="font-display font-bold text-fluid-cta-subheading">
            Změna začíná rozhodnutím.
          </h3>
          <h3 className="font-display font-bold text-fluid-cta-subheading">
            Udělejte ho dneska.
          </h3>
        </div>
      </motion.div>
    </Section>
  )
})

export default CTA

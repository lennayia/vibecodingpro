import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

export default function WhyConsultation() {
  const handleClick = useCallback(() => {
    scrollToSection('pricing-packages-section')
  }, [])
  const withoutConsultation = [
    "Ztratíte měsíce pokusů a omylů",
    "Investujete do špatných nástrojů",
    "Vzdáte to předčasně z důvodu frustrace",
    "Vaše konkurence vás předběhne"
  ]

  const withConsultation = [
    "Získáte jasnou roadmapu od nultého dne",
    "Vyhnete se většině drahých chyb",
    "Máte podporujícího průvodce celou cestou",
    "Začínáte pracovat na své podnikatelské budoucnosti a polopasivním příjmu"
  ]

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Co vám služba přinese
          </h2>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <p className="text-xl font-light">
                Nemusíte na to být sami.
              </p>
              <p className="text-xl font-light">
                Nemusíte strávit půl roku nachytřováním ze všemožných různých zdrojů. Ráda vám předám, co jsem se za 6 měsíců s vibecodingem naučila. Dělám to prostřednictvím online sezení 1:1.
              </p>
              <p className="text-xl font-light">
                Vaše cesta se urychlí.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              background="light"
              animate={true}
              delay={0}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="font-display font-bold mb-4">
                Sami možná
              </h3>
              <ul className="space-y-3">
                {withoutConsultation.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#9A0303] mt-1">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card
              background="light"
              animate={true}
              delay={0}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="font-display font-bold mb-4">
                Spolu určitě
              </h3>
              <ul className="space-y-3">
                {withConsultation.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <motion.div
            className="mt-12 text-center"
            {...slideUp}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-4 text-xl font-light">
              Investicí do spolupráce uspoříte čas, peníze i nervy
            </p>
            <p className="mb-8 text-xl font-light">
              Vaše nový nástroj vám investovaný čas vrátí
            </p>
            <Button onClick={handleClick}>
              Vybrat službu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

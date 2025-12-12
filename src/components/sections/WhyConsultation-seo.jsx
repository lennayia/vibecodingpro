import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function WhyConsultation() {
  const withoutConsultation = [
    "Ztratíte měsíce pokusů a omylů",
    "Investujete do špatných nástrojů",
    "Vzdáte to předčasně z důvodu frustrace",
    "Vaše konkurence vás předběhne"
  ]

  const withConsultation = [
    "Jasná roadmapa od nultého dne",
    "Vyhnete se většině drahých chyb",
    "Máte podporujícího průvodce celou cestou",
    "Začínáte pracovat na své podnikatelské budoucnosti a polopasivním příjmu"
  ]

  return (
    <Section background="light">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Co vám konzultace přinese
          </h2>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="space-y-4 mb-20">
              <p className="text-xl font-light">
                Nemusíte na to být sami.
              </p>
              <p className="text-xl font-light">
                Nemusíte strávit půl roku nachytřováním ze všemožných různých zdrojů. Ráda vám předám, co jsem se za 6 měsíců s vibecodingem naučila. A udělám to prostřednictvím online konzultací.
              </p>
              <p className="text-xl font-light">
                Vaše cesta se urychlí.
              </p>
              </div>
            <Button>
              Objednat konzultaci
            </Button>
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
                Bez konzultace možná
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
                S konzultací
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xl font-light">
              Investicí do konzultace uspoříte čas, peníze i nervy
            </p>
            <p className="text-xl font-light">
              Vaše aplikace vám investovaný čas vrátí
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'

export default function WhyConsultation() {
  const withoutConsultation = [
    "Ztratíte měsíce pokusů a omylů",
    "Investujete do špatných nástrojů",
    "Vzdáte to předčasně z frustrace",
    "Vaše konkurence vás předběhne"
  ]

  const withConsultation = [
    "Jasná roadmapa od nultého dne",
    "Vyhněte se drahým chybám",
    "Podporovaný průvodce celou cestou",
    "Hotová aplikace za 6 měsíců"
  ]

  return (
    <Section background="light">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center">
            Proč konzultace?
          </h2>
          <p className="mb-16 text-center max-w-3xl mx-auto">
            Protože správný začátek rozhoduje o úspěchu
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              background="light"
              animate={true}
              delay={0}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="font-display font-bold text-2xl mb-4">
                Bez konzultace
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
              <h3 className="font-display font-bold text-2xl mb-4">
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
            <p className="mb-4">
              Investice do konzultace = úspora času, peněz a nervů
            </p>
            <p className="font-semibold">
              Vaše aplikace vám vrátí investici během prvních měsíců provozu
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

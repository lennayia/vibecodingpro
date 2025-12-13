import { motion } from 'framer-motion'
import Section from '../layout/Section'

export default function WhyMeSeo() {
  const credentials = [
    {
      title: "Ani řádek kódu",
      description: "Dneska chápu pasti vibecodingu. Sama jsem do nich šlapala a zjišťovala, kudy vede cesta."
    },
    {
      title: "8 aplikací",
      description: "CoachPro, PaymentsPro, PianoPro... To jsou reálné projekty pro reálné lidi."
    },
    {
      title: "2 500+ hodin praxe",
      description: "Chyby, pokusy, průlomy. Předám vám je, a vy to zvládnete rychleji. A nebojte, chyby si uděláte i svoje."
    },
    {
      title: "Učím, co sama dělám",
      description: "Nepřebírám informace, zkouším a ověřuju na vlastní kůži. Učím z toho, co funguje."
    }
  ]

  return (
    <Section background="dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Proč zrovna já?
          </h2>

          <div className="space-y-8">
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-700 pb-8 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <h3 className="font-display font-bold">
                    {item.title}
                  </h3>
                  <p>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from '../layout/Section'

export default function WhyMeSeo() {
  const credentials = [
    {
      title: "Sama nejsem programátorka",
      description: "Prošla jsem si to samé co vy - vím, kde jsou pasti"
    },
    {
      title: "X funkčních aplikací",
      description: "CoachPro, PaymentsPro, DigiPro... reálné projekty v praxi"
    },
    {
      title: "X měsíců vibecoding denně",
      description: "Vím, co funguje a co je ztráta času"
    },
    {
      title: "Učím, co sama dělám",
      description: "Žádná teorie - jen to, co jsem ověřila"
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
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-16 text-center" style={{ lineHeight: '1.3' }}>
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
                  <h3 className="font-display font-bold text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-lg">
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

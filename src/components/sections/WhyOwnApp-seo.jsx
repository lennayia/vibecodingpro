import { motion } from 'framer-motion'
import Section from '../layout/Section'

export default function WhyOwnAppSeo() {
  const benefits = [
    {
      title: "Pracuje za vás 24/7",
      description: "Spíte, přesto pomáháte. Aplikace nespí nikdy."
    },
    {
      title: "Konec opakování dokola",
      description: "Už žádné \„Tohle jsem říkala snad stokrát.\“ Teď to řekne appka."
    },
    {
      title: "Škálujete bez vyhoření",
      description: "Rostete, ale nedřete. Tak to má být."
    },
    {
      title: "Vypadáte profesionálně",
      description: "G-sheets jsou fajn. Ale vlastní appka – to je jiná liga!"
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
            Proč mít vlastní aplikaci?
          </h2>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
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
                    {benefit.title}
                  </h3>
                  <p>
                    {benefit.description}
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

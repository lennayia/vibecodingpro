import { motion } from 'framer-motion'
import Section from '../layout/Section'

export default function ImagineSection() {
  const items = [
    {
      text: "Je ráno a vy kontrolujete telefon. ",
      highlight: "15 nových klientek se registrovalo přes noc.",
      rest: " Žádné schůzky, žádné emaily. Vaše aplikace jim poskytla přesně to, co potřebovaly."
    },
    {
      text: "",
      highlight: "Nemusíte odmítat zákaznice",
      rest: " kvůli nedostatku času. Vaše kapacita je neomezená. Pomáháte desítkám, stovkám lidí současně - a každý dostává personalizovanou péči."
    },
    {
      text: "Vaše klientky vás milují - aplikace jim ",
      highlight: "šetří čas, dává jim výsledky",
      rest: " a je k dispozici kdykoliv potřebují. Doporučují vás dál, protože jste inovativní a profesionální."
    },
    {
      text: "Místo aby vás práce vyčerpávala, ",
      highlight: "cítíte se naplněná a svobodná.",
      rest: " Máte čas na rodinu, koníčky, dovolenou. A váš příjem? Ten roste, i když si dopřejete volno."
    }
  ]

  return (
    <Section background="dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-12 text-center">
            Představte si...
          </h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                {item.text}
                <span className="font-semibold">{item.highlight}</span>
                {item.rest}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="leading-relaxed font-semibold text-center pt-8"
            >
              Tohle není sen. Tohle je realita s vlastní aplikací.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

const items = [
  {
    text: "Je ráno a vy kontrolujete telefon. ",
    highlight: "Ooo:), 6 nových klientek se registrovalo přes noc!",
    rest: " Jedna VIP schůzka, tři emaily. Vaše aplikace klientkám poskytla přesně to, co potřebovaly."
  },
  {
    text: "",
    highlight: "Nemusíte klientky odmítat",
    rest: " kvůli nedostatku času. Vaše kapacita je neomezená. Pomáháte desítkám, možná stovkám lidí současně – přesto každý dostává osobní péči."
  },
  {
    text: "Vaše klientky vás milují – aplikace jim ",
    highlight: "šetří čas, dává jim výsledky",
    rest: " a je k dispozici kdykoliv potřebují. Doporučují vás dál, protože jste inovativní a profesionální."
  },
  {
    text: "Místo aby vás práce vyčerpávala, ",
    highlight: "cítíte se naplněná a svobodná.",
    rest: " Máte čas na rodinu, koníčky, dovolenou. A váš příjem roste, i když si dopřejete volno."
  }
]

export default function ImagineSection() {
  const handleClick = useCallback(() => {
    scrollToSection('phases-section')
  }, [])

  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-12 text-center" style={{ lineHeight: '1.3' }}>
            Den s vaší aplikací
          </h2>

          <div className="space-y-8 pl-[10px]">
            {items.map((item, index) => (
              <motion.p
                key={index}
                {...slideUp}
                transition={{ delay: index * 0.1 }}
                className="leading-relaxed"
              >
                {item.text}
                <span className="font-semibold">{item.highlight}</span>
                {item.rest}
              </motion.p>
            ))}

            <div className="pt-16 space-y-6">
              <motion.p
                {...slideUp}
                transition={{ delay: 0.5 }}
                className="leading-relaxed font-semibold text-center text-xl"
              >
                Zdá se vám to jako sen?
              </motion.p>
              <motion.p
                {...slideUp}
                transition={{ delay: 0.6 }}
                className="leading-relaxed font-semibold text-center text-xl"
              >
                I tohle může být váš den.
              </motion.p>
              <motion.div
                {...slideUp}
                transition={{ delay: 0.7 }}
                className="flex justify-center pt-4"
              >
                <Button onClick={handleClick}>
                  Jak to funguje
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

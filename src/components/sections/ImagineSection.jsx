import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { Sunrise, Sun, Moon, Palmtree } from 'lucide-react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

const timelineItems = [
  {
    time: "8:00",
    period: "Ráno",
    Icon: Sunrise,
    title: "Kontrolujete telefon",
    description: "6 nových klientek se registrovalo přes noc! Jedna VIP schůzka, tři emaily. Vaše aplikace klientkám poskytla přesně to, co potřebovaly."
  },
  {
    time: "12:00",
    period: "Poledne",
    Icon: Sun,
    title: "Neomezená kapacita",
    description: "Nemusíte klientky odmítat kvůli nedostatku času. Pomáháte desítkám lidí současně – přesto každý dostává osobní péči."
  },
  {
    time: "18:00",
    period: "Večer",
    Icon: Moon,
    title: "Spokojené klientky",
    description: "Aplikace jim šetří čas, dává výsledky a je k dispozici kdykoliv. Doporučují vás dál, protože jste inovativní a profesionální."
  },
  {
    time: "Každý den",
    period: "Svoboda",
    Icon: Palmtree,
    title: "Cítíte se naplněná",
    description: "Místo vyčerpání máte čas na rodinu, koníčky, dovolenou. A váš příjem roste, i když si dopřejete volno."
  }
]

export default function ImagineSection() {
  const handleClick = useCallback(() => {
    scrollToSection('phases-section')
  }, [])

  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-6 text-center" style={{ lineHeight: '1.3' }}>
            Den s vaší aplikací
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-accent/20" />

            <div className="space-y-6">
              {timelineItems.map((item, index) => {
                const Icon = item.Icon
                return (
                  <motion.div
                    key={index}
                    {...slideUp}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-20 md:pl-28"
                  >
                    {/* Icon & Time */}
                    <div className="absolute left-0 flex items-center gap-3">
                      <div className="w-16 md:w-24 h-16 md:h-24 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-[#0a0a1a] p-4 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-accent font-bold text-lg">{item.time}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">・ {item.period}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 space-y-2 max-w-2xl mx-auto">
            <motion.p
              {...slideUp}
              transition={{ delay: 0.7 }}
              className="font-semibold text-center text-2xl"
            >
              Zdá se vám to jako sen?
            </motion.p>
            <motion.p
              {...slideUp}
              transition={{ delay: 0.8 }}
              className="font-semibold text-center text-2xl"
            >
              I tohle může být váš den.
            </motion.p>
            <motion.div
              {...slideUp}
              transition={{ delay: 0.9 }}
              className="flex justify-center pt-4"
            >
              <Button onClick={handleClick}>
                Jak to funguje
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

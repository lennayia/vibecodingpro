import { motion } from 'framer-motion'
import { Sunrise, Sun, Moon, Palmtree } from 'lucide-react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'

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
    title: "Cítíte naplnění",
    description: "Místo vyčerpání máte čas na rodinu, koníčky, dovolenou. A váš příjem roste, i když si dopřejete volno."
  }
]

export default function ImagineSection() {
  return (
    <Section background="light" centered={true} className="!pt-12 !pb-12 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-8 md:mb-[clamp(0.2rem,1vh,1rem)]" style={{ lineHeight: '1.3' }}>
            Den s vaší aplikací
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line with gradient from morning to evening using theme colors */}
            <div
              className="absolute top-0 bottom-0 left-4 md:left-[2.75rem] w-2 rounded-full z-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 205, 0.25), rgba(0, 0, 205, 0.9), rgba(0, 0, 205, 0.05))'
              }}
            >
              <div
                className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, rgba(13, 221, 13, 0.25), rgba(13, 221, 13, 0.9), rgba(13, 221, 13, 0.05))'
                }}
              />
            </div>

            <div className="flex flex-col gap-8 md:gap-[clamp(0.2rem,1vh,1rem)]">
              {timelineItems.map((item, index) => {
                const Icon = item.Icon
                return (
                  <motion.div
                    key={index}
                    {...slideUp}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-12 md:pl-28"
                  >
                    {/* Icon & Time */}
                    <div className="absolute left-0 flex items-center gap-2 z-10">
                      <div className="relative w-10 md:w-24 h-10 md:h-24 rounded-full">
                        {/* Solid background to hide the line */}
                        <div className="absolute inset-0 rounded-full bg-[#f8f8f8] dark:bg-[#05050f]" />
                        {/* Icon circle with accent background */}
                        <div className="relative w-full h-full rounded-full bg-accent/10 border border-accent md:border-2 flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-10 md:h-10 text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white dark:bg-[#0a0a1a] rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm p-4 md:p-[clamp(0.4rem,1.5vh,1rem)]">
                      <div className="flex items-baseline gap-2 mb-2 md:mb-[clamp(0.1rem,0.5vh,0.5rem)]">
                        <span className="text-accent font-bold text-base md:text-lg">{item.time}</span>
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">・ {item.period}</span>
                      </div>
                      <h3 className="font-display font-bold text-base md:text-lg mb-2 md:mb-[clamp(0.1rem,0.5vh,0.5rem)]">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base" style={{ lineHeight: 'clamp(1.3, 1.5, 1.75)' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { Clock, RotateCcw, TrendingUp, Briefcase } from 'lucide-react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'

const benefits = [
  {
    title: "Pracuje za vás 24/7",
    description: "Spíte, přesto pomáháte. Aplikace nespí nikdy.",
    Icon: Clock
  },
  {
    title: "Konec opakování dokola",
    description: "Už žádné \„Tohle jsem říkala snad stokrát.\" Teď to řekne apka.",
    Icon: RotateCcw
  },
  {
    title: "Škálujete bez vyhoření",
    description: "Rostete, ale nedřete. Tak to má být.",
    Icon: TrendingUp
  },
  {
    title: "Vypadáte profi",
    description: "G-sheets jsou fajn. Ale vlastní apka – to je jiná liga!",
    Icon: Briefcase
  }
]

export default function WhyOwnAppSeo() {

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center !py-4 md:!py-8 lg:!py-12" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Proč mít třeba vlastní aplikaci?
          </h2>

          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.Icon
              return (
                <motion.div
                  key={index}
                  className="border-b border-gray-700 pb-8 last:border-b-0"
                  {...slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-end text-left pl-[10px]">
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                      <h3 className="font-display font-bold">
                        {benefit.title}
                      </h3>
                    </div>
                    <p>
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

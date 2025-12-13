import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import StatCard from '../ui/StatCard'
import { benefits } from '../../constants/data'

export default function CaseStudySeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <Badge>Realita</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-8" style={{ lineHeight: '1.3' }}>
            Takhle to může vypadat v praxi
          </h2>

          <div className="text-center mb-8">
            <h3 className="font-display font-bold mb-6">
              „Pomáhám téměř 320 klientkám měsíčně místo 80.<br />A to jsem s aplikací teprv na začátku."
            </h3>
            <p className="text-xl font-light mb-20">
              Jana, koučka
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div>
              <p className="text-xl font-light mb-3 text-center">Před aplikací</p>
              <p className="mb-4">Jana trávila 20 hodin týdně konzultacemi. Popravdě, bylo to už za hranou. Odmítala klientky, nemohla jich vzít víc.</p>
              <p>A trápila se pocitem, že její znalosti pomůžou jen omezené skupině lidí. Ale upřímně – práce ji vyčerpávala. Vydělávala jen počtem odpracovaných konzultací.</p>
            </div>

            <div>
              <p className="text-xl font-light mb-3 text-center">Dneska</p>
              <p className="mb-4">Její aplikace radí s životními situacemi, sleduje pokroky a posílá denní tipy, funguje 24 hodin denně. Jana teď pracuje na vylepšování aplikace a zbytek času věnuje prémiovým konzultacím za vyšší cenu. Nebo rodině.</p>
              <p>Nejlepší je, že si její služby může dovolit mnohem víc klientek než dřív.</p>
            </div>
          </div>

          <div className="mb-16">
            <motion.p
              className="text-center font-light italic max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              „Cítím se svobodná. Moje práce pomáhá lidem, i když spím. A já mám konečně čas žít. To je nejvíc."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <StatCard
                key={index}
                value={benefit.value}
                label={benefit.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

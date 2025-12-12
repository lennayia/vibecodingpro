import { motion } from 'framer-motion'
import Section from '../layout/Section'
import StatCard from '../ui/StatCard'
import { benefits } from '../../constants/data'

export default function BenefitsStats() {
  return (
    <section className="pt-0 pb-32 px-6 dark:bg-[#070716]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-display font-bold mb-4">
            "Teď pomáhám 200 klientkám měsíčně místo 15"
          </h3>
          <p className="text-xl font-light">
            Jana, nutriční poradkyně
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="font-semibold mb-3">Před:</p>
            <p>Jana trávila 20 hodin týdně individuálními konzultacemi. Musela odmítat nové klientky. Měla pocit, že její znalosti mají omezenou hodnotu - vydělávala jen když aktivně pracovala.</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Dnes:</p>
            <p>Její aplikace nabízí personalizované jídelníčky, trackování pokroku a denní tipy. Funguje 24/7. Jana tráví 5 hodin týdně na vylepšování aplikace a zbytek času věnuje prémiové konzultace za vyšší cenu.</p>
          </div>
        </div>

        <div className="pt-32 pb-16">
          <motion.p
            className="text-center font-light italic max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            „Cítím se konečně svobodná. Moje práce pomáhá lidem i když spím. A mám čas na rodinu. To je k nezaplacení."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <StatCard
              key={index}
              value={benefit.value}
              label={benefit.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function CaseStudy() {
  return (
    <Section background="light">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge>Příběh úspěchu</Badge>
          </div>

          <Card background="dark">
            <div className="mb-8">
              <h3 className="font-display font-bold mb-4">
                "Teď pomáhám 200 klientkám měsíčně místo 15"
              </h3>
              <p>
                Jana, nutriční poradkyně
              </p>
            </div>

            <div className="space-y-6">
              <p>
                <span className="font-semibold">Před:</span> Jana trávila 20 hodin týdně individuálními konzultacemi. Musela odmítat nové klientky. Měla pocit, že její znalosti mají omezenou hodnotu - vydělávala jen když aktivně pracovala.
              </p>

              <p>
                <span className="font-semibold">Dnes:</span> Její aplikace nabízí personalizované jídelníčky, trackování pokroku a denní tipy. Funguje 24/7. Jana tráví 5 hodin týdně na vylepšování aplikace a zbytek času věnuje prémiové konzultace za vyšší cenu.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-accent mb-2">13x</div>
                  <div>více klientek</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-accent mb-2">75%</div>
                  <div>méně času</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-accent mb-2">5x</div>
                  <div>vyšší příjem</div>
                </div>
              </div>

              <p className="italic pt-6">
                "Cítím se konečně svobodná. Moje práce pomáhá lidem i když spím. A mám čas na rodinu. To je k nezaplacení."
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

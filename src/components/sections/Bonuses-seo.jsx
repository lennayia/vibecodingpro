import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { Gift } from 'lucide-react'

export default function BonusesSeo() {
  const bonuses = [
    {
      title: "VIBE",
      items: [
        "Po konzultaci dostanete osobní roadmapu v PDF – přesný plán, co dělat dál."
      ]
    },
    {
      title: "VIBE + CODING",
      items: [
        "Kompletní dokumentace – roadmapa, zadání projektu a technický základ v PDF. Máte všechno černé na bílém k dispozici na pořád.",
        "4 návody krok za krokem – GitHub, Supabase, Vercel + tahák pro komunikaci s AI",
        "Nahrávky, ke kterým se můžete libovolně vracet",
        "2 týdny email podpora – nezůstanete sama",
        "Check-in call (30 min) – po 2 týdnech zkontrolujeme pokrok",
        "Sleva na následnou konzultaci"
      ]
    }
  ]

  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Bonusy
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold mb-6 text-center">
                  {bonus.title}
                </h3>
                <div className="space-y-4">
                  {bonus.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

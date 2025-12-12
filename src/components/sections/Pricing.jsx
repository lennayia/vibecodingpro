import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'

export default function Pricing() {
  const packages = [
    {
      title: "TEORIE",
      duration: "2 hodiny",
      price: "3.900 Kč",
      description: "Pro ženy, které chtějí nejdřív pochopit, jestli je to pro ně",
      features: [
        "Jak Claude Code funguje a co je možné",
        "Jaké nástroje potřebujete a proč",
        "7 fází podrobně vysvětlených",
        "Analýza vašeho konkrétního use case",
        "Roadmapa: co dělat krok za krokem",
        "Q&A"
      ],
      resultTitle: "Výsledek:",
      resultDescription: "Rozumíte procesu, víte jestli do toho jít, máte plán",
      buttonText: "Rezervovat TEORIE",
      isPopular: false
    },
    {
      title: "TEORIE + PRAXE",
      duration: "5 hodin",
      price: "9.900 Kč",
      description: "Pro ženy, které chtějí nejen vědět, ale rovnou začít",
      features: [
        "<span class='font-semibold'>Vše z TEORIE (2h) +</span>",
        "<strong>Hands-on setup:</strong> Společně nainstalujeme a nastavíme všechny nástroje (1h)",
        "<strong>Product brief:</strong> Vytvoříme základ vaší aplikace společně (1h)",
        "<strong>První kroky:</strong> Inicializace projektu, první komponenty, první kód (1h)"
      ],
      resultTitle: "Výsledek:",
      resultDescription: "Rozumíte PLUS máte hotovo - nástroje běží, projekt existuje, první kód napsaný",
      buttonText: "Rezervovat TEORIE + PRAXE",
      isPopular: true
    }
  ]

  return (
    <Section background="dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center">
            Balíčky konzultací
          </h2>
          <p className="mb-16 text-center max-w-3xl mx-auto">
            Vyberte si cestu, která vám sedí
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <PricingCard
                key={index}
                {...pkg}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi</a> a pomůžu vám vybrat
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

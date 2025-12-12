import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { BadgeCheck, Clock } from 'lucide-react'

export default function PricingSeo() {
  const packages = [
    {
      title: "VIBE",
      duration: "2x 1 hodina",
      price: "3 500 Kč",
      description: "Pro ženy, které chtějí pochopit<br />a rozhodnout se",
      features: [
        "Jak vibecoding funguje a co všechno můžete vytvořit",
        "Které nástroje potřebujete a proč",
        "7 kroků k aplikaci – podrobně vysvětlených",
        "Analýza vašeho konkrétního záměru",
        "Roadmapa: co dělat krok za krokem",
        "Q&A"
      ],
      resultTitle: "Výsledek:",
      resultDescription: "Jasná roadmapa, víte přesně co a jak – a jestli je to pro vás.<br />Vyhnete se bloudění.",
      testimonials: [
        {
          quote: '„Za 2 hodiny jsem pochopila víc než za měsíc googlování."',
          author: "Petra, koučka"
        },
        {
          quote: '„Konečně mi někdo vysvětlil, o co go."',
          author: "Martina, terapeutka"
        }
      ],
      bonus: "Po konzultaci dostanete osobní roadmapu v PDF – přesný plán, co dělat dál.",
      buttonText: "Chci VIBE",
      isPopular: false
    },
    {
      title: "VIBE + CODING",
      duration: "6x 1 hodina",
      price: "9 900 Kč",
      description: "Pro ženy, které chtějí pochopit<br />a rovnou začít",
      features: [
        "<span class='font-semibold'>Všechno z VIBE (2h) +</span>",
        "<strong>Praktické nastavení:</strong> Společně nainstalujeme a rozběhneme všechny nástroje (1h)",
        "<strong>Zadání projektu:</strong> Sepíšeme, co má vaše aplikace umět (1h)",
        "<strong>První kroky:</strong> Rozjedeme projekt a napíšeme první funkce (1h)",
        "<strong>Další kroky:</strong> Prostor na vaše otázky a řešení konkrétních funkcí (1h)"
      ],
      resultTitle: "Výsledek:",
      resultDescription: "Rozumíte, PLUS máte kus hotovo - nástroje běží, projekt existuje, první kód je napsaný.<br />Ušetříte desítky hodin zkoušení.",
      testimonials: [
        {
          quote: '„Přišla jsem s nápadem, odcházela s rozjetým projektem. Nejlepší investice."',
          author: "Katka, mentorka"
        }
      ],
      bonus: "Kompletní dokumentace – roadmapa, zadání projektu a technický základ v PDF. Máte vše černé na bílém.",
      buttonText: "Chci VIBE+CODING",
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
          <h2 className="font-display font-bold mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Vyberte si svůj start
          </h2>
          <p className="mb-16 text-center max-w-3xl mx-auto text-xl font-light">
            Která cesta je ta vaše?
          </p>

          <motion.div
            className="mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gray-100 dark:bg-[#05050f] border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-6 h-6" strokeWidth={2} />
                <h3 className="font-display font-bold">Zaváděcí cena</h3>
              </div>

              <p className="text-center mb-6 text-xl font-light">
                Tato cena platí jen do 15. 12. 2025 do 22:00 hod.
              </p>

              <div className="mb-6">
                <CountdownTimer targetDate="2025-12-15T22:00:00" />
              </div>

              <div className="text-center space-y-3">
                <p className="font-semibold">
                  Pak zdražuji na 4 900 / 12 900 Kč
                </p>
                <p className="text-xl font-light">
                  Kdo dřív přijde, ten víc ušetří. A taky bude mít dřív vlastní apku.
                </p>
              </div>
            </div>
          </motion.div>

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
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BadgeCheck className="w-6 h-6 text-accent" strokeWidth={2} />
                <h3 className="font-display font-bold text-accent">Osobní garance</h3>
              </div>
              <p className="text-center text-xl font-light">
                Věřím tomu, co dělám. Pokud vám spolupráce nedá jasno, férově vám vrátím peníze.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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

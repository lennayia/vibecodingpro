import { motion } from 'framer-motion'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { BadgeCheck, Clock } from 'lucide-react'

export default function PricingSeo() {
  const packages = [
    {
      title: "VIBE",
      availableSpots: 5,
      serviceType: "konzultace",
      price: "2 900 Kč",
      description: "Pro ženy, které chtějí pochopit<br />a rozhodnout se",
      features: [
        "2x 1 hodina",
        "Jak vibecoding funguje a co všechno můžete vytvořit",
        "Které nástroje potřebujete a proč",
        "7 kroků k aplikaci – podrobně vysvětlených",
        "Analýza vašeho konkrétního záměru",
        "Roadmapa: co dělat krok za krokem",
        "Q&A – prostor na vaše otázky"
      ],
      resultTitle: "Výsledek:",
      resultDescription: "Jasná roadmapa, víte přesně co a jak – a jestli je to pro vás.<br />Vyhnete se bloudění.",
      testimonials: [
        {
          quote: '„Za 2 hodiny jsem pochopila víc než za měsíc googlování."',
          author: "Petra, koučka"
        },
      ],
      bonuses: [
        "Osobní roadmapa v PDF"
      ],
      discount: "300 Kč na další 2hod. konzultaci",
      buttonText: "Chci VIBE",
      isPopular: false
    },
    {
      title: "VIBE+CODE",
      availableSpots: 3,
      serviceType: "mentoring",
      price: "9 900 Kč",
      description: "Pro ženy, které chtějí pochopit<br />a rovnou začít",
      features: [
        "<span class='font-semibold'>6x 1 hodina +++ PLUS +++</span>",
        "<span class='font-semibold'>Všechno z VIBE (2h)</span>",
        "<strong>Praktické nastavení:</strong> Společně nainstalujeme a rozběhneme všechny nástroje (1h)",
        "<strong>Zadání projektu:</strong> Sepíšeme, co má vaše aplikace umět (1h)",
        "<strong>První kroky:</strong> Rozjedeme projekt a napíšeme první funkce (1h)",
        "<strong>Další kroky:</strong> Prostor na vaše otázky a řešení konkrétních funkcí (1h)"
      ],
      resultTitle: "Výsledek:",
      resultDescription: "Rozumíte, PLUS máte kus hotovo - nástroje běží, projekt existuje, první kód je napsaný.<br />Ušetříte desítky hodin zkoušení.",
      testimonials: [
        {
          quote: '„Konečně mi někdo vysvětlil, o co go."',
          author: "Martina, terapeutka"
        }
      ],
      bonuses: [
        "Všechny z VIBE",
        "Kompletní dokumentace",
        "6 návodů krok za krokem",
        "Nahrávky",
        "2 týdny e-mail podpora"
      ],
      discount: "600 Kč na další 2hod. konzultaci",
      buttonText: "Chci mentoring",
      isPopular: true
    },
    {
      title: "VIBE+CODING",
      availableSpots: 1,
      serviceType: "VIP mentoring",
      price: "24 900 Kč",
      description: "Pro ženy, které chtějí pochopit,<br />začít a dokončit",
      features: [
        "<span class='font-semibold'>10x 1 hodina</span>",
        "<span class='font-semibold'>Všechno z VIBE+CODE (6h) +</span>",
        "<strong>Společné co-working sessions (4h)</strong> – Pracujeme spolu v reálném čase.",
        "<strong>Dokud to neběží</strong> – Žádné &bdquo;hodně štěstí&ldquo;. Dotáhneme funkční apku.",
        "<strong>30 dní přímý přístup ke mně (WhatsApp)</strong> – Zaseknete se, napíšete, odpovím do 24 hodin."
      ],
      resultTitle: "Výsledek:",
      resultDescription: "<ul class='list-disc pl-5 space-y-2'><li>Funkční aplikace. Rozumíte jí a umíte ji rozvíjet.</li><li>Přímá linka k mentorce</li><li>Garantovaný výsledek.</li><li>Osobní vztah</li></ul>",
      testimonials: [
        {
          quote: '„Přišla jsem s nápadem, odcházela s rozjetým projektem. Nejlepší investice do podnikání, co jsem kdy udělala."',
          author: "Katka, mentorka"
        }
      ],
      bonuses: [
        "všechny z VIBE+CODE",
        "Check-in call (30 min) – po 2 týdnech zkontrolujeme pokrok"
      ],
      discount: "1 000 Kč na další 2hod. konzultaci",
      buttonText: "Chci VIP",
      isPopular: false
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
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Kolik to stojí?
          </h2>

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
                <h3 className="font-display font-bold">Zaváděcí ceny</h3>
              </div>

              <p className="text-center mb-6 text-xl font-light">
                platí jen do 15. 12. 2025 do 22:00 hod.
              </p>

              <div className="mb-6">
                <CountdownTimer targetDate="2025-12-15T22:00:00" />
              </div>

              <div className="text-center space-y-3">
                <p className="font-semibold">
                  Pak se ceny zvýší na 4 500 / 12 900 / 29 900 Kč
                </p>
                <p className="text-xl font-light">
                  Kdo dřív přijde, ten víc ušetří. A taky bude mít dřív vlastní apku.
                </p>
              </div>
            </div>
          </motion.div>

          <h3 className="font-display font-bold mt-40 mb-40 text-center">
            Vyberte si cestu, která vám sedí
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

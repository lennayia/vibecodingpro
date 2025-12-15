import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { Gift, Check, X, ChevronDown } from 'lucide-react'

export default function BonusesTabsSeo() {
  const [activeTab, setActiveTab] = useState(0)

  const packages = [
    { name: "VIBE", key: "vibe" },
    { name: "VIBE+CODING", key: "vibeCode" },
    { name: "VIBECODING VIP", key: "vibeCoding" }
  ]

  const bonusItems = [
    {
      name: "Osobní roadmapa v PDF",
      description: "Váš osobní plán krok za krokem. Přesně víte, do čeho se pustit dál.",
      vibe: true,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "Kompletní dokumentace v PDF",
      description: "Zadání projektu a technický základ v PDF. Máte všechno černé na bílém k dispozici na pořád.",
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "6 návodů krok za krokem + tahák pro AI",
      description: "Jednoduché návody na další nástroje, které je fajn používat + tahák pro komunikaci s AI.",
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "Nahrávky schůzek",
      description: "Můžete se k nim libovolně vracet. Nic vám neuteče ani v případě, že to hned nepochytíte.",
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "2 týdny e-mailová podpora",
      description: "Když se zaseknete a nebudete si vědět rady, napište mi. Odpovím do 24 hodin.",
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "Zápisky z jednotlivých schůzek",
      description: "Po každé schůzce dostanete shrnutí – co máte hotové a co je další krok.",
      vibe: false,
      vibeCode: false,
      vibeCoding: true
    },
    {
      name: "Check-in call (30 min)",
      description: "Po 2 týdnech od poslední schůzky se spojíme a podíváme se na váš pokrok. Ujistíte se, že jdete správně.",
      vibe: false,
      vibeCode: false,
      vibeCoding: true
    },
    {
      name: "Sleva na další konzultaci v Kč",
      description: "Chcete pokračovat? Máte zvýhodněnou cenu na další spolupráci v rámci 2hodinové konzultace (z hodnoty 2 900 Kč) a platí 3 měsíce od data zakoupení spolupráce v níže popsaných variantách.",
      vibe: "300",
      vibeCode: "600",
      vibeCoding: "1 000"
    }
  ]

  // Get bonuses for active tab
  const getActiveBonuses = () => {
    const pkg = packages[activeTab]
    return bonusItems.filter(item => item[pkg.key] !== false)
  }

  return (
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-white dark:text-white" strokeWidth={2} />
              <h2 className="font-display font-bold" style={{ lineHeight: '1.3' }}>
                Co dostanete navíc
              </h2>
            </div>
            <h3 className="font-display font-bold max-w-2xl mx-auto">
              <span className="text-gradient">Bonusy, které vám usnadní cestu</span>
            </h3>
          </div>

          {/* Tabs - konzistentní tlačítka */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {packages.map((pkg, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 font-display font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-accent text-gray-900 shadow-lg'
                    : 'border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#05050f] hover:border-accent dark:hover:border-accent hover:shadow-md'
                }`}
                style={{ borderRadius: '50px' }}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          {/* Bonus list for active tab */}
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {getActiveBonuses().map((item, index) => {
                  const pkg = packages[activeTab]
                  const value = item[pkg.key]

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-gray-50 dark:bg-[#0a0a1a]"
                    >
                      <div className="flex items-start gap-3">
                        {value === true ? (
                          <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                        ) : (
                          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-accent">{value}</span>
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold mb-1">{item.name}</h4>
                          <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

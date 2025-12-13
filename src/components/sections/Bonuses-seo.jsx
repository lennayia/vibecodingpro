import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { Gift, Check, X, ChevronDown } from 'lucide-react'

export default function BonusesSeo() {
  const [expandedItems, setExpandedItems] = useState([])
  const packages = ["VIBE", "VIBE+CODE", "VIBE+CODING"]

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index))
    } else {
      setExpandedItems([...expandedItems, index])
    }
  }

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
      name: "Zápisky z jednotlivých schůzek",
      description: "Po každé schůzce dostanete shrnutí – co máte hotové a co je další krok.",
      vibe: false,
      vibeCode: false,
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

  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto">
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

          <div className="overflow-x-auto">
            <div>
              {/* Header */}
              <div className="grid grid-cols-[3fr_2fr] gap-4 mb-4 items-center">
                <div></div>
                <div className="flex justify-center items-center gap-2">
                  {packages.map((pkg, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <p className="text-xs sm:text-sm font-light">{pkg}</p>
                      {index < packages.length - 1 && (
                        <span className="text-accent">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-2">
                {bonusItems.map((item, index) => {
                  const isExpanded = expandedItems.includes(index)
                  const hasDescription = item.description

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`grid grid-cols-[3fr_2fr] gap-4 p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-[#05050f] items-center ${hasDescription ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-[#0a0a1a] transition-colors' : ''}`}
                        onClick={() => hasDescription && toggleItem(index)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-sm sm:text-base font-medium">{item.name}</div>
                          {hasDescription && (
                            <ChevronDown
                              className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                              strokeWidth={2}
                            />
                          )}
                        </div>
                        <div className="flex justify-center items-center gap-3">
                          {item.vibe === true ? (
                            <Check className="w-5 h-5 text-gray-900 dark:text-white" strokeWidth={2} />
                          ) : item.vibe === false ? (
                            <X className="w-5 h-5 text-gray-300 dark:text-gray-600" strokeWidth={2} />
                          ) : (
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.vibe}</span>
                          )}
                          <span className="text-accent">|</span>
                          {item.vibeCode === true ? (
                            <Check className="w-5 h-5 text-gray-900 dark:text-white" strokeWidth={2} />
                          ) : item.vibeCode === false ? (
                            <X className="w-5 h-5 text-gray-300 dark:text-gray-600" strokeWidth={2} />
                          ) : (
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.vibeCode}</span>
                          )}
                          <span className="text-accent">|</span>
                          {item.vibeCoding === true ? (
                            <Check className="w-5 h-5 text-gray-900 dark:text-white" strokeWidth={2} />
                          ) : item.vibeCoding === false ? (
                            <X className="w-5 h-5 text-gray-300 dark:text-gray-600" strokeWidth={2} />
                          ) : (
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.vibeCoding}</span>
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && hasDescription && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 sm:px-4 py-3 bg-gray-100 dark:bg-[#0a0a1a] rounded-b-lg -mt-1">
                              <p className="text-xs sm:text-sm font-light text-gray-700 dark:text-gray-300">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

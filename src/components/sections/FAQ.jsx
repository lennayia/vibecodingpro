import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSeo() {
  const [expandedCategories, setExpandedCategories] = useState([])
  const [expandedQuestions, setExpandedQuestions] = useState({})

  const toggleCategory = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories(expandedCategories.filter(i => i !== index))
    } else {
      setExpandedCategories([...expandedCategories, index])
    }
  }

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const faqCategories = [
    {
      title: "Strach z vlastních schopností",
      questions: [
        {
          question: "Co když jsem na to prostě moc blbá?",
          answer: "Nejste. Pokud umíte napsat e-mail, zvládnete i tohle. Vibecoding není programování – je to komunikace s AI."
        },
        {
          question: "Nikdy jsem nic technického nedotáhla. Proč by to teď mělo být jinak?",
          answer: "Protože teď nebudete sama. A protože AI dělá těžkou práci za vás."
        }
      ]
    },
    {
      title: "Strach z nejistoty",
      questions: [
        {
          question: "Co když ještě nevím, jakou aplikaci chci?",
          answer: "To je v pohodě. První hodinu strávíme právě tímhle – vyjasníme si to společně."
        },
        {
          question: "Co když zjistím, že můj nápad je blbost?",
          answer: "Lepší to zjistit za 2 hodiny se mnou než za 3 měsíce práce. I to je výsledek."
        }
      ]
    },
    {
      title: "Strach z peněz",
      questions: [
        {
          question: "Kolik mě to bude stát celkově? Nejsou tam skryté náklady?",
          answer: "Většina nástrojů je zdarma nebo stojí pár stovek měsíčně. Řeknu vám přesně, co budete potřebovat."
        },
        {
          question: "Co když mi to nevydělá?",
          answer: "Aplikace je nástroj. Jestli vydělá, záleží na vašem byznysu. Já vám pomůžu postavit nástroj – ne byznys model."
        }
      ]
    },
    {
      title: "Strach z času",
      questions: [
        {
          question: "Mám malé děti / rozjetý byznys. Kolik času tomu musím reálně dávat?",
          answer: "Mezi našimi sezeními? Hodinu, dvě týdně. Ale čím víc dáte, tím rychleji to bude."
        },
        {
          question: "Za jak dlouho budu mít něco, co můžu ukázat klientkám?",
          answer: "Základní verzi? Za 4–6 týdnů, pokud budete pracovat."
        }
      ]
    },
    {
      title: "Strach z budoucnosti",
      questions: [
        {
          question: "Co když se něco rozbije a ty nebudeš mít čas?",
          answer: "Naučím vás, jak základní problémy řešit samy. A na WhatsApp jsem vždycky."
        },
        {
          question: "Budu závislá na tobě, nebo to zvládnu sama?",
          answer: "Cíl je, abyste byla samostatná. Já jsem průvodce, ne berlička."
        }
      ]
    },
    {
      title: "Praktické",
      questions: [
        {
          question: "Potřebuju drahý počítač?",
          answer: "Ne. Stačí normální notebook. Mac nebo Windows, jedno."
        },
        {
          question: "Můžu to dělat odkudkoli?",
          answer: "Ano. Potřebujete jen internet."
        }
      ]
    }
  ]

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
              <HelpCircle className="w-8 h-8 text-white dark:text-white" strokeWidth={2} />
              <h2 className="font-display font-bold" style={{ lineHeight: '1.3' }}>
                Ptáte se
              </h2>
            </div>
            <h3 className="font-display font-bold max-w-2xl mx-auto">
              Odpovědi na otázky, které vám běží hlavou
            </h3>
          </div>

          <div className="space-y-4">
            {faqCategories.map((category, categoryIndex) => {
              const isCategoryExpanded = expandedCategories.includes(categoryIndex)

              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <div
                    className="p-4 sm:p-6 bg-gray-50 dark:bg-[#05050f] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#0a0a1a] transition-colors flex items-center justify-between"
                    onClick={() => toggleCategory(categoryIndex)}
                  >
                    <h3 className="font-display font-bold text-lg sm:text-xl">
                      {category.title}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${isCategoryExpanded ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Questions */}
                  <AnimatePresence>
                    {isCategoryExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-6 space-y-3 bg-white dark:bg-[#070716]">
                          {category.questions.map((item, questionIndex) => {
                            const key = `${categoryIndex}-${questionIndex}`
                            const isQuestionExpanded = expandedQuestions[key]

                            return (
                              <div
                                key={questionIndex}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                              >
                                <div
                                  className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#05050f] transition-colors flex items-start justify-between gap-3"
                                  onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                >
                                  <p className="font-semibold flex-1">{item.question}</p>
                                  <ChevronDown
                                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform mt-0.5 ${isQuestionExpanded ? 'rotate-180' : ''}`}
                                    strokeWidth={2}
                                  />
                                </div>

                                <AnimatePresence>
                                  {isQuestionExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-4 pb-4 pt-2 bg-gray-50 dark:bg-[#05050f]">
                                        <p className="font-light">{item.answer}</p>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

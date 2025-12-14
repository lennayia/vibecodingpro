import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import PricingCard from '../ui/PricingCard'
import CountdownTimer from '../ui/CountdownTimer'
import { BadgeCheck, Clock, ChevronDown, HelpCircle } from 'lucide-react'
import { pricingPackages, faqCategories } from '../../constants/data'

export default function Pricing() {

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div id="pricing-section">
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
                platí jen do 17. 12. 2025 do 22:00 hod.
              </p>

              <div className="mb-6">
                <CountdownTimer targetDate="2025-12-15T22:00:00" />
              </div>

              <div className="text-center space-y-3">
                <p className="font-semibold">
                  Pak se ceny zvýší na 4 500 / 13 900 / 29 900 Kč
                </p>
                <p className="text-xl font-light">
                  Kdo dřív přijde, ten víc ušetří. A taky bude mít dřív vlastní apku.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export function PricingPackages() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div id="pricing-packages-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-bold mb-16 text-center">
            Vyberte si cestu, která vám sedí
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <PricingCard
                key={index}
                {...pkg}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export function PricingGuarantee() {
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

  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center !pt-2 !pb-12 md:!pt-2 md:!pb-12 lg:!pt-4 lg:!pb-16" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <motion.div
            className="mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Nevíte si rady? <a href="#" className="underline hover:no-underline font-semibold">Napište mi,</a> pomůžu vám vybrat. Možná vám pomůže záruka vrácení peněz nebo odpovědi na otázky, které můžou vzbuzovat obavy.
            </p>
          </motion.div>

          <motion.div
            className="mb-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="pt-2 pb-10 px-8 rounded-2xl bg-gray-50 dark:bg-[#05050f] border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BadgeCheck className="w-6 h-6 text-accent" strokeWidth={2} />
                <h3 className="font-display font-bold text-accent">Osobní garance</h3>
              </div>
              <p className="text-center text-xl font-light">
                Věřím tomu, co dělám. Pokud vám spolupráce nedá jasno, férově vám vrátím peníze.
              </p>
            </div>
          </motion.div>

          <div className="text-center mb-16 w-full">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-white dark:text-white" strokeWidth={2} />
              <h2 className="font-display font-bold" style={{ lineHeight: '1.3' }}>
                Ptáte se
              </h2>
            </div>
            <h3 className="font-display font-bold">
              Odpovědi na otázky, které vám běží hlavou
            </h3>
          </div>

          <div className="space-y-4 w-full">
            {faqCategories.map((category, categoryIndex) => {
              const isCategoryExpanded = expandedCategories.includes(categoryIndex)

              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden w-full"
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

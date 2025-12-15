import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqCategories } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

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

  return (
    <Section background="light" className="min-h-screen flex items-center justify-center" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
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
                  {...slideUp}
                  transition={{ delay: categoryIndex * 0.05 }}
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

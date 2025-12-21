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
    <Section background="light" centered={true} showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <div className="text-center mb-12 md:mb-[clamp(3rem,6vh,6rem)]">
            <div className="flex items-center justify-center gap-6 md:gap-[clamp(0.75rem,1.5vh,1.5rem)] mb-8 md:mb-[clamp(1rem,2vh,2rem)]">
              <HelpCircle className="w-8 h-8 text-white dark:text-white" strokeWidth={2} />
              <h2 className="font-display font-bold" style={{ lineHeight: '1.3' }}>
                Ptáte se
              </h2>
            </div>
            <h3 className="font-display font-bold max-w-2xl mx-auto">
              Odpovědi na otázky, které vám k vibecodingu běží hlavou
            </h3>
          </div>

          <div className="flex flex-col gap-8 md:gap-[clamp(1rem,2vh,2rem)]">
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
                    className="bg-gray-50 dark:bg-[#05050f] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#0a0a1a] transition-colors flex items-center justify-between p-6 md:p-[clamp(1rem,2vh,1.5rem)]"
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
                        <div
                          className="bg-white dark:bg-[#070716] p-6 md:p-[clamp(1rem,2vh,1.5rem)] flex flex-col gap-6 md:gap-[clamp(0.75rem,1.5vh,1.5rem)]"
                        >
                          {category.questions.map((item, questionIndex) => {
                            const key = `${categoryIndex}-${questionIndex}`
                            const isQuestionExpanded = expandedQuestions[key]

                            return (
                              <div
                                key={questionIndex}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                              >
                                <div
                                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-[#05050f] transition-colors flex items-start justify-between p-6 md:p-[clamp(1rem,2vh,1.5rem)] gap-6 md:gap-[clamp(0.75rem,1.5vh,1.5rem)]"
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
                                      <div
                                        className="bg-gray-50 dark:bg-[#05050f] px-6 md:px-[clamp(1rem,2vh,1.5rem)] pb-6 md:pb-[clamp(1rem,2vh,1.5rem)] pt-4 md:pt-[clamp(0.5rem,1vh,1rem)]"
                                      >
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

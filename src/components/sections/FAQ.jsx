import { motion, AnimatePresence } from 'framer-motion'
import { useState, memo } from 'react'
import Section from '../layout/Section'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqCategories } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

// Constants for consistent sizing
const ICON_SIZE_HEADER = 'faq-icon-header'
const ICON_SIZE_CATEGORY = 'faq-icon-category'
const ICON_SIZE_QUESTION = 'faq-icon-question'
const STROKE_WIDTH = 2

const FAQSeo = memo(function FAQSeo() {
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
          <div className="text-center faq-header-mb">
            <div className="flex items-center justify-center faq-header-icon-gap faq-header-icon-mb">
              <HelpCircle className={`${ICON_SIZE_HEADER} text-white dark:text-white`} strokeWidth={STROKE_WIDTH} />
              <h2 className="font-display font-bold leading-tight">
                Ptáte se
              </h2>
            </div>
            <h3 className="font-display font-bold max-w-2xl mx-auto">
              Odpovědi na otázky, které vám k vibecodingu běží hlavou
            </h3>
          </div>

          <div className="flex flex-col faq-categories-gap">
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
                    className="bg-gray-50 dark:bg-[#05050f] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#0a0a1a] transition-colors flex items-center justify-between faq-category-padding"
                    onClick={() => toggleCategory(categoryIndex)}
                  >
                    <h3 className="font-display font-bold text-fluid-faq-category">
                      {category.title}
                    </h3>
                    <ChevronDown
                      className={`${ICON_SIZE_CATEGORY} text-accent flex-shrink-0 transition-transform ${isCategoryExpanded ? 'rotate-180' : ''}`}
                      strokeWidth={STROKE_WIDTH}
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
                        <div className="bg-white dark:bg-[#070716] faq-questions-padding flex flex-col faq-questions-gap">
                          {category.questions.map((item, questionIndex) => {
                            const key = `${categoryIndex}-${questionIndex}`
                            const isQuestionExpanded = expandedQuestions[key]

                            return (
                              <div
                                key={questionIndex}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                              >
                                <div
                                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-[#05050f] transition-colors flex items-start justify-between faq-question-padding faq-question-gap"
                                  onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                >
                                  <p className="font-semibold flex-1 text-fluid-faq-question">{item.question}</p>
                                  <ChevronDown
                                    className={`${ICON_SIZE_QUESTION} text-gray-400 flex-shrink-0 transition-transform mt-0.5 ${isQuestionExpanded ? 'rotate-180' : ''}`}
                                    strokeWidth={STROKE_WIDTH}
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
                                      <div className="bg-gray-50 dark:bg-[#05050f] faq-answer-padding-x faq-answer-padding-b faq-answer-padding-t">
                                        <p className="font-light text-fluid-faq-answer">{item.answer}</p>
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
})

export default FAQSeo

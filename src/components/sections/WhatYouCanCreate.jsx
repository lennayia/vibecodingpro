import { motion } from 'framer-motion'
import { memo } from 'react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'
import { whatYouCanCreateContent } from '../../constants/whatYouCanCreate'

// Performance: Transition configs outside component
const closingTransition = { delay: 0.6 }

function WhatYouCanCreate() {
  return (
    <Section id="what-you-can-create" background="dark" centered={true} showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-8 leading-tight">
            {whatYouCanCreateContent.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {whatYouCanCreateContent.categories.map((category, index) => {
              const Icon = category.Icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  {...slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-fluid-base">
                    <Icon className="w-12 h-12 text-gray-800 dark:text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold mb-fluid-sm">
                    {category.title}
                  </h3>
                  <p className="font-light">
                    {category.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center max-w-2xl mx-auto mb-0"
            {...slideUp}
            transition={closingTransition}
          >
            <p className="text-xl mb-0">
              {whatYouCanCreateContent.closing}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(WhatYouCanCreate)

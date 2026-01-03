import { motion } from 'framer-motion'
import { memo } from 'react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'
import { whatYouCanCreateContent } from '../../constants/whatYouCanCreate'

// Animation configuration
const ANIMATION_CONFIG = {
  STAGGER_DELAY: 0.1,
  CLOSING_DELAY: 0.6
}

// Performance: Transition configs outside component
const closingTransition = { delay: ANIMATION_CONFIG.CLOSING_DELAY }

// Icon configuration
const ICON_CONFIG = {
  SIZE: 'w-12 h-12',
  STROKE_WIDTH: 1.5
}

function WhatYouCanCreate() {
  return (
    <Section id="what-you-can-create" background="dark" centered={true} showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-8 leading-tight">
            {whatYouCanCreateContent.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {whatYouCanCreateContent.categories.map((category, index) => {
              const Icon = category.Icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  {...slideUp}
                  transition={{ delay: index * ANIMATION_CONFIG.STAGGER_DELAY }}
                >
                  <div className="flex justify-center mb-fluid-base">
                    <Icon className={`${ICON_CONFIG.SIZE} text-gray-800 dark:text-white`} strokeWidth={ICON_CONFIG.STROKE_WIDTH} />
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
            className="text-center max-w-2xl mx-auto mt-fluid-xl md:mt-16 lg:mt-20 mb-0"
            {...slideUp}
            transition={closingTransition}
          >
            <p className="text-xl font-bold mb-0">
              {whatYouCanCreateContent.closing}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(WhatYouCanCreate)

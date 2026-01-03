import { motion } from 'framer-motion'
import { memo } from 'react'
import Section from '../layout/Section'
import AnimatedBackground from '../ui/AnimatedBackground'
import { fadeIn, slideUp, slideLeft } from '../../constants/animations'
import { whatIsVibecodingContent } from '../../constants/data'

// Performance: Animation transitions outside component
const definitionTransition = { delay: 0.1 }
const summaryTransition = { delay: 0.2 }
const introTransition = { delay: 0.3 }
const commonGoalsTransition = { delay: 0.6 }

function WhatIsVibecoding() {
  const binaryBackground = <AnimatedBackground type="particles" particleCount={40} />

  return (
    <Section
      background="light"
      centered={true}
      className="relative overflow-hidden"
      showScrollIndicator={true}
      backgroundElement={binaryBackground}
    >
      <motion.div {...fadeIn}>
        <h2 className="font-display font-bold mb-4 md:mb-2 text-center leading-tight">
          {whatIsVibecodingContent.heading}
        </h2>
        <h3 className="font-display font-bold mb-12 text-center">
          {whatIsVibecodingContent.subheading}
        </h3>

        {/* Co to je */}
        <div className="max-w-3xl mx-auto text-center mb-4">
          <motion.p
            className="mb-4"
            {...slideUp}
            transition={definitionTransition}
          >
            {whatIsVibecodingContent.definition}
          </motion.p>

          <motion.p
            className="text-xl mb-6"
            {...slideUp}
            transition={summaryTransition}
          >
            {whatIsVibecodingContent.summary}
          </motion.p>

          <div className="copper-divider-line mx-auto mb-10" />

          <motion.p
            className="text-lg font-bold mb-2"
            {...slideUp}
            transition={introTransition}
          >
            {whatIsVibecodingContent.intro}
          </motion.p>
        </div>

        {/* Pro koho */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <ul className="space-y-2">
            {whatIsVibecodingContent.targetGroups.map((group, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center gap-3"
                {...slideLeft}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-[0.625rem] dark:text-white">✦</span>
                <span>{group}</span>
                <span className="text-[0.625rem] dark:text-white">✦</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Závěrečný text */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          {...slideUp}
          transition={commonGoalsTransition}
        >
          <p className="text-xl mb-6">{whatIsVibecodingContent.commonGoals.heading}</p>
          <div className="space-y-3">
            {whatIsVibecodingContent.commonGoals.goals.map((goal, index) => (
              <p key={index} className="flex items-center justify-center gap-3 font-semibold">
                <span className="text-accent">✦</span>
                <span>{goal}</span>
                <span className="text-accent">✦</span>
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default memo(WhatIsVibecoding)

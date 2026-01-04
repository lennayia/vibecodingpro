import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'
import { timelineItems } from '../../constants/data'

function ImagineSection() {
  return (
    <Section background="light" centered={true} showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-3 md:mb-4 leading-tight">
            Den s vaší aplikací
          </h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line with gradient from morning to evening using theme colors */}
            <div className="absolute top-0 bottom-0 left-4 md:left-[2.75rem] w-2 rounded-full z-0 timeline-gradient" />

            <div className="flex flex-col gap-2 md:gap-3">
              {timelineItems.map((item, index) => {
                const Icon = item.Icon
                return (
                  <motion.div
                    key={index}
                    {...slideUp}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-12 md:pl-28"
                  >
                    {/* Icon & Time */}
                    <div className="absolute left-0 flex items-center gap-2 z-10">
                      <div className="relative w-10 md:w-24 h-10 md:h-24 rounded-full">
                        {/* Solid background to hide the line */}
                        <div className="absolute inset-0 rounded-full timeline-icon-bg" />
                        {/* Icon circle with accent background */}
                        <div className="relative w-full h-full rounded-full bg-accent/10 border border-accent md:border-2 flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-10 md:h-10 text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="timeline-card-bg rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm pt-1 px-2 pb-1 md:pt-1 md:px-3 md:pb-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-accent font-bold">{item.time}</span>
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">・ {item.period}</span>
                      </div>
                      <h3 className="font-display font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </Section>
  )
}

export default memo(ImagineSection)

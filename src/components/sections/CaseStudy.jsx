import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Carousel from '../ui/Carousel'
import PhoneMockup from '../ui/PhoneMockup'
import { AnimatedCounter, AnimatedStatValue } from '../ui/AnimatedText'
import { benefits, caseStudyCards } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

function CaseStudySeo() {
  const renderCard = (card, index) => (
    <Card background="dark" className={`h-full ${card.border}`} key={index}>
      <div className="text-center mb-fluid-xs-v1">
        <h3 className={`font-display font-bold text-fluid-case-title ${card.titleColor}`}>
          {card.title}
        </h3>
      </div>
      <div className="flex flex-col gap-fluid-sm">
        {card.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex} className="font-light">
            {paragraph.text}
            {paragraph.highlight && (
              <strong className="text-accent">{paragraph.highlight}</strong>
            )}
            {paragraph.rest}
          </p>
        ))}
      </div>
    </Card>
  )

  return (
    <Section background="holographic" centered={true} className="relative overflow-hidden" showScrollIndicator={true}>
      <PhoneMockup
        imageSrc="/thumbnails/coachpro-black.webp"
        imageAlt="CoachPro App"
      />

      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          <div className="text-center mb-fluid-xs-v2 mobile-section-spacing-top">
            <Badge>Vibecoding mění hru</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-3 md:mb-4 leading-tight">
            Vibecoding prakticky
          </h2>

          {/* Big Impact Metric */}
          <motion.div
            className="max-w-4xl mx-auto mb-fluid-md"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-4 font-bold">
                <span className="text-fluid-case-metric text-gray-400">80</span>
                <span className="text-fluid-case-metric text-accent">→</span>
                <AnimatedCounter
                  from={80}
                  to={320}
                  duration={2.5}
                  className="text-fluid-case-metric text-accent"
                />
              </div>
            </div>
          </motion.div>

          {/* Before/After/Reference Cards Carousel */}
          <div className="mb-fluid-md -mx-4 md:mx-0">
            <Carousel
              slides={caseStudyCards}
              renderSlide={renderCard}
              showArrows={true}
              showDots={true}
              dragEnabled={true}
              className="md:px-12"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto gap-fluid-sm">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...slideUp}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card background="dark" className="h-full py-fluid-xs px-fluid-sm" animate={false}>
                  <div className="text-center">
                    <AnimatedStatValue
                      value={benefit.value}
                      delay={0.8 + index * 0.1}
                      className="font-bold text-fluid-case-stat text-accent block mb-1 md:mb-2"
                    />
                    <p className="font-light text-fluid-case-label">
                      {benefit.label}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(CaseStudySeo)

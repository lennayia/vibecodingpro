import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef, memo } from 'react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Carousel from '../ui/Carousel'
import PhoneMockup from '../ui/PhoneMockup'
import { benefits } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

function AnimatedCounter({ from, to, duration = 2, className = '' }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, { duration, delay: 0.5 })
    return controls.stop
  }, [count, to, duration])

  return <motion.span className={className}>{rounded}</motion.span>
}

function AnimatedStatValue({ value, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    // Parse the value to extract number
    const match = value.match(/(\d+(?:,\d+)?)/)?.[1]
    if (!match) return value

    const num = parseFloat(match.replace(',', '.'))
    const current = Math.round(latest * 10) / 10

    // Format the number back
    if (value.includes(',')) {
      return value.replace(match, current.toString().replace('.', ','))
    }
    return value.replace(match, Math.round(current).toString())
  })

  useEffect(() => {
    if (isInView) {
      // Extract the number from value
      const match = value.match(/(\d+(?:,\d+)?)/)?.[1]
      if (match) {
        const targetNum = parseFloat(match.replace(',', '.'))

        // Start animation after delay
        const timer = setTimeout(() => {
          animate(count, targetNum, {
            duration: 2,
            ease: "easeOut"
          })
        }, delay * 1000)

        return () => clearTimeout(timer)
      }
    }
  }, [isInView, value, count, delay])

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>
}

function CaseStudySeo() {
  const cards = [
    {
      title: "Před aplikací",
      titleColor: "",
      border: "",
      content: [
        <p key="1" className="font-light">
          Jana trávila <strong className="text-accent">20 hodin týdně</strong> konzultacemi. Bylo to už za hranou. Odmítala klientky, nemohla jich vzít víc.
        </p>,
        <p key="2" className="font-light">
          Trápila se pocitem, že její znalosti pomůžou jen omezené skupině lidí. Práce ji <strong className="text-accent">vyčerpávala</strong>. Vydělávala jen počtem odpracovaných konzultací.
        </p>
      ]
    },
    {
      title: "Dneska",
      titleColor: "text-accent",
      border: "border-2 border-accent/50",
      content: [
        <p key="1" className="font-light">
          Její aplikace radí s životními situacemi, sleduje pokroky a posílá denní tipy, <strong className="text-accent">funguje 24/7</strong>. Jana pracuje na vylepšování aplikace a věnuje čas prémiovým konzultacím za vyšší cenu. Nebo rodině.
        </p>,
        <p key="2" className="font-light">
          Její služby si může dovolit <strong className="text-accent">mnohem víc klientek</strong>.
        </p>
      ]
    },
    {
      title: "Pochvaluje si",
      titleColor: "text-accent",
      border: "border-2 border-accent/30",
      content: [
        <p key="1" className="font-light">
          „Pomáhám téměř 320 klientkám měsíčně místo 80. A to jsem s aplikací teprv na začátku.
        </p>,
        <p key="2" className="font-light">
          Cítím se svobodná. Moje práce pomáhá lidem, i když spím. A já mám konečně čas žít. To je nejvíc."
        </p>
      ]
    }
  ]

  const renderCard = (card, index) => (
    <Card background="dark" className={`h-full ${card.border}`} key={index}>
      <div className="text-center mb-4 md:mb-[clamp(0.5rem,1.5vw,1rem)]">
        <h3 className={`font-display font-bold text-xl ${card.titleColor}`}>
          {card.title}
        </h3>
      </div>
      <div className="flex flex-col gap-fluid-sm">
        {card.content}
      </div>
    </Card>
  )

  return (
    <Section background="dark" centered={true} className="relative overflow-hidden" showScrollIndicator={true}>
      <PhoneMockup
        imageSrc="/coachpro-black.webp"
        imageAlt="CoachPro App"
      />

      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          <div className="text-center mb-3 md:mb-[clamp(0.5rem,1vw,1rem)]">
            <Badge>Vibecoding mění hru</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-[clamp(2rem,8vw,12rem)] leading-tight">
            Vibecoding prakticky
          </h2>

          {/* Big Impact Metric */}
          <motion.div
            className="max-w-4xl mx-auto mb-fluid-md"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-4 font-display font-bold">
                <span className="text-2xl md:text-4xl text-gray-400">80</span>
                <span className="text-2xl md:text-4xl text-accent">→</span>
                <AnimatedCounter
                  from={80}
                  to={320}
                  duration={2.5}
                  className="font-display text-2xl md:text-4xl text-accent"
                />
              </div>
            </div>
          </motion.div>

          {/* Before/After/Reference Cards Carousel */}
          <div className="mb-fluid-md -mx-4 md:mx-0">
            <Carousel
              slides={cards}
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
                <Card background="dark" className="h-full py-4 px-8 md:py-[clamp(0.5rem,1.5vw,1rem)] md:px-[clamp(1rem,2vw,2rem)]" animate={false}>
                  <div className="text-center">
                    <AnimatedStatValue
                      value={benefit.value}
                      delay={0.8 + index * 0.1}
                      className="font-display font-bold text-2xl md:text-3xl text-accent block mb-1 md:mb-2"
                    />
                    <p className="font-light text-xs md:text-sm">
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

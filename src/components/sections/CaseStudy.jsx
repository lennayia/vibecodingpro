import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Carousel from '../ui/Carousel'
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

export default function CaseStudySeo() {
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
      <div className="text-center mb-4 md:mb-[clamp(0.5rem,1.5vh,1rem)]">
        <h3 className={`font-display font-bold text-xl ${card.titleColor}`}>
          {card.title}
        </h3>
      </div>
      <div className="flex flex-col gap-4 md:gap-[clamp(0.5rem,1.5vh,1rem)]">
        {card.content}
      </div>
    </Card>
  )

  return (
    <Section background="dark" centered={true} className="relative overflow-hidden" showScrollIndicator={true}>
      {/* Phone in background - covering whole section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          {...slideUp}
          transition={{ delay: 0.4 }}
          className="absolute right-0 top-4 sm:top-12 md:top-32 lg:top-20 xl:top-16 opacity-20 sm:opacity-25 md:opacity-30"
        >
          <div className="relative" style={{
            width: 'clamp(100px, 25vw, 250px)',
            aspectRatio: '210/428'
          }}>
            {/* Phone Mockup */}
            <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
              <motion.div
                className="relative w-full h-full"
                style={{
                  rotate: 15,
                  rotateX: 15,
                  rotateY: -35,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* iPhone Frame (Main) */}
                <div
                  className="relative w-full h-full"
                  style={{
                    background: '#1a1a1a',
                    borderRadius: '38px',
                    padding: '10px',
                    boxShadow: '20px 12px 35px rgba(0,0,0,0.9), 50px 120px 350px rgba(0,255,136,0.25), 35px 100px 250px rgba(0,200,255,0.2), 0 2px 6px rgba(0,0,0,0.15), inset 0 0 6px rgba(255,255,255,0.1), inset 0 -20px 40px rgba(0,0,0,1), inset 0 -12px 24px rgba(0,0,0,0.95)',
                    zIndex: 10,
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
                    style={{
                      width: '105px',
                      height: '22px',
                      background: '#1a1a1a',
                      borderBottomLeftRadius: '15px',
                      borderBottomRightRadius: '15px',
                    }}
                  >
                    {/* Speaker */}
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: '45px',
                        height: '5px',
                        background: '#0a0a0a',
                        borderRadius: '2.5px',
                      }}
                    />
                  </div>

                  {/* Screen */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '32px',
                      background: '#000',
                    }}
                  >
                    {/* Screen Content - Image */}
                    <motion.img
                      src="/coachpro-black.webp"
                      alt="CoachPro App"
                      className="w-full h-full object-cover relative z-10"
                      loading="lazy"
                      style={{
                        filter: 'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))'
                      }}
                      animate={{
                        filter: [
                          'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
                          'drop-shadow(0.8px 0 0 rgba(0,255,136,0.18)) drop-shadow(-0.8px 0 0 rgba(0,200,255,0.18))',
                          'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />

                    {/* Slower scanlines */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-20"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.08) 2px, rgba(0, 255, 136, 0.08) 4px)',
                      }}
                      animate={{
                        y: [0, -100],
                        opacity: [0.12, 0.18, 0.12],
                      }}
                      transition={{
                        y: {
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear'
                        },
                        opacity: {
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }
                      }}
                    />

                    {/* Subtle glitch bars */}
                    <motion.div
                      className="absolute inset-0 z-30"
                      style={{
                        background: 'repeating-linear-gradient(0deg, transparent 0%, transparent 40%, rgba(0, 255, 136, 0.06) 40%, rgba(0, 255, 136, 0.06) 42%, transparent 42%)',
                      }}
                      animate={{
                        y: [0, 150, -50, 0],
                        opacity: [0, 0.2, 0, 0.15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 12,
                        ease: 'linear'
                      }}
                    />
                  </div>
                  {/* End of Screen */}

                  {/* Side Button (Power) */}
                  <div
                    className="absolute right-0 top-24"
                    style={{
                      width: '3px',
                      height: '45px',
                      background: '#0a0a0a',
                      borderTopLeftRadius: '1.5px',
                      borderBottomLeftRadius: '1.5px',
                    }}
                  />

                  {/* Volume Buttons */}
                  <div
                    className="absolute left-0 top-21"
                    style={{
                      width: '3px',
                      height: '22px',
                      background: '#0a0a0a',
                      borderTopRightRadius: '1.5px',
                      borderBottomRightRadius: '1.5px',
                    }}
                  />
                  <div
                    className="absolute left-0 top-48"
                    style={{
                      width: '3px',
                      height: '22px',
                      background: '#0a0a0a',
                      borderTopRightRadius: '1.5px',
                      borderBottomRightRadius: '1.5px',
                    }}
                  />
                </div>
                {/* End of iPhone Frame (Front Face) */}
              </motion.div>
              {/* End of 3D Phone Container */}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          <div className="text-center mb-3 md:mb-[clamp(0.5rem,1vh,1rem)]">
            <Badge>Vibecoding mění hru</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-6 md:mb-[clamp(1rem,2vh,1.5rem)] leading-tight">
            Vibecoding prakticky
          </h2>

          {/* Big Impact Metric */}
          <motion.div
            className="max-w-4xl mx-auto mb-8 md:mb-[clamp(1.5rem,3vh,2rem)]"
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
                  className="text-2xl md:text-4xl text-accent"
                />
              </div>
            </div>
          </motion.div>

          {/* Before/After/Reference Cards Carousel */}
          <div className="mb-8 md:mb-[clamp(1.5rem,3vh,2rem)] -mx-4 md:mx-0">
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
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto gap-4 md:gap-[clamp(0.5rem,1.5vh,1rem)]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...slideUp}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card background="dark" className="h-full py-4 px-8 md:py-[clamp(0.5rem,1.5vh,1rem)] md:px-[clamp(1rem,2vw,2rem)]" animate={false}>
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

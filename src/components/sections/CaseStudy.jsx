import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
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
  const [currentSlide, setCurrentSlide] = useState(0)

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
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <Section background="dark" centered={true} className="!pt-2 !pb-4 md:!pt-4 md:!pb-6 relative overflow-hidden" showScrollIndicator={true}>
      {/* Phone in background - covering whole section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          {...slideUp}
          transition={{ delay: 0.4 }}
          className="absolute right-0 top-64 sm:top-48 md:top-32 lg:top-20 xl:top-16 opacity-30"
        >
          <div className="relative" style={{
            width: 'clamp(125px, 30vw, 250px)',
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
          <div className="text-center" style={{ marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)' }}>
            <Badge>Vibecoding mění hru</Badge>
          </div>

          <h2 className="font-display font-bold text-center" style={{ lineHeight: '1.3', marginBottom: 'clamp(0.5rem, 1.5vh, 1rem)' }}>
            Vibecoding prakticky
          </h2>

          {/* Big Impact Metric */}
          <motion.div
            className="max-w-4xl mx-auto"
            style={{ marginBottom: 'clamp(0.5rem, 1.5vh, 1rem)' }}
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

          {/* Hero Quote */}
<motion.div
  {...slideUp}
  transition={{ delay: 0.3 }}
  className="max-w-xl mx-auto text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-black/20"
  style={{
    marginBottom: 'clamp(0.5rem, 1.5vh, 1rem)',
    marginTop: 'clamp(0.5rem, 1.5vh, 1rem)',
    padding: 'clamp(0.1rem, 0.2vh, 0.2rem)'
  }}
>
  <div className="font-light italic text-base" style={{ lineHeight: '1.3', marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)' }}>
    <span className="block">
      <span className="text-5xl text-accent/30 font-serif leading-none mr-1 inline-block" style={{ transform: 'rotate(180deg) translateY(-0.2em)', verticalAlign: 'bottom' }}>"</span>
      Pomáhám téměř 320 klientkám měsíčně místo 80.
    </span>
    <span className="block -mt-2">
      A to jsem s aplikací teprv na začátku.
      <span className="text-5xl text-accent/30 font-serif leading-none ml-1 inline-block" style={{ verticalAlign: 'middle' }}>"</span>
    </span>
  </div>
</motion.div>

          {/* Before/After Cards Carousel */}
          <div className="max-w-2xl mx-auto relative px-12" style={{ marginBottom: 'clamp(0.5rem, 1vh, 0.5rem)' }}>
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card background="dark" className={`h-full ${cards[currentSlide].border}`}>
                    <div className="text-center" style={{ marginBottom: 'clamp(0.5rem, 1.5vh, 1rem)' }}>
                      <h3 className={`font-display font-bold text-xl ${cards[currentSlide].titleColor}`}>
                        {cards[currentSlide].title}
                      </h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1.5vh, 1rem)' }}>
                      {cards[currentSlide].content}
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 bg-accent/10 rounded-full p-2 z-20 cursor-pointer hover:bg-accent/20 transition-colors"
              style={{
                transform: 'translate(-1rem, -50%)',
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-accent" strokeWidth={2} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 bg-accent/10 rounded-full p-2 z-20 cursor-pointer hover:bg-accent/20 transition-colors"
              style={{
                transform: 'translate(1rem, -50%)',
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
            </button>
          </div>

          {/* Final Quote */}
<motion.div
  className="max-w-xl mx-auto text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-black/20"
  style={{
    marginBottom: 'clamp(0.5rem, 1.5vh, 1rem)',
    padding: 'clamp(0.1rem, 0.2vh, 0.2rem)'
  }}
  {...slideUp}
  transition={{ delay: 0.7 }}
>
  <div className="text-base font-light italic" style={{ lineHeight: '1.3' }}>
    <span className="block">
      <span className="text-5xl text-accent/30 font-serif leading-none mr-1 inline-block" style={{ transform: 'rotate(180deg) translateY(-0.2em)', verticalAlign: 'bottom' }}>"</span>
      Cítím se svobodná. Moje práce pomáhá lidem, i když spím.
    </span>
    <span className="block -mt-2">
      A já mám konečně čas žít. To je nejvíc.
      <span className="text-5xl text-accent/30 font-serif leading-none ml-1 inline-block" style={{ verticalAlign: 'middle' }}>"</span>
    </span>
  </div>
</motion.div>

          {/* Dots Indicator for Cards */}
          <div className="flex justify-center gap-3" style={{ marginTop: 'clamp(1rem, 2vh, 2rem)', marginBottom: 'clamp(1rem, 2vh, 2rem)' }}>
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-accent w-12'
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-accent/50 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto" style={{ gap: 'clamp(0.25rem, 1vh, 1rem)' }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...slideUp}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card background="dark" className="h-full" style={{ padding: 'clamp(0.5rem, 1.5vh, 1rem) clamp(1rem, 2vw, 2rem)' }} animate={false}>
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

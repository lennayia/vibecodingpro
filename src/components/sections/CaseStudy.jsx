import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import StatCard from '../ui/StatCard'
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

export default function CaseStudySeo() {
  return (
    <Section background="dark" className="min-h-screen flex items-center justify-center !pt-2 !pb-4 md:!pt-4 md:!pb-6" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <div className="text-center mb-6">
            <Badge>Vibecoding mění hru</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-8" style={{ lineHeight: '1.3' }}>
            Vibecoding prakticky
          </h2>

          {/* Big Impact Metric */}
          <motion.div
            className="max-w-4xl mx-auto mb-0"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-4 font-display font-bold">
                <span className="text-5xl md:text-7xl text-gray-400">80</span>
                <span className="text-5xl md:text-7xl text-accent">→</span>
                <AnimatedCounter
                  from={80}
                  to={320}
                  duration={2.5}
                  className="text-5xl md:text-7xl text-accent"
                />
              </div>
              <p className="text-xl md:text-2xl mt-2 mb-0 font-light">klientek měsíčně</p>
            </div>
          </motion.div>

          {/* Hero Quote with Image - Minimal Holographic */}
          <div className="max-w-5xl mx-auto mb-6 -mt-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Quote */}
              <motion.div
                {...slideUp}
                transition={{ delay: 0.3 }}
                className="order-1"
              >
                <p className="text-xl font-light leading-relaxed italic mb-6">
                  „Pomáhám téměř 320 klientkám měsíčně místo 80. A to jsem s aplikací teprv na začátku."
                </p>
                <p className="text-lg text-accent font-light">
                  — Jana, koučka
                </p>
              </motion.div>

              {/* Image with holographic effect */}
              <motion.div
                {...slideUp}
                transition={{ delay: 0.4 }}
                className="order-2 relative -mt-12 -ml-16"
              >
                <div className="max-w-[200px] mx-auto relative">
                  {/* Phone Mockup */}
                  <div className="relative max-w-[250px] mx-auto" style={{ perspective: '1000px' }}>
                    <motion.div
                      className="relative"
                      style={{
                        rotate: 55,
                        rotateY: -65,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* iPhone Frame (Main) */}
                      <div
                        className="relative"
                        style={{
                          width: '210px',
                          height: '428px',
                          background: '#1a1a1a',
                          borderRadius: '38px',
                          padding: '10px',
                          boxShadow: '20px 20px 60px rgba(0,0,0,0.9), 8px 8px 24px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.15), inset 0 0 6px rgba(255,255,255,0.1), inset 0 -20px 40px rgba(0,0,0,1), inset 0 -12px 24px rgba(0,0,0,0.95)',
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
          </div>

          {/* Before/After Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
            <motion.div
              {...slideUp}
              transition={{ delay: 0.5 }}
            >
              <Card background="dark" className="h-full">
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-xl">
                    Před aplikací
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    Jana trávila <strong className="text-accent">20 hodin týdně</strong> konzultacemi. Bylo to už za hranou. Odmítala klientky, nemohla jich vzít víc.
                  </p>
                  <p className="text-lg">
                    Trápila se pocitem, že její znalosti pomůžou jen omezené skupině lidí. Práce ji <strong className="text-accent">vyčerpávala</strong>. Vydělávala jen počtem odpracovaných konzultací.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              {...slideUp}
              transition={{ delay: 0.6 }}
            >
              <Card background="dark" className="h-full border-2 border-accent/50">
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-xl text-accent">
                    Dneska
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    Její aplikace radí s životními situacemi, sleduje pokroky a posílá denní tipy, <strong className="text-accent">funguje 24/7</strong>. Jana pracuje na vylepšování aplikace a věnuje čas prémiovým konzultacím za vyšší cenu. Nebo rodině.
                  </p>
                  <p className="text-lg">
                    Nejlepší je, že si její služby může dovolit <strong className="text-accent">mnohem víc klientek</strong> než dřív.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Final Quote */}
          <motion.div
            className="max-w-3xl mx-auto mb-6 text-center"
            {...slideUp}
            transition={{ delay: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-6xl text-accent/20 font-serif">"</div>
              <p className="text-xl font-light italic relative z-10 px-8">
                Cítím se svobodná. Moje práce pomáhá lidem, i když spím. A já mám konečně čas žít. To je nejvíc.
              </p>
              <div className="absolute -right-4 -bottom-4 text-6xl text-accent/20 font-serif">"</div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <StatCard
                key={index}
                value={benefit.value}
                label={benefit.label}
                delay={0.8 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

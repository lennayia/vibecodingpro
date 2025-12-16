import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import StatCard from '../ui/StatCard'
import { benefits } from '../../constants/data'
import { fadeIn, slideUp } from '../../constants/animations'

export default function CaseStudySeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-2 !pb-4 md:!pt-4 md:!pb-6" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <div className="text-center mb-6">
            <Badge>Vibecoding mění hru</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-8" style={{ lineHeight: '1.3' }}>
            Takhle to může vypadat v praxi
          </h2>

          {/* Hero Quote with Image - Minimal Holographic */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Quote */}
              <motion.div
                {...slideUp}
                transition={{ delay: 0.2 }}
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
                transition={{ delay: 0.3 }}
                className="order-2 relative"
              >
                <div className="max-w-[200px] mx-auto relative">
                  {/* Gentle Holographic glow */}
                  <motion.div
                    className="absolute -inset-4 blur-xl"
                    animate={{
                      background: [
                        'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.2), rgba(0, 200, 255, 0.15), transparent)',
                        'radial-gradient(circle at 55% 45%, rgba(0, 200, 255, 0.2), rgba(0, 255, 136, 0.15), transparent)',
                        'radial-gradient(circle at 45% 55%, rgba(0, 255, 136, 0.2), rgba(0, 200, 255, 0.15), transparent)',
                        'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.2), rgba(0, 200, 255, 0.15), transparent)',
                      ],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />

                  {/* Image container */}
                  <div className="relative">
                    {/* Main image with subtle RGB shift */}
                    <motion.img
                      src="/Vibecoding-koucka-jana.webp"
                      alt="Jana, koučka"
                      className="w-full h-auto relative z-10 opacity-30"
                      loading="lazy"
                      style={{
                        filter: 'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))'
                      }}
                      animate={{
                        opacity: [0.3, 0.28, 0.32, 0.3],
                        x: [0, -0.3, 0.3, 0],
                        filter: [
                          'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
                          'drop-shadow(0.8px 0 0 rgba(0,255,136,0.18)) drop-shadow(-0.8px 0 0 rgba(0,200,255,0.18))',
                          'drop-shadow(0.5px 0 0 rgba(0,255,136,0.15)) drop-shadow(-0.5px 0 0 rgba(0,200,255,0.15))',
                        ],
                      }}
                      transition={{
                        opacity: {
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        },
                        x: {
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 10
                        },
                        filter: {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }
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

                    {/* Color shift overlay */}
                    <motion.div
                      className="absolute inset-0 z-30 mix-blend-overlay"
                      animate={{
                        background: [
                          'linear-gradient(180deg, rgba(0,255,136,0) 0%, rgba(0,255,136,0.1) 50%, rgba(0,255,136,0) 100%)',
                          'linear-gradient(180deg, rgba(0,200,255,0) 0%, rgba(0,200,255,0.1) 50%, rgba(0,200,255,0) 100%)',
                          'linear-gradient(180deg, rgba(0,255,136,0) 0%, rgba(0,255,136,0.1) 50%, rgba(0,255,136,0) 100%)',
                        ],
                        y: [-200, 200],
                      }}
                      transition={{
                        background: {
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear'
                        },
                        y: {
                          duration: 12,
                          repeat: Infinity,
                          ease: 'linear'
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Before/After Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <motion.div
              {...slideUp}
              transition={{ delay: 0.4 }}
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
              transition={{ delay: 0.5 }}
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
            className="max-w-3xl mx-auto mb-8 text-center"
            {...slideUp}
            transition={{ delay: 0.6 }}
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
                delay={0.7 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

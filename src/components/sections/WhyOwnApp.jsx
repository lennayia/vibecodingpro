import { motion } from 'framer-motion'
import { useCallback, useEffect, useState, useRef } from 'react'
import { Clock, RotateCcw, TrendingUp, Briefcase, Bell } from 'lucide-react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'

// Funkce pro přehrání zvuku notifikace
const playNotificationSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Nastavení zvuku - výraznější notifikační tón
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1)
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2)

    // Vyšší hlasitost a delší zvuk
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
  } catch (error) {
    console.log('Audio not supported')
  }
}

const benefits = [
  {
    title: "Pracují za vás 24/7",
    description: "Spíte, přesto pomáháte. Nástroj nespí nikdy.",
    Icon: Clock
  },
  {
    title: "Konec opakování dokola",
    description: "Už žádné \„Tohle jsem říkala snad stokrát.\" Teď to řekne apka.",
    Icon: RotateCcw
  },
  {
    title: "Škálujete bez vyhoření",
    description: "Rostete, ale nedřete. Tak to má být.",
    Icon: TrendingUp
  },
  {
    title: "Jste ještě víc profi",
    description: "G-sheets jsou fajn. Ale vlastní apka – to je jiná liga!",
    Icon: Briefcase
  }
]

export default function WhyOwnAppSeo() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const sectionRef = useRef(null)

  const handleClick = useCallback(() => {
    scrollToSection('phases-section')
  }, [])

  // Přehraje zvuk a spustí animaci při scrollování do sekce
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Zvýší klíč pro restart animace
            setAnimationKey(prev => prev + 1)
            // Delay pro synchronizaci s animací notifikace
            setTimeout(() => {
              playNotificationSound()
            }, 1200)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.3 } // Spustí se když je 30% sekce viditelné
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <Section background="dark" centered={true} className="!py-12 md:!py-4 lg:!py-12" showScrollIndicator={true}>
      <div ref={sectionRef}>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-12 md:mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Proč mít vlastní digi-nástroje
          </h2>

          <div className="space-y-6 md:space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.Icon
              const isFirst = index === 0
              return (
                <motion.div
                  key={index}
                  className="border-b border-gray-700 pb-6 md:pb-8 last:border-b-0"
                  {...slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-end text-left pl-[10px]">
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                      <h3 className="font-display font-bold">
                        {benefit.title}
                      </h3>
                    </div>
                    <div>
                      <p className="inline">
                        {benefit.description}
                      </p>

                      {/* Animovaná notifikace 3:00 pro první benefit */}
                      {isFirst && isVisible && (
                        <motion.div
                          key={animationKey}
                          className="inline-flex flex-col items-start gap-1 ml-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                        >
                          <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 dark:bg-transparent border border-accent text-gray-900 dark:text-white text-xs font-semibold shadow-md"
                            animate={{
                              scale: [1, 1.02, 1, 1.02, 1]
                            }}
                            transition={{
                              duration: 3,
                              times: [0, 0.3, 0.5, 0.7, 1],
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          >
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 15, -15, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            >
                              <Bell className="w-3.5 h-3.5" />
                            </motion.div>
                            <span>3:12</span>
                          </motion.div>
                          <span className="text-xs text-gray-700 dark:text-gray-300 pl-1">Nová registrace</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            {...slideUp}
            transition={{ delay: 0.5 }}
            className="flex justify-center pt-10 md:pt-8"
          >
            <Button onClick={handleClick}>
              Jak to funguje
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

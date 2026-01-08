import { motion } from 'framer-motion'
import { useCallback, useEffect, useState, useRef, memo } from 'react'
import { Clock, RotateCcw, TrendingUp, Briefcase, Bell } from 'lucide-react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { fadeIn, slideUp } from '../../constants/animations'
import { scrollToSection } from '../../utils/scroll'
import { SECTION_IDS } from '../../constants/data'
import { useTheme } from '../../contexts/ThemeContext'
import '../../styles/shared.css'

// Audio configuration
const AUDIO_CONFIG = {
  FREQUENCY_START: 800,
  FREQUENCY_PEAK: 1000,
  FREQUENCY_END: 800,
  GAIN: 0.5,
  DURATION: 0.5,
  PEAK_TIME: 0.1,
  END_TIME: 0.2
}

// Animation configuration
const ANIMATION_CONFIG = {
  BENEFIT_STAGGER: 0.1,
  NOTIFICATION_DELAY: 1.2,
  NOTIFICATION_DURATION: 0.5,
  NOTIFICATION_SOUND_DELAY: 1200,
  BELL_PULSE_DURATION: 2,
  BELL_SHAKE_DURATION: 1.5,
  BELL_SHAKE_DELAY: 2,
  CTA_DELAY: 0.5
}

// Observer configuration
const OBSERVER_CONFIG = {
  THRESHOLD: 0.3
}

// Notification badge configuration
const NOTIFICATION_CONFIG = {
  BORDER_RADIUS: '12px',
  BORDER_WIDTH: '2px',
  SCALE_ANIMATION: [1, 1.08, 1],
  BELL_SCALE: [1, 1.3, 1],
  BELL_ROTATE: [0, 20, -20, 0]
}

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
    oscillator.frequency.setValueAtTime(AUDIO_CONFIG.FREQUENCY_START, audioContext.currentTime)
    oscillator.frequency.setValueAtTime(AUDIO_CONFIG.FREQUENCY_PEAK, audioContext.currentTime + AUDIO_CONFIG.PEAK_TIME)
    oscillator.frequency.setValueAtTime(AUDIO_CONFIG.FREQUENCY_END, audioContext.currentTime + AUDIO_CONFIG.END_TIME)

    // Vyšší hlasitost a delší zvuk
    gainNode.gain.setValueAtTime(AUDIO_CONFIG.GAIN, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + AUDIO_CONFIG.DURATION)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + AUDIO_CONFIG.DURATION)
  } catch (error) {
    // Audio not supported - silently fail
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

function WhyOwnAppSeo() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const { isDark } = useTheme()
  const sectionRef = useRef(null)

  const handleClick = useCallback(() => {
    scrollToSection(SECTION_IDS.PROCESS)
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
            }, ANIMATION_CONFIG.NOTIFICATION_SOUND_DELAY)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: OBSERVER_CONFIG.THRESHOLD }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <Section background="dark" centered={true} showScrollIndicator={true} className="mobile-section-spacing-top">
      <div ref={sectionRef}>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-[clamp(2rem,8vw,12rem)] text-center leading-tight">
            Proč mít vlastní digi-nástroje
          </h2>

          <div className="space-y-[clamp(2rem,6vw,7rem)]">
            {benefits.map((benefit, index) => {
              const Icon = benefit.Icon
              const isFirst = index === 0
              const isLast = index === benefits.length - 1
              return (
                <motion.div
                  key={index}
                  className={isFirst ? '-mb-[clamp(1.5rem,4vw,4rem)]' : ''}
                  {...slideUp}
                  transition={{ delay: index * ANIMATION_CONFIG.BENEFIT_STAGGER }}
                >
                    <div className="grid md:grid-cols-2 gap-[clamp(1rem,1.5vw,1.5rem)] items-start text-left pl-[clamp(0.5rem,1vw,0.75rem)]">
                      <div className="flex items-center gap-[clamp(0.75rem,1vw,1rem)]">
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
                            className="flex items-center gap-[clamp(0.25rem,0.5vw,0.5rem)] mt-[clamp(0.5rem,1vw,1.5rem)]"
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: ANIMATION_CONFIG.NOTIFICATION_DURATION, delay: ANIMATION_CONFIG.NOTIFICATION_DELAY, type: "spring" }}
                          >
                            <motion.div
                              className="flex items-center gap-[clamp(0.25rem,0.5vw,0.375rem)] px-[clamp(0.5rem,1.5vw,0.75rem)] py-[clamp(0.25rem,0.75vw,0.375rem)] text-[clamp(0.65rem,1vw,0.75rem)] font-bold shadow-lg"
                              style={{
                                borderRadius: NOTIFICATION_CONFIG.BORDER_RADIUS,
                                backgroundColor: isDark ? 'rgba(13, 221, 13, 0.2)' : 'rgba(181, 108, 78, 0.3)',
                                borderWidth: NOTIFICATION_CONFIG.BORDER_WIDTH,
                                borderStyle: 'solid',
                                borderColor: isDark ? '#0DDD0D' : '#B56C4E',
                                color: isDark ? '#ffffff' : '#2E2E2E',
                                boxShadow: isDark
                                  ? '0 0 15px rgba(0, 255, 136, 0.3)'
                                  : '0 0 15px rgba(181, 108, 78, 0.3)'
                              }}
                              animate={{
                                scale: NOTIFICATION_CONFIG.SCALE_ANIMATION,
                                boxShadow: isDark ? [
                                  '0 0 15px rgba(0, 255, 136, 0.3)',
                                  '0 0 25px rgba(0, 255, 136, 0.6)',
                                  '0 0 15px rgba(0, 255, 136, 0.3)'
                                ] : [
                                  '0 0 15px rgba(181, 108, 78, 0.3)',
                                  '0 0 25px rgba(181, 108, 78, 0.6)',
                                  '0 0 15px rgba(181, 108, 78, 0.3)'
                                ]
                              }}
                              transition={{
                                duration: ANIMATION_CONFIG.BELL_PULSE_DURATION,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <motion.div
                                animate={{
                                  scale: NOTIFICATION_CONFIG.BELL_SCALE,
                                  rotate: NOTIFICATION_CONFIG.BELL_ROTATE
                                }}
                                transition={{
                                  duration: ANIMATION_CONFIG.BELL_SHAKE_DURATION,
                                  repeat: Infinity,
                                  repeatDelay: ANIMATION_CONFIG.BELL_SHAKE_DELAY,
                                  ease: "easeInOut"
                                }}
                              >
                                <Bell
                                  className="w-[clamp(0.65rem,1vw,0.875rem)] h-[clamp(0.65rem,1vw,0.875rem)]"
                                  style={{ color: isDark ? '#0DDD0D' : '#B56C4E' }}
                                />
                              </motion.div>
                              <span>3:12</span>
                            </motion.div>
                            <span className="text-[clamp(0.75rem,1.2vw,1rem)] text-accent font-semibold">Nová registrace</span>
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
            transition={{ delay: ANIMATION_CONFIG.CTA_DELAY }}
            className="flex justify-center pt-[clamp(1.5rem,2vw,2.5rem)] mobile-section-spacing-top mobile-section-spacing-bottom"
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

export default memo(WhyOwnAppSeo)

import { Check, Gift, Tag, Crown, ChevronDown, Map, FileCheck, BookOpen, Video, Mail, ClipboardList, Phone, Ticket } from 'lucide-react'
import { useState, useRef, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './Card'
import Button from './Button'
import { phases } from '../../constants/data'

function PricingCard({
  title,
  duration,
  serviceType,
  availableSpots,
  price,
  description,
  features,
  resultTitle,
  resultDescription,
  testimonials,
  bonuses,
  discount,
  buttonText,
  buttonLink,
  badgeText,
  isExclusive = false,
  isPopular = false,
  delay = 0
}) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 })
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [isBonusAccordionOpen, setIsBonusAccordionOpen] = useState(false)
  const [isGoalAccordionOpen, setIsGoalAccordionOpen] = useState(false)

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 768) return // Disable on mobile

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -8
    const rotateYValue = ((x - centerX) / centerX) * 8

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setShinePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
    setShinePosition({ x: 50, y: 50 })
  }, [])

  // Bonus items with full details
  const bonusItems = [
    {
      name: "Osobní roadmapa v PDF",
      description: "Váš osobní plán krok za krokem. Přesně víte, do čeho se pustit dál.",
      icon: Map,
      vibe: true,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "Kompletní dokumentace v PDF",
      description: "Zadání projektu a technický základ v PDF. Máte všechno černé na bílém k dispozici na pořád.",
      icon: FileCheck,
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "6 návodů krok za krokem + tahák pro AI",
      description: "Jednoduché návody na další nástroje, které je fajn používat + tahák pro komunikaci s AI.",
      icon: BookOpen,
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "Nahrávky schůzek",
      description: "Můžete se k nim libovolně vracet. Nic vám neuteče ani v případě, že to hned nepochytíte.",
      icon: Video,
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "2 týdny e-mailová podpora",
      description: "Když se zaseknete a nebudete si vědět rady, napište mi. Odpovím do 24 hodin.",
      icon: Mail,
      vibe: false,
      vibeCode: true,
      vibeCoding: true
    },
    {
      name: "Zápisky z jednotlivých schůzek",
      description: "Po každé schůzce dostanete shrnutí – co máte hotové a co je další krok.",
      icon: ClipboardList,
      vibe: false,
      vibeCode: false,
      vibeCoding: true
    },
    {
      name: "Check-in call (30 min)",
      description: "Po 2 týdnech od poslední schůzky se spojíme a podíváme se na váš pokrok. Ujistíte se, že jdete správně.",
      icon: Phone,
      vibe: false,
      vibeCode: false,
      vibeCoding: true
    },
    {
      name: "Sleva na další konzultaci",
      description: "Chcete pokračovat? Máte zvýhodněnou cenu na další spolupráci v rámci 2hodinové konzultace (z hodnoty 3 900 Kč) a platí 3 měsíce od data zakoupení spolupráce.",
      icon: Tag,
      vibe: "300 Kč",
      vibeCode: "600 Kč",
      vibeCoding: "900 Kč"
    }
  ]

  // Determine which phases to show based on package title
  const getPackagePhases = () => {
    if (title === "VIBE") {
      return phases.slice(0, 6) // Phases 01-06
    } else if (title === "VIBE+CODING") {
      return phases.slice(0, 9) // Phases 01-09
    } else if (title.includes("VIBECODING")) {
      return phases.slice(0, 12) // Phases 01-12 (all)
    }
    return []
  }

  // Determine which bonuses to show based on package title
  const getPackageBonuses = () => {
    let key = ''
    if (title === "VIBE") {
      key = 'vibe'
    } else if (title === "VIBE+CODING") {
      key = 'vibeCode'
    } else if (title.includes("VIBECODING")) {
      key = 'vibeCoding'
    }

    if (!key) return []

    // Filter bonuses and exclude the discount bonus (it's shown separately below)
    return bonusItems.filter(item => item[key] !== false && item.icon !== Tag)
  }

  const packagePhases = getPackagePhases()
  const packageBonuses = getPackageBonuses()

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
      style={{
        perspective: '1000px'
      }}
    >
      <motion.div
        className="h-full"
        animate={{
          rotateX,
          rotateY
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        <Card background="light" animate={true} delay={delay} className="relative overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300 border-accent/20 dark:border-accent/10 h-full">
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)`,
              zIndex: 1
            }}
          />

          <div className="relative z-10 h-full flex flex-col">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-[100]">
        {badgeText ? (
          <div className="relative">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900 inline-block">
              {badgeText}
            </span>
            {isExclusive && (
              <div className="absolute -top-1 -right-1">
                <Crown className="w-4 h-4 text-white dark:text-white" strokeWidth={2} />
              </div>
            )}
          </div>
        ) : (
          <span className="invisible">placeholder</span>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="text-center" style={{ marginBottom: 'clamp(0.5rem, 1vh, 1rem)' }}>
        <div className="relative inline-block mx-auto" style={{ marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)' }}>
          <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" />
          <h3 className="relative font-display font-bold text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]">
            {title}
          </h3>
        </div>
        <p className="font-light" style={{ marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)' }}>{duration}</p>
        {serviceType && (
          <div style={{ marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)' }}>
            <p className="text-base font-extralight text-center">{serviceType}</p>
          </div>
        )}
        <p className="text-sm font-extralight" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="text-center" style={{ marginBottom: 'clamp(0.5rem, 1vh, 1rem)' }}>
        <h3 className="font-display font-bold text-accent">
          {price}
        </h3>
      </div>

      {/* Accordion for phases */}
      <div style={{ marginBottom: 'clamp(1rem, 2vh, 2rem)' }}>
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className="accordion-btn flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mx-auto py-1 px-2 rounded-lg border border-accent/30 hover:border-accent/50 min-w-[140px]"
        >
          <span>Etapy {packagePhases.length}</span>
          <motion.div
            animate={{ rotate: isAccordionOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" strokeWidth={2} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isAccordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-left text-sm px-1" style={{ marginTop: 'clamp(0.75rem, 1.5vh, 1.5rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vh, 1rem)' }}>
                {packagePhases.map((phase, index) => (
                  <div key={phase.number} className="flex items-start gap-2">
                    <span className="text-accent font-semibold flex-shrink-0">{phase.number}</span>
                    <span className="font-light">{phase.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {packageBonuses.length > 0 && (
        <div style={{ marginBottom: 'clamp(1rem, 2vh, 2rem)' }}>
          <button
            onClick={() => setIsBonusAccordionOpen(!isBonusAccordionOpen)}
            className="accordion-btn flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mx-auto py-1 px-2 rounded-lg border border-accent/30 hover:border-accent/50 min-w-[140px]"
          >
            <Gift className="w-4 h-4" strokeWidth={2} />
            <span>Bonusy {packageBonuses.length}</span>
            <motion.div
              animate={{ rotate: isBonusAccordionOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" strokeWidth={2} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isBonusAccordionOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="text-left text-sm px-1" style={{ marginTop: 'clamp(0.75rem, 1.5vh, 1.5rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vh, 1rem)' }}>
                  {packageBonuses.map((bonus, index) => {
                    const IconComponent = bonus.icon
                    const value = bonus[title === "VIBE" ? 'vibe' : title === "VIBE+CODING" ? 'vibeCode' : 'vibeCoding']

                    return (
                      <div key={index} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        </div>
                        <span className="font-light flex-1">{bonus.name}</span>
                        {value !== true && typeof value === 'string' && (
                          <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {bonus.icon === Tag ? `Kupón ${value}` : value}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {discount && (
        <div className="text-center" style={{ marginBottom: 'clamp(1rem, 2vh, 2rem)' }}>
          <div className="flex items-center justify-center gap-2" style={{ marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)' }}>
            <Ticket className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
            <span className="font-semibold text-accent text-sm leading-none">KUPÓN {discount.split(' na ')[0]}</span>
          </div>
          {discount.includes(' na ') && (
            <span className="text-xs font-light block">na {discount.split(' na ')[1]}</span>
          )}
        </div>
      )}

      {/* Accordion for goal/result */}
      <div style={{ marginBottom: 'clamp(1rem, 2vh, 2rem)' }}>
        <button
          onClick={() => setIsGoalAccordionOpen(!isGoalAccordionOpen)}
          className="accordion-btn flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mx-auto py-1 px-2 rounded-lg border border-accent/30 hover:border-accent/50 min-w-[140px]"
        >
          <span>Cíl</span>
          <motion.div
            animate={{ rotate: isGoalAccordionOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" strokeWidth={2} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isGoalAccordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-left text-sm px-1" style={{ marginTop: 'clamp(0.75rem, 1.5vh, 1.5rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vh, 1rem)' }}>
                <div className="bg-gray-100 dark:bg-[#05050f] rounded-xl border border-gray-200 dark:border-gray-700" style={{ padding: 'clamp(0.375rem, 0.75vh, 0.75rem)' }}>
                  <p className="font-semibold text-sm" style={{ marginBottom: 'clamp(0.125rem, 0.25vh, 0.25rem)' }}>{resultTitle}</p>
                  <div className="text-sm" dangerouslySetInnerHTML={{ __html: resultDescription }} />

                  {testimonials && testimonials.map((testimonial, index) => (
                    <div key={index} className="border-t border-gray-300 dark:border-gray-600" style={{ marginTop: 'clamp(0.5rem, 1vh, 1rem)', paddingTop: 'clamp(0.5rem, 1vh, 1rem)' }}>
                      <p className="italic text-xs">{testimonial.quote}</p>
                      {testimonial.author && (
                        <p className="text-xs font-light">– {testimonial.author}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

        <div className="flex justify-center mt-auto" style={{ paddingTop: 'clamp(1.25rem, 2.5vh, 2.5rem)' }}>
          {buttonLink ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button>
                {buttonText}
              </Button>
            </a>
          ) : (
            <Button>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default memo(PricingCard)

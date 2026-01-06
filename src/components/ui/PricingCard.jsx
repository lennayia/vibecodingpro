import { Check, Gift, Tag, Crown, ChevronDown, Ticket } from 'lucide-react'
import { useState, useRef, memo, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './Card'
import Button from './Button'
import { phases, bonusItems } from '../../constants/data'

// Constants for consistent sizing
const ICON_SIZE_SM = 'w-3 h-3'
const ICON_SIZE_MD = 'w-4 h-4'
const STROKE_WIDTH_REGULAR = 2
const STROKE_WIDTH_LIGHT = 1.5
const ACCORDION_MIN_WIDTH = 'min-w-[clamp(8.75rem,12vw,10rem)]'

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

  // All accordions closed by default (comparison table provides overview)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [isBonusAccordionOpen, setIsBonusAccordionOpen] = useState(false)

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

  // Memoized: Determine which phases to show based on package title
  const packagePhases = useMemo(() => {
    if (title === "VIBE") {
      return phases.slice(0, 6) // Phases 01-06
    } else if (title === "VIBE+CODING") {
      return phases.slice(0, 9) // Phases 01-09
    } else if (title.includes("VIBECODING")) {
      return phases.slice(0, 12) // Phases 01-12 (all)
    }
    return []
  }, [title])

  // Memoized: Determine which bonuses to show based on package title
  const packageBonuses = useMemo(() => {
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
  }, [title])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full perspective-1000"
    >
      <motion.div
        className="h-full transform-3d"
        animate={{
          rotateX,
          rotateY
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <Card background="light" animate={true} delay={delay} className="relative overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300 border-accent/20 dark:border-accent/10 h-full">
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300 radial-shine"
            style={{
              backgroundPosition: `${shinePosition.x}% ${shinePosition.y}%`
            }}
          />

          <div className="relative z-10 h-full flex flex-col">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-[100]">
        {badgeText ? (
          <div className="relative">
            <span className="pricing-badge-padding rounded-full text-fluid-pricing-badge font-medium uppercase tracking-wider border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900 inline-block">
              {badgeText}
            </span>
            {isExclusive && (
              <div className="absolute -top-1 -right-1">
                <Crown className={ICON_SIZE_MD} strokeWidth={STROKE_WIDTH_REGULAR} />
              </div>
            )}
          </div>
        ) : (
          <span className="invisible">placeholder</span>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="text-center mb-clamp-md">
        <div className="relative inline-block mx-auto mb-clamp-sm">
          <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" />
          <h3 className="relative font-display font-bold text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]">
            {title}
          </h3>
        </div>
        <p className="font-light mb-clamp-sm">{duration}</p>
        {serviceType && (
          <div className="mb-clamp-sm">
            <p className="text-fluid-pricing-base font-extralight text-center">{serviceType}</p>
          </div>
        )}
        <p className="text-fluid-pricing-sm font-extralight" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="text-center mb-clamp-md">
        <h3 className="font-display font-bold text-accent">
          {price}
        </h3>
      </div>

      {/* Accordion for phases */}
      <div className="mb-clamp-lg">
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className={`accordion-btn flex items-center justify-center pricing-gap-md text-fluid-pricing-sm font-semibold text-accent hover:text-accent/80 transition-colors mx-auto pricing-accordion-padding rounded-lg border border-accent/30 hover:border-accent/50 ${ACCORDION_MIN_WIDTH}`}
        >
          <span>Etapy {packagePhases.length}</span>
          <motion.div
            animate={{ rotate: isAccordionOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className={ICON_SIZE_MD} strokeWidth={STROKE_WIDTH_REGULAR} />
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
              <div className="text-left text-fluid-pricing-xs pricing-content-padding mt-clamp-phases flex-col-clamp-gap">
                {packagePhases.map((phase, index) => (
                  <div key={phase.number} className="font-light flex items-center pricing-gap-sm leading-none">
                    <span className="text-accent font-semibold text-fluid-pricing-xs flex-shrink-0 leading-none">{phase.number}</span>
                    <span className="leading-none">{phase.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {packageBonuses.length > 0 && (
        <div className="mb-clamp-lg">
          <button
            onClick={() => setIsBonusAccordionOpen(!isBonusAccordionOpen)}
            className={`accordion-btn flex items-center justify-center pricing-gap-md text-fluid-pricing-sm font-semibold text-accent hover:text-accent/80 transition-colors mx-auto pricing-accordion-padding rounded-lg border border-accent/30 hover:border-accent/50 ${ACCORDION_MIN_WIDTH}`}
          >
            <Gift className={ICON_SIZE_MD} strokeWidth={STROKE_WIDTH_REGULAR} />
            <span>Bonusy {packageBonuses.length}</span>
            <motion.div
              animate={{ rotate: isBonusAccordionOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className={ICON_SIZE_MD} strokeWidth={STROKE_WIDTH_REGULAR} />
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
                <div className="text-left text-fluid-pricing-xs pricing-content-padding mt-clamp-phases flex-col-clamp-gap">
                  {packageBonuses.map((bonus, index) => {
                    const IconComponent = bonus.icon
                    const value = bonus[title === "VIBE" ? 'vibe' : title === "VIBE+CODING" ? 'vibeCode' : 'vibeCoding']

                    return (
                      <div key={index} className="font-light flex items-baseline pricing-gap-sm leading-none">
                        <IconComponent className={`${ICON_SIZE_SM} text-accent flex-shrink-0`} strokeWidth={STROKE_WIDTH_LIGHT} />
                        <span className="flex-1 leading-none">{bonus.name}</span>
                        {value !== true && typeof value === 'string' && (
                          <span className="text-fluid-pricing-badge font-bold text-accent bg-accent/10 pricing-bonus-badge-padding rounded-full whitespace-nowrap leading-none">
                            {bonus.icon === Tag ? `Kupón ${value} Kč` : value}
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
        <div className="text-center mb-clamp-lg">
          <div className="flex items-center justify-center pricing-gap-md mb-clamp-sm">
            <Ticket className={`${ICON_SIZE_MD} text-accent flex-shrink-0`} strokeWidth={STROKE_WIDTH_REGULAR} />
            <span className="font-semibold text-accent text-fluid-pricing-sm leading-none">KUPÓN {discount.split(' na ')[0]}</span>
          </div>
          {discount.includes(' na ') && (
            <span className="text-fluid-pricing-xs font-light block">na {discount.split(' na ')[1]}</span>
          )}
        </div>
      )}

      {/* Result section - ALWAYS VISIBLE (no accordion) */}
      <div className="mb-clamp-lg">
        <div className="bg-accent/5 dark:bg-accent/10 rounded-xl border-2 border-accent/30 dark:border-accent/20 p-clamp-md">
          <p className="font-bold text-fluid-pricing-base text-center mb-clamp-md">{resultTitle}</p>
          <div className="text-fluid-pricing-sm font-light text-left" dangerouslySetInnerHTML={{ __html: resultDescription }} />

          {testimonials && testimonials.map((testimonial, index) => (
            <div key={index} className="border-t border-accent/20 mt-[clamp(0.75rem,1.5vh,1.5rem)] pt-[clamp(0.75rem,1.5vh,1.5rem)]">
              <p className="italic text-fluid-pricing-sm font-light">{testimonial.quote}</p>
              {testimonial.author && (
                <p className="text-fluid-pricing-xs font-light mt-clamp-phases">– {testimonial.author}</p>
              )}
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center mt-auto pt-clamp-lg">
          {buttonLink ? (
            buttonLink.startsWith('/') ? (
              <Link to={buttonLink} className="inline-block">
                <Button>
                  {buttonText}
                </Button>
              </Link>
            ) : (
              <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button>
                  {buttonText}
                </Button>
              </a>
            )
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

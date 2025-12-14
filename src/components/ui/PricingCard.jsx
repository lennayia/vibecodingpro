import { Check, Gift, Tag, Crown } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import Button from './Button'
import Badge from './Badge'

export default function PricingCard({
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
  badgeText,
  isExclusive = false,
  isPopular = false,
  delay = 0
}) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
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
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setShinePosition({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px'
      }}
    >
      <motion.div
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
        <Card background="light" animate={true} delay={delay} className="relative overflow-hidden">
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)`,
              zIndex: 1
            }}
          />

          <div className="relative z-10">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8">
        {badgeText ? (
          <div className="relative">
            <span className="px-6 py-2 rounded-full font-bold uppercase tracking-wide border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900 inline-block">
              {badgeText}
            </span>
            {isExclusive && (
              <div className="absolute -top-1 -right-1">
                <Crown className="w-5 h-5 text-white dark:text-white" strokeWidth={2} />
              </div>
            )}
          </div>
        ) : (
          <span className="invisible">placeholder</span>
        )}
      </div>

      <div className="flex flex-col h-full">
        <div className="mb-6 text-center mt-8">
        <h3 className="font-display font-bold mb-2 text-2xl">
          {title}
        </h3>
        <p className="mb-1">{duration}</p>
        {serviceType && (
          <div className="mb-4 flex items-center justify-center gap-2">
            <p className="font-semibold text-accent">{serviceType}</p>
            {availableSpots && (
              <span className="text-sm font-light">({availableSpots} {availableSpots === 1 ? 'místo' : availableSpots <= 4 ? 'místa' : 'míst'})</span>
            )}
          </div>
        )}
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="mb-8 text-center">
        <h3 className="font-display font-bold mb-2 text-accent">
          {price}
        </h3>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </div>
        ))}
      </div>

      {bonuses && bonuses.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-accent" strokeWidth={2} />
            <p className="font-semibold text-accent">BONUS</p>
          </div>
          <ul className="space-y-3">
            {bonuses.map((bonus, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent mt-0.5 flex-shrink-0 text-lg">▸</span>
                <span>{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {discount && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-accent" strokeWidth={2} />
            <p className="font-semibold text-accent">SLEVA</p>
          </div>
          <p>{discount}</p>
        </div>
      )}

      <div className="mb-6 p-4 bg-gray-100 dark:bg-[#05050f] rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="font-semibold mb-1">{resultTitle}</p>
        <p dangerouslySetInnerHTML={{ __html: resultDescription }} />

        {testimonials && testimonials.map((testimonial, index) => (
          <div key={index} className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
            <p className="italic mb-2">{testimonial.quote}</p>
            <p className="text-sm font-light">– {testimonial.author}</p>
          </div>
        ))}
      </div>

        <div className="flex justify-center mt-auto">
          <Button>
            {buttonText}
          </Button>
        </div>
      </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

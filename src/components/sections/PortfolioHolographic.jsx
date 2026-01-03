import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, memo, useMemo, useEffect, useCallback } from 'react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'
import { portfolioHolographicContent } from '../../constants/data'
import '../../styles/portfolio-holographic.css'

// Performance: Transition configs outside component
const backgroundPulseTransition = { duration: 4, repeat: Infinity, ease: "easeInOut" }
const dragTransitionConfig = { bounceStiffness: 200, bounceDamping: 20 }
const closingTextTransition = { delay: 0.5 }
const cardHoverTransition = { type: "spring", stiffness: 300, damping: 20 }
const glowPulseTransition = { duration: 2, repeat: Infinity }
const shineTransition = { duration: 3, repeat: Infinity, ease: "linear" }
const flickerTransition = { duration: 0.3 }

// Carousel configuration
const CAROUSEL_CONFIG = {
  MOBILE_WIDTH: 260,
  DESKTOP_WIDTH: 380,
  MOBILE_HEIGHT: 280,
  DESKTOP_HEIGHT: 350,
  MOBILE_RADIUS: 350,
  DESKTOP_RADIUS: 450,
  PERSPECTIVE: 2000,
  MOBILE_DRAG_CONSTRAINT_MULTIPLIER: 280,
  MOBILE_GAP: 12
}

const DRAG_CONFIG = {
  ELASTIC_MOBILE: 0.2,
  ELASTIC_DESKTOP: 0.1
}

const OBSERVER_CONFIG = {
  THRESHOLD: 0.1
}

const TRANSFORM_RANGES = {
  OPACITY: {
    Z_RANGE: [-450, -225, 0, 225, 450],
    OPACITY_RANGE: [0.3, 0.5, 1, 0.5, 0.3]
  },
  SCALE: {
    Z_RANGE: [-450, 0, 450],
    SCALE_RANGE: [0.6, 1.1, 0.6]
  }
}

// Corner accents configuration
const cornerAccents = [
  { position: 'top-2 left-2', borders: 'border-t-2 border-l-2' },
  { position: 'top-2 right-2', borders: 'border-t-2 border-r-2' },
  { position: 'bottom-2 left-2', borders: 'border-b-2 border-l-2' },
  { position: 'bottom-2 right-2', borders: 'border-b-2 border-r-2' }
]

function PortfolioHolographic() {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const projects = portfolioHolographicContent.projects

  const dragX = useMotionValue(0)
  const springConfig = useMemo(() => ({ damping: 30, stiffness: 200 }), [])
  const rotation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 360]),
    springConfig
  )
  const dragRotation = useSpring(useTransform(dragX, [-500, 500], [-180, 180]), springConfig)

  // Event handlers wrapped in useCallback
  const handleDragStart = useCallback(() => setIsDragging(true), [])
  const handleDragEnd = useCallback(() => setIsDragging(false), [])
  const handleDrag = useCallback((_, info) => dragX.set(info.offset.x), [dragX])

  // Intersection Observer - pause animations when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: OBSERVER_CONFIG.THRESHOLD }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <Section
      background="holographic"
      centered={true}
      className="overflow-hidden"
      showScrollIndicator={true}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 holo-background-pulse"
          animate={isVisible ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          } : {}}
          transition={backgroundPulseTransition}
        />

        {/* Scanlines - pouze v horní části */}
        <div className="absolute inset-0 pointer-events-none holo-scanlines" />
      </div>

      <div className="w-full relative z-10" ref={containerRef}>
        <motion.div {...fadeIn}>
          <motion.h2
            className="font-display font-bold text-center mb-3 md:mb-1 leading-tight holo-text-glow"
          >
            {portfolioHolographicContent.heading}
          </motion.h2>

          <p className="text-center max-w-3xl mx-auto mb-8 md:mb-4 custom-spacing">
            {portfolioHolographicContent.subheading}
          </p>

          {/* Mobile: Horizontal drag carousel */}
          <div className="sm:hidden relative px-4">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -(projects.length * CAROUSEL_CONFIG.MOBILE_DRAG_CONSTRAINT_MULTIPLIER - CAROUSEL_CONFIG.MOBILE_DRAG_CONSTRAINT_MULTIPLIER), right: 0 }}
                dragElastic={DRAG_CONFIG.ELASTIC_MOBILE}
                dragTransition={dragTransitionConfig}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[260px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3] border-2 border-holo/30">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover portfolio-mobile-card"
                      />
                      <div className="absolute inset-0 portfolio-mobile-card-overlay" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 portfolio-mobile-card-footer">
                        <p className="text-white dark:text-accent text-sm font-bold text-center drop-shadow-lg">
                          {project.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4 md:mt-[clamp(0.5rem,1vh,1rem)]">{portfolioHolographicContent.dragInstruction}</p>
          </div>

          {/* Tablet & Desktop (>=640px): 3D carousel with animations */}
          <div className="hidden sm:block">
            <motion.div
                className="relative h-[280px] md:h-[350px] flex items-center justify-center cursor-grab active:cursor-grabbing will-change-transform"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={DRAG_CONFIG.ELASTIC_DESKTOP}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrag={handleDrag}
              >
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ perspective: `${CAROUSEL_CONFIG.PERSPECTIVE}px`, willChange: 'transform' }}
                >
                  {projects.map((project, index) => (
                    <CarouselItem
                      key={index}
                      project={project}
                      index={index}
                      rotation={rotation}
                      dragRotation={dragRotation}
                      totalProjects={projects.length}
                    />
                  ))}
                </div>
              </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Separovaný text MIMO holografický container */}
      <motion.div
        className="max-w-3xl mx-auto text-center relative z-50"
        {...slideUp}
        transition={closingTextTransition}
      >
        {portfolioHolographicContent.closingText.map((text, index) => (
          <p key={index} className={`custom-spacing ${index === 2 ? 'text-xl font-bold mt-fluid-md' : index === 1 ? 'mt-fluid-xs' : ''}`}>
            {text}
          </p>
        ))}
      </motion.div>
    </Section>
  )
}

// Carousel Item component - extracted to use hooks properly
const CarouselItem = memo(function CarouselItem({ project, index, rotation, dragRotation, totalProjects }) {
  const angle = (360 / totalProjects) * index
  // Responsive radius: smaller on mobile for better performance
  const radius = typeof window !== 'undefined' && window.innerWidth < 768
    ? CAROUSEL_CONFIG.MOBILE_RADIUS
    : CAROUSEL_CONFIG.DESKTOP_RADIUS

  const combinedRotation = useTransform(
    [rotation, dragRotation],
    ([scroll, drag]) => scroll + drag + angle
  )

  const x = useTransform(
    combinedRotation,
    (value) => Math.sin((value * Math.PI) / 180) * radius
  )

  const z = useTransform(
    combinedRotation,
    (value) => Math.cos((value * Math.PI) / 180) * radius
  )

  const opacity = useTransform(
    z,
    TRANSFORM_RANGES.OPACITY.Z_RANGE,
    TRANSFORM_RANGES.OPACITY.OPACITY_RANGE
  )

  const scale = useTransform(
    z,
    TRANSFORM_RANGES.SCALE.Z_RANGE,
    TRANSFORM_RANGES.SCALE.SCALE_RANGE
  )

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        z,
        opacity,
        scale,
        rotateY: combinedRotation,
        willChange: 'transform, opacity'
      }}
    >
      <HolographicCard project={project} zDepth={z} />
    </motion.div>
  )
})

const HolographicCard = memo(function HolographicCard({ project, zDepth }) {
  const [isHovered, setIsHovered] = useState(false)

  const glowOpacity = useTransform(
    zDepth,
    TRANSFORM_RANGES.SCALE.Z_RANGE,
    [0.4, 1, 0.4]
  )

  const handleHoverStart = useCallback(() => setIsHovered(true), [])
  const handleHoverEnd = useCallback(() => setIsHovered(false), [])

  return (
    <motion.div
      className="relative w-[280px] md:w-[380px] aspect-[4/3] will-change-transform"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      whileHover={{ scale: 1.05 }}
      transition={cardHoverTransition}
    >
      {/* Holographic glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0 blur-[20px] md:blur-[30px] holo-card-glow"
        style={{
          opacity: glowOpacity,
          willChange: 'opacity'
        }}
        animate={isHovered ? {
          opacity: [0.5, 0.9, 0.5],
        } : {}}
        transition={glowPulseTransition}
      />

      {/* Main card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-holo/30 shadow-2xl portfolio-desktop-card">
        {/* Holographic shine overlay */}
        <motion.div
          className="absolute inset-0 opacity-50 holo-card-shine"
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%'],
          }}
          transition={shineTransition}
        />

        {/* Scanlines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-80 holo-card-scanlines" />

        {/* Flicker effect on hover */}
        <motion.div
          className="absolute inset-0 bg-accent/10"
          animate={isHovered ? {
            opacity: [0, 0.3, 0, 0.2, 0],
          } : { opacity: 0 }}
          transition={flickerTransition}
        />

        {/* Project image background */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Darker overlay for better holographic effect visibility */}
          <div className="absolute inset-0 portfolio-desktop-card-overlay" />
        </div>

        {/* Corner accents */}
        {cornerAccents.map((accent, i) => (
          <div key={i} className={`absolute ${accent.position} w-4 h-4 ${accent.borders} border-holo/70`} />
        ))}

        {/* Project name bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 portfolio-desktop-card-footer border-t border-holo/20">
          <h3 className="font-display font-bold text-lg md:text-xl text-white dark:text-accent drop-shadow-lg">
            {project.name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
})

export default memo(PortfolioHolographic)

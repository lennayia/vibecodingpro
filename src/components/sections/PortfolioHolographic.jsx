import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, memo, useMemo, useEffect, useCallback } from 'react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'
import { portfolioHolographicContent } from '../../constants/data'

// Performance: Transition configs outside component
const backgroundPulseTransition = { duration: 4, repeat: Infinity, ease: "easeInOut" }
const dragTransitionConfig = { bounceStiffness: 200, bounceDamping: 20 }
const closingTextTransition = { delay: 0.5 }
const cardHoverTransition = { type: "spring", stiffness: 300, damping: 20 }
const glowPulseTransition = { duration: 2, repeat: Infinity }
const shineTransition = { duration: 3, repeat: Infinity, ease: "linear" }
const flickerTransition = { duration: 0.3 }

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
      { threshold: 0.1 } // Trigger when 10% visible
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
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(var(--holo-primary), 0.05) 0%, transparent 70%)`,
          }}
          animate={isVisible ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          } : {}}
          transition={backgroundPulseTransition}
        />

        {/* Scanlines - pouze v horní části */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(var(--holo-primary), 0.03) 2px, rgba(var(--holo-primary), 0.03) 4px)`,
            maskImage: 'linear-gradient(to bottom, white 0%, white 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 0%, white 85%, transparent 100%)',
          }}
        />
      </div>

      <div className="w-full relative z-10" ref={containerRef}>
        <motion.div {...fadeIn}>
          <motion.h2
            className="font-display font-bold text-center mb-3 md:mb-1 leading-tight"
            style={{
              textShadow: `0 0 20px rgba(var(--holo-primary), 0.3)`
            }}
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
                dragConstraints={{ left: -(projects.length * 280 - 280), right: 0 }}
                dragElastic={0.2}
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
                        className="w-full h-full object-cover"
                        style={{
                          filter: 'brightness(0.9)',
                          boxShadow: `0 4px 12px rgba(var(--holo-primary), 0.2)`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/40 backdrop-blur-sm">
                        <p className="text-accent text-sm font-bold text-center drop-shadow-lg">
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
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrag={handleDrag}
              >
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ perspective: '2000px', willChange: 'transform' }}
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
function CarouselItem({ project, index, rotation, dragRotation, totalProjects }) {
  const angle = (360 / totalProjects) * index
  const radius = 450

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
    [-radius, -radius/2, 0, radius/2, radius],
    [0.3, 0.5, 1, 0.5, 0.3]
  )

  const scale = useTransform(
    z,
    [-radius, 0, radius],
    [0.6, 1.1, 0.6]
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
}

function HolographicCard({ project, zDepth }) {
  const [isHovered, setIsHovered] = useState(false)

  const glowOpacity = useTransform(
    zDepth,
    [-450, 0, 450],
    [0.2, 0.8, 0.2]
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
        className="absolute -inset-4 rounded-3xl opacity-0"
        style={{
          opacity: glowOpacity,
          background: `linear-gradient(45deg, rgba(var(--holo-primary), 0.4), rgba(var(--holo-secondary), 0.4))`,
          filter: 'blur(20px)',
          willChange: 'opacity'
        }}
        animate={isHovered ? {
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={glowPulseTransition}
      />

      {/* Main card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-holo/30 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
        {/* Holographic shine overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, transparent 30%, rgba(var(--holo-primary), 0.3) 50%, transparent 70%)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%'],
          }}
          transition={shineTransition}
        />

        {/* Scanlines effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(var(--holo-primary), 0.1) 3px, rgba(var(--holo-primary), 0.1) 6px)`,
          }}
        />

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
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-holo/50" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-holo/50" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-holo/50" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-holo/50" />

        {/* Project name bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm border-t border-holo/20">
          <h3 className="font-display font-bold text-lg md:text-xl text-accent drop-shadow-lg">
            {project.name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(PortfolioHolographic)

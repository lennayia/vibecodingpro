import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, memo, useMemo, useEffect, useCallback } from 'react'
import Section from '../layout/Section'

function PortfolioHolographic() {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const projects = useMemo(() => [
    { name: "CoachPro", image: "/coachpro.webp" },
    { name: "PaymentsPro", image: "/paymentspro.webp" },
    { name: "PianoPro", image: "/pianopro.webp" },
    { name: "LifePro", image: "/lifepro.webp" },
    { name: "StudyPro", image: "/studypro.webp" },
    { name: "ContentPro", image: "/contentpro.webp" }
  ], [])

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
      background="dark"
      className="min-h-screen flex items-center justify-center !py-16 md:!py-24 overflow-hidden relative"
      showScrollIndicator={true}
    >
      {/* Holographic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 70%)',
          }}
          animate={isVisible ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.03) 2px, rgba(0, 255, 136, 0.03) 4px)',
          }}
        />
      </div>

      <div className="w-full relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-display font-bold mb-8 text-center"
            style={{
              lineHeight: '1.3',
              textShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
            }}
          >
            Tohle postavila žena, která neumí programovat. Já.
          </motion.h2>

          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
            8 funkčních aplikací pro reálné klientky. Žádný řádek kódu. Jen AI, strategie a vize.
          </p>

          {/* 3D Holographic Carousel */}
          <motion.div
            className="relative h-[500px] md:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ willChange: 'transform' }}
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
              {projects.map((project, index) => {
                const totalProjects = projects.length
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
                    key={index}
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
              })}
            </div>
          </motion.div>

          <motion.p
            className="text-xl text-center max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tohle jsou složitější projekty. Vy můžete začít jednodušeji – třeba jako je tato webovka.
          </motion.p>

          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <span>↓ Scrollujte ↓</span>
            <span>|</span>
            <span>← Táhněte →</span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

const HolographicCard = memo(function HolographicCard({ project, zDepth }) {
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
      className="relative w-[280px] md:w-[380px] aspect-[4/3]"
      style={{ willChange: 'transform' }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Holographic glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl opacity-0"
        style={{
          opacity: glowOpacity,
          background: 'linear-gradient(45deg, rgba(0, 255, 136, 0.4), rgba(0, 200, 255, 0.4))',
          filter: 'blur(20px)',
          willChange: 'opacity'
        }}
        animate={isHovered ? {
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Main card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl bg-gray-900/50 backdrop-blur-sm">
        {/* Holographic shine overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(0, 255, 136, 0.3) 50%, transparent 70%)',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Scanlines effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 136, 0.1) 3px, rgba(0, 255, 136, 0.1) 6px)',
          }}
        />

        {/* Flicker effect on hover */}
        <motion.div
          className="absolute inset-0 bg-accent/10"
          animate={isHovered ? {
            opacity: [0, 0.3, 0, 0.2, 0],
          } : { opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* Content placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="font-display font-bold text-3xl md:text-4xl"
                style={{
                  color: 'rgba(0, 255, 136, 0.8)',
                  textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                }}
              >
                {project.name}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent/50" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent/50" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent/50" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent/50" />

        {/* Project name bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-sm border-t border-accent/20">
          <motion.h3
            className="font-display font-bold text-lg md:text-xl"
            style={{
              color: 'rgba(0, 255, 136, 0.9)',
              textShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
            }}
          >
            {project.name}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  )
})

export default memo(PortfolioHolographic)

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowDown, ChevronDown } from 'lucide-react'
import Section from '../layout/Section'
import { phases } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

// Group phases by package
const packages = [
  { name: 'VIBE', phases: phases.slice(0, 6) },
  { name: 'VIBE+CODING', phases: phases.slice(6, 9) },
  { name: 'VIBECODING VIP', phases: phases.slice(9, 12) }
]

export default function Phases() {
  const [showArrows, setShowArrows] = useState(true)
  const [expandedPackages, setExpandedPackages] = useState({
    'VIBE': false,
    'VIBE+CODING': false,
    'VIBECODING VIP': false
  })

  const packageRefs = useRef({})

  useEffect(() => {
    const checkMobile = () => {
      setShowArrows(window.innerWidth >= 600)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-expand on scroll - DISABLED for now
  // useEffect(() => {
  //   const observers = packages.map((pkg) => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
  //             setExpandedPackages((prev) => ({
  //               ...prev,
  //               [pkg.name]: true
  //             }))
  //           }
  //         })
  //       },
  //       { threshold: 0.6 }
  //     )

  //     if (packageRefs.current[pkg.name]) {
  //       observer.observe(packageRefs.current[pkg.name])
  //     }

  //     return observer
  //   })

  //   return () => {
  //     observers.forEach((observer) => observer.disconnect())
  //   }
  // }, [])

  const togglePackage = (packageName) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [packageName]: !prev[packageName]
    }))
  }

  return (
    <Section id="process" background="light" centered={true} className="!pt-12 !pb-12 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center mb-2 md:mb-[clamp(0.25rem,0.5vh,0.75rem)]" style={{ lineHeight: '1.3' }}>
            Spolu rozběhneme tvorbu
          </h2>
          <p className="text-center max-w-3xl mx-auto text-xl font-light mb-6 md:mb-[clamp(0.75rem,2vh,1.5rem)]">
            Krok za krokem od nápadu až po funkční digi-nástroj
          </p>

          {/* Accordion - Packages */}
          <div className="max-w-5xl mx-auto relative px-4 min-[600px]:px-12 min-[1200px]:px-16">
            <div className="flex flex-col gap-8 md:gap-[clamp(1rem,2.5vh,2rem)] mt-8 md:mt-[clamp(1rem,2.5vh,2rem)]">
              {packages.map((pkg, pkgIndex) => {
                const isExpanded = expandedPackages[pkg.name]
                const globalStartIndex = packages.slice(0, pkgIndex).reduce((acc, p) => acc + p.phases.length, 0)

                return (
                  <div
                    key={pkg.name}
                    ref={(el) => (packageRefs.current[pkg.name] = el)}
                  >
                    {/* Package Header with Toggle */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative flex flex-col items-center mb-6 md:mb-[clamp(0.75rem,2vh,1.5rem)]"
                    >
                      <div className="absolute inset-0 bg-accent/10 blur-lg" />
                      <h3 className="relative font-display font-bold text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)] mb-4">
                        varianta {pkg.name}
                      </h3>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => togglePackage(pkg.name)}
                        className="group relative px-6 py-3 bg-accent/10 hover:bg-accent/20 border-2 border-accent/30 hover:border-accent/50 rounded-2xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-accent/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-center gap-2">
                          <span className="font-display font-semibold text-sm text-accent">
                            {isExpanded ? `Skrýt kroky (${pkg.phases.length})` : `Zobrazit kroky (${pkg.phases.length})`}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-accent" strokeWidth={2} />
                          </motion.div>
                        </div>
                      </button>
                    </motion.div>

                    {/* Package Phases - Expandable */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="flex flex-col gap-4 md:gap-[clamp(0rem,1.5vh,0.75rem)]">
                            {pkg.phases.map((phase, localIndex) => {
                              const globalIndex = globalStartIndex + localIndex

                              return (
                                <div key={phase.number} className="relative">
                                  {/* Phase Card */}
                                  <div className={`w-full min-[600px]:w-5/6 min-[1200px]:w-2/3 mx-auto ${globalIndex % 2 === 0 ? 'min-[600px]:ml-0 min-[600px]:mr-auto' : 'min-[600px]:ml-auto min-[600px]:mr-0'}`}>
                                    <motion.div
                                      initial={{ opacity: 0, y: 30 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: 0.1 * (localIndex % 3) }}
                                      className="group relative bg-[#f2f2f2] dark:bg-[#070716] rounded-2xl min-[600px]:rounded-3xl p-3 hover:scale-[1.01] transition-all duration-300 border-2 border-gray-200 dark:border-[#05050f] hover:border-accent/30 overflow-hidden flex flex-col"
                                    >
                                      {/* Holographic glow on hover */}
                                      <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1), transparent 70%)',
                                          pointerEvents: 'none',
                                        }}
                                      />

                                      {/* Header */}
                                      <div className="flex items-start gap-3 relative z-10 mb-4 md:mb-[clamp(0.5rem,1.5vh,0.75rem)]">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border-2 border-accent/30 flex-shrink-0">
                                          <phase.Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1">
                                          <span className="font-display font-bold text-accent text-xl min-[600px]:text-2xl">
                                            {phase.number}
                                          </span>
                                          <h3 className="font-display font-bold text-lg min-[600px]:text-xl mt-0.5 min-[600px]:mt-1">
                                            {phase.title}
                                          </h3>
                                        </div>
                                      </div>

                                      {/* Split Content */}
                                      <div className="relative z-10 flex-1 flex flex-col justify-start gap-2 md:gap-[clamp(0.25rem,0.5vh,0.5rem)]">
                                        {/* Your Action */}
                                        <div className="bg-white/50 dark:bg-black/20 rounded-lg min-[600px]:rounded-xl px-2 pt-1 pb-0.5 border border-gray-200 dark:border-gray-800">
                                          <div className="flex items-start gap-2">
                                            <span className="text-xs min-[600px]:text-sm font-semibold text-accent flex-shrink-0">Vy:</span>
                                            <p className="text-xs min-[600px]:text-sm flex-1">{phase.yourAction}</p>
                                          </div>
                                        </div>

                                        {/* My Support */}
                                        <div className="bg-accent/5 dark:bg-accent/10 rounded-lg min-[600px]:rounded-xl px-2 pt-1 pb-0.5 border border-accent/20">
                                          <div className="flex items-start gap-2">
                                            <span className="text-xs min-[600px]:text-sm font-semibold text-accent flex-shrink-0">{phase.supportLabel || "Já"}:</span>
                                            <p className="text-xs min-[600px]:text-sm flex-1">{phase.mySupport}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </div>

                                  {/* Diagonal Arrow between phases */}
                                  {showArrows && localIndex < pkg.phases.length - 1 && (
                                    <div className={`w-5/6 min-[1200px]:w-2/3 mx-auto ${globalIndex % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                                      <div className={`flex ${globalIndex % 2 === 0 ? 'justify-start pl-20 min-[1200px]:pl-56' : 'justify-end pr-40 min-[1200px]:pr-64'} py-2`}>
                                        <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ delay: 0.2 }}
                                        >
                                          <ArrowDown className="w-8 h-8 text-accent" strokeWidth={2} style={{ transform: globalIndex % 2 === 0 ? 'rotate(-45deg)' : 'rotate(45deg)' }} />
                                        </motion.div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

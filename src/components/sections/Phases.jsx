import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import Section from '../layout/Section'
import { phases } from '../../constants/data'
import { fadeIn } from '../../constants/animations'

export default function Phases() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div id="phases-section" className="w-full">
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-6 md:mb-8 text-center" style={{ lineHeight: '1.3' }}>
            Společně rozběhneme tvorbu
          </h2>
          <p className="mb-8 md:mb-12 lg:mb-16 text-center max-w-3xl mx-auto text-xl font-light">
            Krok za krokem od nápadu až po funkční digi-nástroj
          </p>

          {/* Diagonal Flow Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop: Diagonal Flow */}
            <div className="hidden md:block relative">
              {phases.map((phase, index) => {
                // Calculate diagonal position
                const isEven = index % 2 === 0
                const row = Math.floor(index / 2)

                return (
                  <div key={index} className="relative mb-12">
                    {/* Connecting Arrow */}
                    {index < phases.length - 1 && (
                      <motion.div
                        className="absolute z-0"
                        style={{
                          left: isEven ? '50%' : '10%',
                          top: '100%',
                          transform: 'translateY(-50px)',
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <ArrowDownRight
                          className="w-12 h-12 text-accent"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    )}

                    {/* Phase Card */}
                    <motion.div
                      className="relative z-10"
                      style={{
                        marginLeft: isEven ? '0%' : '30%',
                        maxWidth: '600px',
                      }}
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="group relative bg-[#f2f2f2] dark:bg-[#070716] rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 border-2 border-gray-200 dark:border-[#05050f] hover:border-accent/30 overflow-hidden">
                        {/* Holographic glow on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1), transparent 70%)',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4 relative z-10">
                          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border-2 border-accent/30 flex-shrink-0">
                            <phase.Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <span className="font-display font-bold text-accent text-2xl">
                              {phase.number}
                            </span>
                            <h3 className="font-display font-bold text-xl mt-1">
                              {phase.title}
                            </h3>
                          </div>
                        </div>

                        {/* Split Content */}
                        <div className="space-y-3 relative z-10">
                          {/* Your Action */}
                          <div className="bg-white/50 dark:bg-black/20 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-start gap-2">
                              <span className="text-sm font-semibold text-accent flex-shrink-0">Vy:</span>
                              <p className="text-sm flex-1">{phase.yourAction}</p>
                            </div>
                          </div>

                          {/* My Support */}
                          <div className="bg-accent/5 dark:bg-accent/10 rounded-xl p-4 border border-accent/20">
                            <div className="flex items-start gap-2">
                              <span className="text-sm font-semibold text-accent flex-shrink-0">Já:</span>
                              <p className="text-sm flex-1">{phase.mySupport}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="md:hidden space-y-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#f2f2f2] dark:bg-[#070716] rounded-2xl p-5 border-2 border-gray-200 dark:border-[#05050f]">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border-2 border-accent/30 flex-shrink-0">
                        <phase.Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <span className="font-display font-bold text-accent text-lg">
                          {phase.number}
                        </span>
                        <h3 className="font-display font-bold text-lg mt-0.5">
                          {phase.title}
                        </h3>
                      </div>
                    </div>

                    {/* Split Content */}
                    <div className="space-y-3">
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3 border border-gray-200 dark:border-gray-800">
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-accent flex-shrink-0">Vy:</span>
                          <p className="text-xs flex-1">{phase.yourAction}</p>
                        </div>
                      </div>

                      <div className="bg-accent/5 dark:bg-accent/10 rounded-lg p-3 border border-accent/20">
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-accent flex-shrink-0">Já:</span>
                          <p className="text-xs flex-1">{phase.mySupport}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Arrow */}
                  {index < phases.length - 1 && (
                    <div className="flex justify-center py-3">
                      <ArrowDownRight
                        className="w-8 h-8 text-accent/30"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

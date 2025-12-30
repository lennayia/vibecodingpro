import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { Gift, Copy, Check, Sparkles, Package, Clock, Wallet } from 'lucide-react'
import { fadeIn, slideUp } from '../../constants/animations'
import AnimatedBackground from '../ui/AnimatedBackground'

export default function PromoCoupon() {
  const [copied, setCopied] = useState(false)
  const couponCode = "VIBELEDEN"

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const binaryBackground = <AnimatedBackground type="binary" count={50} />

  return (
    <Section
      background="dark"
      centered={true}
      showScrollIndicator={true}
      backgroundElement={binaryBackground}
    >
      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          {/* Main heading */}
          <motion.div
            className="text-center mb-8 md:mb-[clamp(1.5rem,3vh,2rem)]"
            {...slideUp}
          >
            <div className="flex items-center justify-center gap-3 md:gap-[clamp(0.5rem,1vh,0.75rem)] mb-4 md:mb-[clamp(0.75rem,1.5vh,1rem)]">
              <Gift className="w-10 h-10 md:w-12 md:h-12 text-accent" strokeWidth={2} />
              <h2 className="font-display font-bold" style={{ lineHeight: '1.3' }}>
                Povánoční dárek od VibecodingPro
              </h2>
              <Gift className="w-10 h-10 md:w-12 md:h-12 text-accent" strokeWidth={2} />
            </div>

            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Začněte rok 2026 s vlastními digitálními nástroji ještě snadněji
            </p>
          </motion.div>

          {/* Main promo card */}
          <motion.div
            className="max-w-4xl mx-auto mb-8 md:mb-[clamp(1.5rem,3vh,2rem)]"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-accent/50 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-md p-8 md:p-[clamp(2rem,4vh,3rem)]">
              {/* Holographic glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{
                  background: 'linear-gradient(45deg, rgba(0, 255, 136, 0.4), rgba(0, 200, 255, 0.4))',
                  filter: 'blur(30px)',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Holographic shine overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, rgba(0, 255, 136, 0.4) 50%, transparent 70%)',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 200%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Scanlines effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 136, 0.1) 3px, rgba(0, 255, 136, 0.1) 6px)',
                }}
              />

              {/* Corner ribbon with -25% */}
              <div className="absolute -top-1 -right-1 overflow-hidden w-36 h-36 md:w-44 md:h-44 rounded-tr-3xl">
                <motion.div
                  className="absolute top-8 -right-11 md:top-10 md:-right-14 w-44 md:w-52 bg-accent text-black text-center font-black py-2 md:py-3 shadow-2xl"
                  style={{
                    transform: 'rotate(45deg)',
                    transformOrigin: 'center center'
                  }}
                  animate={{
                    boxShadow: [
                      '0 4px 20px rgba(0, 255, 136, 0.5)',
                      '0 4px 30px rgba(0, 255, 136, 0.8)',
                      '0 4px 20px rgba(0, 255, 136, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl md:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                    -25%
                  </span>
                </motion.div>
              </div>

              <div className="relative z-10 pt-8 md:pt-[clamp(2rem,3vh,3rem)]">
                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-[clamp(1rem,2vh,1.5rem)] mb-8 md:mb-[clamp(1.5rem,3vh,2rem)]">
                  <div className="text-center">
                    <div className="flex justify-center mb-2 md:mb-[clamp(0.25rem,0.5vh,0.5rem)]">
                      <Package className="w-6 h-6 md:w-7 md:h-7 text-accent" strokeWidth={2} />
                    </div>
                    <p className="text-lg font-semibold mb-1 md:mb-[clamp(0.15rem,0.3vh,0.25rem)]">Na všechny varianty</p>
                    <p className="text-sm font-light">VIBE, VIBE+CODING i VIP</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2 md:mb-[clamp(0.25rem,0.5vh,0.5rem)]">
                      <Clock className="w-6 h-6 md:w-7 md:h-7 text-accent" strokeWidth={2} />
                    </div>
                    <p className="text-lg font-semibold mb-1 md:mb-[clamp(0.15rem,0.3vh,0.25rem)]">Limitovaná nabídka</p>
                    <p className="text-sm font-light">Platí do 4. 1. 2026 23:59</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2 md:mb-[clamp(0.25rem,0.5vh,0.5rem)]">
                      <Wallet className="w-6 h-6 md:w-7 md:h-7 text-accent" strokeWidth={2} />
                    </div>
                    <p className="text-lg font-semibold mb-1 md:mb-[clamp(0.15rem,0.3vh,0.25rem)]">Okamžitá úspora</p>
                    <p className="text-sm font-light">Až 7 475 Kč vám zůstane v peněžence</p>
                  </div>
                </div>

                {/* Coupon code */}
                <div className="text-center mb-6 md:mb-[clamp(1rem,2vh,1.5rem)]">
                  <p className="text-lg font-light mb-3 md:mb-[clamp(0.5rem,1vh,0.75rem)]">
                    Při objednávce použijte kód a získejte 25% slevu:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[clamp(0.75rem,1.5vh,1rem)]">
                    <div className="bg-accent rounded-xl px-6 md:px-[clamp(1.5rem,2vh,2rem)] py-3 md:py-[clamp(0.75rem,1.5vh,1rem)] shadow-lg">
                      <p className="font-mono text-3xl md:text-4xl font-black text-black tracking-wider">
                        {couponCode}
                      </p>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="bg-black/30 hover:bg-black/40 border-2 border-accent/50 hover:border-accent text-white font-bold px-5 md:px-[clamp(1.25rem,2vh,1.5rem)] py-2.5 md:py-[clamp(0.6rem,1.2vh,0.75rem)] rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5" strokeWidth={2.5} />
                          <span>Zkopírováno!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" strokeWidth={2.5} />
                          <span>Kopírovat kód</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Call to action */}
                <div className="text-center border-t border-accent/20 pt-6 md:pt-[clamp(1rem,2vh,1.5rem)]">
                  <p className="text-xl font-semibold mb-4 md:mb-[clamp(0.75rem,1.5vh,1rem)]">
                    Proč to je skvělá příležitost?
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-[clamp(0.5rem,1vh,0.75rem)] max-w-2xl mx-auto text-left">
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="font-light">Investice do vlastních digitálních nástrojů se vám vrátí několikanásobně</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="font-light">Začnete rok 2026 s konkurenční výhodou</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="font-light">Ušetříte čas i peníze na pokusech a omylech</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="font-light">Budujete (polo)pasivní příjem už od prvních dnů</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

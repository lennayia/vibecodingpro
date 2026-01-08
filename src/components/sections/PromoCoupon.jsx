import { motion } from 'framer-motion'
import { useState, memo, useCallback } from 'react'
import Section from '../layout/Section'
import { Gift, Copy, Check, Package, Clock, Wallet } from 'lucide-react'
import { fadeIn, slideUp } from '../../constants/animations'

function PromoCoupon() {
  const [copied, setCopied] = useState(false)
  const couponCode = "VIBELEDEN"

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(couponCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [couponCode])

  return (
    <Section
  background="none"
  className="bg-white dark:bg-[#05050f]"
  centered={true}
  showScrollIndicator={true}
  customPadding="pt-6 md:pt-8 lg:pt-4 pb-12 md:pb-14 lg:pb-20 px-[4%]"
>
      <div className="w-full relative z-10">
        <motion.div {...fadeIn}>
          {/* Main heading */}
          <motion.div
            className="text-center mt-fluid-promo-xl mb-fluid-promo-xl lg:mt-6 lg:mb-8"
            {...slideUp}
          >
            <div className="flex items-center justify-center gap-3 lg:gap-4 mb-fluid-promo-md flex-wrap">
              <Gift className="hidden lg:block w-10 lg:w-12 h-10 lg:h-12 text-accent flex-shrink-0" strokeWidth={2} />
              <h2 className="font-display font-bold leading-tight">
                Povánoční dárek od VibecodingPro
              </h2>
              <Gift className="hidden lg:block w-10 lg:w-12 h-10 lg:h-12 text-accent flex-shrink-0" strokeWidth={2} />
            </div>

            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Začněte rok 2026 s vlastními digitálními nástroji ještě snadněji
            </p>
          </motion.div>

          {/* Main promo card */}
          <motion.div
            className="max-w-4xl mx-auto"
            {...slideUp}
            transition={{ delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-accent/50 dark:border-[#0ddd0d]/50 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent dark:from-[#0ddd0d]/10 dark:via-[#0ddd0d]/5 p-fluid-promo-lg lg:p-6">
              {/* Holographic glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-30 holo-glow-bg"
                style={{ willChange: 'opacity' }}
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
                className="absolute inset-0 rounded-3xl opacity-20 holo-shine-bg"
                style={{ willChange: 'transform' }}
                animate={{
                  x: ['0%', '100%'],
                  y: ['0%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Scanlines effect - optimized */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-50 holo-scanlines-bg"
                style={{ transform: 'translateZ(0)' }}
              />

              {/* Corner ribbon with -25 % */}
              <div className="absolute -top-1 -right-1 overflow-hidden w-36 h-36 md:w-44 md:h-44 rounded-tr-3xl">
                <motion.div
                  className="absolute top-8 -right-11 md:top-10 md:-right-14 w-44 md:w-52 bg-accent dark:bg-[#0ddd0d] text-black text-center font-black py-2 md:py-3 shadow-accent-glow rotate-45 origin-center"
                  style={{ willChange: 'opacity' }}
                  animate={{
                    opacity: [1, 0.9, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl md:text-3xl drop-shadow-md">
                    -25 %
                  </span>
                </motion.div>
              </div>

              <div className="relative z-10">
                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-fluid-promo-md mb-fluid-promo-xl mt-12 md:mt-8 lg:mt-6 lg:gap-4 lg:mb-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-fluid-promo-xs">
                      <Package
                        className="text-accent promo-icon-fluid"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xl font-semibold mb-fluid-promo-xxs">Na všechny varianty</p>
                    <p className="font-light promo-text-fluid-sm">VIBE, VIBE+CODING i VIP</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-fluid-promo-xs">
                      <Clock
                        className="text-accent promo-icon-fluid"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xl font-semibold mb-fluid-promo-xxs">Limitovaná nabídka</p>
                    <p className="font-light promo-text-fluid-sm">Platí do 12. 1. 2026 23:59</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-fluid-promo-xs">
                      <Wallet
                        className="text-accent promo-icon-fluid"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xl font-semibold mb-fluid-promo-xxs">Okamžitá úspora</p>
                    <p className="font-light promo-text-fluid-sm">Až 7 475 Kč vám zůstane v peněžence</p>
                  </div>
                </div>

                {/* Coupon code */}
                <div className="text-center mb-fluid-promo-lg lg:mb-6">
                  <p className="text-lg font-light mb-fluid-promo-sm">
                    Při objednávce použijte kód a získejte 25% slevu:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="bg-white dark:bg-[#0a0a1a] border-2 border-accent rounded-xl px-6 h-14 flex items-center justify-center shadow-lg">
                      <span className="font-mono text-2xl font-black text-[#2E2E2E] dark:text-white tracking-wider">
                        {couponCode}
                      </span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="bg-white dark:bg-[#0a0a1a] border-2 border-accent rounded-xl px-6 h-14 flex items-center justify-center gap-2 text-[#2E2E2E] dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-[#0a0a1a]/80 transition-colors"
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
                <div className="text-center border-t border-accent/20 pt-fluid-promo-md lg:pt-4">
                  <p className="text-xl font-semibold mb-fluid-promo-md lg:mb-4">
                    Proč to je skvělá příležitost?
                  </p>
                  <div className="grid md:grid-cols-2 gap-fluid-promo-xs max-w-2xl mx-auto text-left">
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

export default memo(PromoCoupon)
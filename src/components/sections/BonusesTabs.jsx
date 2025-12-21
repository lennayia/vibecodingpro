import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section from '../layout/Section'
import { Gift, Check, Map, FileCheck, BookOpen, Video, Mail, ClipboardList, Phone, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeIn } from '../../constants/animations'

export default function BonusesTabsSeo() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const BONUSES_PER_SLIDE = 4 // Number of bonuses per slide

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
      name: "Sleva na další konzultaci v Kč",
      description: "Chcete pokračovat? Máte zvýhodněnou cenu na další spolupráci v rámci 2hodinové konzultace (z hodnoty 3 900 Kč) a platí 3 měsíce od data zakoupení spolupráce v níže popsaných variantách.",
      icon: Tag,
      vibe: "300",
      vibeCode: "600",
      vibeCoding: "900"
    }
  ]

  // Create slides structure similar to phases
  const packages = [
    { name: "VIBE", key: "vibe", previousPackage: null },
    { name: "VIBE+CODING", key: "vibeCode", previousPackage: "VIBE" },
    { name: "VIBECODING VIP", key: "vibeCoding", previousPackage: "VIBE+CODING" }
  ]

  // Group bonuses by package into slides
  const bonusSlides = []
  packages.forEach((pkg, pkgIndex) => {
    let packageBonuses = []

    // Add "Everything from previous variant" item for higher packages
    if (pkg.previousPackage) {
      packageBonuses.push({
        name: `Všechno z varianty ${pkg.previousPackage}`,
        description: "",
        icon: Check,
        isPreviousPackage: true
      })
    }

    // Get only NEW bonuses for this package (not in previous packages)
    const newBonuses = bonusItems.filter(item => {
      const hasInCurrent = item[pkg.key] !== false
      if (!hasInCurrent) return false

      // Always include discount bonus (has different values for each package)
      if (item.icon === Tag) return true

      // Check if this bonus was in any previous package
      const previousPackages = packages.slice(0, pkgIndex)
      const wasInPrevious = previousPackages.some(prevPkg => item[prevPkg.key] !== false)

      return !wasInPrevious
    })

    packageBonuses = packageBonuses.concat(newBonuses)

    // Split package bonuses into slides of BONUSES_PER_SLIDE
    for (let i = 0; i < packageBonuses.length; i += BONUSES_PER_SLIDE) {
      bonusSlides.push({
        package: pkg.name,
        bonuses: packageBonuses.slice(i, i + BONUSES_PER_SLIDE)
      })
    }
  })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bonusSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bonusSlides.length) % bonusSlides.length)
  }

  return (
    <Section background="light" centered={true} className="!pt-12 !pb-12 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" showScrollIndicator={true}>
      <div className="w-full">
        <motion.div {...fadeIn}>
          {/* Fixed header */}
          <div className="sticky top-0 z-30 bg-[#f8f8f8] dark:bg-[#05050f] pb-6 md:pb-[clamp(0.75rem,2vh,1.5rem)] pt-8 md:pt-[clamp(1rem,2.5vh,2rem)]">
            <div className="text-center mb-8 md:mb-[clamp(1rem,2.5vh,2rem)]">
              <div className="flex items-center justify-center gap-3">
                <Gift className="w-8 h-8 text-accent" strokeWidth={2} />
                <h2 className="font-display font-bold" style={{ lineHeight: '1.3' }}>
                  Bonusy, které vám usnadní cestu
                </h2>
              </div>
            </div>

            {/* Package selector with arrows */}
            <div className="relative flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-accent/10 rounded-full p-2 cursor-pointer hover:bg-accent/20 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-accent" strokeWidth={2} />
              </button>

              <motion.div
                key={bonusSlides[currentSlide].package}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent/10 blur-lg animate-pulse" />
                <h3 className="relative font-display font-bold text-accent drop-shadow-[0_0_20px_rgba(0,255,136,0.6)]">
                  varianta {bonusSlides[currentSlide].package}
                </h3>
              </motion.div>

              <button
                onClick={nextSlide}
                className="bg-accent/10 rounded-full p-2 cursor-pointer hover:bg-accent/20 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-accent" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Bonus carousel */}
          <div className="max-w-2xl mx-auto relative mt-8 md:mt-[clamp(1rem,2.5vh,2rem)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[2px]"
              >
                {bonusSlides[currentSlide]?.bonuses.map((item, index) => {
                  const pkg = packages.find(p => p.name === bonusSlides[currentSlide].package)
                  const pkgIndex = packages.findIndex(p => p.name === bonusSlides[currentSlide].package)
                  const value = item.isPreviousPackage ? true : item[pkg.key]
                  const IconComponent = item.icon

                  // Calculate discount display for higher packages
                  let discountDisplay = value
                  let isIncrementalDiscount = false
                  if (!item.isPreviousPackage && value !== true && item.icon === Tag && pkgIndex > 0) {
                    const previousPkg = packages[pkgIndex - 1]
                    const previousValue = parseInt(item[previousPkg.key])
                    const currentValue = parseInt(value)
                    const increment = currentValue - previousValue
                    discountDisplay = `Kupón ${increment} Kč (celkem ${currentValue} Kč)`
                    isIncrementalDiscount = true
                  }

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 rounded-xl bg-gray-50 dark:bg-[#0a0a1a] border border-gray-200 dark:border-[#070716] hover:border-accent/30 dark:hover:border-accent/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon with accent background */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2 md:mb-[clamp(0.25rem,0.5vh,0.5rem)]">
                            <h4 className="font-bold text-lg">{item.name}</h4>
                            {!item.isPreviousPackage && value !== true && (
                              <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                                {isIncrementalDiscount ? discountDisplay : `Kupón ${discountDisplay} Kč`}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="flex justify-center gap-3 flex-wrap max-w-md mx-auto mt-4 md:mt-[clamp(0.5rem,1vh,0.5rem)]">
              {bonusSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full cursor-pointer transition-all ${
                    index === currentSlide
                      ? 'bg-accent w-12 h-3'
                      : 'bg-gray-400 dark:bg-gray-600 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

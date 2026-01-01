import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import { Smartphone, BarChart3, GraduationCap, Globe, Bot, ShoppingBag } from 'lucide-react'
import Section from '../layout/Section'
import { fadeIn, slideUp } from '../../constants/animations'

function WhatYouCanCreate() {
  const categories = useMemo(() => [
    {
      Icon: Smartphone,
      title: "Aplikace pro klientky",
      description: "Spánkový tracker, deník vděčnosti, habit tracker, meditační průvodce"
    },
    {
      Icon: BarChart3,
      title: "Nástroje pro podnikání",
      description: "Kalkulačky, kvízy, checklisty, onboarding pro klientky"
    },
    {
      Icon: GraduationCap,
      title: "Vzdělávací platformy",
      description: "Kurzy, členské sekce, interaktivní materiály"
    },
    {
      Icon: Globe,
      title: "Weby",
      description: "Moderní webové stránky pro váš byznys"
    },
    {
      Icon: Bot,
      title: "AI asistenty",
      description: "Chatboti, kteří odpovídají za vás 24/7"
    },
    {
      Icon: ShoppingBag,
      title: "Digitální produkty",
      description: "Aplikace, které prodáváte jako produkt"
    }
  ], [])

  return (
    <Section id="what-you-can-create" background="dark" centered={true} className="!pt-8 md:!pt-2 !pb-12 md:!pb-8 lg:!pt-4 lg:!pb-12" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold text-center -mt-2 md:-mt-4 lg:-mt-6 mb-8 md:mb-[clamp(1rem,3vh,4rem)]" leading-tight>
            Co můžete s vibecodingem vytvořit
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[clamp(1rem,3vh,2rem)] mb-12 md:mb-[clamp(1rem,3vh,4rem)]">
            {categories.map((category, index) => {
              const Icon = category.Icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  {...slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4 md:mb-[clamp(0.5rem,1.5vh,1rem)]">
                    <Icon className="w-16 h-16 text-gray-800 dark:text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold mb-2 md:mb-[clamp(0.25rem,1vh,0.75rem)]">
                    {category.title}
                  </h3>
                  <p className="font-light">
                    {category.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center max-w-2xl mx-auto"
            {...slideUp}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl">
              A to je jen začátek. Co chcete vytvořit vy?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(WhatYouCanCreate)

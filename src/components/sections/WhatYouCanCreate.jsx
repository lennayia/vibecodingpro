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
    <Section background="dark" className="min-h-screen flex items-center justify-center !py-4 md:!py-8 lg:!py-12" showScrollIndicator={true}>
      <div>
        <motion.div {...fadeIn}>
          <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
            Co si můžete vytvořit?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => {
              const Icon = category.Icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  {...slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold mb-3">
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

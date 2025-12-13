import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { fadeInUp, stagger } from '../../constants/animations'

export default function HeroSeo() {
  return (
    <Section background="light" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 bg-gray-100 dark:bg-[#05050f] rounded-full text-sm font-medium border border-gray-200 dark:border-[#070716]">
            Vibecoding – cesta k vaší aplikaci
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold mb-8"
        >
          Vytvořte si vlastní aplikaci a{' '}
          <span className="text-gradient">škálujte svoje podnikání</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-12 max-w-3xl mx-auto text-center text-xl font-light"
        >
          <span className="block text-xl font-light">Už nechcete měnit čas za peníze.</span>
          <span className="block text-xl font-light mt-6">Chcete aplikaci, která doplní vaše podnikání o konkurenční výhodu.</span>
          <span className="block text-xl font-light">Pracuje za vás 24/7 a pomáhá stovkám klientek – zatímco vy si užíváte růst a svobodu.</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center"
        >
          <Button>
            Ukázat možnosti
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Button from '../ui/Button'
import { fadeInUp, stagger } from '../../constants/animations'

export default function Hero() {
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
            Postavte si vlastní aplikaci za 6 měsíců
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
        >
          Škálujte své podnikání
          <br />
          <span className="text-gradient">s vlastní aplikací</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mb-12 max-w-3xl mx-auto"
        >
          Přestaňte měnit čas za peníze. Vytvořte si aplikaci, která pracuje za vás 24/7
          a pomáhá stovkám klientek - zatímco vy si užíváte svobodu a růst.
          <span className="block mt-4">Bez zkušeností s kódováním.</span>
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

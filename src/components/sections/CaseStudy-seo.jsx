import { motion } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function CaseStudySeo() {
  return (
    <section className="pt-16 pb-0 px-6 dark:bg-[#070716]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <Badge>Realita</Badge>
          </div>

          <h2 className="font-display font-bold text-center mb-8" style={{ lineHeight: '1.3' }}>
            Takhle to může vypadat v praxi
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

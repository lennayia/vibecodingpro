import { motion } from 'framer-motion'

export default function PhaseCard({ phase, index }) {
  const { number, title, description, Icon } = phase

  return (
    <motion.div
      className="group bg-[#f2f2f2] dark:bg-[#070716] rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-[#05050f]"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-6">
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="font-display font-bold text-gray-400 dark:text-gray-600 text-2xl">
            {number}
          </span>
          <Icon className="w-10 h-10 flex-shrink-0" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
            {title}
          </h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

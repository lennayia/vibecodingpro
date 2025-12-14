import { motion } from 'framer-motion'

export default function PhaseCard({ phase, index }) {
  const { number, title, description, Icon } = phase

  return (
    <motion.div
      className="group bg-[#f2f2f2] dark:bg-[#070716] rounded-3xl py-8 px-3 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-[#05050f]"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-6">
        <span className="font-display font-bold text-gray-400 dark:text-gray-600 text-4xl flex-shrink-0">
          {number}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-8 h-8 flex-shrink-0" strokeWidth={1.5} />
            <h3 className="font-display font-bold">
              {title}
            </h3>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

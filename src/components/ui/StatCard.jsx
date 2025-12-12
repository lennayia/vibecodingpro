import { motion } from 'framer-motion'

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#05050f] hover:scale-105 transition-transform border border-gray-200 dark:border-[#070716]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <h3 className="mb-4 text-accent">
        {value}
      </h3>
      <div>
        {label}
      </div>
    </motion.div>
  )
}

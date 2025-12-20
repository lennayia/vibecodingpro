import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/layout/Navigation'
import Footer from '../components/layout/Footer'
import { Calendar } from 'lucide-react'

export default function ReservationPage() {
  useEffect(() => {
    document.title = 'Rezervace termínu | Vibecoding'
  }, [])

  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-[#070716]">
      <Navigation />

      <main style={{ paddingTop: 'clamp(6rem, 12vh, 12rem)', paddingBottom: 'clamp(4rem, 8vh, 8rem)' }}>
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: 'clamp(3rem, 6vh, 6rem)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-accent" strokeWidth={2} />
              <h1 className="font-display font-bold text-4xl md:text-5xl">
                Rezervace termínu
              </h1>
            </div>
            <p className="text-xl font-light max-w-2xl mx-auto">
              Vyberte si termín, který vám vyhovuje. Těšíme se na setkání! 🎯
            </p>
          </motion.div>

          {/* Google Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-[#05050f] rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1PZIcjUhss50BMXv-j8DPUzAFf7-v3T3gprl73gC9GUj7_rqykCqLmD94MnrbYg_vt2lIhNHLr?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Rezervace termínu"
            />
          </motion.div>

          {/* Help Text */}
          <div style={{ marginTop: 'clamp(2rem, 4vh, 4rem)' }} className="text-center">
            <p className="text-sm font-light text-gray-600 dark:text-gray-400">
              Máte problém s rezervací? <a href="mailto:info@vibecoding.cz" className="text-accent hover:underline">Napište nám</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

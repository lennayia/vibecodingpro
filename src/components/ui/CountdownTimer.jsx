import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 dark:bg-[#05050f] border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 min-w-[70px] flex items-center justify-center">
        <h3 className="font-display font-bold text-accent text-center">
          {String(value).padStart(2, '0')}
        </h3>
      </div>
      <p className="mt-2 text-sm font-light">
        {label}
      </p>
    </div>
  )

  return (
    <div className="flex gap-3 justify-center">
      <TimeUnit value={timeLeft.days} label="dny" />
      <div className="flex items-center pb-8">
        <span className="font-display font-bold text-accent">:</span>
      </div>
      <TimeUnit value={timeLeft.hours} label="hodiny" />
      <div className="flex items-center pb-8">
        <span className="font-display font-bold text-accent">:</span>
      </div>
      <TimeUnit value={timeLeft.minutes} label="minuty" />
      <div className="flex items-center pb-8">
        <span className="font-display font-bold text-accent">:</span>
      </div>
      <TimeUnit value={timeLeft.seconds} label="sekundy" />
    </div>
  )
}

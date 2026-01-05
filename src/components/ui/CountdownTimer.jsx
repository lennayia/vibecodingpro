import { useState, useEffect } from 'react'

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
  }, [targetDate])

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center flex-1">
      <div className="bg-[#FFFDF9] dark:bg-[#05050f] border border-accent/20 dark:border-gray-600 rounded-xl px-3 sm:px-6 py-4 sm:py-6 w-full flex items-center justify-center">
        <div className="font-display dark:font-['Manrope',sans-serif] font-bold text-accent text-center text-3xl sm:text-5xl md:text-6xl dark:scale-90">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <p className="mt-2 text-[0.625rem] sm:text-xs font-light">
        {label}
      </p>
    </div>
  )

  return (
    <div className="flex gap-1 sm:gap-3 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="dny" />
      <div className="flex items-center pb-6 sm:pb-8">
        <span className="font-display font-bold text-accent text-sm sm:text-base">:</span>
      </div>
      <TimeUnit value={timeLeft.hours} label="hodiny" />
      <div className="flex items-center pb-6 sm:pb-8">
        <span className="font-display font-bold text-accent text-sm sm:text-base">:</span>
      </div>
      <TimeUnit value={timeLeft.minutes} label="minuty" />
      <div className="flex items-center pb-6 sm:pb-8">
        <span className="font-display font-bold text-accent text-sm sm:text-base">:</span>
      </div>
      <TimeUnit value={timeLeft.seconds} label="sekundy" />
    </div>
  )
}

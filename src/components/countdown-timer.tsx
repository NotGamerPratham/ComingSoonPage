import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { TimeLeft } from "@/types"

interface CountdownTimerProps {
  targetDate: Date
}

function calculateTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - new Date().getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card px-6 py-4 min-w-[80px] sm:min-w-[100px] text-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs sm:text-sm font-medium text-muted-foreground mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

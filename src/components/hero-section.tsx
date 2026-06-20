import { motion } from "framer-motion"
import { SITE_CONFIG } from "@/data/site"
import { CountdownTimer } from "@/components/countdown-timer"
import { WaitlistForm } from "@/components/waitlist-form"
import { SocialLinks } from "@/components/social-links"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-6"
        >
          <Badge variant="premium" className="px-4 py-1.5 text-sm gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Coming Soon
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-gradient">{SITE_CONFIG.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/90 mb-4"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-16"
      >
        <CountdownTimer targetDate={SITE_CONFIG.launchDate} />
      </motion.div>

      <motion.div
        id="waitlist"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="w-full max-w-md mb-10"
      >
        <p className="text-center text-sm font-medium text-muted-foreground mb-4 uppercase tracking-widest">
          Join the waitlist
        </p>
        <WaitlistForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <SocialLinks />
      </motion.div>
    </section>
  )
}

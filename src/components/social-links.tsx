import { motion } from "framer-motion"
import { MessageCircle, Hash, Briefcase, Code2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SOCIAL_LINKS } from "@/data/site"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  Twitter: Hash,
  Github: Code2,
  Linkedin: Briefcase,
  MessageCircle,
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link, i) => {
        const Icon = iconMap[link.icon] || MessageCircle
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-11 h-11 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        )
      })}
    </div>
  )
}

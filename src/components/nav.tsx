import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { SITE_CONFIG, NAV_LINKS } from "@/data/site"
import { Button } from "@/components/ui/button"

export function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <span className="text-lg font-bold text-gradient">{SITE_CONFIG.name}</span>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              onClick={() => scrollTo(link.href.slice(1))}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="premium"
            size="sm"
            onClick={() => scrollTo("waitlist")}
            className="hidden sm:inline-flex"
          >
            Join Waitlist
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

import { Separator } from "@/components/ui/separator"
import { SocialLinks } from "@/components/social-links"
import { EmailSubscription } from "@/components/email-subscription"
import { SITE_CONFIG } from "@/data/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <span className="text-xl font-bold text-gradient">{SITE_CONFIG.name}</span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Stay Connected
            </h4>
            <SocialLinks />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Get Notified
            </h4>
            <EmailSubscription />
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

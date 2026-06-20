import { motion } from "framer-motion"
import { TEASER_FEATURES } from "@/data/site"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Shield, Brain, Globe, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Zap: Sparkles,
  Shield,
  Brain,
  Globe,
}

export function TeaserSection() {
  return (
    <section id="features" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="premium" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for the{" "}
            <span className="text-gradient">next generation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature is crafted to deliver an exceptional experience from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEASER_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full glass-card group cursor-default">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

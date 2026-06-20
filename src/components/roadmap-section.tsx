import { motion } from "framer-motion"
import { RoadmapPreview } from "@/components/roadmap-preview"
import { Badge } from "@/components/ui/badge"

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="warning" className="mb-4">
            Roadmap
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our journey to{" "}
            <span className="text-gradient-gold">launch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow our progress as we build toward something incredible.
          </p>
        </motion.div>

        <RoadmapPreview />
      </div>
    </section>
  )
}

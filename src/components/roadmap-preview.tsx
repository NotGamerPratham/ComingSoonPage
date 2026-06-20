import { motion } from "framer-motion"
import { Check, type LucideIcon, Sparkles, Rocket, Zap, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ROADMAP } from "@/data/site"

const statusIcons: Record<string, LucideIcon> = {
  completed: Check,
  "in-progress": Sparkles,
  upcoming: Rocket,
}

const phaseIcons = [Zap, Sparkles, Rocket, Globe]

const statusVariants: Record<string, "success" | "warning" | "premium"> = {
  completed: "success",
  "in-progress": "warning",
  upcoming: "premium",
}

const statusLabels: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Upcoming",
}

export function RoadmapPreview() {
  return (
    <div className="relative">
      <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-transparent hidden md:block" />
      <div className="space-y-8 md:space-y-0">
        {ROADMAP.map((item, i) => {
          const StatusIcon = statusIcons[item.status]
          const PhaseIcon = phaseIcons[i]

          return (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="md:flex md:gap-8 md:pb-8"
            >
              <div className="hidden md:flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 backdrop-blur-sm ${
                    item.status === "completed"
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                      : item.status === "in-progress"
                        ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                        : "bg-violet-500/20 border-violet-500/50 text-violet-400"
                  }`}
                >
                  <PhaseIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1 glass-card p-6 ml-0 md:ml-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="md:hidden">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          item.status === "completed"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : item.status === "in-progress"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-violet-500/20 text-violet-400"
                        }`}
                      >
                        <PhaseIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <Badge variant={statusVariants[item.status]}>
                    {statusLabels[item.status]}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                  <StatusIcon className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

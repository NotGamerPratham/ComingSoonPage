import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("success")
  }

  return (
    <div className="max-w-md mx-auto">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-emerald-400"
        >
          <CheckCircle className="h-5 w-5 shrink-0" />
          <span className="text-sm">Thanks for subscribing!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Stay updated"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 backdrop-blur-sm"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="premium"
            disabled={status === "loading" || !email}
            className="shrink-0"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

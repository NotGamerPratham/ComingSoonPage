import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address")
      setStatus("error")
      return
    }
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1500))
    setStatus("success")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass-card p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">
              We'll notify you at <span className="font-medium text-foreground">{email}</span> when we launch.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setStatus("idle")
                }}
                className="pl-12 h-14 text-base bg-background/50 backdrop-blur-sm border-border/50 focus:border-violet-500/50"
                disabled={status === "loading"}
              />
            </div>
            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
            <Button
              type="submit"
              size="lg"
              variant="premium"
              className="w-full h-14 text-base group"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

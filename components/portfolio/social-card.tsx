"use client"

import { useState } from "react"
import { Mail, Check, Copy } from "lucide-react"
import { GlassCard } from "./glass-card"
import { GithubIcon, LinkedinIcon } from "./brand-icons"
import { useLanguage } from "@/lib/i18n"

const EMAIL = "yogamaysuhendra@gmail.com"

export function SocialCard() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.log("[v0] clipboard copy failed")
    }
  }

  return (
    <GlassCard className="md:col-span-2 flex flex-col gap-5">
      <h2 className="text-lg font-semibold">{t.social.title}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href="https://github.com/yogamaysuhendra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <GithubIcon className="h-5 w-5" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/yogamaysuhendra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <LinkedinIcon className="h-5 w-5" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
      <button
        onClick={copyEmail}
        className="group/email flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3 text-left transition-colors hover:border-primary/40"
      >
        <span className="flex items-center gap-3 min-w-0">
          <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <span className="truncate text-sm font-medium">{EMAIL}</span>
        </span>
        {copied ? (
          <span className="flex shrink-0 items-center gap-1 text-sm text-primary">
            <Check className="h-4 w-4" aria-hidden />
            Copied
          </span>
        ) : (
          <Copy className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover/email:text-primary" aria-hidden />
        )}
      </button>
    </GlassCard>
  )
}

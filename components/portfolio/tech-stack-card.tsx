"use client"

import { Layers } from "lucide-react"
import { GlassCard } from "./glass-card"
import { useLanguage } from "@/lib/i18n"

export function TechStackCard() {
  const { t } = useLanguage()
  return (
    <GlassCard className="md:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <Layers className="h-5 w-5 text-primary" aria-hidden />
        <h2 className="text-lg font-semibold">{t.tech.title}</h2>
      </div>
      <div className="space-y-5">
        {t.tech.groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
            <span className="w-28 shrink-0 text-sm font-medium text-muted-foreground">{group.label}</span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}

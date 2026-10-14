"use client"

import { GraduationCap, Award, Users } from "lucide-react"
import { GlassCard } from "./glass-card"
import { useLanguage } from "@/lib/i18n"

const icons = [Award, Users]

export function ExperienceCard() {
  const { t } = useLanguage()
  return (
    <GlassCard className="md:col-span-2">
      <div className="mb-5 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
        <h2 className="text-lg font-semibold">{t.experience.title}</h2>
      </div>
      <ul className="space-y-4">
        {t.experience.milestones.map((m, i) => {
          const Icon = icons[i] ?? Award
          return (
            <li key={m.title} className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium leading-snug">{m.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </GlassCard>
  )
}

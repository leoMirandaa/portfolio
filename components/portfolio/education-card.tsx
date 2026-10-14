"use client"

import { GraduationCap } from "lucide-react"
import { GlassCard } from "./glass-card"
import { useLanguage } from "@/lib/i18n"

export function EducationCard() {
  const { t } = useLanguage()
  return (
    <GlassCard className="flex flex-col gap-5 md:col-span-2">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
        <h2 className="text-lg font-semibold">{t.education.title}</h2>
      </div>

      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
          <GraduationCap className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <p className="font-semibold leading-snug">{t.education.school}</p>
          <p className="text-sm text-primary">{t.education.degree}</p>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <p className="mb-3 text-sm text-muted-foreground">{t.education.focusTitle}</p>
        <div className="flex flex-wrap gap-2">
          {t.education.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}

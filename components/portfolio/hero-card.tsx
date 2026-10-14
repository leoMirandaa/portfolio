"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { GlassCard } from "./glass-card"
import { useLanguage } from "@/lib/i18n"

export function HeroCard() {
  const { t } = useLanguage()
  return (
    <GlassCard className="flex flex-col justify-between gap-6 md:col-span-2 md:row-span-2">
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border sm:h-24 sm:w-24">
          <Image
            src="/profile.png"
            alt="Portrait of Yoga May Suhendra"
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Yoga May Suhendra
          </h1>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-pretty text-base font-medium text-primary sm:text-lg">{t.hero.role}</p>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{t.hero.bio}</p>
        <a
          href="/Yoga-May-Suhendra-CV.pdf"
          download
          className="group/cv relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_oklch(0.78_0.13_175_/_40%),0_12px_40px_-12px_oklch(0.78_0.13_175_/_70%)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_oklch(0.78_0.13_175_/_60%),0_18px_55px_-12px_oklch(0.78_0.13_175_/_90%)]"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/cv:translate-x-full"
          />
          <Download className="h-4 w-4 transition-transform duration-300 group-hover/cv:translate-y-0.5" aria-hidden />
          {t.hero.downloadCv}
        </a>
      </div>

      <div className="flex flex-wrap gap-6 border-t border-border pt-5">
        {t.hero.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}

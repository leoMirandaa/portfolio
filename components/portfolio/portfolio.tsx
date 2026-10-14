"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"
import { LanguageToggle } from "./language-toggle"
import { HeroCard } from "./hero-card"
import { EducationCard } from "./education-card"
import { TechStackCard } from "./tech-stack-card"
import { ProjectsSection } from "./projects-section"
import { ExperienceCard } from "./experience-card"
import { SocialCard } from "./social-card"

export function Portfolio() {
  const { t, isAnimating } = useLanguage()

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header className="mb-8 flex items-center justify-between gap-4">
          <span className="font-mono text-sm font-medium tracking-tight text-primary">{"<yoga.dev />"}</span>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{t.header.tagline}</span>
            <LanguageToggle />
          </div>
        </header>

        {/* Smooth fade between languages */}
        <div
          className={cn(
            "transition-all duration-200 ease-out",
            isAnimating ? "opacity-0 blur-[2px]" : "opacity-100 blur-0",
          )}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <HeroCard />
            <TechStackCard />
            <EducationCard />
            <ProjectsSection />
            <ExperienceCard />
            <SocialCard />
          </div>

          <footer className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            {t.footer}
          </footer>
        </div>
      </div>
    </main>
  )
}

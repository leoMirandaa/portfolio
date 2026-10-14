"use client"

import { useState } from "react"
import { Code2, ExternalLink, Globe, Monitor, BrainCircuit } from "lucide-react"
import { GlassCard } from "./glass-card"
import { GithubIcon } from "./brand-icons"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

type Category = "Web Development" | "Desktop" | "AI / Deep Learning"

// Stable, language-independent project metadata (icons, tech stack, links).
const categoryIcons: Record<Category, typeof Globe> = {
  "Web Development": Globe,
  Desktop: Monitor,
  "AI / Deep Learning": BrainCircuit,
}

const projectMeta: Record<Category, { stack: string[]; source: string; demo: string }> = {
  "Web Development": {
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    source: "https://github.com/yogamaysuhendra",
    demo: "#",
  },
  Desktop: {
    stack: ["Java", "NetBeans Swing", "MySQL", "OOP"],
    source: "https://github.com/yogamaysuhendra",
    demo: "#",
  },
  "AI / Deep Learning": {
    stack: ["Python", "CNN", "Deep Learning", "Image Processing"],
    source: "https://github.com/yogamaysuhendra",
    demo: "#",
  },
}

export function ProjectsSection() {
  const { t } = useLanguage()
  const [active, setActive] = useState<string>("All")

  const visible = active === "All" ? t.projects.items : t.projects.items.filter((p) => p.category === active)

  return (
    <section className="md:col-span-4" aria-labelledby="projects-heading">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" aria-hidden />
          <h2 id="projects-heading" className="text-lg font-semibold">
            {t.projects.title}
          </h2>
        </div>
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-1.5 rounded-full border border-border bg-card/60 p-1">
          {t.projects.filters.map((filter) => (
            <button
              key={filter.key}
              role="tab"
              aria-selected={active === filter.key}
              onClick={() => setActive(filter.key)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                active === filter.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          const Icon = categoryIcons[project.category]
          const meta = projectMeta[project.category]
          return (
            <GlassCard key={project.category} as="article" className="animate-fade-up flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
                <Icon className="h-4 w-4" aria-hidden />
                {t.projects.categoryLabels[project.category]}
              </div>
              <h3 className="text-pretty text-lg font-semibold leading-snug">{project.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {meta.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <a
                  href={meta.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t.projects.source}
                </a>
                <a
                  href={meta.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  {t.projects.demo}
                </a>
              </div>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}

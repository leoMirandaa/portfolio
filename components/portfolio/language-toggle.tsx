"use client"

import { Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage, type Lang } from "@/lib/i18n"

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
]

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-muted-foreground" aria-hidden />
      <div
        role="group"
        aria-label="Select language"
        className="relative flex items-center rounded-full border border-border bg-card/60 p-1 backdrop-blur"
      >
        {/* Sliding active indicator */}
        <span
          aria-hidden
          className={cn(
            "absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-primary shadow-[0_0_18px_-4px_oklch(0.78_0.13_175_/_80%)] transition-transform duration-300 ease-out",
            lang === "id" ? "translate-x-[calc(100%+0.25rem)]" : "translate-x-0",
          )}
        />
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={lang === option.value}
            onClick={() => setLang(option.value)}
            className={cn(
              "relative z-10 w-9 rounded-full px-2 py-1 text-xs font-semibold transition-colors duration-200",
              lang === option.value ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article"
}

export function GlassCard({ className, children, as = "div", ...props }: GlassCardProps) {
  const Comp = as

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    target.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    target.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <Comp
      onMouseMove={handleMouseMove}
      className={cn("glass-card group relative overflow-hidden rounded-3xl p-6 sm:p-7", className)}
      {...props}
    >
      <span aria-hidden className="glow-spot" />
      <div className="relative z-10 h-full">{children}</div>
    </Comp>
  )
}

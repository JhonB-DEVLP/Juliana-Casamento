"use client"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SectionCardProps {
  title: string
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
}

export function SectionCard({ title, icon: Icon, children, className }: SectionCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border/30 bg-muted/30">
        {Icon && <Icon className="w-5 h-5 text-primary" />}
        <h3 className="font-serif text-lg text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

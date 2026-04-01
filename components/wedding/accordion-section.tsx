"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface AccordionSectionProps {
  title: string
  icon?: LucideIcon
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionSection({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = false 
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
          <span className="font-medium text-foreground">{title}</span>
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[6000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 pt-2 border-t border-border/30">
          {children}
        </div>
      </div>
    </div>
  )
}

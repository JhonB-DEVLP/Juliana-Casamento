import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface MenuItem {
  name: string
  description?: string
}

interface MenuCardProps {
  title: string
  icon?: LucideIcon
  items: MenuItem[]
  className?: string
}

export function MenuCard({ title, icon: Icon, items, className }: MenuCardProps) {
  return (
    <div className={cn("bg-muted/30 rounded-xl p-5", className)}>
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-5 h-5 text-accent" />}
        <h4 className="font-serif text-lg text-foreground">{title}</h4>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col">
            <span className="text-foreground">{item.name}</span>
            {item.description && (
              <span className="text-sm text-muted-foreground">{item.description}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

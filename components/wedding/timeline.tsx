import { cn } from "@/lib/utils"

interface TimelineItem {
  time: string
  title: string
  description?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground shadow-sm" />
            {index < items.length - 1 && (
              <div className="w-0.5 flex-1 bg-border mt-2" />
            )}
          </div>
          <div className="pb-6">
            <span className="text-sm font-medium text-primary">{item.time}</span>
            <h4 className="font-medium text-foreground mt-1">{item.title}</h4>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-px bg-gold/50" />
          <Heart className="w-5 h-5 text-primary fill-primary/30" />
          <div className="w-12 h-px bg-gold/50" />
        </div>
        
        <h2 className="font-couple text-2xl md:text-3xl text-foreground mb-2">
          Flávio & Juliana
        </h2>
        
        <p className="text-muted-foreground mb-6">
          31 de outubro de 2026
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50">
          <span className="text-sm text-muted-foreground">#FlavioEJuliana2026</span>
        </div>
        
        <p className="text-2xs text-muted-foreground mt-8">
          Feito com muito amor para celebrar este dia especial
        </p>
      </div>
    </footer>
  )
}

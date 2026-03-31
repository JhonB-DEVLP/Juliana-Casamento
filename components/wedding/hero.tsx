"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gold/50" />
          <Heart className="w-5 h-5 text-primary fill-primary/30" />
          <div className="w-16 h-px bg-gold/50" />
        </div>

        {/* Names */}
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Celebrando o nosso amor
        </p>

        <h1 className="font-couple text-5xl md:text-7xl lg:text-8xl text-foreground mb-2">
          Flávio
        </h1>

        <div className="flex items-center justify-center gap-4 my-4">
          <div className="w-12 h-px bg-gold" />
          <span className="font-couple text-2xl md:text-3xl text-gold">&</span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h1 className="font-couple text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
          Juliana
        </h1>

        {/* Date */}
        <div className="space-y-2 mb-12">
          <p className="text-lg md:text-xl text-muted-foreground">
            31 de outubro de 2026
          </p>
          <p className="text-sm text-muted-foreground/80">
            Sábado, às 20h
          </p>
        </div>

      </div>
    </section>
  )
}

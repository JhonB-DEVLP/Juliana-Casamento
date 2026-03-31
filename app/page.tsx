"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/wedding/hero"
import { Navigation } from "@/components/wedding/navigation"
import { Footer } from "@/components/wedding/footer"
import { InicioSection } from "@/components/wedding/sections/inicio"
import { CerimoniaSection } from "@/components/wedding/sections/cerimonia"
import { FestaSection } from "@/components/wedding/sections/festa"
import { PadrinhosSection } from "@/components/wedding/sections/padrinhos"
import { ManualSection } from "@/components/wedding/sections/manual"
import { OrganizacaoSection } from "@/components/wedding/sections/organizacao"
import { cn } from "@/lib/utils"
import { Heart } from "lucide-react"

const sections = [
  { id: "inicio", title: "Início", component: InicioSection },
  { id: "cerimonia", title: "Cerimônia", component: CerimoniaSection },
  { id: "festa", title: "Recepção", component: FestaSection },
  { id: "padrinhos", title: "Padrinhos", component: PadrinhosSection },
  { id: "manual", title: "Informações", component: ManualSection },
  { id: "organizacao", title: "Playlist", component: OrganizacaoSection },
]

export default function WeddingPage() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("wedding:section-change", { detail: activeSection })
    )
  }, [activeSection])

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || InicioSection
  const activeTitle = sections.find(s => s.id === activeSection)?.title || "Início"

  return (
    <main className="min-h-screen bg-transparent">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Hero Section (somente no Início) */}
      {activeSection === "inicio" && <Hero />}

      {/* Content Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div
            className={cn(
              "text-center mb-10 transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-gold/50" />
              <Heart className="w-4 h-4 text-primary fill-primary/30" />
              <div className="w-12 h-px bg-gold/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {activeTitle}
            </h2>
            {activeSection === "festa" && (
              <p className="mt-3 text-base text-muted-foreground">
                Uma noite para celebrar este momento que também é seu
              </p>
            )}
            {activeSection === "cerimonia" && (
              <div className="mt-3 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Pedimos gentilmente pontualidade, pois a cerimônia terá início no horário previsto.
                  <br />
                  Para maior comodidade, disponibilizaremos serviço de manobrista no local.
                </p>
                <div className="bg-muted/30 rounded-xl p-3">
                  <img
                    src="/Igreja.png"
                    alt="Ilustração da igreja da cerimônia"
                    className="w-full rounded-lg border border-border/50"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Active Section Content */}
          <div
            key={activeSection}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <ActiveComponent />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

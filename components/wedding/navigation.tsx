"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { 
  Home, 
  Church, 
  PartyPopper, 
  Users, 
  BookOpen, 
  Settings2,
  Menu,
  X
} from "lucide-react"

const sections = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "cerimonia", label: "Cerimônia", icon: Church },
  { id: "festa", label: "Recepção", icon: PartyPopper },
  { id: "padrinhos", label: "Padrinhos", icon: Users },
  { id: "manual", label: "Informações", icon: BookOpen },
  { id: "organizacao", label: "Playlist", icon: Settings2 },
]

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={cn(
          "fixed top-3 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Mobile header */}
          <div className="flex items-center justify-between h-16 md:hidden">
            <span className="font-serif text-lg text-foreground">F & J</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop tabs */}
          <div className="hidden md:flex items-center justify-center gap-1 h-16">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-card/98 backdrop-blur-lg transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 pt-16">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-xl text-lg transition-all duration-300",
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Icon className="w-5 h-5" />
                <span>{section.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

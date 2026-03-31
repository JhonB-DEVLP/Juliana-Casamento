 "use client"

import { useEffect, useState } from "react"

type SectionChangeEvent = CustomEvent<string>

export function SpotifyPlayer() {
  const [isOrganizacao, setIsOrganizacao] = useState(false)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const onSectionChange = (event: Event) => {
      const sectionId = (event as SectionChangeEvent).detail
      setIsOrganizacao(sectionId === "organizacao")
    }

    window.addEventListener("wedding:section-change", onSectionChange)

    return () => {
      window.removeEventListener("wedding:section-change", onSectionChange)
    }
  }, [])

  if (isOrganizacao) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm">
      <div className="rounded-xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-muted-foreground">Nossa Playlist</span>
          <button
            type="button"
            onClick={() => setIsCompact(prev => !prev)}
            className="rounded-md border border-border/70 px-2 py-1 text-xs text-foreground transition hover:bg-muted"
            aria-label={isCompact ? "Mostrar player" : "Ocultar player"}
          >
            {isCompact ? "Mostrar" : "Ocultar"}
          </button>
        </div>
        {!isCompact && (
          <div className="mt-2">
            <iframe
              style={{ borderRadius: "10px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist do Casamento"
            />
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { AccordionSection } from "../accordion-section"
import { Music } from "lucide-react"

export function OrganizacaoSection() {
  return (
    <div className="space-y-4">
      <AccordionSection title="Nossa Playlist" icon={Music} defaultOpen>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Preparamos uma playlist especial com as músicas que marcaram nossa história.
            Ouça e entre no clima do nosso casamento!
          </p>
          <div className="bg-muted/30 rounded-xl overflow-hidden">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1hY9uGXXZxnfoJwvjY26ye?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist do Casamento"
            />
          </div>

          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
            <h4 className="font-medium text-foreground mb-2">Músicas Especiais</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🎵 <strong>Primeira Dança:</strong> Perfect - Ed Sheeran</li>
              <li>🎵 <strong>Valsa com os Pais:</strong> What a Wonderful World - Louis Armstrong</li>
              <li>🎵 <strong>Nossa Música:</strong> Thinking Out Loud - Ed Sheeran</li>
            </ul>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Tem uma sugestão de música? Fale com os noivos! 🎶
          </p>
        </div>
      </AccordionSection>
    </div>
  )
}

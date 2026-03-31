"use client"

import { AccordionSection } from "../accordion-section"
import { Music, QrCode } from "lucide-react"

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
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
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

      <AccordionSection title="QR Code - Chave da Brincadeira" icon={QrCode}>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Participe da brincadeira da <strong>Chave do Cofre</strong>! 
            Cada chave custa R$20,00 e uma delas abre o cofre com um prêmio especial.
          </p>

          {/* QR Code Display */}
          <div className="bg-card rounded-xl p-8 border border-border/50 text-center">
            <div className="inline-block bg-card p-4 rounded-xl shadow-sm border border-border">
              {/* QR Code Placeholder - será substituído pelo real */}
              <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">QR Code PIX</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                Escaneie o QR Code acima ou use a chave PIX:
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="font-mono text-sm text-foreground">casamento@camilaerafael.com</span>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 rounded-xl p-4 border border-accent/10">
            <h4 className="font-medium text-foreground mb-2">Como funciona?</h4>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Faça o PIX de R$20,00 por chave</li>
              <li>Informe seu nome na descrição</li>
              <li>Retire sua chave com a equipe</li>
              <li>No momento da brincadeira, tente abrir o cofre!</li>
            </ol>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            O valor arrecadado ajuda os noivos na lua de mel! 🌴✈️
          </p>
        </div>
      </AccordionSection>
    </div>
  )
}

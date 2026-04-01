"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AccordionSection } from "../accordion-section"
import { Button } from "@/components/ui/button"
import { Check, Copy, Music, QrCode } from "lucide-react"

const PIX_KEY = "81983708000"

export function OrganizacaoSection() {
  const [pixCopied, setPixCopied] = useState(false)
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const copyPixKey = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY)
      setPixCopied(true)
      if (copyResetRef.current) clearTimeout(copyResetRef.current)
      copyResetRef.current = setTimeout(() => setPixCopied(false), 2000)
    } catch {
      setPixCopied(false)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (copyResetRef.current) clearTimeout(copyResetRef.current)
    }
  }, [])

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

      <AccordionSection title="QR Code - Chave da Brincadeira" icon={QrCode}>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Participe da brincadeira da <strong>Chave do Cofre</strong>! 
            Cada chave custa R$20,00 e uma delas abre o cofre com um prêmio especial.
          </p>

          <div className="bg-card rounded-xl p-8 border border-border/50 text-center">
            <div className="inline-block bg-card p-3 rounded-xl shadow-sm border border-border">
              <img
                src="/QrCode.jpeg"
                alt="QR Code PIX — brincadeira Chave do Cofre"
                width={220}
                height={220}
                className="mx-auto max-w-[min(100%,220px)] h-auto rounded-lg object-contain"
                loading="lazy"
              />
            </div>
            
            <div className="mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                Escaneie o QR Code acima ou use a chave PIX:
              </p>
              <div className="inline-flex items-center gap-1 rounded-lg bg-muted py-1.5 pl-4 pr-1">
                <span className="font-mono text-sm text-foreground tabular-nums">
                  {PIX_KEY}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                  onClick={copyPixKey}
                  aria-label={
                    pixCopied ? "Chave PIX copiada" : "Copiar chave PIX"
                  }
                >
                  {pixCopied ? (
                    <Check className="size-4 text-primary" aria-hidden />
                  ) : (
                    <Copy className="size-4" aria-hidden />
                  )}
                </Button>
              </div>
              {pixCopied ? (
                <p className="text-xs text-primary font-medium" role="status">
                  Chave copiada!
                </p>
              ) : null}
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
        </div>
      </AccordionSection>
    </div>
  )
}

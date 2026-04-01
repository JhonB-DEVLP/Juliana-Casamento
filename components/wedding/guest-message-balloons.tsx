"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type GuestMessage = {
  id: string
  text: string
  createdAt: string
}

const BALLOON_STYLES = [
  {
    bubble:
      "bg-white/95 border-primary/20 shadow-sm shadow-primary/5",
    tail: "border-b-primary/20 border-r-primary/20 bg-white/95",
  },
  {
    bubble:
      "bg-primary/[0.08] border-primary/18 shadow-sm",
    tail: "border-b-primary/18 border-r-primary/[0.08] bg-primary/[0.08]",
  },
  {
    bubble:
      "bg-muted/50 border-border/55 shadow-sm",
    tail: "border-b-border/55 border-r-border/55 bg-muted/50",
  },
] as const

function MessageBalloon({
  text,
  index,
}: {
  text: string
  index: number
}) {
  const s = BALLOON_STYLES[index % BALLOON_STYLES.length]
  return (
    <div className="relative max-w-44 shrink-0 pt-0.5">
      <div
        className={cn(
          "relative z-1 rounded-2xl border px-3 py-2 text-xs leading-relaxed text-foreground/90",
          s.bubble
        )}
      >
        <p className="whitespace-pre-wrap wrap-break-word">{text}</p>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute -bottom-1 left-5 z-0 size-2.5 rotate-45 rounded-[1px] border-b border-r",
          s.tail
        )}
        aria-hidden
      />
    </div>
  )
}

export function GuestMessageBalloons() {
  const [messages, setMessages] = useState<GuestMessage[]>([])
  const [draft, setDraft] = useState("")
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sentOk, setSentOk] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/messages")
      const data = (await res.json()) as { messages?: GuestMessage[] }
      setMessages(Array.isArray(data.messages) ? data.messages : [])
    } catch {
      setError("Não foi possível carregar as mensagens.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSentOk(false)
    const t = draft.trim()
    if (!t) return
    setSending(true)
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t }),
      })
      const data = (await res.json()) as {
        messages?: GuestMessage[]
        error?: string
      }
      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Não foi possível enviar."
        )
        return
      }
      setMessages(Array.isArray(data.messages) ? data.messages : [])
      setDraft("")
      setSentOk(true)
    } catch {
      setError("Não foi possível enviar. Tente de novo.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground leading-relaxed">
        Deixe aqui sua mensagem. Ela aparece no site em pequenos balões, para
        todo mundo celebrar junto com a gente.
      </p>

      {loading ? (
        <p className="text-xs text-muted-foreground">Carregando mensagens…</p>
      ) : messages.length > 0 ? (
        <div className="rounded-xl border border-dashed border-primary/15 bg-primary/3 p-4">
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground mb-3">
            Carinhos deixados aqui
          </p>
          <div className="flex flex-wrap gap-3 justify-start content-start">
            {messages.map((m, i) => (
              <MessageBalloon key={m.id} text={m.text} index={i} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground italic">
          Ainda não há mensagens — seja o primeiro a deixar um carinho!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Escreva sua mensagem para Flávio e Juliana…"
          rows={5}
          maxLength={500}
          className="min-h-[120px] resize-y text-base sm:text-sm"
          aria-label="Mensagem para os noivos"
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[0.7rem] text-muted-foreground">
            {draft.length}/500
          </span>
          <Button
            type="submit"
            disabled={sending || draft.trim().length === 0}
            className="w-full sm:w-auto"
          >
            {sending ? "Enviando…" : "Enviar mensagem"}
          </Button>
        </div>
      </form>

      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      {sentOk ? (
        <p className="text-sm text-primary font-medium">
          Mensagem enviada. Muito obrigado!
        </p>
      ) : null}
    </div>
  )
}

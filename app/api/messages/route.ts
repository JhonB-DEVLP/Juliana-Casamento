import { NextRequest, NextResponse } from "next/server"
import { mkdir, readFile, writeFile } from "fs/promises"
import path from "path"
import {
  getSupabaseServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/service"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export type GuestMessage = {
  id: string
  text: string
  createdAt: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIR, "guest-messages.json")

declare global {
  // eslint-disable-next-line no-var
  var __guestBookMessages: GuestMessage[] | undefined
}

type DbRow = { id: string; text: string; created_at: string }

function rowToGuest(m: DbRow): GuestMessage {
  return { id: m.id, text: m.text, createdAt: m.created_at }
}

async function readMessagesFromSupabase(): Promise<GuestMessage[]> {
  const supabase = getSupabaseServiceClient()
  const { data, error } = await supabase
    .from("guest_messages")
    .select("id, text, created_at")
    .order("created_at", { ascending: false })
    .limit(500)

  if (error) {
    console.error("[guest_messages] Supabase GET:", error.message)
    throw error
  }
  return (data ?? []).map((row) =>
    rowToGuest(row as DbRow)
  )
}

async function addMessageSupabase(text: string): Promise<GuestMessage[]> {
  const supabase = getSupabaseServiceClient()
  const { error } = await supabase.from("guest_messages").insert({ text })
  if (error) {
    console.error("[guest_messages] Supabase INSERT:", error.message)
    throw error
  }
  return readMessagesFromSupabase()
}

async function readMessagesFromFile(): Promise<GuestMessage[]> {
  if (globalThis.__guestBookMessages) {
    return globalThis.__guestBookMessages
  }
  try {
    const raw = await readFile(DATA_FILE, "utf-8")
    const parsed = JSON.parse(raw) as unknown
    const arr = Array.isArray(parsed) ? parsed : []
    const messages = arr.filter(
      (m): m is GuestMessage =>
        typeof m === "object" &&
        m !== null &&
        typeof (m as GuestMessage).id === "string" &&
        typeof (m as GuestMessage).text === "string"
    )
    globalThis.__guestBookMessages = messages
    return messages
  } catch {
    globalThis.__guestBookMessages = []
    return []
  }
}

async function persistFile(messages: GuestMessage[]) {
  globalThis.__guestBookMessages = messages
  try {
    await mkdir(DATA_DIR, { recursive: true })
    await writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf-8")
  } catch {
    // Ex.: hospedagem sem FS gravável — mantém só na memória da instância
  }
}

async function readMessages(): Promise<GuestMessage[]> {
  if (isSupabaseConfigured()) {
    return readMessagesFromSupabase()
  }
  return readMessagesFromFile()
}

export async function GET() {
  try {
    const messages = await readMessages()
    return NextResponse.json(
      { messages },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch {
    return NextResponse.json(
      { error: "Não foi possível carregar as mensagens." },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }

  const text =
    typeof body === "object" &&
    body !== null &&
    "text" in body &&
    typeof (body as { text: unknown }).text === "string"
      ? (body as { text: string }).text.trim()
      : ""

  if (text.length < 1 || text.length > 500) {
    return NextResponse.json(
      { error: "Escreva uma mensagem de até 500 caracteres." },
      { status: 400 }
    )
  }

  try {
    if (isSupabaseConfigured()) {
      const messages = await addMessageSupabase(text)
      return NextResponse.json({ messages })
    }

    const messages = await readMessagesFromFile()
    const next: GuestMessage = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date().toISOString(),
    }
    const updated = [next, ...messages]
    await persistFile(updated)
    return NextResponse.json({ messages: updated })
  } catch {
    return NextResponse.json(
      { error: "Não foi possível guardar a mensagem. Tente de novo." },
      { status: 500 }
    )
  }
}

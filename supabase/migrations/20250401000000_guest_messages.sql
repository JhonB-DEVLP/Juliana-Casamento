-- Executar no SQL Editor do Supabase (ou via CLI) antes de usar a API em produção.

create table if not exists public.guest_messages (
  id uuid primary key default gen_random_uuid(),
  text text not null,
  created_at timestamptz not null default now(),
  constraint guest_messages_text_len check (
    char_length(text) >= 1
    and char_length(text) <= 500
  )
);

comment on table public.guest_messages is 'Mensagens dos convidados no site do casamento.';

create index if not exists guest_messages_created_at_idx
  on public.guest_messages (created_at desc);

alter table public.guest_messages enable row level security;

-- Sem políticas públicas: só a service role (API Next.js) acede. Moderar/apagar no painel Supabase → Table Editor.

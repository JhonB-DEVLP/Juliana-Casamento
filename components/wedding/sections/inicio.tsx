"use client"

import { AccordionSection } from "../accordion-section"
import { GuestMessageBalloons } from "../guest-message-balloons"
import { Heart, Baby, Hotel, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const RSVP_FORM_URL = process.env.NEXT_PUBLIC_RSVP_URL?.trim() || ""

export function InicioSection() {
  return (
    <div className="space-y-4">
      <AccordionSection title="Boas-vindas" icon={Heart} defaultOpen>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Seja bem-vindo.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            É uma alegria ter você aqui.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Este dia foi sonhado por muitos anos.
            E, se você recebeu este convite, é porque em algum momento cruzou o nosso caminho e fez parte dele.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Por um ano e meio, planejamos cada detalhe para celebrar tudo o que nos trouxe até aqui, ao lado de quem faz parte da nossa vida.
            O que começou de forma despretensiosa ganhou força e um novo significado ao ser compartilhado com vocês. Preparamos tudo com carinho para marcar um encontro que um dia parecia passageiro, mas se transformou em uma história que, há quatorze anos, segue sendo escrita.
          </p>
          <p className="text-foreground font-medium mt-4">
            Com amor, <span className="font-couple">Flávio & Juliana</span>
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-primary/15 bg-primary/5 p-5 space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sua presença é importante para nós.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            É essencial que confirme clicando no botão abaixo{" "}
            {RSVP_FORM_URL ? (
              <a
                href={RSVP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
              >
              </a>
            ) : null}
          </p>
          {RSVP_FORM_URL ? (
            <Button asChild className="mt-1 w-full sm:w-auto">
              <a href={RSVP_FORM_URL} target="_blank" rel="noopener noreferrer">
                Confirmar presença
              </a>
            </Button>
          ) : (
            <Button
              type="button"
              disabled
              className="mt-1 w-full sm:w-auto"
              title="Defina NEXT_PUBLIC_RSVP_URL no .env.local com o link do formulário."
            >
              Confirmar presença
            </Button>
          )}
        </div>
      </AccordionSection>

      <AccordionSection title="Dicas de hospedagem" icon={Hotel}>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Para os nossos convidados que vêm de outras cidades ou que desejam aproveitar a festa com mais tranquilidade, selecionamos algumas opções de hospedagem próximas ao local da festa.
          </p>
          <p>
            Escolhemos com carinho para que sua estadia no Recife seja tão especial quanto o nosso dia.
          </p>

          <ul className="space-y-4 list-none pl-0 mt-4">
            <li className="rounded-xl border border-border/50 bg-muted/20 p-4">
              <p className="font-medium text-foreground">Ibis Boa Viagem</p>
              <p className="mt-2">
                <span className="text-foreground/90">Endereço:</span> Av. Domingos Ferreira, 683 - Pina, Recife.
              </p>
              <p className="mt-1">
                <span className="text-foreground/90">Telefone:</span> (81) 3334-3434
              </p>
              <p className="mt-2 text-xs sm:text-sm">
                <span className="font-medium text-foreground">Dica:</span> É uma opção prática e bem localizada, próxima a bons restaurantes.
              </p>
            </li>
            <li className="rounded-xl border border-border/50 bg-muted/20 p-4">
              <p className="font-medium text-foreground">Vivaz Boutique Hotel</p>
              <p className="mt-2">
                <span className="text-foreground/90">Endereço:</span> Rua Capitão Rebelinho, 374 - Pina, Recife.
              </p>
              <p className="mt-1">
                <span className="text-foreground/90">WhatsApp/Telefone:</span> (81) 3097-7332
              </p>
              <p className="mt-2 text-xs sm:text-sm">
                <span className="font-medium text-foreground">Dica:</span> Uma opção mais charmosa, pertinho da praia.
              </p>
            </li>
          </ul>
        </div>
      </AccordionSection>

      <AccordionSection title="Um Carinho para os noivos" icon={MessageSquare}>
        <GuestMessageBalloons />
      </AccordionSection>

      <AccordionSection title="Aos meus filhos" icon={Baby}>
        <div className="prose prose-sm max-w-none">
          <p className="text-foreground font-medium leading-relaxed">
            Aos meus filhos:
          </p>
          <blockquote className="my-4 border-l-2 border-primary/30 pl-4 text-muted-foreground leading-relaxed">
            <p className="italic">
              &ldquo;E então Alice perguntou: &lsquo;Quanto tempo dura o que é
              eterno?&rsquo;
              <br />
              E o Coelho respondeu: &lsquo;Às vezes, apenas um
              segundo.&rsquo;&rdquo;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Meus filhos,
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Talvez o eterno não esteja no tempo.
            <br />
            Talvez ele exista nos instantes.
            <br />
            Aqueles que mudam tudo.
            <br />
            Vocês foram assim para mim.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            No instante em que chegaram, tudo em mim mudou.
            <br />
            Não apenas a minha vida, mas a forma como eu vejo, sinto e existo
            no mundo.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Com vocês, eu entendi que o amor não é único.
            <br />
            Ele se revela de maneiras diferentes.
            <br />
            No jeito de cada um, nas muitas palavras da Mariana e no silêncio
            do Léo.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Vocês deram um novo sentido a tudo.
            <br />
            E, em vocês, encontrei algo que levei muito tempo para compreender:
            o amor.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Que esse amor acompanhe vocês por toda a vida.
            <br />
            Que sigam livres e sejam felizes.
            <br />
            E, por onde forem, levem com vocês a certeza de que eu e seu pai os
            amamos profundamente.
          </p>
          <p className="text-foreground font-medium mt-6">
            Com amor,
            <br />
            Mamãe.
          </p>
        </div>
      </AccordionSection>
    </div>
  )
}

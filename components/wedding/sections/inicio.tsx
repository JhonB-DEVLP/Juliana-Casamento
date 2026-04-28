"use client"

import { AccordionSection } from "../accordion-section"
import { GuestMessageBalloons } from "../guest-message-balloons"
import { Heart, Baby, MessageSquare } from "lucide-react"
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

      <AccordionSection title="Aos nossos filhos" icon={Baby}>
        <div className="prose prose-sm max-w-none">
          <blockquote className="my-4 border-l-2 border-primary/30 pl-4 text-muted-foreground leading-relaxed">
            <p className="italic">
              E então Alice perguntou: &ldquo;Quanto tempo dura o que é eterno?&rdquo;
              <br />
              E o Coelho respondeu: &ldquo;Às vezes, apenas um segundo.&rdquo;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mt-12">
            Talvez o eterno não esteja no tempo.
            <br />
            Talvez ele exista nos instantes.
            <br />
            Aqueles que mudam tudo.
            <br />
            Como o dia em que vocês chegaram nas nossas vidas.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Não foi o tempo que nos transformou,
            <br />
            foi a chegada de vocês.
            <br />
            Um instante só, e nada mais foi igual.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Desde então, tudo passou a ter outro sentido.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Com vocês, aprendemos que o amor se revela de formas diferentes,
            <br />
            no jeito único de cada um.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Então, o que é eterno deixou de ser uma ideia distante
            <br />
            e passou a existir dentro da nossa casa.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Que vocês cresçam livres.
            <br />
            Que encontrem o próprio caminho.
            <br />
            E que, nos pequenos instantes da vida, possam reconhecer o que
            realmente importa.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Por onde forem, levem com vocês a certeza:
            <br />
            estaremos sempre aqui.
            <br />
            E vocês terão o nosso amor até a eternidade.
          </p>
        </div>
      </AccordionSection>

      {/* Gratidão — oculto por agora. Para voltar: descomentar e readicionar Sparkles ao import do lucide-react.
      <AccordionSection title="Gratidão" icon={Sparkles}>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Agradecemos de coração a cada pessoa que caminhou ao nosso lado —
            pelos abraços, pelos conselhos, pelas risadas e pelos silêncios que
            também consolam.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Este dia existe porque vocês existem na nossa história. Obrigados
            por celebrar conosco e por fazerem parte do que mais importa para
            nós.
          </p>
          <p className="text-foreground font-medium mt-4">
            Com gratidão, <span className="font-couple">Flávio & Juliana</span>
          </p>
        </div>
      </AccordionSection>
      */}

      <AccordionSection title="Um carinho para os noivos" icon={MessageSquare}>
        <GuestMessageBalloons />
      </AccordionSection>
    </div>
  )
}

"use client"

import { AccordionSection } from "../accordion-section"
import { GuestMessageBalloons } from "../guest-message-balloons"
import { Heart, Baby, MessageSquare, Sparkles } from "lucide-react"
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
          <p className="text-foreground font-medium leading-relaxed">
            Aos nossos filhos,
          </p>
          <blockquote className="my-4 border-l-2 border-primary/30 pl-4 text-muted-foreground leading-relaxed">
            <p className="italic">
              E então Alice perguntou: &ldquo;Quanto tempo dura o que é
              eterno?&rdquo;
              <br />
              E o Coelho respondeu: &ldquo;Às vezes, apenas um segundo.&rdquo;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Talvez o eterno não esteja no tempo.
            <br />
            Talvez ele exista nos instantes, aqueles que mudam tudo.
            <br />
            Vocês foram assim para nós.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Não foi o tempo, simplesmente, que nos transformou:
            <br />
            foi o instante em que vocês chegaram, um momento só, suficiente para
            nos mudar por inteiro.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Desde então, o mundo passou a ter outro sentido.
            <br />
            A forma de ver, de agir, de existir… tudo ganhou outro significado.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Com vocês, aprendemos que o amor se revela de maneiras diferentes,
            <br />
            no jeito de cada um.
            <br />
            Nas muitas palavras da Mariana e no silêncio do Léo.
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
            E que, em cada um desses instantes que a vida oferece, vocês
            consigam reconhecer o que realmente importa.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Por onde forem, levem com vocês a certeza de que seu pai e sua mãe
            estarão sempre aqui e que vocês serão eternamente amados.
          </p>
        </div>
      </AccordionSection>

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

      <AccordionSection title="Um carinho para os noivos" icon={MessageSquare}>
        <GuestMessageBalloons />
      </AccordionSection>
    </div>
  )
}

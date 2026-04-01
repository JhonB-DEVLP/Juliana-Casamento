"use client"

import { AccordionSection } from "../accordion-section"
import { Timeline } from "../timeline"
import {
  Clock,
  MapPin,
  Users,
  BookOpen,
  Music,
  ScrollText,
  ClipboardList,
} from "lucide-react"

const cronogramaCerimonia = [
  { time: "19:30", title: "Chegada dos convidados", description: "Recepção na entrada" },
  { time: "20:00", title: "Entrada do noivo", description: "Flávio entra acompanhado de sua mãe" },
  { time: "20:03", title: "Entrada dos padrinhos e madrinhas" },
  { time: "20:07", title: "Cortejo das crianças/Damas e pajens" },
  { time: "20:10", title: "Entrada da noiva", description: "Juliana" },
  { time: "20:12", title: "Início da cerimônia" },
  { time: "20:30", title: "Celebração", description: "Votos e troca de alianças. Assinatura do livro" },
  { time: "20:45", title: "Saída dos noivos", description: "Chuva de pétalas" },
]

const cortejo = [
  { ordem: 1, nome: "Padre Dom Marcelo Gomes", funcao: "Celebrante" },
  { ordem: 2, nome: "Flávio", funcao: "Noivo com Solange (Mãe)" },
  { ordem: 3, nome: "João Lucas e Leonardo", funcao: "Pajens" },
  { ordem: 4, nome: "Maria Valentina, Cecília e Mariana", funcao: "Damas de Honra" },
  { ordem: 5, nome: "Juliana", funcao: "Noiva com Gilberto (Tio)" },
]

export function CerimoniaSection() {
  return (
    <div className="space-y-4">
      <AccordionSection title="Cronograma" icon={Clock} defaultOpen>
        <Timeline items={cronogramaCerimonia} />
      </AccordionSection>

      <AccordionSection title="Mapa da Igreja" icon={MapPin}>
        <div className="space-y-4">
          <div className="bg-muted/50 rounded-xl p-4">
            <h4 className="font-medium text-foreground mb-2">
              Igreja Nossa Senhora da Conceição dos Militares
            </h4>
            <p className="text-sm text-muted-foreground">
              Rua Nova, 309 - Bairro Santo Antônio
              <br />
              Recife - PE, 50010-100
            </p>
          </div>
          <div className="aspect-video bg-muted rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Rua+Nova,+309+-+Bairro+Santo+Ant%C3%B4nio,+Recife+-+PE,+50010-100&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Igreja"
            />
          </div>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rua+Nova,+309+-+Bairro+Santo+Ant%C3%B4nio,+Recife+-+PE,+50010-100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <MapPin className="w-4 h-4" />
            Abrir no Google Maps
          </a>
        </div>
      </AccordionSection>

      <AccordionSection title="Cortejo" icon={Users}>
        <div className="space-y-3">
          {cortejo.map((pessoa) => (
            <div 
              key={pessoa.ordem}
              className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">{pessoa.ordem}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">{pessoa.nome}</p>
                <p className="text-sm text-muted-foreground">{pessoa.funcao}</p>
              </div>
            </div>
          ))}
        </div>
      </AccordionSection>

      <AccordionSection title="Liturgia" icon={BookOpen}>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            A cerimônia será celebrada pelo <strong>Padre Dom Marcelo Gomes</strong>, 
            pároco da Igreja Nossa Senhora do Rosário dos Homens Pretos.
          </p>
          <div className="mt-4 space-y-3">
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-2">1ª leitura</h5>
              <p className="mb-3 text-sm font-medium text-foreground/90">
                Cântico dos Cânticos 8:7
              </p>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  As muitas águas não podem apagar o amor,
                  <br />
                  nem os rios levá-lo.
                </p>
                <p>
                  Se alguém oferecesse todas as riquezas da sua casa pelo amor,
                  <br />
                  isso não teria valor algum.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-1">Salmo</h5>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Dai graças ao Senhor, porque Ele é bom{" "}
                <span className="whitespace-nowrap">(Sl 136)</span>
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-2">2ª leitura</h5>
              <p className="mb-3 text-sm font-medium text-foreground/90">
                Carta aos Colossenses 3:12-14
              </p>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Revesti-vos de compaixão, bondade, humildade, mansidão e
                  paciência.
                </p>
                <p>Sabei compreender e perdoar.</p>
                <p>
                  E, acima de tudo, revesti-vos do amor, que une tudo em perfeita
                  harmonia.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-1">Evangelho</h5>
              <p className="text-sm text-muted-foreground">
                Evangelho de João 2:1-11
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-1">Leitores</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Thalita Vila Real</p>
                <p>Sávia Regina</p>
              </div>
            </div>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Cânticos" icon={Music}>
        <div className="bg-muted/30 rounded-xl p-6">
          <h4 className="font-serif text-lg text-foreground mb-1 text-center">
            Cântico de comunhão
          </h4>
          <p className="text-center text-base text-primary font-medium italic mb-6">
            Terra Seca
          </p>
          <div className="mx-auto max-w-md space-y-4 text-center text-sm text-muted-foreground italic">
            <p>
              Somente em Ti construirei a minha casa
              <br />
              Somente em Ti colocarei minha esperança
            </p>
            <p>
              Pois só em Ti minh&apos;alma achou descanso
              <br />
              Pois só em Ti eu pude respirar
            </p>
            <p>E o meu coração deseja Te encontrar</p>
            <p>Como a terra seca anseia pela chuva</p>
            <p>
              Vem me saciar, pois eu descobri que aqui é o meu lugar
            </p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Salmo" icon={ScrollText}>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="text-center space-y-4 text-muted-foreground">
            <p className="font-serif text-lg text-foreground">
              Salmo responsorial:
            </p>
            <p className="italic text-base leading-relaxed">
              &ldquo;O Senhor fez grandes coisas por nós, e por isso estamos
              alegres.&rdquo;
            </p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Orientações para cerimônia" icon={ClipboardList}>
        <div className="space-y-3">
          <div className="bg-muted/30 rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-1">Pontualidade</h5>
            <p className="text-sm text-muted-foreground">
              Pedimos gentilmente pontualidade, pois a cerimônia terá início no
              horário previsto.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-1">
              Durante a cerimônia
            </h5>
            <p className="text-sm text-muted-foreground">
              Para que a celebração aconteça de forma harmoniosa e respeitosa,
              pedimos que mantenha o celular no modo silencioso.
              <br />
              <br />
              Evite o uso de flash e preserve o silêncio e a atenção neste
              momento sagrado.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-1">Conforto</h5>
            <p className="text-sm text-muted-foreground">
              Para seu conforto, disponibilizaremos água, lenços e
              carregadores.
              <br />
              <br />
              Caso precise de auxílio, nossa equipe estará à disposição.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-1">Saída</h5>
            <p className="text-sm text-muted-foreground">
              Ao final, pedimos que aguarde a orientação do cerimonial para a
              saída, que contará com o apoio de manobristas.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-1">Cumprimentos</h5>
            <p className="text-sm text-muted-foreground">
              Os cumprimentos aos noivos acontecerão na recepção.
              <br />
              <br />
              Ao término da cerimônia, solicitamos que apenas os padrinhos
              permaneçam.
            </p>
          </div>
        </div>
      </AccordionSection>
    </div>
  )
}

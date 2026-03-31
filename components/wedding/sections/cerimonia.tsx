"use client"

import { AccordionSection } from "../accordion-section"
import { Timeline } from "../timeline"
import { 
  Clock, 
  MapPin, 
  Users, 
  BookOpen, 
  Music, 
  ScrollText 
} from "lucide-react"

const cronogramaCerimonia = [
  { time: "15:30", title: "Chegada dos Convidados", description: "Recepção na entrada da igreja" },
  { time: "16:00", title: "Entrada do Noivo", description: "Flávio entra acompanhado de sua mãe" },
  { time: "16:05", title: "Entrada das Damas e Pajens", description: "Cortejo das crianças e damas" },
  { time: "16:10", title: "Entrada da Noiva", description: "Juliana entra acompanhada de seu pai" },
  { time: "16:15", title: "Início da Cerimônia", description: "Celebração religiosa" },
  { time: "17:00", title: "Votos e Bênçãos", description: "Troca de alianças e votos" },
  { time: "17:15", title: "Assinatura do Livro", description: "Registro civil" },
  { time: "17:30", title: "Saída dos Noivos", description: "Chuva de pétalas" },
]

const cortejo = [
  { ordem: 1, nome: "Padre Dom Marcelo Gomes", funcao: "Celebrante" },
  { ordem: 2, nome: "Flávio", funcao: "Noivo com Solange (Mãe)" },
  { ordem: 3, nome: "João Lucas e Leonardo", funcao: "Pajens" },
  { ordem: 4, nome: "Maria Valentina, Cecilia e Mariana", funcao: "Damas de Honra" },
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
              Igreja Nossa Senhora Conceição dos Militares
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
              <h5 className="font-medium text-foreground mb-1">Primeira Leitura</h5>
              <p className="text-sm text-muted-foreground">Cântico dos Cânticos 2, 8-10.14.16a; 8, 6-7a</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-1">Segunda Leitura</h5>
              <p className="text-sm text-muted-foreground">Carta aos Colossenses 3, 12-17</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-1">Evangelho</h5>
              <p className="text-sm text-muted-foreground">Mateus 19, 3-6</p>
            </div>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Cânticos" icon={Music}>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { momento: "Entradas dos Pais", musicas: ["Pétala"] },
              { momento: "Entrada do Noivo", musicas: ["Your Song"] },
              { momento: "Entrada dos Padrinhos", musicas: ["Clube da Esquina II"] },
              { momento: "Entrada das Daminhas", musicas: ["Bridgerton instrumental"] },
              { momento: "Entrada da Noiva", musicas: ["Young and Beautiful"] },
              { momento: "Liturgia Eucarística", musicas: ["Comunhão", "Terra Seca"] },
              { momento: "Rito do Matrimônio", musicas: ["Votos", "If I Ain't Got You"] },
              { momento: "Rito Final", musicas: ["Beijo dos noivos", "Everything"] },
              { momento: "Assinaturas", musicas: ["Stand By Me"] },
              { momento: "Saída", musicas: ["Baba Yetu"] },
              { momento: "Extras", musicas: ["Jesus, Alegria dos Homens - Bach", "Pompa e circunstâncias - Elgar"] },
            ].map((item) => (
              <div key={item.momento} className="bg-muted/30 rounded-lg p-4">
                <h5 className="text-sm font-medium text-foreground uppercase tracking-wide">
                  {item.momento}
                </h5>
                <div className="mt-2 space-y-1">
                  {item.musicas.map((musica) => (
                    <p key={musica} className="text-sm italic text-primary">
                      {musica}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Salmo" icon={ScrollText}>
        <div className="bg-muted/30 rounded-xl p-6">
          <h4 className="font-serif text-lg text-foreground mb-4 text-center">
            Salmo 127 (128)
          </h4>
          <div className="text-center space-y-4 text-muted-foreground">
            <p className="italic">
              {`"Feliz és tu que temes o Senhor e andas nos seus caminhos!"`}
            </p>
            <p>
              Do trabalho de tuas mãos hás de comer,<br />
              serás feliz, e tudo irá bem!
            </p>
            <p>
              A tua esposa é uma videira fecunda<br />
              no íntimo do teu lar;<br />
              os teus filhos são rebentos de oliveira<br />
              ao redor da tua mesa.
            </p>
            <p className="font-medium text-primary">
              R.: Assim será abençoado todo homem que teme o Senhor.
            </p>
          </div>
        </div>
      </AccordionSection>
    </div>
  )
}

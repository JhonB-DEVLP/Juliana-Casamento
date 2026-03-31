"use client"

import { AccordionSection } from "../accordion-section"
import { Heart, Shirt, BookOpen, Calendar, Clock, Camera, Gift, CheckCircle2, AlertCircle } from "lucide-react"

const padrinhos = [
  { nome: "Vladimir", madrinha: "Thalita" },
  { nome: "Gerson Neto", madrinha: "Carla" },
  { nome: "Otávio", madrinha: "Thalita" },
  { nome: "Fábio", madrinha: "Sávia" },
  { nome: "Pedro", madrinha: "Camila" },
  { nome: "Phillipe", madrinha: "Jacy Anne" },
]

const responsabilidades = [
  {
    titulo: "Antes do Casamento",
    items: [
      "Confirmar presença até 30 dias antes",
      "Providenciar a vestimenta seguindo o dress code",
      "Participar do ensaio (data a confirmar)",
      "Estar disponível para ajudar os noivos se necessário",
    ]
  },
  {
    titulo: "No Dia da Cerimônia",
    items: [
      "Chegar à igreja com 30 minutos de antecedência",
      "Ajudar na organização do cortejo",
      "Estar atento às instruções do cerimonialista",
      "Segurar as alianças até o momento da troca",
      "Assinar como testemunha no livro de registros",
    ]
  },
  {
    titulo: "Na Festa",
    items: [
      "Participar das brincadeiras e incentivar os convidados",
      "Ajudar a animar a pista de dança",
      "Estar disponível para fotos com os noivos",
      "Aproveitar e se divertir muito!",
    ]
  }
]

const dicas = [
  {
    icon: Calendar,
    titulo: "Agenda",
    descricao: "Marque na agenda: ensaio dia 10/08 às 18h na igreja"
  },
  {
    icon: Clock,
    titulo: "Pontualidade",
    descricao: "Chegar com antecedência é fundamental para evitar imprevistos"
  },
  {
    icon: Camera,
    titulo: "Fotos",
    descricao: "Haverá sessão de fotos especial com padrinhos após a cerimônia"
  },
  {
    icon: Gift,
    titulo: "Presente",
    descricao: "A lista de presentes está disponível na loja X ou via PIX"
  },
]

export function PadrinhosSection() {
  return (
    <div className="space-y-4">
      <AccordionSection title="Aos nossos padrinhos e madrinhas" icon={Heart} defaultOpen>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed mt-3">
            Somos profundamente gratos
            por ter vocês em nossas vidas
            e por terem aceitado fazer parte deste momento
            tão especial.
          </p>
          <p className="text-foreground italic font-medium mt-3">
          Recebam nosso carinho e nossa gratidão 
            <br />
            <span className="font-couple mt-3">Flávio & Juliana</span>
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {padrinhos.map((dupla, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="text-center flex-1">
                <p className="font-medium text-foreground text-sm">{dupla.nome}</p>
                <p className="text-xs text-muted-foreground">Padrinho</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary fill-primary/30" />
              </div>
              <div className="text-center flex-1">
                <p className="font-medium text-foreground text-sm">{dupla.madrinha}</p>
                <p className="text-xs text-muted-foreground">Madrinha</p>
              </div>
            </div>
          ))}
        </div>
      </AccordionSection>

      <AccordionSection title="Dress Code" icon={Shirt}>
        <div className="space-y-6">
          {/* Madrinhas */}
          <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
            <h4 className="font-medium text-foreground mb-3">👗 Madrinhas</h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Querida madrinha, é uma alegria ter voce ao nosso lado neste dia tão especial.</p>
              <p>
                Para a ocasião, sugerimos <strong className="text-primary">vestidos longos</strong>, a sua escolha.
              </p>
              <p>
                Pedimos a gentileza de evitar <strong className="text-foreground">branco (e tons semelhantes)</strong>,
                {" "}
                <strong className="text-red-700">preto e cores neon</strong>.
              </p>
            </div>
          </div>

          {/* Padrinhos */}
          <div className="bg-accent/5 rounded-xl p-5 border border-accent/10">
            <h4 className="font-medium text-foreground mb-3">🤵 Padrinhos</h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Querido padrinho, é uma alegria ter voce ao nosso lado neste dia tão especial.</p>
              <p>
                Para a ocasião, sugerimos <strong className="text-primary">traje formal</strong>,
                composto por terno completo preto (paleto, colete e calca),
                camisa branca e gravata preta.
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Em caso de dúvidas, entre em contato conosco! 💕
          </p>
        </div>
      </AccordionSection>

      <AccordionSection title="Informações para Padrinhos" icon={BookOpen}>
        <div className="space-y-6">
          <div className="prose prose-sm max-w-none mb-2">
            <p className="text-muted-foreground leading-relaxed">
              Preparamos este guia completo para que vocês, nossos queridos padrinhos
              e madrinhas, tenham todas as informações necessárias para esse dia especial.
            </p>
          </div>

          <div className="space-y-6">
            {responsabilidades.map((secao) => (
              <div key={secao.titulo}>
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {secao.titulo}
                </h4>
                <ul className="space-y-2">
                  {secao.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary font-medium">{index + 1}</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {dicas.map((dica) => {
              const Icon = dica.icon
              return (
                <div
                  key={dica.titulo}
                  className="bg-card rounded-xl border border-border/50 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{dica.titulo}</h4>
                      <p className="text-sm text-muted-foreground">{dica.descricao}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-gold/10 rounded-xl p-5 border border-gold/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold shrink-0" />
              <div>
                <h4 className="font-medium text-foreground mb-2">Lembrete Importante</h4>
                <p className="text-sm text-muted-foreground">
                  Qualquer dúvida, entrem em contato diretamente conosco ou com nossa
                  cerimonialista <strong>Ana Paula</strong> pelo WhatsApp: (11) 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccordionSection>
    </div>
  )
}

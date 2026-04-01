"use client"

import { AccordionSection } from "../accordion-section"
import { Heart, Shirt, BookOpen, Clock, Camera, Gift, CheckCircle2, AlertCircle } from "lucide-react"

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
    ]
  },
  {
    titulo: "No Dia da Cerimônia",
    items: [
      "Pedimos a gentileza de se programarem para chegar com antecedência, considerando possíveis imprevistos.",
      "Este dia foi preparado com muito carinho, e a cerimônia terá início pontualmente no horário previsto.",
      "Estar atento às instruções do cerimonialista",
      "Durante a cerimônia, assinam como testemunhas do livro: Mirtes e Gilberto.",
    ]
  },
  {
    titulo: "Na Festa",
    items: [
      "Participar das brincadeiras",
      "Durante a festa, aproveitem.",
    ]
  }
]

const dicas = [
  {
    icon: Clock,
    titulo: "Pontualidade",
    descricao:
      "Pedimos, com carinho, que nossos padrinhos cheguem com antecedência, para que tudo flua com tranquilidade.",
  },
  {
    icon: Camera,
    titulo: "Fotos",
    descricao:
      "Após a cerimônia, pedimos que nossos padrinhos permaneçam na igreja para um momento especial de fotos.",
  },
  {
    icon: Gift,
    titulo: "Presentes",
    descricao: "Não esperamos presentes.",
    descricaoContinuacao:
      "A alegria de estarmos juntos já torna este dia completo, e isso, para nós, é o suficiente.",
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
            Recebam nosso carinho e nossa gratidão.
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
              <p>Ter você ao nosso lado nos enche de alegria.</p>
              <p>
                Sinta-se à vontade para escolher o vestido que mais lhe agrade, priorizando modelos longos.
              </p>
              <p>
                Pedimos apenas a gentileza de evitar a cor branca (ou tons semelhantes), preto e cores neon.
              </p>
            </div>
          </div>

          {/* Padrinhos */}
          <div className="bg-accent/5 rounded-xl p-5 border border-accent/10">
            <h4 className="font-medium text-foreground mb-3">🤵 Padrinhos</h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Querido padrinho, é uma alegria ter você ao nosso lado neste dia tão especial.</p>
              <p>
                Para a ocasião, sugerimos <strong className="text-primary">traje formal</strong>,
                composto por terno completo preto (paletó, colete e calça), camisa branca e gravata preta.
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
                      {"descricaoContinuacao" in dica && dica.descricaoContinuacao ? (
                        <p className="text-sm text-muted-foreground mt-2">{dica.descricaoContinuacao}</p>
                      ) : null}
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
                <h4 className="font-medium text-foreground mb-2">Lembrete importante</h4>
                <p className="text-sm text-muted-foreground">
                  Se precisar de qualquer orientação, nossa assessoria estará à disposição:
                  <br />
                  <span className="mt-1 inline-block">Elienay — (81) 8927-4349</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccordionSection>
    </div>
  )
}

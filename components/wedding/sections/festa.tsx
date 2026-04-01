"use client"

import { AccordionSection } from "../accordion-section"
import { Timeline } from "../timeline"
import { MenuCard } from "../menu-card"
import {
  Clock,
  PartyPopper,
  UtensilsCrossed,
  Cake,
  Wine,
  IceCream,
  Wifi,
  Grid3X3
} from "lucide-react"

const cronogramaFesta = [
  { time: "22:00", title: "Boas-vindas e acomodação", description: "Recepção dos convidados no salão" },
  { time: "22:30", title: "Início do jantar", description: "Serviço do jantar" },
  { time: "23:00", title: "Valsa e início da pista", description: "Abertura oficial da pista de dança" },
  { time: "00:00", title: "Banda ao vivo", description: "Show e animação da festa" },
  { time: "01:00", title: "Buquê", description: "Momento do lançamento do buquê" },
  { time: "04:00", title: "Encerramento", description: "Final da recepção" },
]

const menuPrincipal = [
  { name: "Massas" },
  { name: "Frutos do mar" },
  { name: "Estação refrescante" },
  { name: "Sabores quentes" },
  { name: "Doces" },
]

const menuBebidas = [
  { name: "Drinks autorais" },
  { name: "Clássicos" },
  { name: "Espumantes" },
  { name: "Vinhos" },
  { name: "Não alcoólicos" },
]

export function FestaSection() {
  return (
    <div className="space-y-4">
      <AccordionSection title="Cronograma da Festa" icon={Clock} defaultOpen>
        <Timeline items={cronogramaFesta} />
      </AccordionSection>

      <AccordionSection title="Brincadeiras" icon={PartyPopper}>
        <div className="space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            Preparamos alguns momentos especiais para tornar a noite ainda mais leve e divertida.
          </p>
          <div className="bg-muted/25 rounded-2xl px-5 py-6 md:px-7 md:py-7">
            <ul className="space-y-6 text-base text-muted-foreground leading-relaxed list-disc pl-6">
              <li>
                Teremos uma brincadeira com um presente especial; chaves estarão disponíveis e apenas uma delas abrirá a caixa.
              </li>
              <li>
                Um espaço foi preparado para registros da noite: tire sua foto, deixe uma mensagem e faça parte da nossa lembrança.
              </li>
            </ul>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Menu Principal" icon={UtensilsCrossed}>
        <p className="text-base text-muted-foreground leading-relaxed">
          Nosso cardápio foi cuidadosamente pensado para esta noite.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Sinta-se à vontade para explorar os sabores e aproveitar cada detalhe.
          </p>
          <MenuCard title="Pratos Principais" items={menuPrincipal} />
      </AccordionSection>

      <AccordionSection title="Menu de Doces" icon={Cake}>
        <p className="text-base text-muted-foreground leading-relaxed">
          Uma seleção pensada para ser descoberta aos poucos, com sabores para serem apreciados ao longo da noite.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          
        </p>
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Bolo:</strong> Bolo de noiva
            tradicional pernambucano
          </p>
        </div>
      </AccordionSection>

      <AccordionSection title="Carta de Drinks" icon={Wine}>
        <p className="text-base text-muted-foreground leading-relaxed">
          Pensamos em drinks que acompanhassem a noite.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Sabores leves e marcantes para descobrir, experimentar e celebrar.
        </p>
        <MenuCard title="Bebidas" items={menuBebidas} />
      </AccordionSection>

      <AccordionSection title="Estações da noite" icon={IceCream}>
        <div className="space-y-4">
          <div className="rounded-xl bg-muted/30 p-5">
            <h4 className="mb-2 font-medium text-foreground">
              Estação de gelados
            </h4>
            <p className="text-base leading-relaxed text-muted-foreground">
              Sabores leves e refrescantes, perfeitos para a noite.
            </p>
          </div>
          <div className="rounded-xl bg-muted/30 p-5">
            <h4 className="mb-2 font-medium text-foreground">Estação quente</h4>
            <p className="text-base leading-relaxed text-muted-foreground">
              Caldos variados, servidos ao longo da noite.
            </p>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Wi-Fi e Informações" icon={Wifi}>
        <div className="space-y-4">
          <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 text-center">
            <Wifi className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-medium text-foreground mb-2">Rede Wi-Fi</h4>
            <p className="text-lg font-mono text-foreground mb-1">FlavioEJuliana2026</p>
            <p className="text-sm text-muted-foreground">Senha: <span className="font-mono">amor2026</span></p>
          </div>

          <div className="bg-muted/30 rounded-xl p-4">
            <h4 className="font-medium text-foreground mb-3">Informações Úteis</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 <strong>Local:</strong> Loft Boa Viagem — Rua Cap. Rebelinho, 159 - 51011-010</li>
              <li>🚗 <strong>Estacionamento:</strong> Gratuito no local (valet disponível)</li>
              <li>🩺 <strong>Emergência:</strong> Disponibilizaremos kits de primeiros socorros nos toaletes.</li>
            </ul>
            <div className="mt-4 aspect-video bg-muted rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rua+Cap.+Rebelinho,+159,+Boa+Viagem,+Recife+-+PE,+51011-010&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Recepção"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Cap.+Rebelinho,+159,+Boa+Viagem,+Recife+-+PE,+51011-010"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Mapa das Mesas" icon={Grid3X3}>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">MAPA</p>
          <div className="bg-muted/30 rounded-xl p-3">
            <img
              src="/MAPA%20DAS%20MESAS%20.png"
              alt="Mapa do espaço da recepção com localização das atividades"
              className="w-full rounded-lg border border-border/50"
              loading="lazy"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { mesa: "①", nomes: "Flávio, Juliana, Mariana e Léo" },
              { mesa: "②", nomes: "Solange, Flávio, Sávia, Nilda, Selma, Jacy, Phillipe, Bruno, Renata e Fábio" },
              { mesa: "③", nomes: "Geane, Mirtes, Gilberto, Dona Bernadete, Geraldo, Gilson, Gerson e Matheus" },
              { mesa: "④", nomes: "Thalita, Biguga, Nilzinha e Maria" },
              { mesa: "⑤", nomes: "Pedro, Dyo, Neto, Thiago, Ana Beatriz, Andréa Carla, Cecília, Ronaldo e Glorinha" },
              { mesa: "⑥", nomes: "Camila, Letícia, Alexandre, Rafael, Carol, Aryanne e João Lucas" },
              { mesa: "⑦", nomes: "Isis, Bruno e Isabelle" },
              { mesa: "⑧", nomes: "Thalita Lima, Murillo, Marinna e Otávio" },
              { mesa: "⑨", nomes: "Julianna, Ivana, Bruno, Maria Alice, Andrews, Julianno, Fátima e Marcos" },
              { mesa: "⑩", nomes: "Honda" },
            ].map((item) => (
              <div key={item.mesa} className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-2">{item.mesa}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.nomes}</p>
              </div>
            ))}
          </div>
        </div>
      </AccordionSection>
    </div>
  )
}

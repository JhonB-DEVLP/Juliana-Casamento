"use client"

import { AccordionSection } from "../accordion-section"
import { Heart, Baby } from "lucide-react"

export function InicioSection() {
  return (
    <div className="space-y-4">
      <AccordionSection title="Boas-vindas" icon={Heart} defaultOpen>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Queridos familiares e amigos,
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            É com imensa alegria que convidamos vocês para celebrar conosco o nosso casamento. 
            Este dia tão especial só estará completo com a presença de cada um de vocês.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Preparamos este site com todo carinho para compartilhar os detalhes 
            desta celebração. Aqui vocês encontrarão todas as informações necessárias 
            para esse dia inesquecível.
          </p>
          <p className="text-foreground font-medium mt-4">
            Com amor, <span className="font-couple">Flávio & Juliana</span>
          </p>
        </div>
      </AccordionSection>

      <AccordionSection title="Aos nossos filhos" icon={Baby}>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Para nossos amados filhos, Luísa e Pedro,
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Vocês são a maior prova do nosso amor. Este casamento não é apenas 
            a união de dois adultos, mas a celebração da nossa família completa.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Queremos que vocês saibam que cada momento deste dia foi pensado 
            com vocês em nossos corações. Obrigado por nos ensinarem o que é 
            amor incondicional todos os dias.
          </p>
          <p className="text-foreground font-medium mt-4">
            Amamos vocês infinitamente! ❤️
          </p>
        </div>
      </AccordionSection>
    </div>
  )
}

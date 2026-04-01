"use client"

export function ManualSection() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border/50 bg-muted/30 p-6 md:p-8">
        <h3 className="mb-6 text-center font-serif text-xl text-foreground md:text-2xl">
          Para aproveitar melhor a noite
        </h3>
        <div className="rounded-2xl bg-muted/25 px-5 py-6 md:px-7 md:py-7">
          <div className="mb-8 border-b border-border/40 pb-8">
            <h4 className="mb-2 font-medium text-foreground">Dress code</h4>
            <p className="text-base leading-relaxed text-muted-foreground">
              Sugerimos traje social elegante
            </p>
          </div>
          <ul className="list-disc space-y-6 pl-6 text-base leading-relaxed text-muted-foreground">
            <li>
              <p>Explore o cardápio e permita-se experimentar diferentes sabores.</p>
              <p className="mt-3">
                Não é necessário escolher apenas uma opção, as estações foram
                pensadas para serem descobertas ao longo da noite.
              </p>
            </li>
            <li>Descubra os drinks e suas combinações.</li>
            <li>
              Entregue-se à pista e aos momentos ao lado de quem você ama.
            </li>
          </ul>
        </div>
        <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
          Preparamos pequenas experiências para tornar a noite ainda mais
          envolvente.
        </p>
      </div>
    </div>
  )
}

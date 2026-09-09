import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Rafael Andrade",
    area: "Jardim Bongiovani",
    text: "Melhor picanha que já comi em Prudente. Ponto exato, crosta perfeita e o atendimento no WhatsApp foi rapidíssimo.",
  },
  {
    name: "Camila Ferreira",
    area: "Vila Euclides",
    text: "Peço o executivo quase toda semana no almoço. Chega quente, bem servido e com um preço muito justo.",
  },
  {
    name: "Diego Nakamura",
    area: "Parque Cedral",
    text: "O burger de costela defumada é surreal. Dá pra sentir a fumaça de verdade, nada de sabor artificial.",
  },
  {
    name: "Patrícia Lopes",
    area: "Centro",
    text: "Ambiente escuro, aconchegante e cheiro de brasa no ar. Levei clientes para jantar e todos elogiaram.",
  },
  {
    name: "Bruno Tavares",
    area: "Jardim Paulista",
    text: "Queijo coalho com melaço vicia. Delivery chegou em 30 minutos com tudo ainda quentinho.",
  },
  {
    name: "Larissa Prado",
    area: "Jardim Morumbi",
    text: "Costela de 12 horas desmanchando no garfo. Virou tradição de sábado aqui em casa.",
  },
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">
            QUEM PROVOU, <span className="text-gradient-ember">VOLTOU</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <Quote className="absolute right-5 top-5 size-8 text-primary/20" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
              <footer className="mt-5 border-t border-border pt-4">
                <span className="block text-sm font-bold text-foreground">{r.name}</span>
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  {r.area} · Presidente Prudente
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

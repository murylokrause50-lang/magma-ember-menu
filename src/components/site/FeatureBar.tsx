import { BadgeCheck, Flame, Package, Timer } from "lucide-react";

const FEATURES = [
  { icon: BadgeCheck, title: "Carne 100% Selecionada", text: "Cortes escolhidos peça a peça" },
  { icon: Flame, title: "Brasa de Verdade", text: "Carvão, fumaça e ponto no olho" },
  { icon: Package, title: "Embalagem Térmica", text: "Chega quente e crocante" },
  { icon: Timer, title: "Entrega Expressa", text: "Delivery rápido em Prudente" },
];

export function FeatureBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex items-center gap-4 px-6 py-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10">
              <f.icon className="size-5 text-primary" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-wide text-foreground">
                {f.title}
              </span>
              <span className="block text-sm text-muted-foreground">{f.text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

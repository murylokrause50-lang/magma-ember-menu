import aboutImg from "@/assets/about-fogo.jpg";
import { Flame, Clock, Leaf } from "lucide-react";

const PILLARS = [
  {
    icon: Flame,
    title: "Fogo controlado",
    text: "Carvão de eucalipto e camadas de calor diferentes para selar por fora e manter o suco por dentro.",
  },
  {
    icon: Clock,
    title: "Tempo como tempero",
    text: "Costela de 12 horas, maturação correta e descanso da carne antes de cada corte.",
  },
  {
    icon: Leaf,
    title: "Ingrediente honesto",
    text: "Fornecedores locais, molhos feitos na casa e nada de atalho industrial.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/15 blur-3xl" />
          <img
            src={aboutImg}
            alt="Churrasqueiro virando espetos sobre chamas e faíscas"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative w-full rounded-3xl border border-border object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            O Segredo da Brasa
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">
            SOBRE A <span className="text-gradient-ember">MAGMA</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            A Magma Grill nasceu de uma obsessão simples: respeitar a carne. Aqui nada é
            apressado. A brasa é acesa horas antes do primeiro pedido, o sal é grosso, a
            fumaça é parte da receita e cada ponto é conferido no olho de quem faz isso
            todo dia.
          </p>
          <p className="mt-4 text-muted-foreground">
            Do almoço executivo do meio-dia ao jantar com cortes nobres, servimos o mesmo
            padrão: fogo bem feito, tempero na medida e comida que chega quente na sua
            mesa ou na sua casa.
          </p>

          <div className="mt-8 space-y-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-ember">
                  <p.icon className="size-5 text-primary-foreground" />
                </span>
                <span>
                  <span className="block font-bold uppercase tracking-wide text-foreground">
                    {p.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">{p.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Flame, MessageCircle, UtensilsCrossed, Truck, Star } from "lucide-react";
import heroImg from "@/assets/hero-brasa.jpg";
import { waLink, getServiceStatus } from "@/lib/magma";
import { useEffect, useState } from "react";

const BADGES = [
  { icon: Flame, label: "Cortes Nobres na Brasa" },
  { icon: UtensilsCrossed, label: "Almoço & Jantar" },
  { icon: Truck, label: "Delivery Rápido" },
];

export function Hero() {
  const [status, setStatus] = useState(() => getServiceStatus());
  useEffect(() => {
    setStatus(getServiceStatus());
    const t = setInterval(() => setStatus(getServiceStatus()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="topo" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Picanha selando sobre brasas incandescentes na Magma Grill"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="absolute -left-24 top-1/3 size-96 rounded-full bg-primary/20 blur-[120px] ember-pulse" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:pt-44 lg:pb-28">
        <div className="max-w-3xl">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
              status.open
                ? "border-whats/40 bg-whats/10 text-whats"
                : "border-border bg-surface-2 text-muted-foreground"
            }`}
          >
            <span className={`size-2 rounded-full ${status.open ? "bg-whats" : "bg-muted-foreground"}`} />
            {status.label} · {status.detail}
          </span>

          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
            A FORÇA DO FOGO,
            <br />
            <span className="text-gradient-ember">O PONTO PERFEITO</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Churrasco de verdade em Presidente Prudente. Cortes nobres, hambúrgueres
            artesanais e almoço executivo saindo direto da brasa para a sua mesa — ou
            para a sua casa, em embalagem térmica.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Olá! Quero fazer um pedido na Magma Grill.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-ember transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-5" />
              Pedir no WhatsApp
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/80 px-7 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver Cardápio
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {BADGES.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm text-foreground backdrop-blur"
              >
                <b.icon className="size-4 text-primary" />
                {b.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </span>
            4,9 · mais de 800 clientes satisfeitos na cidade
          </div>
        </div>
      </div>
    </section>
  );
}

import burger from "@/assets/gallery-burger.jpg";
import corte from "@/assets/gallery-corte.jpg";
import coalho from "@/assets/gallery-coalho.jpg";
import ambiente from "@/assets/gallery-ambiente.jpg";
import hero from "@/assets/hero-brasa.jpg";

const PHOTOS = [
  { src: corte, alt: "Picanha fatiada no ponto sobre tábua de madeira", span: "lg:col-span-2 lg:row-span-2" },
  { src: burger, alt: "Hambúrguer artesanal com bacon e cheddar", span: "" },
  { src: coalho, alt: "Espetos de queijo coalho com melaço", span: "" },
  { src: hero, alt: "Carne selando sobre brasas incandescentes", span: "lg:col-span-2" },
  { src: ambiente, alt: "Salão escuro e aconchegante da Magma Grill", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Experiência
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">
            GALERIA DA <span className="text-gradient-ember">BRASA</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um pouco do que acontece todos os dias entre a fumaça, o carvão e o balcão.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

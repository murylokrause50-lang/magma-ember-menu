import { Flame, MessageCircle, Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, waLink } from "@/lib/magma";

const LINKS = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "A Brasa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Localização" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "bg-gradient-to-b from-background/90 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-ember shadow-ember">
            <Flame className="size-5 text-primary-foreground" strokeWidth={2.4} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-wide text-foreground">
              MAGMA <span className="text-gradient-ember">GRILL</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Churrasco &amp; Delivery
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Olá! Quero fazer um pedido na Magma Grill.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-ember px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-ember transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            {BRAND.phoneLabel}
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border bg-surface-2 text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

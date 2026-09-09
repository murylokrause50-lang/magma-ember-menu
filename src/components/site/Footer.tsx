import { Flame, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, waLink } from "@/lib/magma";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-ember shadow-ember">
              <Flame className="size-5 text-primary-foreground" />
            </span>
            <span className="font-display text-3xl text-foreground">
              MAGMA <span className="text-gradient-ember">GRILL</span>
            </span>
          </span>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {BRAND.tagline}. Cortes nobres na brasa, hambúrgueres artesanais e delivery
            expresso em {BRAND.city}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Instagram da Magma Grill"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-whats hover:text-whats"
              aria-label="WhatsApp da Magma Grill"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>

        <nav>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            Navegação
          </span>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["#cardapio", "Cardápio digital"],
              ["#sobre", "Sobre a Magma"],
              ["#galeria", "Galeria"],
              ["#avaliacoes", "Avaliações"],
              ["#local", "Localização"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            Atendimento
          </span>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={waLink("Olá! Vim pelo site da Magma Grill.")} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {BRAND.phoneLabel}
              </a>
            </li>
            <li className="flex gap-2">
              <Instagram className="size-4 shrink-0 text-primary" />
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {BRAND.instagramHandle}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              <a href={BRAND.maps} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {BRAND.address}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Almoço: seg a sex, 11h–14h30
            <br />
            Jantar: seg a sáb, 18h–23h
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND.name} · {BRAND.city}. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

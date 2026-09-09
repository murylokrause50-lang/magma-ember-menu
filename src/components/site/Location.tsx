import { useState } from "react";
import { MapPin, Copy, Check, Clock, ExternalLink } from "lucide-react";
import { BRAND, getServiceStatus } from "@/lib/magma";

export function Location() {
  const [copied, setCopied] = useState(false);
  const status = getServiceStatus();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="local" className="border-t border-border bg-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Onde nos encontrar
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">
            LOCALIZAÇÃO &amp; <span className="text-gradient-ember">HORÁRIOS</span>
          </h2>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <span className="block font-bold uppercase tracking-wide text-foreground">
                  Endereço
                </span>
                <p className="mt-1 text-sm text-muted-foreground">{BRAND.address}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={copy}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
                  >
                    {copied ? <Check className="size-4 text-whats" /> : <Copy className="size-4" />}
                    {copied ? "Endereço copiado" : "Copiar endereço"}
                  </button>
                  <a
                    href={BRAND.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground"
                  >
                    <ExternalLink className="size-4" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="w-full">
                <span className="block font-bold uppercase tracking-wide text-foreground">
                  Horários
                </span>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Almoço · segunda a sexta</dt>
                    <dd className="font-semibold text-foreground">11h às 14h30</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Jantar · segunda a sábado</dt>
                    <dd className="font-semibold text-foreground">18h às 23h</dd>
                  </div>
                </dl>
                <span
                  className={`mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${
                    status.open
                      ? "border-whats/40 bg-whats/10 text-whats"
                      : "border-border bg-surface-2 text-muted-foreground"
                  }`}
                >
                  <span className={`size-2 rounded-full ${status.open ? "bg-whats" : "bg-muted-foreground"}`} />
                  {status.label} · {status.detail}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Mapa da Magma Grill em Presidente Prudente"
            src="https://www.google.com/maps?q=R.%20Jo%C3%A3o%20Pedro%20Pereira%2C%20840%20-%20Presidente%20Prudente%20-%20SP%2C%2019064-170&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-[420px] grayscale-[0.4] contrast-125"
          />
        </div>
      </div>
    </section>
  );
}

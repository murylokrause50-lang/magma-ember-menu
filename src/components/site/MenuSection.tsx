import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X, MessageCircle } from "lucide-react";
import { CATEGORIES, MENU, brl, type CategoryId, type MenuItem } from "@/data/menu";
import { BRAND, waLink } from "@/lib/magma";

type CartLine = { item: MenuItem; qty: number };

export function MenuSection() {
  const [active, setActive] = useState<CategoryId>("cortes");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const items = useMemo(() => MENU.filter((m) => m.category === active), [active]);
  const total = cart.reduce((sum, l) => sum + l.item.price * l.qty, 0);
  const count = cart.reduce((sum, l) => sum + l.qty, 0);

  const add = (item: MenuItem) =>
    setCart((prev) => {
      const found = prev.find((l) => l.item.id === item.id);
      return found
        ? prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l))
        : [...prev, { item, qty: 1 }];
    });

  const dec = (id: string) =>
    setCart((prev) =>
      prev
        .map((l) => (l.item.id === id ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    );

  const remove = (id: string) => setCart((prev) => prev.filter((l) => l.item.id !== id));

  const orderText = () => {
    const lines = cart
      .map((l) => `• ${l.qty}x ${l.item.name} — ${brl(l.item.price * l.qty)}`)
      .join("\n");
    return [
      `*NOVO PEDIDO — ${BRAND.name}*`,
      "",
      lines,
      "",
      `*Total: ${brl(total)}*`,
      "",
      `*Nome:* ${name || "(a informar)"}`,
      `*Endereço:* ${address || "(retirada no local)"}`,
      notes ? `*Observações:* ${notes}` : "",
      "",
      "Pedido enviado pelo cardápio digital 🔥",
    ]
      .filter(Boolean)
      .join("\n");
  };

  return (
    <section id="cardapio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Cardápio Digital
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">
            MONTE SEU <span className="text-gradient-ember">PEDIDO</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha os itens, some o total e envie tudo pronto no WhatsApp. Sem
            cadastro, sem espera.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all ${
                active === c.id
                  ? "border-transparent bg-gradient-ember text-primary-foreground shadow-ember"
                  : "border-border bg-surface-2 text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/60 hover:shadow-ember"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl leading-tight text-foreground">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="font-display text-2xl text-accent">{brl(item.price)}</span>
                <button
                  type="button"
                  onClick={() => add(item)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
                >
                  <Plus className="size-4" />
                  Adicionar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Floating cart bar */}
      {count > 0 && !open && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 rounded-2xl border border-primary/40 bg-card/95 px-5 py-4 backdrop-blur-xl glow-ring"
          >
            <span className="flex items-center gap-3">
              <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-ember">
                <ShoppingBag className="size-5 text-primary-foreground" />
                <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-foreground text-[11px] font-bold text-background">
                  {count}
                </span>
              </span>
              <span className="text-left">
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  Seu pedido
                </span>
                <span className="block font-display text-xl text-foreground">{brl(total)}</span>
              </span>
            </span>
            <span className="rounded-full bg-gradient-ember px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground">
              Ver pedido
            </span>
          </button>
        </div>
      )}

      {/* Cart drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-full max-w-md flex-col border-l border-border bg-card">
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-2xl text-foreground">SEU PEDIDO</span>
              <button
                type="button"
                aria-label="Fechar pedido"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {cart.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Seu pedido está vazio. Adicione itens do cardápio.
                </p>
              )}
              {cart.map((l) => (
                <div
                  key={l.item.id}
                  className="rounded-xl border border-border bg-surface-2 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold text-foreground">{l.item.name}</span>
                    <button
                      type="button"
                      aria-label={`Remover ${l.item.name}`}
                      onClick={() => remove(l.item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-full border border-border px-2 py-1">
                      <button
                        type="button"
                        aria-label="Diminuir"
                        onClick={() => dec(l.item.id)}
                        className="grid size-6 place-items-center rounded-full text-muted-foreground hover:text-primary"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-5 text-center text-sm font-bold text-foreground">
                        {l.qty}
                      </span>
                      <button
                        type="button"
                        aria-label="Aumentar"
                        onClick={() => add(l.item)}
                        className="grid size-6 place-items-center rounded-full text-muted-foreground hover:text-primary"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <span className="font-display text-lg text-accent">
                      {brl(l.item.price * l.qty)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="space-y-3 pt-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
                    Seu nome
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex.: João Silva"
                    className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
                    Endereço de entrega
                  </span>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Rua, número, bairro"
                    className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-wide text-muted-foreground">
                    Observações
                  </span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Ponto da carne, sem cebola, forma de pagamento..."
                    className="w-full resize-none rounded-xl border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </label>
              </div>
            </div>

            <footer className="border-t border-border bg-surface px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wide text-muted-foreground">
                  Total
                </span>
                <span className="font-display text-3xl text-gradient-ember">{brl(total)}</span>
              </div>
              <a
                href={cart.length ? waLink(orderText()) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={cart.length === 0}
                className={`mt-4 flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-wide transition-transform ${
                  cart.length
                    ? "bg-gradient-ember text-primary-foreground shadow-ember hover:scale-[1.02]"
                    : "pointer-events-none bg-muted text-muted-foreground"
                }`}
              >
                <MessageCircle className="size-5" />
                Enviar pedido no WhatsApp
              </a>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Pagamento e confirmação direto com a equipe {BRAND.name}.
              </p>
            </footer>
          </aside>
        </div>
      )}
    </section>
  );
}

export const BRAND = {
  name: "Magma Grill",
  tagline: "Churrasco, Almoço, Jantar e Delivery Expresso",
  city: "Presidente Prudente - SP",
  address: "R. João Pedro Pereira, 840 - Presidente Prudente - SP, 19064-170",
  phoneLabel: "(18) 99758-1954",
  whatsapp: "https://wa.me/5518997581954",
  instagram: "https://www.instagram.com/bbqmagma/",
  instagramHandle: "@bbqmagma",
  maps: "https://maps.app.goo.gl/C4U1iYLRannrtDhz5",
};

export const waLink = (text: string) =>
  `${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

export type ServiceStatus = {
  open: boolean;
  label: string;
  detail: string;
};

/** Almoço: seg-sex 11h-14h30. Jantar: seg-sáb 18h-23h. */
export function getServiceStatus(now: Date = new Date()): ServiceStatus {
  const day = now.getDay(); // 0 dom ... 6 sáb
  const minutes = now.getHours() * 60 + now.getMinutes();
  const lunch = day >= 1 && day <= 5 && minutes >= 660 && minutes < 870;
  const dinner = day >= 1 && day <= 6 && minutes >= 1080 && minutes < 1380;

  if (lunch) return { open: true, label: "Aberto agora", detail: "Almoço servido até as 14h30" };
  if (dinner) return { open: true, label: "Aberto agora", detail: "Jantar e delivery até as 23h" };

  if (day === 0)
    return { open: false, label: "Fechado hoje", detail: "Voltamos segunda-feira às 11h" };
  if (day === 6)
    return minutes < 1080
      ? { open: false, label: "Fechado agora", detail: "Jantar de sábado abre às 18h" }
      : { open: false, label: "Fechado agora", detail: "Voltamos segunda-feira às 11h" };
  if (minutes < 660)
    return { open: false, label: "Fechado agora", detail: "Almoço começa às 11h" };
  if (minutes < 1080)
    return { open: false, label: "Fechado agora", detail: "Jantar começa às 18h" };
  return { open: false, label: "Fechado agora", detail: "Amanhã o almoço abre às 11h" };
}

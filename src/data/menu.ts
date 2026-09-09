export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  tag?: string;
};

export type CategoryId =
  | "cortes"
  | "burgers"
  | "executivos"
  | "porcoes"
  | "bebidas";

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "cortes", label: "Cortes na Brasa" },
  { id: "burgers", label: "Hambúrgueres Artesanais" },
  { id: "executivos", label: "Pratos Executivos" },
  { id: "porcoes", label: "Porções & Petiscos" },
  { id: "bebidas", label: "Bebidas e Sobremesas" },
];

export const MENU: MenuItem[] = [
  {
    id: "picanha-magma",
    name: "Picanha Magma (400g)",
    description:
      "Picanha maturada selada na brasa viva, crosta de sal grosso e centro rosado. Acompanha farofa de bacon e vinagrete da casa.",
    price: 129.9,
    category: "cortes",
    tag: "Mais pedido",
  },
  {
    id: "ancho-lava",
    name: "Bife Ancho Lava (350g)",
    description:
      "Marmoreio intenso, ponto perfeito no calor do carvão, finalizado com manteiga de alho defumada.",
    price: 114.9,
    category: "cortes",
  },
  {
    id: "costela-72",
    name: "Costela 12 Horas",
    description:
      "Costela bovina defumada lentamente por 12 horas até desfiar no garfo, com molho barbecue de café e melaço.",
    price: 98.9,
    category: "cortes",
    tag: "Defumada",
  },
  {
    id: "fraldinha",
    name: "Fraldinha na Chapa Quente (300g)",
    description:
      "Fatias suculentas, alho tostado e chimichurri fresco preparado na hora.",
    price: 79.9,
    category: "cortes",
  },
  {
    id: "linguica",
    name: "Linguiça Artesanal da Casa",
    description:
      "Blend de pernil e costela com pimenta biquinho, grelhada até estalar a pele.",
    price: 42.9,
    category: "cortes",
  },
  {
    id: "burger-magma",
    name: "Magma Burger",
    description:
      "180g de blend bovino na brasa, cheddar derretido, bacon crocante e maionese defumada no pão brioche tostado na manteiga.",
    price: 39.9,
    category: "burgers",
    tag: "Assinatura",
  },
  {
    id: "burger-vulcao",
    name: "Vulcão Picante",
    description:
      "Duplo smash, queijo prato, cebola caramelizada, geleia de pimenta e molho de chipotle. Arde no ponto certo.",
    price: 44.9,
    category: "burgers",
  },
  {
    id: "burger-costela",
    name: "Burger de Costela Defumada",
    description:
      "Costela desfiada de 12 horas, queijo coalho grelhado e barbecue de melaço no pão australiano.",
    price: 46.9,
    category: "burgers",
  },
  {
    id: "burger-cheddar",
    name: "Cheddar Cremoso",
    description:
      "Burger 160g, cascata de cheddar cremoso, crispy de cebola e picles artesanal.",
    price: 37.9,
    category: "burgers",
  },
  {
    id: "exec-file",
    name: "Executivo Filé na Brasa",
    description:
      "Filé grelhado, arroz soltinho, feijão temperado, farofa crocante e salada da horta.",
    price: 39.9,
    category: "executivos",
    tag: "Almoço",
  },
  {
    id: "exec-frango",
    name: "Executivo Frango Grelhado",
    description:
      "Sobrecoxa desossada marinada em ervas, purê rústico, arroz e vinagrete.",
    price: 32.9,
    category: "executivos",
  },
  {
    id: "exec-parmegiana",
    name: "Parmegiana na Brasa",
    description:
      "Contrafilé empanado, molho de tomate defumado, muçarela gratinada e fritas rústicas.",
    price: 44.9,
    category: "executivos",
  },
  {
    id: "exec-costela",
    name: "Executivo Costela Desfiada",
    description:
      "Costela de 12 horas com arroz biro-biro, feijão e mandioca frita.",
    price: 42.9,
    category: "executivos",
  },
  {
    id: "batata-rustica",
    name: "Batata Rústica",
    description:
      "Batatas com casca, alecrim, páprica defumada e maionese da casa. Crocante por fora, cremosa por dentro.",
    price: 29.9,
    category: "porcoes",
  },
  {
    id: "queijo-coalho",
    name: "Queijo Coalho com Melaço",
    description:
      "Espetos de coalho grelhados na brasa, regados com melaço de cana e orégano.",
    price: 32.9,
    category: "porcoes",
    tag: "Clássico",
  },
  {
    id: "pao-alho",
    name: "Pão de Alho Especial",
    description:
      "Pão artesanal recheado com creme de alho e muçarela, tostado direto na grelha.",
    price: 24.9,
    category: "porcoes",
  },
  {
    id: "mandioca",
    name: "Mandioca Frita com Costela",
    description:
      "Mandioca sequinha coberta com costela desfiada e cebolinha fresca.",
    price: 46.9,
    category: "porcoes",
  },
  {
    id: "refri",
    name: "Refrigerante Lata 350ml",
    description: "Coca-Cola, Guaraná, Sprite ou versões zero, sempre gelados.",
    price: 8.0,
    category: "bebidas",
  },
  {
    id: "cerveja",
    name: "Cerveja Long Neck",
    description: "Heineken, Original ou Corona servidas a -2°C.",
    price: 14.0,
    category: "bebidas",
  },
  {
    id: "suco",
    name: "Suco Natural 500ml",
    description: "Laranja, abacaxi com hortelã ou maracujá feitos na hora.",
    price: 12.9,
    category: "bebidas",
  },
  {
    id: "pudim",
    name: "Pudim de Leite Queimado",
    description: "Cremoso, com calda de caramelo escuro. O fim perfeito da brasa.",
    price: 16.9,
    category: "bebidas",
  },
  {
    id: "petit",
    name: "Petit Gâteau com Sorvete",
    description: "Bolo quente de chocolate meio amargo com sorvete de creme.",
    price: 22.9,
    category: "bebidas",
  },
];

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

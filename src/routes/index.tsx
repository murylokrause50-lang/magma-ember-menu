import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FeatureBar } from "@/components/site/FeatureBar";
import { MenuSection } from "@/components/site/MenuSection";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

const TITLE = "Magma Grill · Churrasco, Almoço e Delivery em Prudente";
const DESCRIPTION =
  "Cortes nobres na brasa, hambúrgueres artesanais e almoço executivo em Presidente Prudente. Monte seu pedido no cardápio digital e envie pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <MenuSection />
        <About />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

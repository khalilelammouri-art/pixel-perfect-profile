import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/restaurant/Header";
import Hero from "@/components/restaurant/Hero";
import Concept from "@/components/restaurant/Concept";
import Menu from "@/components/restaurant/Menu";
import Ambiance from "@/components/restaurant/Ambiance";
import Contact from "@/components/restaurant/Contact";
import Footer from "@/components/restaurant/Footer";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import CursorGlow from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dar Fusion — Cuisine marocaine revisitée à Tanger" },
      { name: "description", content: "Dar Fusion : restaurant moderne à Tanger mêlant cuisine marocaine et plats internationaux. Burgers kefta, pizzas tajine, bowls healthy et desserts revisités." },
      { property: "og:title", content: "Dar Fusion — Cuisine marocaine revisitée" },
      { property: "og:description", content: "La maison où la tradition marocaine rencontre la modernité. Tanger, Maroc." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth">
      <AnimatedBackground />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Ambiance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

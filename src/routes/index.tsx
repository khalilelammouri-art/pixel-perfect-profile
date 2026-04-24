import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import CursorGlow from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Khalil El Ammouri — Développeur Logiciel" },
      { name: "description", content: "Portfolio de Mohamed Khalil El Ammouri, développeur logiciel passionné. Applications web modernes, performantes et élégantes." },
      { property: "og:title", content: "Mohamed Khalil El Ammouri — Développeur Logiciel" },
      { property: "og:description", content: "Portfolio de Mohamed Khalil El Ammouri, développeur logiciel passionné." },
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
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { Code2, Lightbulb, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            À <span className="gradient-text">propos</span>
          </h2>
          <p className="section-subtitle">
            Développeur passionné avec une approche centrée sur la qualité et l&apos;innovation.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass-card p-8">
              <p className="leading-relaxed text-muted-foreground">
                Avec plus de 5 ans d&apos;expérience dans le développement logiciel,
                je me spécialise dans la création d&apos;applications web modernes et performantes.
                Ma passion pour la technologie m&apos;anime au quotidien et me pousse à explorer
                constamment de nouvelles approches.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                J&apos;aime résoudre des problèmes complexes avec des solutions élégantes,
                en combinant logique, créativité et attention aux détails.
                Chaque ligne de code est une opportunité de créer quelque chose d&apos;exceptionnel.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Code2, label: "Code propre" },
                  { icon: Lightbulb, label: "Innovation" },
                  { icon: Zap, label: "Performance" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm">
                    <Icon size={16} className="text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={5} suffix="+" label="Années d'expérience" />
              </div>
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={30} suffix="+" label="Projets réalisés" />
              </div>
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={15} suffix="+" label="Technologies" />
              </div>
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={10} suffix="+" label="Clients satisfaits" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

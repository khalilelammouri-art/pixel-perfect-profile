import ScrollReveal from "../portfolio/ScrollReveal";
import { Home, Sparkles, Users, Leaf } from "lucide-react";

const features = [
  { icon: Home, title: "Une vraie maison", desc: "« Dar » signifie maison. Une ambiance chaleureuse, familiale et accueillante." },
  { icon: Sparkles, title: "Fusion moderne", desc: "Le meilleur de la cuisine marocaine revisité avec des plats internationaux." },
  { icon: Users, title: "Pour tous", desc: "Étudiants, familles, professionnels et touristes — chacun trouve sa table." },
  { icon: Leaf, title: "Produits frais", desc: "Ingrédients locaux, de saison, et préparés chaque jour avec passion." },
];

export default function Concept() {
  return (
    <section id="concept" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Notre <span className="gradient-text">concept</span>
          </h2>
          <p className="section-subtitle">
            Dar Fusion réinvente la cuisine marocaine en mélangeant tradition et tendances actuelles,
            dans un cadre moderne, coloré et instagrammable.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={0.1 * i}>
              <div className="glass-card h-full p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

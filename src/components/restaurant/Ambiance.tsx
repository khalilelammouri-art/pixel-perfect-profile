import ScrollReveal from "../portfolio/ScrollReveal";
import AnimatedCounter from "../portfolio/AnimatedCounter";
import { Lamp, Camera, Music, Palette } from "lucide-react";

export default function Ambiance() {
  return (
    <section id="ambiance" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Une <span className="gradient-text">ambiance</span> à part
          </h2>
          <p className="section-subtitle">
            Zellige, lanternes, bois clair, plantes et lumière douce — un décor pensé pour vivre l'instant et le partager.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass-card p-8">
              <p className="leading-relaxed text-muted-foreground">
                Dar Fusion mélange l'artisanat marocain — zellige, motifs traditionnels, lanternes —
                avec un style contemporain : tables en bois, plantes, musique moderne et un coin photo
                parfait pour les stories Instagram.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Que vous veniez entre amis, en famille, en couple ou pour une pause déjeuner,
                vous vous sentirez ici comme à la maison.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Lamp, label: "Zellige & lanternes" },
                  { icon: Palette, label: "Décor moderne" },
                  { icon: Camera, label: "Coin photo" },
                  { icon: Music, label: "Musique chill" },
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
                <AnimatedCounter target={50} suffix="+" label="Plats au menu" />
              </div>
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={11} suffix="h30" label="Ouverture" />
              </div>
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={23} suffix="h" label="Fermeture" />
              </div>
              <div className="glass-card flex items-center justify-center p-6">
                <AnimatedCounter target={7} suffix="/7" label="Jours d'ouverture" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

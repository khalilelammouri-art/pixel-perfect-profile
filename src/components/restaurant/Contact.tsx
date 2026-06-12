import ScrollReveal from "../portfolio/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Venez nous <span className="gradient-text">rendre visite</span>
          </h2>
          <p className="section-subtitle">
            Réservez une table ou passez nous voir — la maison vous attend.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass-card space-y-5 p-8">
              {[
                { icon: MapPin, label: "Adresse", value: "Avenue Mohammed VI, Tanger, Maroc" },
                { icon: Phone, label: "Téléphone", value: "+212 5 39 00 00 00" },
                { icon: Mail, label: "Email", value: "contact@darfusion.ma" },
                { icon: Clock, label: "Horaires", value: "Tous les jours · 11h30 – 23h00" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="glass-card flex flex-col gap-4 p-8"
            >
              <input
                required
                placeholder="Votre nom"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                required
                type="tel"
                placeholder="Téléphone"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="date"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  required
                  type="time"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <input
                required
                type="number"
                min={1}
                max={20}
                placeholder="Nombre de personnes"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <textarea
                rows={3}
                placeholder="Message (optionnel)"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button type="submit" className="btn-primary-gradient mt-2">
                Réserver ma table
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

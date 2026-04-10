import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "alex.martin@email.com", href: "mailto:alex.martin@email.com" },
  { icon: Phone, label: "Téléphone", value: "+33 6 12 34 56 78", href: "tel:+33612345678" },
  { icon: MapPin, label: "Localisation", value: "Paris, France", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alexmartin", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/alexmartin", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="section-subtitle">
            Vous avez un projet en tête ? Discutons-en ensemble.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Nom</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Sujet</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Sujet du message"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary-gradient flex w-full items-center justify-center gap-2 text-base"
                whileTap={{ scale: 0.97 }}
              >
                {sent ? (
                  "Message envoyé ✓"
                ) : (
                  <>
                    <Send size={18} /> Envoyer
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4} className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card hover-lift flex items-center gap-4 p-5 transition-colors"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Développeur Full Stack Senior",
    company: "TechCorp Solutions",
    period: "2022 — Présent",
    description: "Lead technique d'une équipe de 5 développeurs sur des projets SaaS à grande échelle.",
    achievements: ["Architecture microservices", "Réduction 40% du temps de chargement", "CI/CD pipeline"],
  },
  {
    title: "Développeur Frontend",
    company: "Digital Agency Pro",
    period: "2020 — 2022",
    description: "Conception et développement d'interfaces utilisateur modernes pour des clients internationaux.",
    achievements: ["Design system complet", "Applications React performantes", "Tests automatisés"],
  },
  {
    title: "Développeur Junior",
    company: "StartupLab",
    period: "2019 — 2020",
    description: "Développement d'applications web et mobile dans un environnement agile.",
    achievements: ["MVP en 3 mois", "API RESTful", "Intégration continue"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">
            Mes <span className="gradient-text">Expériences</span>
          </h2>
          <p className="section-subtitle">
            Mon parcours professionnel et les projets qui ont marqué ma carrière.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={0.15 * i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative mb-12 flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
                  />
                  <div className="absolute h-6 w-6 animate-ping rounded-full bg-primary/20" />
                </div>

                <div className={`ml-14 w-full md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card hover-lift p-6">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold">{exp.title}</h3>
                    <p className="mt-1 text-sm text-primary">{exp.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.achievements.map((a) => (
                        <span key={a} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

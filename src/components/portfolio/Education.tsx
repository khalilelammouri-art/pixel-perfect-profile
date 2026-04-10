import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master en Informatique",
    school: "Université Paris-Saclay",
    period: "2017 — 2019",
    description: "Spécialisation en génie logiciel et systèmes distribués. Major de promotion.",
  },
  {
    degree: "Licence en Informatique",
    school: "Université Claude Bernard Lyon 1",
    period: "2014 — 2017",
    description: "Fondamentaux de l'informatique, algorithmique et programmation.",
  },
  {
    degree: "Certification AWS Solutions Architect",
    school: "Amazon Web Services",
    period: "2021",
    description: "Architecture cloud, déploiement et gestion d'infrastructures AWS.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="section-title">
            Mon <span className="gradient-text">Éducation</span>
          </h2>
          <p className="section-subtitle">
            Mon parcours académique et mes certifications professionnelles.
          </p>
        </ScrollReveal>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="glass-card hover-lift p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold">{edu.degree}</h3>
                      <p className="mt-1 text-sm text-primary">{edu.school}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground md:ml-4">
                    <Calendar size={14} />
                    {edu.period}
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

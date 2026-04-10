import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "REST API", level: 92 },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 72 },
      { name: "Firebase", level: 76 },
    ],
  },
  {
    title: "Outils & Plateformes",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS / GCP", level: 75 },
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="section-subtitle">
            Les technologies et outils que je maîtrise pour créer des solutions performantes.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 0.1}>
              <div className="glass-card p-6">
                <h3 className="mb-6 font-heading text-lg font-bold gradient-text">{cat.title}</h3>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} delay={0.2 + si * 0.1} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

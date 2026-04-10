import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement Stripe et tableau de bord admin.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Fullstack",
    demo: "#",
    github: "#",
  },
  {
    name: "Task Manager Pro",
    description: "Application de gestion de tâches collaborative en temps réel avec notifications.",
    stack: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    category: "Frontend",
    demo: "#",
    github: "#",
  },
  {
    name: "API Analytics Dashboard",
    description: "Dashboard d'analyse de performance d'APIs avec visualisations avancées.",
    stack: ["Vue.js", "D3.js", "Python", "FastAPI"],
    category: "Fullstack",
    demo: "#",
    github: "#",
  },
  {
    name: "AI Chat Assistant",
    description: "Assistant conversationnel intelligent intégrant GPT avec interface moderne.",
    stack: ["React", "OpenAI", "Node.js", "Redis"],
    category: "Backend",
    demo: "#",
    github: "#",
  },
  {
    name: "Portfolio Generator",
    description: "Outil de création automatique de portfolios avec templates personnalisables.",
    stack: ["Next.js", "Tailwind", "MDX", "Vercel"],
    category: "Frontend",
    demo: "#",
    github: "#",
  },
  {
    name: "Cloud Infra Manager",
    description: "Interface de gestion d'infrastructure cloud multi-provider avec monitoring.",
    stack: ["React", "Go", "Docker", "AWS"],
    category: "Backend",
    demo: "#",
    github: "#",
  },
];

const categories = ["Tous", "Frontend", "Backend", "Fullstack"];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle">
            Une sélection de projets qui illustrent mes compétences et ma passion.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "btn-primary-gradient shadow-none py-2 px-5"
                    : "border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card group overflow-hidden"
              >
                {/* Gradient header */}
                <div className="h-32 w-full" style={{ background: `linear-gradient(135deg, oklch(0.72 0.19 ${195 + i * 30} / 40%), oklch(0.65 0.22 ${280 + i * 20} / 30%))` }} />

                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a href={project.demo} className="flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-foreground">
                      <ExternalLink size={14} /> Démo
                    </a>
                    <a href={project.github} className="flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-foreground">
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

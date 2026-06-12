import { motion } from "framer-motion";
import { ArrowDown, UtensilsCrossed, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center section-padding pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.19 40), transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.22 25), transparent 70%)",
            animation: "float 10s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          <Sparkles size={14} /> Cuisine marocaine revisitée
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
        >
          Bienvenue chez <span className="gradient-text">Dar Fusion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 font-heading text-lg text-muted-foreground sm:text-xl md:text-2xl"
        >
          La maison où la tradition marocaine rencontre la modernité
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Burgers à la kefta, pizzas façon tajine, tacos au zaalouk, bowls healthy au couscous complet
          et desserts marocains réinventés. Une expérience savoureuse, moderne et chaleureuse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary-gradient flex items-center gap-2 text-base"
          >
            <UtensilsCrossed size={18} /> Voir le menu
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-glow flex items-center gap-2 text-base"
          >
            Réserver une table
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="mt-20">
          <button
            onClick={() => document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-bounce text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

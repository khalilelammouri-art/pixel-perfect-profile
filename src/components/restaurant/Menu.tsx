import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../portfolio/ScrollReveal";

type Item = { name: string; desc: string; price: string };
type Category = { key: string; label: string; items: Item[] };

const menu: Category[] = [
  {
    key: "entrees",
    label: "Entrées",
    items: [
      { name: "Mini briouates", desc: "Fromage frais et herbes du jardin", price: "45 MAD" },
      { name: "Salade moderne", desc: "Avocat, quinoa, légumes croquants", price: "55 MAD" },
      { name: "Zaalouk & chips", desc: "Caviar d'aubergine, pain maison croustillant", price: "40 MAD" },
      { name: "Harira en verrine", desc: "Notre classique revisité", price: "35 MAD" },
      { name: "Mini pastilla", desc: "Poulet, amandes, cannelle", price: "60 MAD" },
    ],
  },
  {
    key: "plats",
    label: "Plats",
    items: [
      { name: "Burger Kefta", desc: "Bœuf haché, épices marocaines, sauce maison", price: "85 MAD" },
      { name: "Pizza Tajine", desc: "Poulet, citron confit, olives, mozzarella", price: "90 MAD" },
      { name: "Tacos Marocain", desc: "Poulet épicé et zaalouk", price: "75 MAD" },
      { name: "Bowl Healthy", desc: "Couscous complet, légumes grillés, poulet", price: "80 MAD" },
      { name: "Pâtes Kefta", desc: "Sauce tomate épicée à la marocaine", price: "70 MAD" },
      { name: "Assiette Grillade", desc: "Brochettes, frites maison, salade", price: "95 MAD" },
    ],
  },
  {
    key: "desserts",
    label: "Desserts",
    items: [
      { name: "Tiramisu menthe", desc: "Mascarpone, thé à la menthe", price: "45 MAD" },
      { name: "Cheesecake Amlou", desc: "Argan, amande, miel", price: "50 MAD" },
      { name: "Crème brûlée", desc: "Fleur d'oranger", price: "40 MAD" },
      { name: "Cornes de gazelle", desc: "Revisitées, plaquées d'amande", price: "35 MAD" },
      { name: "Fruits frais & miel", desc: "Sélection de saison", price: "30 MAD" },
    ],
  },
  {
    key: "boissons",
    label: "Boissons",
    items: [
      { name: "Thé à la menthe", desc: "Servi à la marocaine", price: "20 MAD" },
      { name: "Jus d'orange frais", desc: "Pressé minute", price: "25 MAD" },
      { name: "Smoothie dattes-banane", desc: "Onctueux et énergétique", price: "30 MAD" },
      { name: "Citronnade maison", desc: "Citron, menthe, miel", price: "25 MAD" },
      { name: "Café & cappuccino", desc: "Grains sélectionnés", price: "18 MAD" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(menu[0].key);
  const current = menu.find((c) => c.key === active)!;

  return (
    <section id="menu" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="section-title">
            Notre <span className="gradient-text">Menu</span>
          </h2>
          <p className="section-subtitle">
            Une carte généreuse où chaque plat raconte une histoire marocaine, en version moderne.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {menu.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === cat.key
                    ? "btn-primary-gradient shadow-none py-2 px-5"
                    : "border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="glass-card p-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                  <span className="whitespace-nowrap text-sm font-semibold text-primary">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

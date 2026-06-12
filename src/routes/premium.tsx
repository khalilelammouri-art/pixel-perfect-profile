import { createFileRoute } from "@tanstack/react-router";
import Premium from "@/components/portfolio/Premium";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "KickOff Premium — Débloquez toutes les fonctionnalités" },
      { name: "description", content: "Accédez à tous les avantages premium de KickOff : favoris illimités, alertes avancées, sans publicité, et bien plus." },
    ],
  }),
  component: Premium,
});

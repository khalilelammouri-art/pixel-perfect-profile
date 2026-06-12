import { createFileRoute } from "@tanstack/react-router";
import PremiumSuccess from "@/components/portfolio/PremiumSuccess";

export const Route = createFileRoute("/premium/success")({
  head: () => ({
    meta: [
      { title: "KickOff Premium — Paiement réussi" },
      { name: "description", content: "Merci! Votre abonnement premium est maintenant actif. Profitez de tous les avantages!" },
    ],
  }),
  component: PremiumSuccess,
});

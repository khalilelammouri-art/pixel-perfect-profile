import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle, Download } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { getPremiumActivationDate } from "../../lib/premium";

export default function PremiumSuccess() {
  const navigate = useNavigate();
  const [activationDate, setActivationDate] = useState<string | null>(null);

  useEffect(() => {
    // Mark user as premium
    localStorage.setItem('isPremiumUser', 'true');
    localStorage.setItem('premiumActivatedAt', new Date().toISOString());
    setActivationDate(getPremiumActivationDate());
  }, []);

  const features = [
    "Favoris illimités",
    "Alertes avancées",
    "Sans publicité",
    "Calendrier synchronisé",
    "Statistiques détaillées",
    "Thèmes premium",
  ];

  const handleDownloadReceipt = () => {
    // In production, this would generate a PDF receipt
    const receiptContent = `
KickOff Premium Subscription Receipt
=====================================

Date: ${new Date().toLocaleDateString("fr-FR")}
Subscription Type: Premium Monthly
Amount: €20.00/month

Thank you for upgrading to KickOff Premium!

Features Unlocked:
${features.map(f => `✓ ${f}`).join('\n')}

For support, contact: support@kickoff-app.com
    `;

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(receiptContent));
    element.setAttribute("download", `kickoff-receipt-${Date.now()}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Success Icon */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <CheckCircle className="w-20 h-20 text-green-400" />
          </motion.div>
        </div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Merci!
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Votre abonnement premium est actif
          </p>
          {activationDate && (
            <p className="text-gray-500 text-sm">
              Activé le {new Date(activationDate).toLocaleDateString("fr-FR")}
            </p>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mb-8 border border-gray-700"
        >
          <h3 className="font-semibold mb-4 text-white">Vous avez maintenant accès à:</h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            onClick={() => navigate({ to: "/" })}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            onClick={handleDownloadReceipt}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-gray-600"
          >
            <Download className="w-4 h-4" />
            Télécharger le reçu
          </motion.button>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="text-center text-xs text-gray-500 mt-6"
        >
          Votre abonnement se renouvellera automatiquement chaque mois
        </motion.p>
      </motion.div>
    </section>
  );
}

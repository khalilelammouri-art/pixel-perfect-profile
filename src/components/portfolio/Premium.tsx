import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, AlertCircle } from "lucide-react";
import { createCheckoutSession, subscribeUserMock, isPremiumLocal } from "../../lib/premium";
import { useNavigate } from "@tanstack/react-router";

export default function Premium() {
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsPremium(isPremiumLocal());
  }, []);

  const features = [
    "Favoris illimités",
    "Alertes avancées",
    "Sans publicité",
    "Calendrier synchronisé",
    "Statistiques détaillées",
    "Thèmes premium",
  ];

  const handleUpgrade = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Try to create Stripe checkout session first
      const { sessionId, error: checkoutError } = await createCheckoutSession();

      if (checkoutError || !sessionId) {
        // Fallback to mock if Stripe is not configured
        console.log("Using mock payment (Stripe not configured)");
        const result = await subscribeUserMock();
        if (result.success) {
          setIsPremium(true);
          setTimeout(() => {
            navigate({ to: "/premium/success" });
          }, 1500);
        }
        return;
      }

      // Redirect to Stripe Checkout using the sessionId
      // In production, you'll need to implement the redirect using Stripe.js
      // For now, we'll redirect to a payment simulation
      const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
      
      if (!stripePublicKey) {
        throw new Error("Stripe public key not configured");
      }

      // Simulate checkout redirect (replace with real Stripe.js in production)
      console.log("Would redirect to Stripe checkout with session:", sessionId);
      
      // For now, use mock payment
      const result = await subscribeUserMock();
      if (result.success) {
        setIsPremium(true);
        setTimeout(() => {
          navigate({ to: "/premium/success" });
        }, 1500);
      }
    } catch (err) {
      console.error("Upgrade error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (isPremium) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full text-center"
        >
          <div className="mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Star className="w-16 h-16 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Merci!</h1>
          <p className="text-gray-400 mb-8">
            Vous avez accès à tous les avantages premium. Profitez de votre abonnement!
          </p>
          <button
            onClick={() => navigate({ to: "/" })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        {/* Header with Star Icon */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-2">KickOff Premium</h1>
          <p className="text-gray-400">Débloque toutes les fonctionnalités avancées</p>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/20 border border-red-700 rounded-xl p-4 mb-6 flex items-gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-300 text-sm">{error}</p>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.button
          onClick={handleUpgrade}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Traitement en cours...
            </>
          ) : (
            <>
              Passer Premium
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Accès immédiat à tous les avantages premium
        </p>
      </motion.div>
    </section>
  );
}

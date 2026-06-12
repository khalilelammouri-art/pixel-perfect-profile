/**
 * Creates a Stripe Checkout session for premium subscription
 */
export async function createCheckoutSession(): Promise<{ sessionId: string; error?: string }> {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: import.meta.env.VITE_STRIPE_PRICE_ID,
        successUrl: `${import.meta.env.VITE_APP_URL}/premium/success`,
        cancelUrl: `${import.meta.env.VITE_APP_URL}/premium`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    return { sessionId: data.sessionId };
  } catch (error) {
    console.error('Checkout error:', error);
    return { 
      sessionId: '', 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

/**
 * Fallback mock function for testing without Stripe
 */
export async function subscribeUserMock(): Promise<{ success: boolean; message?: string }> {
  // Simulate calling a server to create a Stripe Checkout session, then redirect.
  // In production replace this with a fetch('/api/create-checkout-session') call.
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate success
      localStorage.setItem('isPremiumUser', 'true');
      localStorage.setItem('premiumActivatedAt', new Date().toISOString());
      resolve({ success: true });
    }, 1200);
  });
}

/**
 * Cancel user subscription
 */
export async function cancelSubscriptionMock(): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem('isPremiumUser', 'false');
      localStorage.removeItem('premiumActivatedAt');
      resolve({ success: true });
    }, 800);
  });
}

/**
 * Check if user is premium
 */
export function isPremiumLocal(): boolean {
  return localStorage.getItem('isPremiumUser') === 'true';
}

/**
 * Get premium activation date
 */
export function getPremiumActivationDate(): string | null {
  return localStorage.getItem('premiumActivatedAt');
}

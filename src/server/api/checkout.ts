/**
 * Cloudflare Worker API Route for creating Stripe Checkout sessions
 * 
 * Deploy instructions:
 * 1. Add Stripe environment variables to wrangler.jsonc:
 *    - STRIPE_SECRET_KEY=sk_test_...
 *    - STRIPE_WEBHOOK_SECRET=whsec_... (for webhooks)
 * 
 * 2. Make sure the route is registered in your API handler
 */

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
});

interface CreateCheckoutRequest {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}

export async function createCheckoutSession(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body: CreateCheckoutRequest = await request.json();
    const { priceId, successUrl, cancelUrl } = body;

    if (!priceId || !successUrl || !cancelUrl) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email_collection: 'required',
      locale: 'fr',
      billing_address_collection: 'auto',
    });

    return new Response(
      JSON.stringify({ sessionId: session.id }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Stripe error:', error);
    
    const message = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: message }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

/**
 * Alternative: Simple Node.js/Express version if using Node backend
 * 
 * import express from 'express';
 * const router = express.Router();
 * 
 * router.post('/create-checkout-session', async (req, res) => {
 *   try {
 *     const { priceId, successUrl, cancelUrl } = req.body;
 * 
 *     const session = await stripe.checkout.sessions.create({
 *       payment_method_types: ['card'],
 *       line_items: [{ price: priceId, quantity: 1 }],
 *       mode: 'subscription',
 *       success_url: successUrl,
 *       cancel_url: cancelUrl,
 *       customer_email_collection: 'required',
 *       locale: 'fr',
 *     });
 * 
 *     res.json({ sessionId: session.id });
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 */

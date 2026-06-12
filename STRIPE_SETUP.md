# Stripe Payment Integration Guide

## 🔑 Getting Your Stripe Keys

1. **Create a Stripe Account**: https://stripe.com
2. **Go to Dashboard** → **Developers** → **API Keys**
3. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
4. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

## ⚙️ Configuration Steps

### 1. Add Environment Variables

Update `.env.local` with your real Stripe keys:
```env
VITE_STRIPE_PUBLIC_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
VITE_STRIPE_PRICE_ID=price_your_price_id_here
```

### 2. Create a Product and Price in Stripe Dashboard

1. Go to **Products** → **Create Product**
2. Name: "KickOff Premium"
3. Price: €20.00/month
4. Billing period: Monthly (recurring)
5. Copy the **Price ID** (starts with `price_`)
6. Paste it in `VITE_STRIPE_PRICE_ID`

### 3. Deploy to Cloudflare Workers (Production)

Add environment variables to `wrangler.jsonc`:
```json
{
  "env": {
    "production": {
      "vars": {
        "STRIPE_SECRET_KEY": "sk_live_your_production_key"
      }
    }
  }
}
```

Or use Cloudflare Dashboard:
1. Go to your Worker
2. **Settings** → **Variables**
3. Add `STRIPE_SECRET_KEY` with your production secret key

### 4. Set Redirect URLs in Stripe Dashboard

Go to **Stripe Dashboard** → **Products** → Your Product → **Settings**
- Success URL: `https://yourapp.com/premium/success`
- Cancel URL: `https://yourapp.com/premium`

## 🧪 Testing the Payment Flow

### Test Cards (in test mode)
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Any future expiry date
- Any 3-digit CVC

### Test Webhook Events

Use Stripe CLI to test webhooks locally:
```bash
stripe listen --forward-to localhost:8081/api/webhooks/stripe
```

## 📝 Files Created

- `src/components/portfolio/Premium.tsx` - Upgrade page
- `src/components/portfolio/PremiumSuccess.tsx` - Success page
- `src/routes/premium.tsx` - Premium route
- `src/routes/premium.success.tsx` - Success route
- `src/lib/premium.ts` - Premium utilities
- `src/server/api/checkout.ts` - Stripe checkout API
- `.env.local` - Environment configuration

## 🔄 Payment Flow

1. User clicks "Passer Premium"
2. App calls `/api/create-checkout-session`
3. Backend creates Stripe Checkout session
4. User is redirected to Stripe's hosted checkout
5. User enters payment details
6. On success: redirected to `/premium/success`
7. On cancel: redirected back to `/premium`

## 🐛 Troubleshooting

### "Failed to load Stripe" error
- Check `VITE_STRIPE_PUBLIC_KEY` is set and valid

### 404 on checkout API
- Make sure backend routes are properly configured
- Check Cloudflare Worker routing

### CORS errors
- Add CORS headers to your API responses
- Check `VITE_APP_URL` environment variable

## 💡 Next Steps

1. Get real Stripe keys from https://stripe.com
2. Create a Product and Price for €20/month
3. Update `.env.local` with your keys
4. Deploy your app
5. Set webhooks to handle subscription events (optional but recommended)

## 🚀 Going Live

When ready for production:
1. Switch to live Stripe keys (`pk_live_`, `sk_live_`)
2. Update success/cancel redirect URLs to your production domain
3. Set up webhook handlers for subscription events
4. Enable email receipts in Stripe Dashboard

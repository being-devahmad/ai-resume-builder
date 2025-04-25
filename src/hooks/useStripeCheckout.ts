import { getFunctions, httpsCallable } from 'firebase/functions';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLISHABLE_KEY);

export function useStripeCheckout() {
  const functions = getFunctions();
  const createCheckoutSessionFn = httpsCallable(functions, 'createCheckoutSession');

  const redirectToCheckout = async (priceId: string, planType: 'monthly' | 'lifetime') => {
    try {
      const { data } = await createCheckoutSessionFn({
        priceId,
        planType,
      });

      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const { error } = await stripe.redirectToCheckout({
        sessionId: (data as { sessionId: string }).sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return { redirectToCheckout };
}
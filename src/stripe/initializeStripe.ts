import { loadStripe, Stripe } from "@stripe/stripe-js"

let stripePromise: Stripe | null

const initializeStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe(import.meta.env.VITE_VITE_STRIPE_PUBLISHABLE_KEY)
    }
}

export default initializeStripe
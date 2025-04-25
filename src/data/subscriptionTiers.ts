export type TierNames = "Free" | "Premium" | "Professional";
export type PaidTierNames = "Premium" | "Professional";

const subscriptionTiers = [
  {
    name: "Free",
    price: 0,
    stripePriceId: "", // Free plan doesn't need a Stripe price ID
    description:
      "Good for individuals who are just starting out and simply want the essentials.",
    features: [
      "Access to 10 free CV templates",
      "Unlimited CV creation and downloads with a small watermark",
      "Option to upgrade to remove the watermark and unlock premium features",
    ],
  },
  {
    name: "Premium",
    price: 9.99,
    stripePriceId: "price_premium_monthly",
    stripeLifetimePriceId: "price_premium_lifetime",
    description:
      "Highly recommended for small teams who seek to upgrade their time and perform better.",
    features: {
      monthlyPlan: [
        "Full access to all premium templates",
        "Advanced customization options",
        "Export formats: PDF, WORD(DOCX), and Plain Text(TXT)",
        "Users can cancel anytime, billing stops at the end of the current subscription period",
      ],
      lifetimePlan: [
        "Lifetime access to all current and future premium templates",
        "Same features as the monthly plan with no recurring charges",
      ],
    },
    lifetimePrice: 49.99,
  },
  {
    name: "Professional",
    price: 2500,
    stripePriceId: "price_professional_onetime",
    description:
      "Robust scheduling for larger teams looking to have more control, privacy and security.",
    features: [
      "Tailored CV",
      "1 Tailored Cover Letter",
      "LinkedIn Profile Optimization",
      "Interview Preparation",
      "Consultation Call",
      "Follow-Up Support",
    ],
  },
];

export const subscriptionTiersInOrder = [...subscriptionTiers];

export function getTierByName(name: TierNames) {
  return subscriptionTiers.find((tier) => tier.name === name);
}


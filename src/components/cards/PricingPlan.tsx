'use client'

import { useState } from "react";
import { Button, Card, Checkbox } from "@nextui-org/react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";

interface PricingPlanProps {
  id: string;
  name: string;
  monthlyPrice?: number;
  lifetimePrice?: number;
  features: string[];
  bgColor: string;
  textColor: string;
  buttonBg: string;
  checkboxColor: string;
  monthlyTabBg: string;
  lifetimeTabBg: string;
  stripePriceId: string;
  stripeLifetimePriceId?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  id,
  name,
  monthlyPrice,
  lifetimePrice,
  features,
  bgColor,
  textColor,
  buttonBg,
  monthlyTabBg,
  lifetimeTabBg,
  stripePriceId,
  stripeLifetimePriceId,
}) => {
  const [activeTab, setActiveTab] = useState(monthlyPrice ? "monthly" : "lifetime");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth()

  const isPremiumPlan = monthlyPrice !== undefined && lifetimePrice !== undefined;
  const currentPrice = activeTab === "monthly" ? monthlyPrice : lifetimePrice;
  const currentStripePriceId = activeTab === "monthly" ? stripePriceId : (stripeLifetimePriceId ?? stripePriceId);
  console.log("id->", id)
  const isCurrentTier = user?.currentTierId === id;
  console.log("isCuurentTierId", isCurrentTier, user?.currentTierId)

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      console.log('stripe-->', stripe)
      if (!stripe) {
        return;
      }
      // const apiUrl = "https://createbillscheckoutsession-5risxnudva-uc.a.run.app";
      const apiUrl = "https://api.stripe.com/v1/checkout/sessions"

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionType: "upgradeSubscriptionPlan",
          // creditApplied: creditApplied,
          userId: user?.id,
          // visibleItems: visibleItems,
          // subtotal: subtotal,
          // savings: discount,
          // total: total,
          // successUrl: ${ window.location.origin } / dashboard,
          // cancelUrl: ${ window.location.origin } / dashboard,
        }),
      });

      console.log("response>>>>", response)


    } catch (error) {

    }
    toast({
      title: "Checkout initiated",
      description: `You're signing up for the ${name} plan`,
    });
    setIsLoading(false);
  };

  console.log("Rendering PricingPlan with props:", { id, name, monthlyPrice, lifetimePrice, features });

  return (
    <Card className={`md:p-5 w-full p-4 ${bgColor} ${textColor}`} shadow="lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="w-full mt-4">
        {isPremiumPlan && (
          <div className={`flex justify-center mb-4`}>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-l ${activeTab === "monthly" ? monthlyTabBg : lifetimeTabBg
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("lifetime")}
              className={`px-4 py-2 text-sm font-medium rounded-r ${activeTab === "lifetime" ? monthlyTabBg : lifetimeTabBg
                }`}
            >
              Lifetime
            </button>
          </div>
        )}
        <div>
          <span className="text-3xl mr-2 font-bold">€{currentPrice?.toFixed(2)}</span>
          {isPremiumPlan && <span className="text-sm">{activeTab === "monthly" ? "/month" : ""}</span>}
        </div>
        {isCurrentTier ? (
          <Button
            className={`bg-green-600 text-white font-bold shadow-lg mt-4`}
            fullWidth
            size="sm"
            disabled
          >
            Active
          </Button>
        ) : (
          <Button
            className={`${buttonBg} text-white shadow-lg mt-4 cursor-pointer`}
            fullWidth
            size="sm"
            isLoading={isLoading}
            onClick={handleCheckout}
            disabled={isLoading || !currentStripePriceId}
          >
            {isLoading ? "Processing..." : "Get Started"}
          </Button>
        )}
      </div>
      <div className="w-full h-fit mt-10 mb-6 border border-dashed"></div>
      <ul>
        {features && features.length > 0 ? (
          features.map((feature: string, index: number) => (
            <div className="flex mb-2" key={index}>
              <Checkbox
                defaultSelected
                isDisabled
                size="sm"
                color="secondary"
                classNames={{
                  label: `text-black`,
                }}
                className="text-secondary-text"
              >
                <span className="text-xs">{feature}</span>
              </Checkbox>
            </div>
          ))
        ) : (
          <div>No features available</div>
        )}
      </ul>
    </Card>
  );
};

export default PricingPlan;


'use client'

import { useEffect, useState } from "react";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import PaddingContainer from "@/components/PaddingContainer";
import Heading from "./Heading";
import PricingPlan from "@/components/cards/PricingPlan";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Plan {
  type: 'monthly' | 'lifetime';
  price: number;
  features: string[];
}

interface SubscriptionTier {
  id: string;
  name: string;
  plans: Plan[];
}

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

const Pricing = () => {
  const [subscriptionTiers, setSubscriptionTiers] = useState<PricingPlanProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTiers = async () => {
      try {
        const tiersCollection = collection(db, "tiers");
        const tierSnapshot = await getDocs(tiersCollection);
        const tiers = tierSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SubscriptionTier));
        
        const formattedTiers = tiers.map(tier => {
          const monthlyPlan = tier.plans.find(plan => plan.type === 'monthly');
          const lifetimePlan = tier.plans.find(plan => plan.type === 'lifetime');
          
          return {
            id: tier.id,
            name: tier.name,
            monthlyPrice: monthlyPlan?.price,
            lifetimePrice: lifetimePlan?.price,
            features: lifetimePlan?.features || monthlyPlan?.features || [],
            bgColor: 'bg-white',
            textColor: 'text-black',
            buttonBg: 'bg-black',
            checkboxColor: 'text-blue-500',
            monthlyTabBg: 'bg-gray-200',
            lifetimeTabBg: 'bg-gray-300',
            stripePriceId: 'price_placeholder',
            stripeLifetimePriceId: lifetimePlan ? 'lifetime_price_placeholder' : undefined,
          };
        });

        console.log("Formatted tiers:", formattedTiers);
        setSubscriptionTiers(formattedTiers);
      } catch (error) {
        console.error("Error fetching subscription tiers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTiers();
  }, []);

  return (
    <div className="pb-32">
      <PaddingContainer className="py-10 md:py-20">
        <div className="text-center">
          <Heading className="">Budget-friendly pricing alternatives</Heading>
          <p className="text-secondary-text">
            Get started free or upgrade to share your impact for all completed
            tasks with multiple people
          </p>
        </div>
      </PaddingContainer>
      <MaxWidthContainer className="max-w-[1050px]">
        {isLoading ? (
          <div>Loading pricing plans...</div>
        ) : subscriptionTiers.length > 0 ? (
          <div className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2">
            {subscriptionTiers.map((tier) => (
              <PricingPlan
                key={tier.id}
                {...tier}
              />
            ))}
          </div>
        ) : (
          <div>No pricing plans available.</div>
        )}
      </MaxWidthContainer>
    </div>
  );
};

export default Pricing;


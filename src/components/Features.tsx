import FeatureCard from "./cards/FeatureCard";

import feature2Image from "@/assets/images/feature2.png";
import feature3Image from "@/assets/images/feature3.png";

const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-3 my-20">
      <FeatureCard
        imageSrc="https://img.freepik.com/premium-photo/3d-like-pink-button-floating-grey-background_509562-338.jpg?w=740"
        heading="Instant AI Resume Tailoring"
      />
      <FeatureCard
        imageSrc={feature2Image}
        heading="One-Click Universal Application"
      />
      <FeatureCard
        imageSrc={feature3Image}
        heading="High Job Application Success Through AI Assistance"
      />
    </div>
  );
};

export default Features;

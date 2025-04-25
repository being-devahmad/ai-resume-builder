import { CheckCircle2 } from "lucide-react";

const FeatureItem = ({ feature }: { feature: string }) => {
  return (
    <div className="grid items-center grid-cols-8">
      <CheckCircle2 className="size-7" color="#10a37f" />
      <p className="col-span-7">{feature}</p>
    </div>
  );
};

export default FeatureItem;

import { useAuth } from "@/hooks/useAuth";
import FeatureItem from "../FeatureItem";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ShinyButton from "../ShinyButton";

interface PricingCardProps {
  isMostPopular?: boolean;
  planName: string;
  price: string;
}

const PricingCard = ({ isMostPopular, planName, price }: PricingCardProps) => {
  const { user } = useAuth();

  return (
    <Card className="p-4 relative flex flex-col xl:flex-row xl:items-center">
      <CardHeader className="xl:w-2/6 gap-3">
        <Card className="p-1.5 w-fit">{planName}</Card>
        <CardTitle className="text-4xl flex items-center gap-3">
          ${price} <span className="font-normal text-sm">/month</span>
        </CardTitle>

        <CardDescription>
          {user ? (
            <ShinyButton hideIcon className="py-2">
              Get Now
            </ShinyButton>
          ) : (
            <ShinyButton hideIcon href={"/login"} className="py-2">
              Get Started Now
            </ShinyButton>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="xl:w-2/3 p-0 mr-auto flex flex-col gap-4">
        <FeatureItem feature="A new Feature" />
        <FeatureItem feature="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, incidunt, id, " />
        <FeatureItem feature="Neque nulla quidem placeat nobis reiciendis" />
        <FeatureItem feature="consequatur debitis deleniti laudantium culpa quia maiores accusamus. Animi porro fugit doloremque quisquam." />
      </CardContent>
      {isMostPopular && (
        <CardFooter className="absolute -right-4 top-2">
          <Card className="p-2 text-button-gpt bg-blue-100/50 font-semibold">
            Most Popular
          </Card>
        </CardFooter>
      )}
    </Card>
  );
};

export default PricingCard;

import { Card, CardBody } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";

interface QuickAnswerCardProps {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

const QuickAnswerCard = ({
  question,
  answer,
  icon: Icon,
}: QuickAnswerCardProps) => {
  return (
    <Card shadow="sm" className="bg-bg-card">
      <CardBody className="items-center text-center">
        <Card className="p-1" shadow="sm">
          {Icon && <Icon />}
        </Card>
        <h2 className="font-bold mt-2 mb-2">{question}</h2>
        <p className="text-xs">{answer}</p>
      </CardBody>
    </Card>
  );
};

export default QuickAnswerCard;

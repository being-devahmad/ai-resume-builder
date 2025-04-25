import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface IconCardProps {
  className?: string;
  iconSrc: string;
  heading: string;
}

const IconCard = ({ iconSrc, heading }: IconCardProps) => {
  return (
    <Card className={"px-2 bg-bg-card"}>
      <CardHeader className="flex items-center justify-center">
        <Image src={iconSrc} />
      </CardHeader>
      <CardBody className="">
        <h2 className="text-center">{heading}</h2>
      </CardBody>
    </Card>
  );
};

export default IconCard;

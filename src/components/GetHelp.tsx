import { Card, CardBody } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";

interface GetHelpCardProps {
  header: string;
  content: string;
  icon: LucideIcon;
}

const GetHelpCard = ({ header, content, icon: Icon }: GetHelpCardProps) => {
  return (
    <Card shadow="none" className="bg-bg-card">
      <CardBody className="flex-row items-center p-2 gap-4">
        <div className="size-10 flex items-center justify-center rounded-full bg-button-gpt/10">
          <Icon color="#10a37f" />
        </div>
        <div>
          <h2 className="font-bold">{header}</h2>
          <p>{content}</p>
        </div>
      </CardBody>
    </Card>
    // <div className="min-w-[600px] hidden md:flex  justify-evenly flex-col ">
    //   <div>
    //     <h2 className="font-bold text-4xl mb-2">Get in touch</h2>
    //     <p className="text-secondary-text text-sm">
    //       Have a question? Reach out through one of the options below and
    //       someone from CvGenIo team will be in touch with you soon
    //     </p>
    //   </div>
    //   <div>
    //     <h2 className="font-bold text-2xl mb-2">Chat with us</h2>
    //     <p className="text-secondary-text text-sm">
    //       Our Friendly team is here to he
    //     </p>
    //     <p className="font-bold text-sm">hello@cvGen.com</p>
    //   </div>
    //   <div>
    //     <h2 className="font-bold text-2xl mb-2">Call us</h2>
    //     <p className="text-secondary-text text-sm">
    //       We're here to help with any questions you may have{" "}
    //     </p>
    //     <p className="font-bold text-sm">hello@cvGen.com</p>
    //   </div>
    // </div>
  );
};

export default GetHelpCard;

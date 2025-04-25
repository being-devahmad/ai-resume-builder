import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { PhoneCall } from "lucide-react";
import ShinyButton from "../ShinyButton";

const ContactCard = () => {
  return (
    <Card className="md:w-2/5   p-4 bg-gradient-to-t from-blue-700 to-blue-500 flex justify-center flex-col ">
      <CardContent>
        <Card className="w-fit p-4 mb-4">
          <PhoneCall className="size-10" />
        </Card>
        <CardTitle className="text-4xl mb-4 text-white">Contact Us</CardTitle>
        <CardDescription className="text-white/70">
          Help your team and organization plan better tasks and focus on what
          moves the needle
        </CardDescription>
      </CardContent>
      <CardFooter>
        <ShinyButton
          href={"/contact"}
          className="w-full bg-button-gpt font-semibold text-xl py-3 hover:bg-button-gpt-hover text-white "
        >
          Contact Us
        </ShinyButton>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;

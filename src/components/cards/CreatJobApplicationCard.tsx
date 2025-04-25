import { Button } from "@nextui-org/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import searchJob from "@/assets/icons/searchJob.png";
import { Image } from "@nextui-org/react";

const CreateJobApplicationCard = () => {
  return (
    <div className="md:my-10  w-full md:max-w-[350px]">
      <Card>
        <CardHeader className="text-center flex flex-col items-center justify-center">
          <Image src={searchJob} width={146} alt="" />
          <CardTitle className="text-2xl">
            Create your own job application
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xs text-gray-600">
            Save time job hunting, and get more out if it
          </p>
        </CardContent>
        <CardFooter className="items-center justify-center">
          <Button className="flex text-white  bg-button-gpt hover:bg-button-gpt-hover font-bold">
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateJobApplicationCard;

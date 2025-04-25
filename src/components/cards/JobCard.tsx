import { MailIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "@nextui-org/button";

const JobCard = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <Card className="flex px-5 py-2 justify-between items-center  flex-row">
      <div className="flex items-center gap-5">
        <CardHeader className="p-0 hidden xl:block">
          <MailIcon color="green" />
        </CardHeader>
        <CardContent className="p-0">
          <h2 className="font-bold">{heading}</h2>
          <p>{text}</p>
        </CardContent>
      </div>
      <CardFooter className="p-0">
        <Button variant={"flat"} className="font-bold">
          Apply
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;

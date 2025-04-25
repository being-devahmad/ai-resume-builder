import { Button } from "@nextui-org/button";
import JobCard from "./cards/JobCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TrendingJobs = () => {
  return (
    <div className="my-10 flex-grow">
      <Card>
        <CardHeader>
          <CardTitle>TrendingJobs</CardTitle>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <JobCard heading="Sales Engineer" text="Google" />
          <JobCard heading="SEO Executive" text="Meta" />
          <JobCard heading="Sale Engineer" text="Meta" />
          <JobCard heading="Sales Engineer" text="Google" />
          <JobCard heading="SEO Executive" text="Meta" />
          <JobCard heading="Sale Engineer" text="Meta" />
        </CardContent>
        <CardFooter className="items-center justify-center">
          <Button className="bg-button-gpt font-bold text-white hover:bg-button-gpt-hover">
            View All Jobs
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrendingJobs;

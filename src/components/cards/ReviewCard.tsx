import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ReviewCardProps {
  avatar: string;
  name: string;
  role: string;
  review: string;
}

const ReviewCard = ({ review }: { review: ReviewCardProps }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-white ring-1 ring-gray-200 rounded-lg hover:-translate-y-1 transition-all duration-300 ease-out">
        <Card className="h-fit select-none">
          <CardHeader className="flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src={review?.avatar} />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="mb-1 font-bold text-primary-text">
                {review?.name}
              </CardTitle>
              <CardDescription className="font-semibold text-secondary-text">
                {review?.role}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-secondary-text">
            {review?.review}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewCard;

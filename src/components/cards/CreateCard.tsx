import { PaperclipIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = {
  title: string;
  subTitle: string;
  className?: string;
  handleClick: () => void;
};

export default function CreateCard({ className, ...props }: CardProps) {
  return (
    <Card
      onClick={props.handleClick}
      className={cn("w-full cursor-pointer hover:bg-slate-100", className)}
    >
      <CardHeader className="flex-row items-center gap-4 p-2">
        <PaperclipIcon color="#10a37f" />
        <div>
          <CardTitle className="text-xl">{props.title}</CardTitle>
          <CardDescription>{props.subTitle}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

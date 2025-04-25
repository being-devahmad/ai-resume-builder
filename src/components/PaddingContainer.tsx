import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PaddingContainerProps {
  children: ReactNode;
  className?: string;
}

const PaddingContainer = ({ children, className }: PaddingContainerProps) => {
  return <div className={cn("px-5 py-5", className)}>{children}</div>;
};

export default PaddingContainer;

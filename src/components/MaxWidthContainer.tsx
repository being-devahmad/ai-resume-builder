import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-4 ", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;

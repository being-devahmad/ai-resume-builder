import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "md:text-6xl text-center bg-gradient-to-br py-2 from-primary-text to-secondary-text text-transparent bg-clip-text lg:text-6xl text-4xl mb-4 font-bold",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const AnimatedButton = ({
  children,
  className,
  onClick,
  ...props
}: AnimatedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " button--nina px-5 py-0 bg-button-gpt hover:bg-button-gpt-hover text-white  relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden",
        className
      )}
      data-text={`${children}`}
      {...props}
    >
      {children &&
        children
          ?.toString()
          .split("")
          .map((item, index) => (
            <span key={index} className="align-middle">
              {item}
            </span>
          ))}
    </button>
  );
};

export default AnimatedButton;

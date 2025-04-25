import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  hideIcon?: boolean;
}

const ShinyButton = ({
  children,
  className,
  href,
  hideIcon = false,
  ...props
}: ShinyButtonProps) => {
  return (
    <NavLink
      to={href ?? "#"}
      className={cn(
        "group relative flex transform gap-2 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-white bg-button-gpt px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:bg-button-gpt-hover hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {hideIcon ? null : (
          <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[12px]" />
        )}
      </span>
      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]"></div>
    </NavLink>
  );
};

export default ShinyButton;

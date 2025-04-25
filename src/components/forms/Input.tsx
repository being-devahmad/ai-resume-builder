import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: boolean;
  success?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, success, error, icon, ...props }, ref) => {
    const borderColor = useMemo(() => {
      if (error) return "border-red-500";
      if (success) return "border-green-500";
      return "border-input";
    }, [error, success]);

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg px-4 py-2",
            "bg-background text-sm",
            "border-2",
            borderColor,
            `focus:outline-none `,
            "placeholder:text-muted-foreground/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-12",
            success || error ? "" : "focus:border-border-color",
            (success || error) && "pr-12",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${
              error && "text-red-500"
            } ${success && "text-green-500"}`}
          >
            {icon}
          </div>
        )}

        {success && (
          <CheckCircle2 className="absolute right-4  top-1/2 -translate-y-1/2 size-5 text-green-500" />
        )}

        {error && (
          <XCircle className="absolute right-4  top-1/2 -translate-y-1/2 size-5 text-red-500" />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };

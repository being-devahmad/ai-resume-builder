import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
  error?: boolean;
  success?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, success, error, ...props }, ref) => {
    const borderColor = useMemo(() => {
      if (error) return "border-red-500";
      if (success) return "border-green-500";
      return "border-input";
    }, [error, success]);

    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex h-12  min-h-[100px] w-full rounded-lg px-4 py-2",
            "bg-background text-sm",
            "border-2",
            borderColor,
            "focus:outline-none",
            "placeholder:text-muted-foreground/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

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

Textarea.displayName = "Textarea";
export { Textarea };

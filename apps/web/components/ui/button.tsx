import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "glass" | "ghost" | "gold";
  size?: "sm" | "md" | "icon";
};

export function Button({ className, variant = "glass", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-habana-green disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-habana-green text-black shadow-glow hover:scale-[1.03]",
        variant === "gold" && "bg-habana-gold text-black shadow-gold hover:scale-[1.03]",
        variant === "glass" && "glass text-white hover:bg-white/15",
        variant === "ghost" && "text-white/75 hover:bg-white/10 hover:text-white",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-5 text-sm",
        size === "icon" && "h-11 w-11 p-0",
        className
      )}
      {...props}
    />
  );
}

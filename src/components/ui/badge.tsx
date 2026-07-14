"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "gold";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", size = "sm", children, className, ...props }, ref) => {
    const variants = {
      default:
        "bg-white/10 text-white/80 border-white/10",
      primary:
        "bg-primary/10 text-primary-300 border-primary/20",
      success:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      warning:
        "bg-amber-500/10 text-amber-400 border-amber-500/20",
      gold: "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30",
    };

    const sizes = {
      sm: "px-2.5 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full border transition-colors duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };

"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glow" | "solid";
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "glass",
      hover = true,
      padding = "lg",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      glass: hover ? "glass-card" : "glass-card [&:hover]:transform-none [&:hover]:bg-[rgba(255,255,255,0.03)] [&:hover]:border-[rgba(255,255,255,0.06)] [&:hover]:shadow-none",
      glow: "glow-card",
      solid:
        "bg-white/[0.03] border border-white/[0.06] rounded-2xl transition-all duration-[400ms]",
    };

    const paddings = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    };

    return (
      <div
        ref={ref}
        className={cn(variantStyles[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/* ─── Card Header ──────────────────────────── */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

/* ─── Card Title ───────────────────────────── */
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

function CardTitle({ children, className, as: Tag = "h3", ...props }: CardTitleProps) {
  return (
    <Tag
      className={cn("font-display font-semibold text-white", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardTitle.displayName = "CardTitle";

/* ─── Card Description ─────────────────────── */
interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ children, className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted leading-relaxed", className)}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = "CardDescription";

/* ─── Card Content ─────────────────────────── */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };

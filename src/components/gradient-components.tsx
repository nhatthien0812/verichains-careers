import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return <span className={`text-vc-gradient ${className}`}>{children}</span>;
}

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "gradient"
    | "outline"
    | "ghost"
    | "glass";
  size?: "sm" | "md" | "lg";
}

export function GradientButton({
  children,
  className = "",
  onClick,
  variant = "gradient",
  size = "md",
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vc-primary disabled:pointer-events-none disabled:opacity-50 ${sizeClasses[size]} btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`card-glass ${
        hover ? "hover:card-glass-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

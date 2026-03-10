import {type ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const variantClass = {
    primary: "bg-[#4A90D9] text-white hover:bg-[#3a7bc8] border-transparent",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border-transparent",
    outline: "bg-transparent text-[#4A90D9] border-[#4A90D9] hover:bg-[#eaf2fb]",
    danger: "bg-red-500 text-white hover:bg-red-600 border-transparent",
    ghost: "bg-transparent text-gray-500 hover:bg-gray-100 border-transparent",
  }[variant];

  const sizeClass = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  }[size];

  const baseClass = [
    "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold tracking-wide transition-colors outline-none focus:outline-none focus:ring-2 focus:ring-[#4A90D9] focus:ring-offset-1",
    variantClass,
    sizeClass,
    disabled || loading ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={baseClass}>
      {loading ? (
        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : iconLeft ? (
        <span>{iconLeft}</span>
      ) : null}
      {label}
      {!loading && iconRight && <span>{iconRight}</span>}
    </button>
  );
}
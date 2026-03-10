import { useState, type ChangeEvent, type ReactNode, } from "react";

interface InputProps {
  type?: "text" | "email" | "password" | "number" | "search" | "textarea";
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  rows?: number;
  className?: string;
}

export default function Input({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  iconLeft,
  iconRight,
  rows = 4,
  className = "",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const isTextarea = type === "textarea";
  const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

  const inputClass = [
    "w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors",
    iconLeft ? "pl-10" : "",
    iconRight || isPassword ? "pr-10" : "",
    error
      ? "border-red-400 focus:border-red-500 bg-red-50 text-gray-700"
      : "border-[#c8dff4] focus:border-[#4A90D9] bg-white text-gray-700",
    disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200" : "",
    isTextarea ? "resize-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm text-gray-500 font-medium">{label}</label>
      )}

      <div className="relative flex items-center">
        {iconLeft && (
          <span className="absolute left-3 text-gray-400 pointer-events-none">
            {iconLeft}
          </span>
        )}

        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e)}
            disabled={disabled}
            rows={rows}
            className={inputClass}
          />
        ) : (
          <input
            type={resolvedType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e)}
            disabled={disabled}
            className={inputClass}
          />
        )}

        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-gray-400 hover:text-gray-600 bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer"
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        ) : iconRight ? (
          <span className="absolute right-3 text-gray-400 pointer-events-none">
            {iconRight}
          </span>
        ) : null}
      </div>

      {error && (
        <span className="text-xs text-red-500 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}
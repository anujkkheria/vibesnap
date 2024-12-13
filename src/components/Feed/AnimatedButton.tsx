import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface AnimatedIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string | number;
  isActive?: boolean;
  activeColor?: string;
}

export function AnimatedIconButton({
  icon,
  label,
  isActive = false,
  activeColor = "text-pink-500",
  className,
  ...props
}: AnimatedIconButtonProps) {
  return (
    <button
      className={cn(
        "group flex items-center gap-2 transition-all duration-200",
        "hover:scale-105 active:scale-95",
        isActive ? activeColor : "text-gray-600 hover:text-gray-800",
        className
      )}
      {...props}
    >
      <span className="transition-transform duration-200 group-hover:-rotate-12 group-active:rotate-12">
        {icon}
      </span>
      <span className="transition-all duration-200 group-hover:font-medium">
        {label}
      </span>
    </button>
  );
}

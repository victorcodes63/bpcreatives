import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-bp-gold bg-bp-gold text-bp-green shadow-md shadow-black/15 hover:bg-bp-gold/95",
  outline:
    "border border-bp-gold bg-transparent text-bp-gold hover:bg-bp-gold/10",
  ghost:
    "bg-white/5 text-white border border-white/35 hover:border-white/70 hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bp-gold",
    variantStyles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

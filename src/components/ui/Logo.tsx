import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

type LogoSize = "header" | "footer";

const sizeStyles: Record<LogoSize, string> = {
  header: "h-12 aspect-square sm:h-14 md:h-16",
  footer: "h-14 aspect-square md:h-16",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        backgroundColor: "#e0b421",
        maskImage: `url(${BRAND.logo})`,
        WebkitMaskImage: `url(${BRAND.logo})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      role="img"
      aria-label={BRAND.name}
    />
  );
}

export function Logo({ size = "header", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${BRAND.name} home`}
    >
      <LogoMark className={sizeStyles[size]} />
    </Link>
  );
}

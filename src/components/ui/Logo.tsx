import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

type LogoSize = "header" | "footer";

const sizeStyles: Record<LogoSize, { width: number; height: number; className: string }> = {
  header: {
    width: 200,
    height: 59,
    className: "h-10 w-auto sm:h-12 md:h-14",
  },
  footer: {
    width: 220,
    height: 65,
    className: "h-12 w-auto md:h-16",
  },
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

export function Logo({ size = "header", className, priority }: LogoProps) {
  const { width, height, className: sizeClass } = sizeStyles[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${BRAND.name} home`}
    >
      <Image
        src="/images/bp-yellow.png"
        alt={BRAND.name}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          sizeClass,
          "object-contain object-left mix-blend-screen",
        )}
      />
    </Link>
  );
}

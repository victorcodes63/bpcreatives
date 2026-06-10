import { Users, Target, Megaphone, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PARTNERSHIP_APPROACH } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { cn } from "@/lib/utils";

const approachIcons: Record<
  (typeof PARTNERSHIP_APPROACH)[number]["icon"],
  LucideIcon
> = {
  users: Users,
  target: Target,
  megaphone: Megaphone,
  award: Award,
};

interface PartnershipApproachProps {
  variant?: "light" | "dark";
  className?: string;
}

export function PartnershipApproach({
  variant = "light",
  className,
}: PartnershipApproachProps) {
  const isDark = variant === "dark";

  return (
    <StaggerContainer
      staggerDelay={0.1}
      className={cn(
        "grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {PARTNERSHIP_APPROACH.map((item) => {
        const Icon = approachIcons[item.icon];
        return (
          <StaggerItem
            key={item.title}
            className={cn(
              "flex h-full flex-col gap-5 border p-6 transition-colors",
              isDark
                ? "border-white/10 bg-white/5 hover:border-bp-gold/30"
                : "border-bp-green/10 bg-white/60 hover:border-bp-gold/30",
            )}
          >
            <div
              className={cn(
                "flex size-11 shrink-0 items-center justify-center border",
                isDark
                  ? "border-white/10 bg-bp-green/40"
                  : "border-bp-green/10 bg-bp-cream",
              )}
            >
              <Icon size={20} className="text-bp-gold" strokeWidth={1.5} />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <h3
                className={cn(
                  "font-serif text-lg leading-snug",
                  isDark ? "text-white" : "text-bp-green",
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  isDark ? "text-white/65" : "text-bp-black/65",
                )}
              >
                {item.description}
              </p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

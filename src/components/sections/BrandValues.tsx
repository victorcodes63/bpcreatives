"use client";

import { Award, Briefcase, Handshake, Heart, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BRAND_VALUES } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const valueIcons: Record<(typeof BRAND_VALUES)[number]["icon"], LucideIcon> = {
  heart: Heart,
  award: Award,
  handshake: Handshake,
  zap: Zap,
  briefcase: Briefcase,
};

interface BrandValuesProps {
  variant?: "light" | "dark";
}

export function BrandValues({ variant = "light" }: BrandValuesProps) {
  const isDark = variant === "dark";

  return (
    <StaggerContainer
      staggerDelay={0.15}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {BRAND_VALUES.map((value) => {
        const Icon = valueIcons[value.icon];
        return (
          <StaggerItem
            key={value.title}
            className={
              isDark
                ? "border border-white/10 bg-white/5 p-6"
                : "border border-bp-green/10 bg-white p-6"
            }
          >
            <Icon size={24} className="mb-4 text-bp-gold" strokeWidth={1.5} />
            <h3
              className={`font-serif text-xl ${isDark ? "text-white" : "text-bp-green"}`}
            >
              {value.title}
            </h3>
            <p
              className={`mt-3 text-sm leading-relaxed ${isDark ? "text-white/70" : "text-bp-green/70"}`}
            >
              {value.description}
            </p>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

import { Users, Megaphone, Globe, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AboutStoryReveal } from "@/components/sections/AboutStoryReveal";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const statIcons: Record<(typeof STATS)[number]["icon"], LucideIcon> = {
  users: Users,
  megaphone: Megaphone,
  globe: Globe,
  award: Award,
};

export function About() {
  return (
    <section id="about" className="bg-bp-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <AboutStoryReveal />

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-16 border-t border-white/10 pt-12 lg:mt-20">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <p className="max-w-xl text-base leading-relaxed text-white/75">
                Your brand. Our creative obsession. We don&apos;t just manage
                campaigns — we build reputations that stand the test of time.
              </p>
              <Button href="/about" variant="outline">
                More About Us
              </Button>
            </div>

            <StaggerContainer
              staggerDelay={0.1}
              className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {STATS.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <StaggerItem key={stat.label} className="text-center">
                    <Icon
                      size={24}
                      className="mx-auto mb-2 text-bp-gold"
                      strokeWidth={1.5}
                    />
                    <p className="font-serif text-2xl font-bold text-bp-gold sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">
                      {stat.label}
                    </p>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

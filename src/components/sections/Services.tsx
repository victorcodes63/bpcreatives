import { Quote } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bp-cream">
      <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-bp-green/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                What We Do
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl lg:text-5xl">
                Strategic. Creative. Impactful.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-bp-green/70">
                A focused mix of communications, creative direction, and
                reputation work — shaped around the moments that matter most for
                your brand.
              </p>
            </FadeIn>

            <StaggerContainer
              staggerDelay={0.15}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {SERVICES.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceCard
                    slug={service.slug}
                    title={service.title}
                    shortDescription={service.shortDescription}
                    icon={service.icon}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn direction="up" delay={0.2} className="h-full">
            <div className="flex h-full flex-col justify-center border border-bp-gold/20 bg-bp-green p-8 shadow-2xl shadow-bp-green/15 lg:p-10">
              <Quote
                size={48}
                className="mb-6 text-bp-gold"
                strokeWidth={1}
                fill="currentColor"
              />
              <blockquote className="font-serif text-xl leading-relaxed text-white lg:text-2xl">
                &ldquo;We don&apos;t just create campaigns, we build connections
                that last.&rdquo;
              </blockquote>
              <p className="mt-6 font-serif text-lg italic text-bp-gold">
                BP Creatives
              </p>
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-sm leading-relaxed text-white/70">
                  Every service is built around your goals — strategic,
                  measurable, and made to last.
                </p>
                <Button href="/services" variant="outline" className="mt-6">
                  Explore All Services
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

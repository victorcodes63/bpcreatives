import { AboutStoryReveal } from "@/components/sections/AboutStoryReveal";
import { PartnershipApproach } from "@/components/sections/PartnershipApproach";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
  return (
    <section id="about" className="bg-bp-cream text-bp-green">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <AboutStoryReveal />

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-16 border-t border-bp-green/10 pt-12 lg:mt-20">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                  How We Partner
                </p>
                <p className="mt-3 text-base leading-relaxed text-bp-black/72">
                  Your brand deserves more than a campaign. It deserves a
                  partner who listens deeply, strategises with intent, and
                  delivers work that builds reputation over time.
                </p>
              </div>
              <Button
                href="/about"
                variant="outline"
                className="border-bp-green text-bp-green hover:bg-bp-green/5"
              >
                More About Us
              </Button>
            </div>

            <PartnershipApproach className="mt-12" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

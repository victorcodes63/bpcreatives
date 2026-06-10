import { Button } from "@/components/ui/Button";
import { CREATIVE_FOCUS } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const workImages = [
  "/images/work-1.jpg",
  "/images/work-2.jpg",
  "/images/work-3.jpg",
  "/images/work-4.jpg",
];

export function FeaturedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-bp-green text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bp-green/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                Featured Work
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
                Where We Create Impact
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                Campaign thinking, launch moments, storytelling, and visibility
                for brands ready to be remembered across Nairobi and Kenya.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.3}>
            <Button href="/contact" variant="outline">
              Start a Project
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer
          staggerDelay={0.15}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CREATIVE_FOCUS.map((project, index) => (
            <StaggerItem key={project.name}>
              <div
                className="group relative aspect-[4/5] overflow-hidden border border-bp-gold/15 bg-bp-green-light shadow-xl shadow-black/10 transition-all duration-500 hover:border-bp-gold/40"
              >
                <div
                  className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${workImages[index]})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bp-green via-bp-green/55 to-bp-green/10 transition-colors group-hover:from-bp-green/90" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-bp-gold">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-white transition-colors group-hover:text-bp-gold">
                    {project.name}
                  </h3>
                  <span className="mt-5 h-px w-10 bg-bp-gold transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

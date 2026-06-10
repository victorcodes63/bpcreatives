import Link from "next/link";
import { ServicesIndex } from "@/components/services/ServicesIndex";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore BP Creatives' PR, brand, content, social, events, community, and reputation services in Nairobi, Kenya.",
  path: "/services",
});

const SERVICE_COUNT = String(SERVICES.length).padStart(2, "0");

function ServiceMarquee() {
  const items = SERVICES.map((service) => service.title);

  return (
    <div className="overflow-hidden border-y border-bp-green/20 bg-bp-gold py-4">
      <div className="marquee-track flex w-max items-center gap-8">
        {[...items, ...items].map((title, index) => (
          <span
            key={`${title}-${index}`}
            className="flex items-center gap-8 whitespace-nowrap"
            aria-hidden={index >= items.length}
          >
            <span className="font-serif text-lg italic text-bp-green sm:text-xl">
              {title}
            </span>
            <span className="size-1.5 rotate-45 bg-bp-green/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-bp-green pt-28 text-white lg:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-bp-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bp-gold">
                What We Do
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Built for brands that{" "}
              <em className="not-italic text-bp-gold">lead conversations.</em>
            </h1>
          </FadeIn>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 pb-16 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pb-20">
            <FadeIn direction="up" delay={0.2}>
              <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                From strategic PR and storytelling to events and crisis
                readiness, {BRAND.name} helps organisations in Nairobi and
                across Kenya connect, influence, and grow with clarity and
                craft.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex items-end gap-4 lg:flex-col lg:items-end lg:gap-1">
                <span className="font-serif text-6xl leading-none text-bp-gold lg:text-7xl">
                  {SERVICE_COUNT}
                </span>
                <span className="pb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 lg:pb-0">
                  Disciplines,
                  <br />
                  one standard
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────────── */}
      <ServiceMarquee />

      {/* ── Services index ─────────────────────────────────── */}
      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn direction="up">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                The Index
              </span>
              <span className="h-px flex-1 bg-bp-green/15" />
            </div>
          </FadeIn>

          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-bp-green sm:text-5xl">
                Every service, <span className="text-bp-gold">one craft.</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="max-w-sm text-sm leading-relaxed text-bp-black/60">
                Each discipline stands on its own and works harder together.
                Explore the full practice below.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 lg:mt-16">
            <ServicesIndex />
          </div>

          <FadeIn direction="up">
            <p className="mt-14 text-center text-sm text-bp-black/70">
              Looking for something specific?{" "}
              <Link
                href="/contact"
                className="font-semibold text-bp-green underline decoration-bp-gold/60 underline-offset-4 transition-colors hover:text-bp-gold"
              >
                Tell us about your project
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="bg-bp-green text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              Where To Start
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Not sure which mix is{" "}
              <em className="not-italic text-bp-gold">right for you?</em>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              We will help you map the right combination of services to your
              goals, your audience, and your timeline.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Let&apos;s Talk</Button>
              <Button
                href={`tel:${BRAND.phoneTel}`}
                variant="outline"
              >
                Call {BRAND.phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

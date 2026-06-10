import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { BRAND, EVENTS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = createPageMetadata({
  title: "Events",
  description: `${BRAND.name} is preparing to host its first event in Nairobi later this year. Register your interest and be the first to know.`,
  path: "/events",
});

const MARQUEE_ITEMS = [
  "Conversation",
  "Connection",
  "Creative Inspiration",
  "Nairobi",
  "Strategy With Soul",
  "Coming 2026",
];

const EVENT_DETAILS = [
  {
    number: "01",
    icon: CalendarDays,
    title: "The Date",
    detail: "To be announced. Later this year.",
    note: "Lock in your interest now and you will hear it here first.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "The Place",
    detail: BRAND.location,
    note: "The home of Nairobi's media and creative community.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "The Experience",
    detail: "An evening of conversation, connection, and creative inspiration",
    note: "Curated for the people shaping how brands are seen and remembered.",
  },
];

function MarqueeStrip() {
  const sequence = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-bp-gold/25 bg-bp-green py-5">
      <div className="marquee-track flex w-max items-center">
        {[...sequence, ...sequence].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6 pr-6"
          >
            <span className="font-serif text-lg italic text-bp-gold sm:text-xl">
              {item}
            </span>
            <span
              className="h-1.5 w-1.5 rotate-45 bg-bp-gold/60"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function SpinningBadge() {
  return (
    <div className="relative hidden size-44 shrink-0 lg:block" aria-hidden>
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0">
        <defs>
          <path
            id="badge-circle"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-bp-gold text-[13.5px] font-semibold uppercase tracking-[0.32em]">
          <textPath href="#badge-circle">
            BP Creatives Live · Nairobi · 2026 ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-20 items-center justify-center rounded-full border border-bp-gold/40">
          <LogoMark className="size-12" />
        </span>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-bp-green pt-28 text-white lg:pt-32">
        <p
          className="text-outline-faint pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[26vw] leading-none tracking-tight"
          aria-hidden
        >
          2026
        </p>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-3xl">
              <FadeIn direction="up">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-bp-gold" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                    Events · First Edition
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                  Something is
                  <br />
                  <em className="text-bp-gold">coming</em> to Nairobi.
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {EVENTS.description}
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Button href={EVENTS.ctaHref}>
                    {EVENTS.ctaLabel}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </Button>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/55">
                    Limited room. First come, first seated.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" delay={0.4}>
              <SpinningBadge />
            </FadeIn>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                What We Can Tell You
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="mt-3 font-serif text-3xl leading-snug text-bp-green sm:text-4xl lg:text-5xl">
                The details are under wraps. The intent is not.
              </h2>
            </FadeIn>
          </div>

          <div className="mt-16 divide-y divide-bp-green/10 border-y border-bp-green/10">
            {EVENT_DETAILS.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.number} direction="up" delay={0.1 * index}>
                  <div className="group grid gap-6 py-10 transition-colors md:grid-cols-[5rem_3rem_1fr_1.2fr] md:items-center md:gap-10">
                    <p className="font-serif text-4xl text-bp-gold/50 transition-colors group-hover:text-bp-gold sm:text-5xl">
                      {item.number}
                    </p>
                    <Icon
                      size={26}
                      className="text-bp-gold"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bp-black/45">
                        {item.title}
                      </p>
                      <p className="mt-2 font-serif text-xl leading-snug text-bp-green sm:text-2xl">
                        {item.detail}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-bp-black/60">
                      {item.note}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bp-gold">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <FadeIn direction="up">
                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-bp-green sm:text-5xl">
                  Be the first in the room.
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-bp-green/80">
                  Register your interest and we will share the date, the
                  speakers, and early access before anyone else hears about it.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="up" delay={0.2}>
              <Button
                href={EVENTS.ctaHref}
                className="border-bp-green bg-bp-green text-bp-gold shadow-none hover:bg-bp-green/90"
              >
                {EVENTS.ctaLabel}
                <ArrowRight size={14} strokeWidth={2.5} />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { ValuesLedger } from "@/components/sections/ValuesLedger";
import { ApproachEditorial } from "@/components/sections/ApproachEditorial";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";

export const metadata = createPageMetadata({
  title: "About Us",
  description: `${BRAND.slogan}. ${BRAND.name} is a full service marketing, PR and communication agency in Nairobi, Kenya, built on authenticity, excellence, and strategic partnership.`,
  path: "/about",
});

const HERO_META = [
  { label: "Based in", value: "Nairobi, Kenya" },
  { label: "Practice", value: "PR & Communications" },
  { label: "Approach", value: "Full service, strategy led" },
];

function SectionKicker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
        {number} · {label}
      </span>
      <span className="h-px flex-1 bg-bp-green/15" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-bp-green pt-28 text-white lg:pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-bp-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bp-gold">
                About Us
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[5.5rem]">
              Strategy with{" "}
              <em className="not-italic text-bp-gold">soul.</em>
            </h1>
          </FadeIn>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 pb-16 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pb-20">
            <FadeIn direction="up" delay={0.2}>
              <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                We are storytellers. We are strategists. We are{" "}
                <span className="text-bp-gold">{BRAND.name}</span>, a full
                service marketing, PR and communication agency devoted to
                helping brands find their voice, connect with their audience,
                and achieve lasting impact.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <dl className="flex flex-wrap gap-x-12 gap-y-6 lg:flex-col lg:gap-y-5">
                {HERO_META.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-serif text-lg text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Half-bleed image band ──────────────────────────── */}
      <section className="relative bg-bp-cream">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-bp-green" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="none" duration={0.9}>
            <Parallax offset={30}>
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/7]">
                <Image
                  src="/images/about-us-section.png"
                  alt="BP Creatives lounge with gold logo and green accent wall"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1232px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bp-green/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bp-gold">
                    The Studio
                  </p>
                  <p className="mt-2 font-serif text-lg italic text-white sm:text-xl">
                    {BRAND.location}
                  </p>
                </div>
              </div>
            </Parallax>
          </FadeIn>
        </div>
      </section>

      {/* ── Manifesto ──────────────────────────────────────── */}
      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn direction="up">
            <SectionKicker number="01" label="The Manifesto" />
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <FadeIn direction="up" delay={0.1}>
              <p className="max-w-xs text-sm leading-relaxed text-bp-black/60">
                Every brand carries a story worth telling. Our work is making
                sure it is heard, believed, and remembered.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="font-serif text-3xl leading-[1.25] tracking-[-0.02em] text-bp-green sm:text-4xl lg:text-[2.75rem]">
                We believe attention is earned, never demanded. So we pair{" "}
                <span className="text-bp-gold">strategic discipline</span> with
                creative craft, building reputations that{" "}
                <span className="text-bp-gold">endure</span> long after the
                campaign ends.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────── */}
      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <FadeIn direction="up">
            <SectionKicker number="02" label="Our Values" />
          </FadeIn>

          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-bp-green sm:text-5xl">
                What we <span className="text-bp-gold">stand for.</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="max-w-sm text-sm leading-relaxed text-bp-black/60">
                Five principles guide every strategy we craft, every story we
                tell, and every partnership we build.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 lg:mt-16">
            <ValuesLedger />
          </div>
        </div>
      </section>

      {/* ── Story + Approach ───────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn direction="up">
            <SectionKicker number="03" label="Our Story" />
          </FadeIn>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Parallax offset={40}>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 h-full w-full border border-bp-gold/40" />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/about-story-v2.jpg"
                      alt="BP Creatives creative lounge in Nairobi with green walls, warm lighting, and team in motion"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bp-green/40 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>
            </Parallax>

            <div>
              <FadeIn direction="up" delay={0.2}>
                <blockquote className="font-serif text-3xl italic leading-snug tracking-[-0.02em] text-bp-gold sm:text-4xl lg:text-[2.75rem]">
                  &ldquo;Your brand. Our creative obsession.&rdquo;
                </blockquote>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <h2 className="mt-10 font-serif text-2xl leading-snug text-bp-green sm:text-3xl">
                  Based in Nairobi, built for impact.
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-bp-black/70">
                  From emerging brands to established enterprises, we craft
                  strategies that tell your story authentically. We do not
                  simply manage campaigns. We build reputations that endure.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.5}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-bp-black/70">
                  That is the spirit we bring to every partnership, combining
                  strategic thinking with the soul and craft that makes your
                  message resonate.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="mt-24 lg:mt-32">
            <FadeIn direction="up">
              <SectionKicker number="04" label="How We Partner" />
            </FadeIn>

            <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <FadeIn direction="up" delay={0.1}>
                <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-bp-green sm:text-5xl">
                  Four moves, <span className="text-bp-gold">one rhythm.</span>
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="max-w-sm text-sm leading-relaxed text-bp-black/60">
                  A working cadence refined across launches, campaigns, and
                  long term retainers.
                </p>
              </FadeIn>
            </div>

            <div className="mt-12 lg:mt-16">
              <ApproachEditorial />
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              Next Chapter
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-bp-green sm:text-5xl lg:text-6xl">
              Ready to write yours{" "}
              <em className="not-italic text-bp-gold">together?</em>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bp-black/70">
              Let&apos;s start a conversation about your brand, your goals, and
              how {BRAND.slogan.toLowerCase()} can shape your next chapter.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Get In Touch</Button>
              <Button
                href={`tel:${BRAND.phoneTel}`}
                variant="outline"
                className="border-bp-green text-bp-green hover:bg-bp-green/5"
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

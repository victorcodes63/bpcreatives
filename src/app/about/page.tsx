import Image from "next/image";
import { BrandValues } from "@/components/sections/BrandValues";
import { PartnershipApproach } from "@/components/sections/PartnershipApproach";
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

export default function AboutPage() {
  return (
    <>
      <section className="bg-bp-green pt-28 text-white lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              About Us
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
              {BRAND.slogan}
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
              We are storytellers. We are strategists. We are{" "}
              <span className="text-bp-gold">
                {BRAND.name}
              </span>
              , a full service marketing, PR and communication agency devoted to helping
              brands find their voice, connect with their audience, and achieve
              lasting impact.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                Our Values
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="mt-4 text-base leading-relaxed text-bp-black/70">
                These principles guide every strategy we craft, every story we
                tell, and every partnership we build.
              </p>
            </FadeIn>
          </div>
          <div className="mt-14">
            <BrandValues />
          </div>
        </div>
      </section>

      <section className="bg-bp-green text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Parallax offset={40}>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/about-story-v2.jpg"
                    alt="BP Creatives creative lounge in Nairobi with green walls, warm lighting, and team in motion"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </Parallax>

            <div>
              <FadeIn direction="up" delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                  Our Story
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-4xl">
                  Based in Nairobi, built for{" "}
                  <span className="text-bp-gold">
                    impact.
                  </span>
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="mt-6 text-base leading-relaxed text-white/75">
                  From emerging brands to established enterprises, we craft
                  strategies that tell your story authentically. We do not
                  simply manage campaigns. We build reputations that endure.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <p className="mt-4 text-base leading-relaxed text-white/75">
                  Your brand. Our creative obsession. That is the spirit we
                  bring to every partnership, combining strategic thinking with
                  the soul and craft that makes your message resonate.
                </p>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <div className="mt-16 border-t border-white/10 pt-12 lg:mt-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                How We Partner
              </p>
              <PartnershipApproach variant="dark" className="mt-8" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <FadeIn direction="up">
            <h2 className="font-serif text-2xl text-bp-green sm:text-3xl">
              Ready to work together?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-bp-black/70">
              Let&apos;s start a conversation about your brand, your goals, and
              how {BRAND.slogan.toLowerCase()} can shape your next chapter.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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

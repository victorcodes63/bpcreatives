import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";

const HIGHLIGHTS = [
  "Strategy-led storytelling",
  "Earned media & PR",
  "Brand & creative direction",
  "Measurable campaign results",
];

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-bp-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] xl:grid-cols-[0.75fr_1.25fr]">
          <div className="max-w-xl">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                Who We Are
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl lg:text-[3.15rem]">
                Your Brand. Our Creative{" "}
                <span className="text-bp-gold">
                  Obsession.
                </span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-bp-black/75">
                We are a Nairobi-based PR and creative agency obsessed with
                helping brands find their voice and make their mark. From strategy
                to execution, we bring passion, precision, and creativity to every
                project we touch.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-bp-black/80"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-bp-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <div className="mt-10">
                <Button
                  href="/about"
                  variant="outline"
                  className="border-bp-green text-bp-green hover:bg-bp-green/5"
                >
                  Our Values
                </Button>
              </div>
            </FadeIn>
          </div>

          <Parallax offset={30}>
            <FadeIn direction="left" delay={0.3}>
              <div className="relative border border-bp-green/10 bg-white p-3 lg:-mr-8 xl:-mr-12">
                <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/about-us-section.png"
                  alt="BP Creatives lounge with gold logo and green accent wall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bp-green/30 via-transparent to-transparent" />
                </div>
              </div>
            </FadeIn>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

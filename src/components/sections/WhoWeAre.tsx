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
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 rounded-full bg-bp-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn direction="up" delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                Who We Are
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl lg:text-5xl">
                Your Brand. Our Creative{" "}
                <span className="text-bp-gold">Obsession.</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-bp-green/75">
                We are a Nairobi-based PR and creative agency obsessed with
                helping brands find their voice and make their mark. From strategy
                to execution, we bring passion, precision, and creativity to every
                project we touch.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-bp-green/80"
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
              <div className="relative border border-bp-green/10 bg-white p-3 shadow-2xl shadow-bp-green/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/office.jpg"
                  alt="Modern office space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bp-green/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 left-8 max-w-xs bg-bp-green px-6 py-5 text-white shadow-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-bp-gold">
                    Based in Nairobi
                  </p>
                  <p className="mt-2 font-serif text-xl leading-snug">
                    Built for brands with regional ambition.
                  </p>
                </div>
              </div>
            </FadeIn>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function Testimonial() {
  return (
    <section className="bg-bp-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="gold-glow grid items-center gap-12 border border-bp-gold/15 bg-white/80 p-8 lg:grid-cols-[1.4fr_1fr] lg:p-12">
          <FadeIn direction="up">
            <Quote
              size={56}
              className="mb-6 text-bp-gold"
              strokeWidth={1}
              fill="currentColor"
            />
            <blockquote className="font-serif text-2xl leading-relaxed text-bp-green sm:text-3xl lg:text-4xl">
              &ldquo;BP Creatives understood our brand, amplified our voice and
              delivered real results.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bp-green font-serif text-lg text-bp-gold">
                AK
              </div>
              <div>
                <p className="text-sm font-semibold text-bp-green">
                  Amara Kimani
                </p>
                <p className="text-xs uppercase tracking-wider text-bp-black/60">
                  Marketing Director, Featured Brand
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="flex flex-col items-start gap-6 border-l-2 border-bp-gold/30 pl-8 lg:items-end lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-8 lg:text-right">
              <h3 className="font-serif text-2xl text-bp-green sm:text-3xl">
                Ready to tell your story and grow your brand?
              </h3>
              <Button href="/contact">Let&apos;s Talk</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

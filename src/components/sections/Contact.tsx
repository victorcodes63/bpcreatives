import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bp-cream text-bp-green">
      <div className="gold-orb pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden">
          <div className="gold-orb pointer-events-none absolute -right-28 -top-28 h-80 w-80 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-xl">
              <FadeIn direction="up">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                  Get In Touch
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-bp-green sm:text-4xl lg:text-5xl">
                  Let&apos;s Build Something Great Together
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-bp-black/70">
                  Ready to elevate your brand? Reach out and let&apos;s start
                  the conversation with clarity, polish, and purpose.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Button href="/contact">Send a Message</Button>
                  <Button
                    href={`tel:${BRAND.phoneTel}`}
                    variant="outline"
                    className="border-bp-green text-bp-green hover:bg-bp-green/5"
                  >
                    Call Us
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" delay={0.25}>
              <div className="border-l border-bp-gold/25 pl-0 text-sm text-bp-black/70 lg:pl-10">
                <div className="grid gap-3">
                  <div className="border border-bp-green/10 bg-bp-cream/70 p-5">
                    <p className="mb-1 text-xs uppercase tracking-wider text-bp-gold">
                      Email
                    </p>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="transition-colors hover:text-bp-gold"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="border border-bp-green/10 bg-bp-cream/70 p-5">
                      <p className="mb-1 text-xs uppercase tracking-wider text-bp-gold">
                        Phone
                      </p>
                      <a
                        href={`tel:${BRAND.phoneTel}`}
                        className="transition-colors hover:text-bp-gold"
                      >
                        {BRAND.phone}
                      </a>
                    </div>
                    <div className="border border-bp-green/10 bg-bp-cream/70 p-5">
                      <p className="mb-1 text-xs uppercase tracking-wider text-bp-gold">
                        Location
                      </p>
                      <p>{BRAND.location}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bp-gold transition-colors hover:text-bp-green"
                >
                  View full contact page
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

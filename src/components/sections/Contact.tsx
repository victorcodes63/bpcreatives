import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bp-green text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-bp-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              Get In Touch
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something Great Together
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              Ready to elevate your brand? Reach out and let&apos;s start the
              conversation.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Send a Message</Button>
              <Button href={`tel:${BRAND.phoneTel}`} variant="outline">
                Call Us
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
              <div className="border border-white/10 bg-white/[0.03] p-5">
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
              <div className="border border-white/10 bg-white/[0.03] p-5">
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
              <div className="border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-1 text-xs uppercase tracking-wider text-bp-gold">
                  Location
                </p>
                <p>{BRAND.location}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bp-gold transition-colors hover:text-white"
            >
              View full contact page
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore BP Creatives' PR, brand, content, social, events, community, and reputation services in Nairobi, Kenya.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-bp-green pt-28 text-white lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
            What We Do
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
            Services built for brands that want to lead conversations
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
            From strategic PR and storytelling to events and crisis readiness,
            {BRAND.name} helps organisations in Nairobi and across Kenya
            connect, influence, and grow with clarity and craft.
          </p>
        </div>
      </section>

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
              />
            ))}
          </div>
          <p className="mt-16 text-center text-sm text-bp-black/70">
            Looking for something specific?{" "}
            <Link
              href="/contact"
              className="font-semibold text-bp-green underline decoration-bp-gold/60 underline-offset-4 transition-colors hover:text-bp-gold"
            >
              Tell us about your project
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-bp-green">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            We will help you map the right mix of services to your goals and
            timeline.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

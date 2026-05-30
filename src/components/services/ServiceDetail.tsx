import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import type { Service } from "@/lib/services";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      <section className="bg-bp-green pt-28 text-white lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
            What We Do
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
            <div>
              <h2 className="font-serif text-2xl text-bp-green sm:text-3xl">
                Overview
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-bp-black/80">
                {service.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="h-fit bg-bp-green p-8 lg:sticky lg:top-28">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-bp-gold">
                What We Deliver
              </h2>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-white/85"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bp-gold"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-bp-green/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
            Our Approach
          </p>
          <h2 className="mt-3 font-serif text-2xl text-bp-green sm:text-3xl">
            How We Work
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((phase, index) => (
              <li key={phase.step} className="relative">
                <span className="font-serif text-4xl text-bp-gold/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-bp-green">
                  {phase.step}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bp-black/70">
                  {phase.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bp-green">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">
            Let&apos;s talk about {service.title.toLowerCase()}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            Tell us where you are today and what success looks like. We will
            respond with a clear next step—no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button href="/services" variant="outline">
              All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import { ArrowUpRight } from "lucide-react";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, CONTACT, CONTACT_PROCESS } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Get in touch with ${BRAND.name}. Start a conversation about your brand, PR strategy, and communications goals.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bp-green pt-28 text-white lg:pt-32">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-bp-green-light/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-bp-green-light/30 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                Contact
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-bp-gold">great</span>{" "}
                together
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                Whether you are launching a brand, scaling your presence, or
                navigating a pivotal moment, we would love to hear from you.
                Share your vision and let&apos;s start the conversation.
              </p>
            </div>

            <div className="hidden lg:block">
              <p className="max-w-[14rem] text-right font-serif text-xl italic leading-snug text-bp-gold">
                Your story.
                <br />
                Our obsession.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-20">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>

      <section className="border-t border-bp-green/10 bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              Visit Us
            </p>
            <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl">
              Find us at Baraza Media Lab
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-bp-black/65">
              Our team is based at {BRAND.location}. Use the map below to plan
              your visit or share the location with your team.
            </p>
          </div>

          <div className="mt-12 overflow-hidden border border-bp-green/10 bg-white shadow-2xl shadow-bp-green/10">
            <iframe
              src={CONTACT.mapEmbedUrl}
              title={`${BRAND.name} location at Baraza Media Lab`}
              className="h-[28rem] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-bp-green/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              What Happens Next
            </p>
            <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl">
              From first message to partnership
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-bp-black/65">
              A clear, collaborative process so you know exactly what to expect
              when you reach out.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {CONTACT_PROCESS.map((step, index) => (
              <div
                key={step.step}
                className="group relative border border-bp-green/10 bg-bp-cream/50 p-8 transition-colors hover:border-bp-gold/30 hover:bg-bp-cream"
              >
                {index < CONTACT_PROCESS.length - 1 && (
                  <div
                    className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-bp-green/15 md:block"
                    aria-hidden
                  />
                )}
                <p className="font-serif text-4xl text-bp-gold/40 transition-colors group-hover:text-bp-gold/70">
                  {step.step}
                </p>
                <h3 className="mt-4 font-serif text-xl text-bp-green">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bp-black/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFAQ />

      <section className="bg-bp-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-serif text-2xl text-bp-green sm:text-3xl">
            Rather talk now?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bp-black/65">
            Skip the form and call us directly. We are available during office
            hours and happy to chat.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={`tel:${BRAND.phoneTel}`}>
              Call {BRAND.phone}
            </Button>
            <Button
              href={`mailto:${BRAND.email}`}
              variant="outline"
              className="border-bp-green text-bp-green hover:bg-bp-green/5"
              external
            >
              Email Us
              <ArrowUpRight size={14} strokeWidth={2} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

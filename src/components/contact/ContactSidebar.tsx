import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { BRAND, CONTACT, SOCIAL_LINKS } from "@/lib/constants";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BRAND.phone,
    href: `tel:${BRAND.phoneTel}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: BRAND.location,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: CONTACT.officeHours,
  },
] as const;

export function ContactSidebar() {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
          Direct Contact
        </p>
        <h2 className="mt-3 font-serif text-2xl text-bp-green sm:text-3xl">
          Prefer a direct line?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-bp-black/65">
          Reach out by email or phone — we respond to every inquiry within{" "}
          <span className="font-medium text-bp-green">{CONTACT.responseTime}</span>
          .
        </p>
      </div>

      <ul className="space-y-4">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          const content = (
            <>
              <div className="flex size-10 shrink-0 items-center justify-center border border-bp-green/10 bg-white">
                <Icon size={18} className="text-bp-gold" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bp-gold">
                  {method.label}
                </p>
                <p className="mt-0.5 text-sm text-bp-green">{method.value}</p>
              </div>
            </>
          );

          return (
            <li key={method.label}>
              {"href" in method && method.href ? (
                <a
                  href={method.href}
                  className="group flex items-start gap-4 border border-bp-green/10 bg-white/60 p-5 transition-colors hover:border-bp-gold/40 hover:bg-white"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-start gap-4 border border-bp-green/10 bg-white/60 p-5">
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="border border-bp-green/10 bg-bp-green p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
          Follow Us
        </p>
        <p className="mt-3 font-serif text-lg italic leading-snug text-white/90">
          Stay connected with our latest work and insights.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/75 transition-colors hover:border-bp-gold hover:text-bp-gold"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <blockquote className="border-l-2 border-bp-gold pl-6">
        <p className="font-serif text-lg italic leading-relaxed text-bp-black/80">
          &ldquo;Every brand has a story worth telling. We&apos;re here to help
          you tell yours.&rdquo;
        </p>
        <footer className="mt-3 text-xs uppercase tracking-wider text-bp-black/50">
          — {BRAND.name}
        </footer>
      </blockquote>
    </aside>
  );
}

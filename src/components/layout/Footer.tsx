import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BRAND, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { SERVICES, getServiceHref } from "@/lib/services";

const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  X: XIcon,
};

const featuredServices = SERVICES.slice(0, 5);

export function Footer() {
  return (
    <footer className="border-t border-bp-gold/20 bg-bp-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md shrink-0">
            <Logo size="footer" className="mb-5" />
            <p className="font-serif text-lg italic leading-snug text-bp-gold">
              {BRAND.slogan}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              A full service marketing, PR and communication agency in Nairobi.
              We tell stories, build reputations, and help brands grow with
              influence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" className="text-[10px]">
                Let&apos;s Talk
              </Button>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-bp-gold hover:text-bp-gold"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div>
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-bp-gold">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-bp-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-bp-gold">
                Services
              </h3>
              <ul className="space-y-2.5">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={getServiceHref(service.slug)}
                      className="text-sm text-white/70 transition-colors hover:text-bp-gold"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-bp-gold transition-colors hover:text-white"
                  >
                    All services
                    <ArrowUpRight size={13} strokeWidth={2} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-bp-gold">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${BRAND.phoneTel}`}
                    className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-bp-gold"
                  >
                    <Phone
                      size={16}
                      className="mt-0.5 shrink-0 text-bp-gold"
                      strokeWidth={1.5}
                    />
                    {BRAND.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-bp-gold"
                  >
                    <Mail
                      size={16}
                      className="mt-0.5 shrink-0 text-bp-gold"
                      strokeWidth={1.5}
                    />
                    {BRAND.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-bp-gold"
                    strokeWidth={1.5}
                  />
                  {BRAND.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <Link href="#" className="transition-colors hover:text-bp-gold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

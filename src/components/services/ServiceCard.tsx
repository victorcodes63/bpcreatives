import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIconComponent } from "@/lib/service-icons";
import { getServiceHref, type ServiceIcon } from "@/lib/services";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: ServiceIcon;
  showLearnMore?: boolean;
}

export function ServiceCard({
  slug,
  title,
  shortDescription,
  icon,
  showLearnMore = true,
}: ServiceCardProps) {
  return (
    <Link
      href={getServiceHref(slug)}
      className="group block h-full border border-bp-green/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bp-gold/50 hover:bg-white hover:shadow-xl hover:shadow-bp-green/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bp-gold"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-bp-gold/25 bg-bp-green text-bp-gold transition-all duration-300 group-hover:border-bp-gold group-hover:bg-bp-gold group-hover:text-bp-green">
        <ServiceIconComponent icon={icon} size={24} />
      </div>
      <h3 className="font-[family-name:var(--font-georgia)] text-base font-bold leading-snug tracking-[-0.01em] text-bp-green transition-colors group-hover:text-bp-gold">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-bp-green/70">
        {shortDescription}
      </p>
      {showLearnMore && (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-bp-green/60 transition-colors group-hover:text-bp-gold">
          Learn more
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      )}
    </Link>
  );
}

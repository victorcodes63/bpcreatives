import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, getServiceHref } from "@/lib/services";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

export function ServicesIndex() {
  return (
    <StaggerContainer staggerDelay={0.1} className="border-t border-bp-green/15">
      {SERVICES.map((service, index) => (
        <StaggerItem key={service.slug}>
          <Link
            href={getServiceHref(service.slug)}
            className="group relative grid gap-4 border-b border-bp-green/15 py-9 transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bp-gold sm:py-11 lg:grid-cols-[5rem_1.15fr_1fr_4rem] lg:items-center lg:gap-10"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-bp-black/35 transition-colors duration-500 group-hover:text-bp-gold">
              ({String(index + 1).padStart(2, "0")})
            </span>

            <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
              <h3 className="font-serif text-2xl leading-tight text-bp-green sm:text-3xl lg:text-4xl">
                {service.title}
              </h3>
              <p className="mt-2 font-serif text-sm italic text-bp-gold sm:text-base">
                {service.tagline}
              </p>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-bp-black/65">
              {service.shortDescription}
            </p>

            <span
              className="hidden size-12 items-center justify-center justify-self-end border border-bp-green/20 text-bp-green transition-all duration-500 group-hover:border-bp-gold group-hover:bg-bp-gold group-hover:text-bp-green lg:flex"
              aria-hidden
            >
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>

            <span className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-bp-gold transition-transform duration-700 ease-out group-hover:scale-x-100" />
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

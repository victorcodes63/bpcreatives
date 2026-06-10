import { BRAND_VALUES } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

export function ValuesLedger() {
  return (
    <StaggerContainer staggerDelay={0.12} className="border-t border-bp-green/15">
      {BRAND_VALUES.map((value, index) => (
        <StaggerItem key={value.title}>
          <div className="group relative grid gap-2 border-b border-bp-green/15 py-8 sm:py-10 lg:grid-cols-[6rem_1fr_1.05fr] lg:items-baseline lg:gap-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-bp-black/35 transition-colors duration-500 group-hover:text-bp-gold">
              ({String(index + 1).padStart(2, "0")})
            </span>
            <h3 className="font-serif text-3xl leading-tight text-bp-green transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-4xl">
              {value.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-bp-black/65 sm:text-base lg:mt-0">
              {value.description}
            </p>
            <span className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-bp-gold transition-transform duration-700 ease-out group-hover:scale-x-100" />
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

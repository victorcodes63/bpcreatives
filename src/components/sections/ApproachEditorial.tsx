import { PARTNERSHIP_APPROACH } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

export function ApproachEditorial() {
  return (
    <StaggerContainer staggerDelay={0.12} className="border-t border-bp-green/15">
      {PARTNERSHIP_APPROACH.map((item, index) => (
        <StaggerItem key={item.title}>
          <div className="group relative grid gap-3 border-b border-bp-green/15 py-8 sm:py-10 lg:grid-cols-[6rem_1fr_1.05fr] lg:items-baseline lg:gap-12">
            <span className="font-serif text-2xl italic text-bp-gold/80 transition-colors duration-500 group-hover:text-bp-gold sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl leading-snug text-bp-green transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-3xl">
              {item.title}
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-bp-black/65 sm:text-base">
              {item.description}
            </p>
            <span className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-bp-gold transition-transform duration-700 ease-out group-hover:scale-x-100" />
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

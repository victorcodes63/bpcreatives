"use client";

import Link from "next/link";
import {
  Fragment,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { ServiceIconComponent } from "@/lib/service-icons";
import { SERVICES, getServiceHref } from "@/lib/services";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { DragCursorArea } from "@/components/ui/DragCursor";

const serviceLineupCopy: Record<
  (typeof SERVICES)[number]["slug"],
  { title: string; description: string }
> = {
  "strategic-pr-media-relations": {
    title: "Public Relations",
    description: "Building visibility, managing reputation, and driving positive conversations.",
  },
  "brand-strategy": {
    title: "Brand Strategy",
    description: "Positioning, voice, and clarity that make your brand memorable.",
  },
  "content-creation-storytelling": {
    title: "Content Creation",
    description: "High-quality content that informs, inspires, and converts.",
  },
  "social-media-management": {
    title: "Social Media Management",
    description: "Engaging content, community growth, and brand storytelling that connects.",
  },
  "event-planning-execution": {
    title: "Event Planning",
    description: "Concept-to-completion moments that bring your brand to life.",
  },
  "community-engagement-partnerships": {
    title: "Strategic Partnerships",
    description: "Meaningful relationships that amplify your reach and credibility.",
  },
  "crisis-communication-reputation": {
    title: "Reputation Management",
    description: "Protecting and enhancing your brand image online and offline.",
  },
};

const CARD_SCROLL_STEP = 272;
const DRAG_TRANSITION = {
  power: 0.24,
  timeConstant: 220,
  bounceStiffness: 520,
  bounceDamping: 22,
};

export function Services() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragState = useRef({ moved: false });
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const updateConstraints = () => {
      const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const nextConstraints = { left: -maxOffset, right: 0 };
      setDragConstraints(nextConstraints);

      const currentX = x.get();
      if (currentX < nextConstraints.left) {
        animate(x, nextConstraints.left, {
          type: "spring",
          stiffness: 420,
          damping: 32,
        });
      } else if (currentX > nextConstraints.right) {
        animate(x, nextConstraints.right, {
          type: "spring",
          stiffness: 420,
          damping: 32,
        });
      }
    };

    updateConstraints();

    const observer = new ResizeObserver(updateConstraints);
    observer.observe(viewport);
    observer.observe(track);

    return () => observer.disconnect();
  }, [x]);

  function scrollCarousel(direction: "previous" | "next") {
    const delta = direction === "next" ? -CARD_SCROLL_STEP : CARD_SCROLL_STEP;
    const nextX = Math.min(
      0,
      Math.max(dragConstraints.left, x.get() + delta),
    );

    animate(x, nextX, {
      type: "spring",
      stiffness: 380,
      damping: 34,
    });
  }

  function handleLinkClick(event: PointerEvent<HTMLAnchorElement>) {
    if (dragState.current.moved) {
      event.preventDefault();
    }
  }

  return (
    <section id="services" className="relative overflow-hidden bg-bp-cream">
      <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-bp-green/10 to-transparent" />
      <div className="gold-orb pointer-events-none absolute right-0 top-24 h-96 w-96 translate-x-1/3 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              What We Do
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mt-3 font-serif text-3xl text-bp-green sm:text-4xl lg:text-5xl">
              Strategic. Creative. Impactful.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-bp-black/70">
              A focused mix of communications, creative direction, and
              reputation work — shaped around the moments that matter most for
              your brand.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.3} className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-bp-black/45">
              Drag to explore services
            </p>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollCarousel("previous")}
                className="flex size-10 items-center justify-center border border-bp-green/20 text-bp-green transition-colors hover:border-bp-gold hover:text-bp-gold"
                aria-label="Previous services"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                className="flex size-10 items-center justify-center border border-bp-green/20 text-bp-green transition-colors hover:border-bp-gold hover:text-bp-gold"
                aria-label="Next services"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="pb-20 lg:pb-28">
        <DragCursorArea
          ref={viewportRef}
          isDragging={isDragging}
          className="overflow-hidden pb-4 pl-6 lg:pl-8"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.16}
            dragMomentum
            dragTransition={DRAG_TRANSITION}
            onDragStart={() => {
              dragState.current.moved = false;
              setIsDragging(true);
            }}
            onDrag={(_, info) => {
              if (Math.abs(info.offset.x) > 6) {
                dragState.current.moved = true;
              }
            }}
            onDragEnd={() => {
              setIsDragging(false);
            }}
            className="flex w-max touch-none select-none"
          >
            <StaggerContainer staggerDelay={0.1} className="flex items-stretch">
              {SERVICES.map((service, index) => (
                <Fragment key={service.slug}>
                  <StaggerItem className="w-[13.5rem] flex-none sm:w-[14.5rem] lg:w-[15.5rem]">
                    <Link
                      href={getServiceHref(service.slug)}
                      draggable={false}
                      onClick={handleLinkClick}
                      className="group flex min-h-[18rem] flex-col items-center justify-center px-3 py-6 text-center"
                    >
                      <span className="mb-5 flex size-14 items-center justify-center rounded-full border border-bp-gold/20 bg-bp-green text-bp-gold shadow-[0_0_34px_rgba(180,134,50,0.18)] transition-all duration-300 group-hover:border-bp-gold group-hover:bg-bp-gold group-hover:text-bp-green group-hover:shadow-[0_0_42px_rgba(180,134,50,0.28)]">
                        <ServiceIconComponent icon={service.icon} size={24} />
                      </span>
                      <h3 className="min-h-[2.75rem] text-xs font-bold uppercase leading-snug tracking-[0.08em] text-bp-green transition-colors group-hover:text-bp-gold sm:text-sm">
                        {serviceLineupCopy[service.slug].title}
                      </h3>
                      <p className="mt-3 text-[11px] leading-relaxed text-bp-black/65 sm:text-xs">
                        {serviceLineupCopy[service.slug].description}
                      </p>
                    </Link>
                  </StaggerItem>
                  {index < SERVICES.length - 1 ? (
                    <div
                      aria-hidden
                      className="mx-6 w-px flex-none self-stretch bg-bp-green/15 sm:mx-8 lg:mx-10"
                    />
                  ) : null}
                </Fragment>
              ))}
              <div aria-hidden className="w-6 flex-none lg:w-8" />
            </StaggerContainer>
          </motion.div>
        </DragCursorArea>
      </div>
    </section>
  );
}

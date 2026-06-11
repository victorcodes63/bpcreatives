"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { cn } from "@/lib/utils";

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
  const router = useRouter();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragState = useRef({ moved: false });
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [fitsViewport, setFitsViewport] = useState(false);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const updateConstraints = () => {
      const viewportWidth = viewport.clientWidth;
      const trackWidth = track.scrollWidth;
      const maxOffset = Math.max(0, trackWidth - viewportWidth);
      const fits = maxOffset === 0;

      setFitsViewport(fits);

      if (fits) {
        const centerX = (viewportWidth - trackWidth) / 2;
        const centeredConstraints = { left: centerX, right: centerX };
        setDragConstraints(centeredConstraints);
        animate(x, centerX, {
          type: "spring",
          stiffness: 420,
          damping: 32,
        });
        return;
      }

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

  function handleServicePointerDown(event: PointerEvent<HTMLAnchorElement>) {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }

  function handleServicePointerUp(
    event: PointerEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (!pointerStart.current) return;

    const deltaX = Math.abs(event.clientX - pointerStart.current.x);
    const deltaY = Math.abs(event.clientY - pointerStart.current.y);
    const isClick =
      deltaX < 6 &&
      deltaY < 6 &&
      !dragState.current.moved;

    pointerStart.current = null;

    if (isClick) {
      event.preventDefault();
      router.push(href);
    }
  }

  function handleServiceClick(event: PointerEvent<HTMLAnchorElement>) {
    if (dragState.current.moved) {
      event.preventDefault();
    }
  }

  return (
    <section id="services" className="relative overflow-hidden bg-bp-cream">
      <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-bp-green/10 to-transparent" />
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
              reputation work, shaped around the moments that matter most for
              your brand.
            </p>
          </FadeIn>
        </div>

        {!fitsViewport ? (
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
        ) : (
          <div className="mt-12" aria-hidden />
        )}
      </div>

      <div className="pb-20 lg:pb-28">
        <DragCursorArea
          ref={viewportRef}
          isDragging={isDragging}
          className={cn(
            "overflow-hidden pb-4",
            fitsViewport ? "px-6 lg:px-8" : "pl-6 lg:pl-8",
          )}
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag={fitsViewport ? false : "x"}
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
              window.setTimeout(() => {
                dragState.current.moved = false;
              }, 0);
            }}
            className="flex w-max touch-none select-none"
          >
            <StaggerContainer staggerDelay={0.1} className="flex items-stretch">
              {SERVICES.map((service, index) => {
                const href = getServiceHref(service.slug);

                return (
                <Fragment key={service.slug}>
                  <StaggerItem className="w-[13.5rem] flex-none sm:w-[14.5rem] lg:w-[15.5rem]">
                    <Link
                      href={href}
                      draggable={false}
                      onPointerDown={handleServicePointerDown}
                      onPointerUp={(event) => handleServicePointerUp(event, href)}
                      onClick={handleServiceClick}
                      className="group flex min-h-[18rem] flex-col items-center justify-center px-3 py-6 text-center"
                    >
                      <span className="mb-5 flex size-14 items-center justify-center rounded-full bg-bp-green text-[#e0b421] transition-all duration-300 group-hover:bg-[#e0b421] group-hover:text-bp-green">
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
                );
              })}
              {!fitsViewport ? (
                <div aria-hidden className="w-6 flex-none lg:w-8" />
              ) : null}
            </StaggerContainer>
          </motion.div>
        </DragCursorArea>
      </div>
    </section>
  );
}

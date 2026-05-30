"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STORY_BEATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TOTAL_BEATS = STORY_BEATS.length;

function StoryHeading({
  beat,
  isActive,
}: {
  beat: (typeof STORY_BEATS)[number];
  isActive: boolean;
}) {
  const parts = beat.label.split(beat.highlight);
  const before = parts[0] ?? "";
  const after = parts[1] ?? "";

  return (
    <h3
      className={cn(
        "font-serif text-4xl leading-[1.04] tracking-[-0.03em] transition-colors duration-500 sm:text-5xl lg:text-6xl",
        isActive ? "text-white" : "text-white/30",
      )}
    >
      {before}
      <span className={isActive ? "text-bp-gold" : "text-white/35"}>
        {beat.highlight}
      </span>
      {after}
    </h3>
  );
}

export function AboutStoryReveal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = beatRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { rootMargin: "-32% 0px -48% 0px", threshold: 0.01 },
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        observer?.disconnect();
        const el = beatRefs.current[index];
        if (el) observer?.unobserve(el);
      });
    };
  }, []);

  const activeBeat = STORY_BEATS[activeIndex];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-24 top-20 hidden h-72 w-72 rounded-full bg-bp-gold/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -right-20 bottom-20 hidden h-80 w-80 rounded-full bg-white/5 blur-3xl lg:block" />

      <div className="mb-10 max-w-3xl lg:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
          About Us
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
          Three truths guide how we build brands.
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden border border-white/10 bg-bp-green-light p-3 shadow-2xl shadow-black/20">
            <div className="relative aspect-[6/7] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBeat.image}
                  initial={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeBeat.image}
                    alt={activeBeat.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    priority={activeIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bp-green/80 via-bp-green/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-bp-green/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBeat.kicker}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bp-gold">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(TOTAL_BEATS).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-serif text-2xl italic text-white">
                      {activeBeat.kicker}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-5 hidden grid-cols-3 gap-3 lg:grid">
            {STORY_BEATS.map((beat, index) => (
              <button
                key={beat.label}
                type="button"
                onClick={() =>
                  beatRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className={cn(
                  "group border px-4 py-3 text-left transition-all duration-500",
                  index === activeIndex
                    ? "border-bp-gold bg-bp-gold text-bp-green"
                    : "border-white/10 bg-white/[0.03] text-white/55 hover:border-bp-gold/40 hover:text-white",
                )}
                aria-label={`Go to: ${beat.label}`}
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em]">
                  0{index + 1}
                </span>
                <span className="mt-1 block font-serif text-sm">
                  {beat.kicker}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div className="space-y-0 lg:pl-10">
            {STORY_BEATS.map((beat, index) => (
              <div
                key={beat.label}
                ref={(el) => {
                  beatRefs.current[index] = el;
                }}
                className="relative flex min-h-[44vh] flex-col justify-center border-b border-white/10 py-10 last:border-b-0 lg:min-h-[52vh] lg:py-12"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: index === activeIndex ? 1 : 0.98,
                    x: index === activeIndex ? 0 : 6,
                  }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  <span
                    className={cn(
                      "absolute -left-[3.05rem] top-3 hidden h-4 w-4 rounded-full border transition-colors duration-500 lg:block",
                      index === activeIndex
                        ? "border-bp-gold bg-bp-gold shadow-[0_0_0_8px_rgba(255,193,5,0.12)]"
                        : "border-white/20 bg-bp-green",
                    )}
                  />
                  <div className="mb-5 flex items-center gap-4">
                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors duration-500",
                        index === activeIndex ? "text-bp-gold" : "text-white/35",
                      )}
                    >
                      0{index + 1} · {beat.kicker}
                    </span>
                    <span
                      className={cn(
                        "h-px flex-1 transition-colors duration-500",
                        index === activeIndex ? "bg-bp-gold/50" : "bg-white/10",
                      )}
                    />
                  </div>

                  <StoryHeading beat={beat} isActive={index === activeIndex} />
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0.35,
                      y: index === activeIndex ? 0 : 10,
                    }}
                    transition={{ duration: 0.45 }}
                    className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
                  >
                    {beat.description}
                  </motion.p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

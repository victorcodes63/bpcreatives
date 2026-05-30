"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_FAQ } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bp-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-4xl">
              Questions before
              <br />
              <span className="text-bp-gold">you reach out?</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              A few things clients often ask. If yours isn&apos;t here, send us
              a message — we&apos;re happy to help.
            </p>
          </div>

          <div className="divide-y divide-white/10 border border-white/10">
            {CONTACT_FAQ.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium leading-snug text-white/90">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "mt-0.5 shrink-0 text-bp-gold transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-200 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/65">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

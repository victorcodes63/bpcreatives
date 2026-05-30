"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const heroProof = ["Earned media", "Brand strategy", "Reputation building"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="BP Creatives - Professional woman presenting in modern Nairobi office"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bp-green via-bp-green/78 to-bp-green/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-bp-green/80 via-transparent to-bp-green/30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bp-green to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 pt-40 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-bp-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bp-gold">
                · PR &amp; Communications
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              We tell your story.
              <br />
              We build your{" "}
              <em className="text-bp-gold not-italic">legacy.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg"
            >
              A full-service PR and communications agency helping ambitious
              brands shape perception, earn trust, and grow with influence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/services">Our Services</Button>
              <Button href="/#about" variant="ghost">
                <Play size={14} fill="currentColor" />
                See Our Approach
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {heroProof.map((item) => (
                <span
                  key={item}
                  className="border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden items-center gap-4 lg:flex"
          >
            <span className="h-28 w-px bg-bp-gold/40" />
            <div>
              <p className="font-serif text-3xl italic leading-tight text-bp-gold">
                Strategy
                <br />
                with soul.
              </p>
              <p className="mt-4 max-w-[13rem] text-xs leading-relaxed text-white/60">
                For brands that want more than attention — they want meaning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="/#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-bp-gold lg:flex"
        aria-label="Scroll to learn more"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-current"
        />
      </motion.a>
    </section>
  );
}

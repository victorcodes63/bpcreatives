import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const clientLogosDirectory = path.join(process.cwd(), "public", "client-logos");
const hiddenClientLogos = new Set(["artcaffe.png", "kukuking.webp"]);

function getClientLogos() {
  if (!fs.existsSync(clientLogosDirectory)) {
    return [];
  }

  return fs
    .readdirSync(clientLogosDirectory)
    .filter((file) => /\.(svg|png|jpe?g|webp)$/i.test(file))
    .filter((file) => !hiddenClientLogos.has(file))
    .sort()
    .map((file) => {
      const label = file
        .replace(/\.(svg|png|jpe?g|webp)$/i, "")
        .replace(/^logo-/, "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return {
        label,
        src: `/client-logos/${file}`,
      };
    });
}

const CLIENT_LOGOS = getClientLogos();
const MARQUEE_LOGOS = Array.from({ length: Math.max(12, CLIENT_LOGOS.length * 4) }, (_, index) => CLIENT_LOGOS[index % CLIENT_LOGOS.length]).filter(Boolean);

export function Clients() {
  return (
    <section id="clients" className="bg-bp-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="border-y border-bp-green/10 py-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <FadeIn direction="up">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bp-gold">
                    Trusted By Brands That Inspire
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="left" delay={0.2}>
                <Button
                  href="/#work"
                  variant="outline"
                  className="border-bp-green text-bp-green hover:bg-bp-green/5"
                >
                  View Our Work
                </Button>
              </FadeIn>
            </div>

            {CLIENT_LOGOS.length > 0 && (
              <div className="relative overflow-hidden border border-bp-green/10 bg-bp-cream py-6">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bp-cream to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bp-cream to-transparent" />

                <div className="client-logo-marquee flex w-max items-center gap-8">
                  {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((client, index) => (
                    <div
                      key={`${client.src}-${index}`}
                      className="flex h-20 w-44 shrink-0 items-center justify-center px-6 opacity-65 transition-all duration-300 hover:opacity-100"
                    >
                      <Image
                        src={client.src}
                        alt={`${client.label} logo`}
                        width={160}
                        height={64}
                        className="max-h-14 w-auto object-contain mix-blend-multiply grayscale contrast-125 transition-all duration-300 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

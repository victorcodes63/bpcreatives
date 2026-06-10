"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isNavActive(href: string, pathname: string) {
  if (href === "/#work") {
    return pathname === "/";
  }

  const path = href.split("#")[0];
  if (!path || path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bp-green/90 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <div onClick={closeMobileMenu} className="lg:contents">
          <Logo size="header" priority />
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link, index) => {
              const active = isNavActive(link.href, pathname);
              const showDivider = index === NAV_LINKS.length - 1;

              return (
                <li key={link.href} className="flex items-center">
                  {showDivider && (
                    <span
                      className="mx-2 h-4 w-px bg-white/15"
                      aria-hidden
                    />
                  )}
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors",
                      active
                        ? "text-bp-gold"
                        : "text-white/75 hover:text-white",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" variant="primary" className="hidden lg:inline-flex">
            Let&apos;s Talk
          </Button>
          <button
            type="button"
            className="flex size-10 items-center justify-center text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-bp-green lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 py-6" aria-label="Mobile navigation">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
            Explore
          </p>
          <ul className="mt-3 space-y-1">
            {NAV_LINKS.slice(0, 3).map((link) => {
              const active = isNavActive(link.href, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center justify-between border-b border-white/8 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors",
                      active ? "text-bp-gold" : "text-white/85",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span className="size-1.5 rotate-45 bg-bp-gold" aria-hidden />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
            What&apos;s On
          </p>
          <ul className="mt-3 space-y-1">
            {NAV_LINKS.slice(3).map((link) => {
              const active = isNavActive(link.href, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center justify-between border-b border-white/8 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors",
                      active ? "text-bp-gold" : "text-white/85",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span className="size-1.5 rotate-45 bg-bp-gold" aria-hidden />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 border-t border-white/10 pt-6">
            <Button href="/contact" variant="primary" className="w-full" onClick={closeMobileMenu}>
              Let&apos;s Talk
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { Menu, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { navLinks, site } from "@/lib/data/site";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/80 shadow-[0_1px_0_0_color-mix(in_oklch,var(--border),transparent_60%)] backdrop-blur-xl supports-backdrop-filter:bg-background/70"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span
            aria-hidden
            className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 via-brand-2 to-brand-3 font-heading text-sm font-bold text-white shadow-sm"
          >
            {site.initials}
          </span>
          <span className="hidden font-heading text-sm font-semibold tracking-tight sm:inline">
            {site.firstName}
            <span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "bg-muted text-foreground",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden rounded-full md:inline-flex">
            <a href="#contacto">
              Contratarme
              <ArrowUpRight aria-hidden data-icon="inline-end" />
            </a>
          </Button>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Abrir menú">
          <Menu aria-hidden />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] max-w-xs">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-1 via-brand-2 to-brand-3 text-xs font-bold text-white"
            >
              {site.initials}
            </span>
            {site.name}
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-2 pt-2">
          {navLinks.map((link) => (
            <SheetClose key={link.href} asChild>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
        </div>
        <div className="mt-auto border-t p-4">
          <Button asChild className="w-full rounded-full">
            <a href="#contacto">Contratarme</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

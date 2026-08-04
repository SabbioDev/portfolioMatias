"use client";

import { motion } from "framer-motion";
import { Braces, Database, Globe, Sparkles, Terminal } from "lucide-react";

import { site } from "@/lib/data/site";

const orbitChips = [
  { icon: Braces, label: "TypeScript", className: "top-0 -left-2", duration: 4.5 },
  { icon: Terminal, label: "Next.js", className: "top-2 -right-3", duration: 5.5 },
  { icon: Globe, label: "React", className: "bottom-4 -left-4", duration: 4.2 },
  { icon: Database, label: "MongoDB", className: "bottom-0 -right-2", duration: 5.8 },
  { icon: Sparkles, label: "IA", className: "left-1/2 -bottom-5 -translate-x-1/2", duration: 4.8 },
];

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto flex size-72 items-center justify-center sm:size-80"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-1/30 via-brand-2/20 to-brand-3/30 blur-3xl" />

      <div className="absolute inset-4 animate-[spin_22s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-dashed border-foreground/15" />
        <div className="absolute -top-1 left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-brand-2 shadow-[0_0_12px_2px_color-mix(in_oklch,var(--brand-2),60%)]" />
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex size-44 items-center justify-center sm:size-52"
      >
        <div className="flex size-full flex-col items-center justify-center gap-2 rounded-[2rem] border bg-gradient-to-br from-brand-1 via-brand-2 to-brand-3 shadow-xl shadow-brand-1/20">
          <span className="font-heading text-5xl font-extrabold text-white sm:text-6xl">
            {site.initials}
          </span>
          <span className="rounded-full bg-white/20 px-3 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Full Stack
          </span>
        </div>
      </motion.div>

      {orbitChips.map((chip) => (
        <motion.div
          key={chip.label}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: chip.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute flex items-center gap-1.5 rounded-full border bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur ${chip.className}`}
        >
          <chip.icon className="size-3.5 text-brand-1" />
          {chip.label}
        </motion.div>
      ))}
    </div>
  );
}

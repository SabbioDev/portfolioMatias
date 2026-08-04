"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React · Next.js · TypeScript",
  "Productos web reales",
  "Tecnología + IA",
];

export function HeroRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % roles.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-grid overflow-visible">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-gradient font-heading font-extrabold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

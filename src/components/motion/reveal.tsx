"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeIn(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...props}
    />
  );
}

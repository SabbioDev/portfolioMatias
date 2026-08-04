"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function MotionGroup({
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "variants">) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "variants">) {
  return (
    <motion.div variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}

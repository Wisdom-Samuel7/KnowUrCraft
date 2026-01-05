"use client";

import { motion } from "framer-motion";

export default function WaveText({ text }: { text: string }) {
  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

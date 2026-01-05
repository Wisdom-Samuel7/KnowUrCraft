"use client";

import { motion } from "framer-motion";

export default function AnimatedButton({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="px-8 py-4 bg-black text-white rounded-full"
    >
      {text}
    </motion.button>
  );
}

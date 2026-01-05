"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CursorTextProps {
  text: string;
}

export default function CursorText({ text }: CursorTextProps) {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  return (
    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black text-center mb-16">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            delay: i * 0.05,
            repeat: Infinity,
            duration: 1.2,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}

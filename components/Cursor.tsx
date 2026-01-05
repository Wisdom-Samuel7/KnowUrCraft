"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]"
        animate={{ x: mouse.x - 4, y: mouse.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      />

      {/* Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-black/30 rounded-full pointer-events-none z-[9998]"
        animate={{ x: mouse.x - 16, y: mouse.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Lottie from "lottie-react";

// Example Lottie animation
import animation from "@/public/lottie/cute.json";

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse move for parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-[600px] w-full overflow-hidden bg-white"
    >
      {/* Background Layer */}
      <motion.div
        style={{
          x: -mouse.x * 20,
          y: -mouse.y * 20,
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src="/portfolio/std.jpg"
          alt="Parallax Background"
          className="w-full h-full object-cover opacity-20"
        />
      </motion.div>

      {/* Floating Lottie (medium speed) */}
      <motion.div
        style={{
          x: -mouse.x * 40,
          y: -mouse.y * 40,
        }}
        className="absolute top-20 left-1/4 w-36"
      >
        <Lottie animationData={animation} loop autoplay />
      </motion.div>

      {/* Floating Circle */}
      <motion.div
        style={{
          x: -mouse.x * 60,
          y: -mouse.y * 60,
        }}
        className="absolute w-24 h-24 rounded-full bg-red-400 opacity-50 top-1/3 right-1/4"
      />

      {/* Foreground Layer */}
      <motion.div
        style={{
          x: -mouse.x * 10,
          y: -mouse.y * 10,
        }}
        className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-500">
          Experience the Depth
        </h2>
        <p className="max-w-2xl text-gray-700 text-lg md:text-xl">
          Engaging visuals and interactive elements that bring your projects to life.
        </p>
        <motion.a
          href="/contact"
          className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
        >
          Start a Project
        </motion.a>
      </motion.div>
    </section>
  );
}

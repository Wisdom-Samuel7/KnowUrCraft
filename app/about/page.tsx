"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import SectionReveal from "@/components/SectionReveal";

// Lottie animations (replace with your actual files)
import musicAnim from "@/public/lottie/studio.json";
import pianoAnim from "@/public/lottie/pianolottie.json";
import devAnim from "@/public/lottie/appdev.json";

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const heroText = "About Knowurcraft";

  return (
    <main
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="pt-36 pb-24 bg-white relative overflow-hidden"
    >
      {/* Floating Lotties */}
      <motion.div
        style={{ x: -mouse.x * 50, y: -mouse.y * 50 }}
        className="absolute top-124 left-2 w-32"
      >
        <Lottie animationData={musicAnim} loop autoplay />
      </motion.div>

      <motion.div
        style={{ x: mouse.x * 40, y: -mouse.y * 30 }}
        className="absolute top-20 right-5 w-28"
      >
        <Lottie animationData={pianoAnim} loop autoplay />
      </motion.div>

      <motion.div
        style={{ x: -mouse.x * 30, y: mouse.y * 40 }}
        className="absolute bottom-8 left-1/3 w-24"
      >
        <Lottie animationData={devAnim} loop autoplay />
      </motion.div>

      {/* Hero Section */}
      <SectionReveal>
        <section className="px-6 text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black mb-16"> 
            {heroText.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ delay: i * 0.05, repeat: Infinity, duration: 1.5 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </section>
      </SectionReveal>

      <div>
        <img
          alt="Studio Picture"
          className="w-full h-40 object-cover mb-2"
          src="/portfolio/studiopics.jpeg"
        />
      </div>

      {/* Mission Section */}
      <SectionReveal>
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-400">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            To combine music, performance, and technology to create transformative experiences for artists, brands, and audiences worldwide.
          </p>
        </section>
      </SectionReveal>

      {/* Vision Section */}
      <SectionReveal>
        <section className="max-w-4xl mx-auto px-6 py-12 text-center bg-gray-50 rounded-2xl shadow-md my-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-400">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            To be a leading creative hub where music, performance, and tech converge to inspire and innovate.
          </p>
        </section>
      </SectionReveal>

      {/* Story Section */}
      <SectionReveal>
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-400">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Knowurcraft was founded with the vision to unite creative music production, expert piano performance, and advanced development skills under one roof. Our team thrives on delivering excellence and pushing boundaries in every project.
          </p>
        </section>
      </SectionReveal>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { ArrowRight } from "lucide-react";
import MagneticText from "./MagneticText";

import WaveText from "./WaveText";


import LottieIcon from "./LottieIcon";
import animation from "@/public/lottie/appdev.json";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        
      {/* Subtle floating background accent */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gray-100"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />


      <div className="relative max-w-5xl text-center">
         <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[150px] md:max-w-[200px] mx-auto mb-2 mt-16"
        >
          <LottieIcon animation={animation} />
        </motion.div>
        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 text-sm font-medium tracking-wide text-gray-500"
        >
          DIGITAL • DESIGN • DEVELOPMENT
        </motion.span>
<div>

<MagneticText strength={0.35}>
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
        <div>
            <WaveText text="Crafting Modern" />
        </div>

<div>
     Digital Experiences
</div>
         
        </motion.h1>
</MagneticText> 

</div>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Knowurcraft is a creative tech studio focused on building fast,
          beautiful, and scalable digital products.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <AnimatedButton text="Welcome here" />

          <motion.a
            href="https://wa.me/09129683677"
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            Start a Project <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

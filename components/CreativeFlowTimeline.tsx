"use client";

import { motion } from "framer-motion";

const tech = [
  "HTML & CSS",
  "React",
  "Next.js",
  "Three.js",
  "Creative Engineering",
];

const music = [
  "Inspiration",
  "Composition",
  "Arrangement",
  "Mixing", 
  "Mastering",
];

export default function CreativeFlowTimeline() {
  return (
    <section className="py-32 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-700">
          Creative Flow
        </h2>
        <p className="text-gray-600 max-w-2xl mb-24 font-bold">
          Two disciplines. One unified process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          {/* TECH */}
          <div className="space-y-10">
            {tech.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-right font-semibold text-gray-500"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* CENTER */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
              KUC
            </div>
            <span className="mt-4 text-sm text-gray-500">
              KnowUrCraft
            </span>
          </motion.div>

          {/* MUSIC */}
          <div className="space-y-10">
            {music.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-semibold text-gray-500"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

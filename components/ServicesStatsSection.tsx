"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const stats = [
  { label: "Projects Completed", value: 120 },
  { label: "Clients Served", value: 85 },
  { label: "Live Performances", value: 45 },
  { label: "Apps & Websites", value: 30 },
];

export default function ServicesStatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Knowurcraft?
          </h2>
        </SectionReveal>
        <SectionReveal>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Combining music, performance, and technology expertise, we deliver high-quality results that leave a lasting impact.
          </p>
        </SectionReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}+</h3>
                <p className="text-white text-sm">{stat.label}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

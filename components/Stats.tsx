"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl font-bold">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

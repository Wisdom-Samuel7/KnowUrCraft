"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const portfolioItems = [
  {
    title: "Product Inventory Platform",
    category: "Web Development",
    image: "/portfolio/quintix.png",
  },
  {
    title: "Fashion Brand Website",
    category: "Front end Design",
    image: "/portfolio/bead.png",
  },
  {
    title: "Lead Producer (Youtube channel)",
    category: "Sound manager / design",
    image: "/portfolio/studiopics.jpeg",
  },
  {
    title: "Live Ride App Design",
    category: "UI/UX Design",
    image: "/portfolio/app.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Work
          </h2>
        </SectionReveal>

        <SectionReveal>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            A glimpse at some of our recent projects that combine creativity and functionality.
          </p>
        </SectionReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, i) => (
            <SectionReveal key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative group rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Project Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-200 text-sm mt-1">{item.category}</p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

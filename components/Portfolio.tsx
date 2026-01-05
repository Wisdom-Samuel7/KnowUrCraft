"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

import MagneticText from "./MagneticText";
import WaveText from "./WaveText";


const portfolioItems = [
  {
    title: "Product Inventory Platform",
    category: "Web Development",
    image: "/portfolio/quintix.png",
  },
  {
    title: "Fashion Brand Website",
    category: "Front-end Design",
    image: "/portfolio/bead.png",
  },
  {
    title: "Lead Producer (YouTube Channel)",
    category: "Sound Design & Management",
    image: "/portfolio/studiopics.jpeg",
  },
  {
    title: "Live Ride App Design",
    category: "UI / UX Design",
    image: "/portfolio/app.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black text-center mb-6">
            Selected Work
          </h2>
        </SectionReveal>

        <SectionReveal>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-20 text-center">
            A curated selection of projects across technology, music, and design.
          </p>
        </SectionReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {portfolioItems.map((item, i) => {
            const desktopTextTop = i % 2 === 0;

            return (
              <SectionReveal key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group"
                >
                  {/* TEXT — TOP (DESKTOP ONLY) */}
                  {/* {desktopTextTop && (
                    <div className="hidden lg:block mb-4">
                      <h3 className="text-lg font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-500">
                        {item.category}
                      </p>
                    </div>
                  )} */}

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* TEXT — ALWAYS VISIBLE (MOBILE + DESKTOP) */}
                  <div className="mt-4 lg:mt-4">
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {item.category}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
        

        <MagneticText strength={0.35}>
                {/* Main headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mt-6"
                >
                <div>
                    <WaveText text="And Many MORE ...." />
                </div>
        
                <div>
                    Digital Experiences
                </div>
                 
                </motion.h1>
        </MagneticText> 


    </section>
  );
}

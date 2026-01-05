"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import Lottie from "lottie-react";

// Example Lottie animation
import musicAnim from "@/public/lottie/studio.json";
import pianoAnim from "@/public/lottie/pianolottie.json";
import devAnim from "@/public/lottie/appdev.json";

export default function ServicesGridSection() {
  const items = [
    {
      type: "image",
      title: "Music Studio",
      description: "State-of-the-art studio for recording and production.",
      src: "/portfolio/std.jpg", // replace with your image
        color: "bg-blue-500",
    },
    {
      type: "lottie",
      title: "Piano Mastery",
      description: "Expert performances and lessons.",
      animation: pianoAnim ,
      color: "bg-orange-400",
    },
    {
      type: "lottie",
      title: "Full Stack Dev",
      description: "Web and mobile applications with modern tech stack.",
      animation: devAnim,
      color: "bg-green-500",
    },
    {
      type: "image",
      title: "Creative Services",
      description: "Custom solutions for music, performance, and tech.",
      color: "bg-red-500",
         src: "/portfolio/knocks.jpg", 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Explore Our Expertise
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <SectionReveal key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-6 ${
                  item.color || ""
                }`}
              >
                {/* Image Box */}
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-56 object-cover rounded-xl mb-4"
                  />
                )}

                {/* Lottie Box */}
                {item.type === "lottie" && (
                  <div className="w-32 h-32 mb-4">
                    <Lottie animationData={item.animation} loop autoplay />
                  </div>
                )}

                {/* Text Box */}
                {item.type === "text" && (
                  <div className="mb-4"></div>
                )}

                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white text-sm text-center">{item.description}</p>
              </motion.div>
            </SectionReveal>

          ))}
        </div>
      </div>
    </section>
  );
}

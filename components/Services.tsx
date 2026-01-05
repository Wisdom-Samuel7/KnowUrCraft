"use client";

import { motion } from "framer-motion";
import { Music, Piano, Laptop } from "lucide-react"; // Use relevant icons
import Stats from "./Stats";
import SectionReveal from "./SectionReveal";

const services = [
  {
    title: "Music Production",
    description: "Professional music production services to bring your sound to life.",
    icon: <Music size={36} />,
    bgColor: "bg-red-500",
  },
  {
    title: "Expert Piano Player",
    description: "Skilled piano performances for recordings, events, and sessions.",
    icon: <Piano size={36} />,
    bgColor: "bg-orange-400",
  },
  {
    title: "Full Stack Mobile / Web Dev",
    description: "Building high-quality web and mobile apps from start to finish.",
    icon: <Laptop size={36} />,
    bgColor: "bg-green-500",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Services
          </h2>
        </SectionReveal>

        <SectionReveal>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We combine music, performance, and technology to deliver exceptional results.
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <SectionReveal key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`${service.bgColor} p-8 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition-transform transform hover:-translate-y-2`}
              >
                <div className="mb-4 text-white">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white text-sm">{service.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Stats />
        </div>
      </div>
    </section>
  );
}

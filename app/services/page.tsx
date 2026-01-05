"use client"

import SectionReveal from "@/components/SectionReveal";
import { Music, Piano, Laptop } from "lucide-react";
import Lottie from "lottie-react";

import ServicesStatsSection from "@/components/ServicesStatsSection";
import ServicesGridSection from "@/components/ServicesGridSection";

// Lottie animations (replace with your actual files)
import musicAnim from "@/public/lottie/studio.json";
import pianoAnim from "@/public/lottie/pianolottie.json";
import devAnim from "@/public/lottie/appdev.json";

export default function ServicesPage() {
  const services = [
    {
      title: "Music Production",
      description:
        "Professional music production services to bring your sound to life. We have taught in schools interstate and have contributed to the growth many",
      icon: <Music size={36} className="text-white" />,
      color: "bg-red-500",
      animation: musicAnim,
    },
    {
      title: "Expert Piano Player",
      description:
        "Skilled piano performances for recordings, events, and sessions.",
      icon: <Piano size={36} className="text-white" />,
      color: "bg-orange-400",
      animation: pianoAnim,
    },
    {
      title: "Full Stack Mobile / Web Dev",
      description:
        "Building high-quality web and mobile apps from start to finish.",
      icon: <Laptop size={36} className="text-white" />,
      color: "bg-green-500",
      animation: devAnim,
    },
  ];

  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Knowurcraft offers a combination of music, performance, and tech expertise
          to bring your creative visions to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <SectionReveal key={service.title}>
              <div
                className={`${service.color} rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="w-32 h-32 mb-4">
                  <Lottie animationData={service.animation} loop autoplay />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white text-sm">{service.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

       {/* Section 4: CTA / Stats / Contact Prompt */}
      <SectionReveal>
        <section className="py-24 text-center bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg md:text-xl">
            Whether it’s music, performance, or tech solutions, we are here to create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition"
          >
            Start a Project
          </a>
        </section>
      </SectionReveal>

<ServicesStatsSection />
<ServicesGridSection />
    </main>
  );
}

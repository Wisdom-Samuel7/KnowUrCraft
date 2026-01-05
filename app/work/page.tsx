"use client";

import SectionReveal from "@/components/SectionReveal";
import Lottie from "lottie-react";


// Lottie animations (replace with your actual files)
import musicAnim from "@/public/lottie/studio.json";
import pianoAnim from "@/public/lottie/pianolottie.json";
import devAnim from "@/public/lottie/appdev.json";

export default function WorkPage() {
  return (
    <main className="pt-16 bg-white">

      {/* Section 1: Hero */}
      <SectionReveal>
        <section className="text-center py-24 relative overflow-hidden">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Our Work
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Showcasing creativity in music, performance, and technology.
          </p>

          <div className="absolute top-10 left-10 w-28">
            <Lottie animationData={musicAnim} loop autoplay />
          </div>
        </section>
      </SectionReveal>

      {/* Section 2: Featured Project A */}
      <SectionReveal>
        <section className="py-24 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6">
          <img
            src="/portfolio/studiopics.jpeg"
            alt="Project A"
            className="md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
          />
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project A</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              High-quality music production project with a full orchestral arrangement and cutting-edge sound design.
            </p>
            <p className="mt-4 font-semibold text-gray-800 md:text-lg">Created tracks for YouTube channels from 𝐒𝐂𝐑𝐀𝐓𝐂𝐇 with 100K+ subs & 1M+ views. DM for beats/collabs</p>
          </div>
        </section>
      </SectionReveal>

      {/* Section 3: Featured Project B */}
      <SectionReveal>
        <section
          className="py-32 relative text-white"
          style={{
            backgroundImage: "url('/portfolio/projectB.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/50 p-12 md:p-24 max-w-4xl mx-auto rounded-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project B</h2>
            <p className="text-lg md:text-xl">
              Innovative piano collaboration with live performance recording and mixed media visuals.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Section 4: Collaboration A */}
      <SectionReveal>
        <section className="py-24 bg-indigo-100 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Collaboration with Artist X</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              Worked remotely to produce and mix tracks for Artist X’s latest album, delivering high-quality stems and arrangements.
            </p>
          </div>
          <div className="md:w-1/2">
            <Lottie animationData={pianoAnim} loop autoplay />
          </div>
        </section>
      </SectionReveal>

      {/* Section 5: Collaboration B */}
      <SectionReveal>
        <section className="py-24 flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto px-6">
          <img
            src="/portfolio/knocks.jpg"
            alt="Collaboration B"
            className="md:w-1/2 rounded-xl shadow-lg mb-6 md:mb-0"
          />
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaboration B</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              Full-time experience creating a custom web application features for a music brand.
            </p>
            <p className="mt-4 font-semibold">Locations: Berlin, Lagos</p>
          </div>
        </section>
      </SectionReveal>

      {/* Section 6: Experience + CTA */}
      <SectionReveal>
        <section className="py-24 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Remote & Full-time Experience
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Extensive experience working with clients worldwide both remotely and on-site.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <div className="bg-red-500 p-8 rounded-2xl shadow-lg text-white flex-1">
                <h3 className="text-2xl font-bold mb-2">Remote</h3>
                <p>Collaborated with international clients.</p>
                <p className="mt-2 font-semibold">Locations: SYDNEY, Australia </p>
              </div>
              <div className="bg-green-500 p-8 rounded-2xl shadow-lg text-white flex-1">
                <h3 className="text-2xl font-bold mb-2">Full-time</h3>
                <p>In-studio and on-site roles for agencies and studios.</p>
                <p className="mt-2 font-semibold">Locations: Nigeria</p>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition"
            >
              Start a Project
            </a>
          </div>
        </section>
      </SectionReveal>

    </main>
  );
}

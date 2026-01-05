"use client";

import SectionReveal from "@/components/SectionReveal";
import Lottie from "lottie-react";

import musicAnim from "@/public/lottie/studio.json";

// Blog posts data with external images
const blogPosts = [
  {
    title: "The Art of Music Production",
    description: "Techniques to create professional-grade music from scratch.",
    date: "Jan 2026",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    splash: true,
  },
  {
    title: "Mastering Piano for Live Performance",
    description: "Tips and insights from professional piano performances.",
    date: "Dec 2025",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full Stack Development for Creatives",
    description: "Building web & mobile apps tailored for artists and creatives.",
    date: "Nov 2025",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1581092795369-44dc3b0e2e45?auto=format&fit=crop&w=800&q=80",
    splash: true,
  },
  {
    title: "Collaborating with Artists",
    description: "Insights on remote and in-person collaborations.",
    date: "Oct 2025",
    category: "Music",
    image: "https://images.unsplash.com/photo-1552056891-ad717260b047?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBBcnRpc3RzfGVufDB8fDB8fHww",
  },
  {
    title: "Music Visualization Techniques",
    description: "Using visual effects to complement music production.",
    date: "Sep 2025",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzaWMlMjBWaXN1YWxpemF0aW9uJTIwVGVjaG5pcXVlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Studio Setup Essentials",
    description: "Setting up a professional music and recording environment.",
    date: "Aug 2025",
    category: "Music",
    image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Creative App Development",
    description: "How apps can enhance musical experiences.",
    date: "Jul 2025",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-16 bg-white">

      {/* Hero Section */}
      <SectionReveal>
        <section className="text-center py-24 relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Blog & Insights
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our extensive library of music, tech, and creative industry insights.
          </p>

          <div className="absolute top-10 left-10 w-24">
            <Lottie animationData={musicAnim} loop autoplay />
          </div>
        </section>
      </SectionReveal>

      {/* Featured Splash Posts */}
      {blogPosts.filter(post => post.splash).map((post, i) => (
        <SectionReveal key={i}>
          <section
            className="py-32 relative text-white"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 p-12 md:p-24 max-w-4xl mx-auto rounded-xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h2>
              <p className="text-lg md:text-xl">{post.description}</p>
              <p className="mt-2 text-gray-200">{post.date}</p>
              <p className="mt-2 text-gray-300 font-semibold">{post.category}</p>
            </div>
          </section>
        </SectionReveal>
      ))}

      {/* Grid Posts */}
      <SectionReveal>
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.splash).map((post, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                <p className="text-sm">{post.date}</p>
                <p className="text-xs mt-1">{post.category}</p>
              </div>
            </div>
          ))}
        </section>
      </SectionReveal>

      {/* Newsletter / CTA */}
      {/* <SectionReveal>
        <section className="py-24 bg-gray-50 text-center rounded-2xl mx-6 md:mx-32 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Subscribe to our newsletter to get the latest insights on music, tech, and creative projects.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </SectionReveal> */}

    </main>
  );
}

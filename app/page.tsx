import Hero from "@/components/Hero";
import Services from "@/components/Services";

import ParallaxSection from "@/components/ParallaxSection";


import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <ParallaxSection />
        <Portfolio />
    </main>
  );
}

import Hero from "@/components/Hero";
import Services from "@/components/Services";

import ParallaxSection from "@/components/ParallaxSection";
import ProjectLifecycle from "@/components/ProjectLifecycle";
import CreativeFlowTimeline from "@/components/CreativeFlowTimeline";



import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <ParallaxSection />
      <Portfolio />
      <ProjectLifecycle />
      <CreativeFlowTimeline />
    </main>
  );
}

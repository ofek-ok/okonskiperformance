import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeAreBuilding from "@/components/WhatWeAreBuilding";
import WhoItsFor from "@/components/WhoItsFor";
import AboutOfek from "@/components/AboutOfek";
import PerformanceList from "@/components/PerformanceList";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeAreBuilding />
      <WhoItsFor />
      <AboutOfek />
      <PerformanceList />
      <FinalCTA />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeAreBuilding from "@/components/WhatWeAreBuilding";
import WhoItsFor from "@/components/WhoItsFor";
import AboutOfek from "@/components/AboutOfek";
import PerformanceList from "@/components/PerformanceList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-primary selection:bg-brand selection:text-white">
      <Navbar />
      <Hero />
      <WhatWeAreBuilding />
      <WhoItsFor />
      <AboutOfek />
      <PerformanceList />
      <Footer />
    </main>
  );
}

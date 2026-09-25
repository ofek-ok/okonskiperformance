import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformancePromise from "@/components/PerformancePromise";
import WhatWeAreBuilding from "@/components/WhatWeAreBuilding";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import AboutOfek from "@/components/AboutOfek";
import PerformanceList from "@/components/PerformanceList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-primary selection:bg-brand selection:text-white">
      <Navbar />
      <Hero />
      <PerformancePromise />
      <WhatWeAreBuilding />
      <WhoItsFor />
      <HowItWorks />
      <AboutOfek />
      <PerformanceList />
      <Footer />
    </main>
  );
}

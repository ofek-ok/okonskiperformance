import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Method from "@/components/Method";
import Audiences from "@/components/Audiences";
import HowItWorks from "@/components/HowItWorks";
import Framework from "@/components/Framework";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Message />
      <Method />
      <Audiences />
      <HowItWorks />
      <Framework />
      <About />
      <FAQ />
      <FooterCTA />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import Treatment from "@/components/Treatment";
import HowToStart from "@/components/HowToStart";
import AboutOfek from "@/components/AboutOfek";
import FAQ from "@/components/FAQ";
import PerformanceList from "@/components/PerformanceList";
import Footer from "@/components/Footer";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Okonski Performance",
    description: "טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה עם שגרה תובענית.",
    areaServed: { "@type": "AdministrativeArea", name: "אזור השרון" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Okonski Performance",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "אופק אוקונסקי",
    jobTitle: "מייסד Okonski Performance",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-charcoalDark selection:bg-logoBlue selection:text-white">
        <Navbar />
        <Hero />
        <WhoItsFor />
        <Treatment />
        <HowToStart />
        <AboutOfek />
        <FAQ />
        <PerformanceList />
        <Footer />
      </main>
    </>
  );
}


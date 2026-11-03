import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PerformanceList from "@/components/PerformanceList";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "הצטרפות לרשימת המתעניינים | Okonski Performance",
  description:
    "הצטרפו לרשימת המתעניינים של Okonski Performance לקבלת עדכון אישי עם פתיחת הפעילות.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#0A0B0D] text-[#E2E8F0] flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <PerformanceList />
      </div>
      <Footer />
    </main>
  );
}

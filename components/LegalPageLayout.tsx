import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  label: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, label, lastUpdated = "2026", children }: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#F5F5F2] min-h-screen text-[#22272C]" lang="he" dir="rtl">
        {/* Skip to content */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-[#142333] text-white px-4 py-2 rounded-sm z-50">
          דלג לתוכן
        </a>

        {/* Hero Strip */}
        <div className="bg-[#FFFFFF] border-b border-[#A8B0B7]/30 pt-16 pb-12 sm:pb-16 relative">
          <div className="container mx-auto px-4 sm:px-8 max-w-4xl relative z-10 text-right">
            <p className="font-mono text-[#49677F] font-semibold tracking-wider uppercase text-xs mb-3">{label}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22272C] leading-tight mb-4">{title}</h1>
            {lastUpdated && (
              <p className="text-[#22272C]/60 text-xs font-mono">עודכן לאחרונה: {lastUpdated}</p>
            )}
          </div>
        </div>

        {/* Legal Content */}
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl py-12 sm:py-20 text-right">
          <div className="space-y-8 sm:space-y-12 text-[#22272C]/85 leading-relaxed">
            {children}
          </div>
          <div className="mt-14 sm:mt-20 pt-8 border-t border-[#A8B0B7]/30">
            <Link href="/" className="text-[#142333] hover:text-[#49677F] transition-colors text-sm font-semibold inline-flex items-center min-h-[44px]">
              ← חזרה לדף הבית
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

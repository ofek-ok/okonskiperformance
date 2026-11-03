import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  label: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, label, lastUpdated = "ספטמבר 2026", children }: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-charcoalDark min-h-screen text-silverOff" lang="he" dir="rtl">
        {/* Skip to content */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 bg-logoBlue text-white px-4 py-2 rounded z-50">
          דלג לתוכן
        </a>

        {/* Hero Strip */}
        <div className="bg-charcoalDark border-b border-white/5 pt-28 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(62,111,168,0.06)_0%,_transparent_60%)]" />
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
            <p className="font-barlow text-logoIce font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">{label}</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">{title}</h1>
            {lastUpdated && (
              <p className="text-silverMuted text-xs sm:text-sm">עודכן לאחרונה: {lastUpdated}</p>
            )}
          </div>
        </div>

        {/* Legal Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-20 text-right">
          <div className="prose-op space-y-8 sm:space-y-12">
            {children}
          </div>
          <div className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-white/5">
            <Link href="/" className="text-logoIce hover:text-white transition-colors text-sm font-bold tracking-wide inline-flex items-center min-h-[44px]">
              ← חזרה לאתר
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

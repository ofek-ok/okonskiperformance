import type { Metadata } from "next";
import Image from "next/image";
import { CONNECT_BRAND, CONNECT_LINKS } from "@/config/links";
import ConnectLinkCard from "@/components/connect/ConnectLinkCard";
import ConnectWhatsAppButton from "@/components/connect/ConnectWhatsAppButton";

export const metadata: Metadata = {
  title: "Okonski Performance | ערוצי קשר ופלטפורמות",
  description:
    "Okonski Performance — ספורטתרפיה, טיפול בכאבים, שיקום פציעות, תחזוקה גופנית ושיפור ביצועים. גישה ישירה לאתר הרשמי, לרשתות החברתיות וליצירת קשר.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ConnectPage() {
  const activeLinks = CONNECT_LINKS.filter((item) => item.enabled).sort(
    (a, b) => a.order - b.order
  );

  return (
    <main className="min-h-[100svh] bg-[#0E1116] text-[#F4F6F9] flex flex-col justify-between px-4 py-12 sm:py-16">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
        {/* A. Brand Header */}
        <header className="text-center flex flex-col items-center mb-8">
          <div className="mb-4">
            <Image
              src={CONNECT_BRAND.logoSrc}
              alt={CONNECT_BRAND.logoAlt}
              width={450}
              height={346}
              className="w-28 sm:w-32 h-auto object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#F4F6F9] tracking-tight mb-3">
            {CONNECT_BRAND.name}
          </h1>
          <p className="text-sm sm:text-base text-[#A7AAB4] leading-relaxed max-w-sm">
            {CONNECT_BRAND.description}
          </p>
        </header>

        {/* B. Main Digital Links (Dynamically rendered from config/links.ts) */}
        <nav aria-label="פלטפורמות וערוצי קשר של Okonski Performance" className="space-y-3 mb-6">
          {activeLinks.map((item) => (
            <ConnectLinkCard key={item.id} item={item} />
          ))}
        </nav>

        {/* C. Prominent WhatsApp Contact */}
        <section aria-label="יצירת קשר בוואטסאפ" className="pt-4 border-t border-white/[0.08]">
          <ConnectWhatsAppButton />
        </section>
      </div>

      {/* D. Minimal Branded Footer */}
      <footer className="w-full max-w-md mx-auto pt-12 text-center">
        <p className="text-xs text-[#A7AAB4] font-normal">
          {CONNECT_BRAND.name}
        </p>
      </footer>
    </main>
  );
}

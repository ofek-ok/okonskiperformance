import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingAccessibility from "@/components/FloatingAccessibility";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0B0D",
};

export const metadata: Metadata = {
  title: "Okonski Performance | ספורטתרפיה, התאוששות ושיפור יכולת",
  description:
    "Okonski Performance — טיפול גופני אישי, התאוששות ושיפור יכולת לספורטאים, למתאמנים ולאנשי קריירה תובעניים. הצטרפות לרשימת המתעניינים.",
  icons: {
    icon: "/logo-official.png",
    apple: "/logo-official.png",
  },
  openGraph: {
    title: "Okonski Performance",
    description: "הגוף שלך חייב לעמוד בקצב שלך.",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Okonski Performance | ספורטתרפיה, התאוששות ושיפור יכולת",
    description: "הגוף שלך חייב לעמוד בקצב שלך.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-heebo bg-[#0A0B0D] text-[#E2E8F0] antialiased">
        {children}
        <FloatingAccessibility />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

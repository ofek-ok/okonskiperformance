import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingAccessibility from "@/components/FloatingAccessibility";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0E1116",
};

export const metadata: Metadata = {
  title: "Okonski Performance | טיפול ספורטיבי, שיקום והתאוששות",
  description:
    "Okonski Performance מציעה טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה. כאב ופציעה, התאוששות ושיפור יכולת. הצטרפו לרשימת העדכונים.",
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
    title: "Okonski Performance | טיפול ספורטיבי, שיקום והתאוששות",
    description: "טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה.",
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
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-heebo bg-[#0E1116] text-[#F4F6F9] antialiased">
        {children}
        <FloatingAccessibility />
        <FloatingWhatsApp />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

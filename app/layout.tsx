import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okonski Performance | נפתחים בינואר 2027",
  description:
    "Okonski Performance — ספורט־תרפיה לספורטאים ולאנשים בעלי שגרה תובענית. הפעילות הטיפולית נפתחת בינואר 2027.",
  icons: {
    icon: "/logo-official.png",
    apple: "/logo-official.png",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Okonski Performance",
    description: "הגוף שלך צריך להיות בנוי למה שאתה דורש ממנו.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preload" as="image" href="/hero-bg.jpg" />
      </head>
      <body>
        {children}
        <script src="/app.js" defer />
      </body>
    </html>
  );
}

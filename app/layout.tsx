import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Okonski Performance | ביצועים. שיקום. תפקוד.",
  description:
    "קליניקה לביצועים, שיקום ותחזוקת הגוף. עובדים עם ספורטאים, יזמים ואנשי ביצועים כדי לשפר תפקוד, עמידות לעומס ואיכות חיים.",
  icons: {
    icon: '/logo-official.png',
    apple: '/logo-official.png',
  },
  openGraph: {
    title: "Okonski Performance",
    description: "הגוף שלך צריך לעמוד בקצב שלך.",
    locale: "he_IL",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Barlow+Condensed:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Analytics architecture goes here. E.g. script that listens to cookie-consent-updated event */}
      </head>
      <body className="font-heebo bg-charcoal text-silver antialiased">
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
        
        {/* Accessibility Plugin */}
        <Script src="https://cdn.nagish.li/nagishli.js?v=2.3" strategy="lazyOnload" />
      </body>
    </html>
  );
}

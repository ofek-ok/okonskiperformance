import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingAccessibility from "@/components/FloatingAccessibility";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Okonski Performance | טיפול ספורטיבי והתאוששות באזור השרון",
  description:
    "Okonski Performance מציעה טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה. כאב ופציעה, התאוששות ושיפור יכולת. הצטרפו לרשימת העדכונים.",
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
  twitter: {
    card: "summary",
    title: "Okonski Performance | טיפול ספורטיבי והתאוששות באזור השרון",
    description: "טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה באזור השרון.",
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
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Barlow+Condensed:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-heebo bg-charcoalDark text-silverOff antialiased">
        {children}
        <FloatingWhatsApp />
        <FloatingAccessibility />
        <CookieBanner />
      </body>
    </html>
  );
}

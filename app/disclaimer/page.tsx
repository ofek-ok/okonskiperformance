import Navbar from "@/components/Navbar";

export const metadata = {
  title: "הבהרה מקצועית ובריאותית | Okonski Performance",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-charcoal min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-white mb-8">הבהרה מקצועית ובריאותית</h1>
        <div className="text-silver/80 space-y-6 leading-relaxed">
          <p>התוכן והשירותים של Okonski Performance מיועדים למטרות אימון, ביצועים, כושר גופני והעשרה מקצועית ואינם מהווים ייעוץ, אבחון או טיפול רפואי.</p>
          <p>מידע המופיע באתר, ברשתות החברתיות, בסרטונים, במדריכים או בתוכניות אינו מהווה תחליף לייעוץ פרטני של רופא, פיזיותרפיסט, דיאטן או בעל מקצוע רפואי מוסמך אחר.</p>
          <p>פעילות גופנית כרוכה בסיכונים. יש להתאים כל פעילות למצב הבריאותי וליכולת האישית ולהפסיק פעילות במקרה של כאב חריג או תסמין מדאיג.</p>
          <p>במקרה של פציעה, מצב רפואי קיים, טיפול רפואי, מגבלה גופנית או ספק בנוגע להתאמה לפעילות, יש להתייעץ עם גורם רפואי מוסמך לפני התחלת הפעילות.</p>
          <p>תוצאות האימון משתנות מאדם לאדם ואין התחייבות להשגת תוצאה מסוימת.</p>
        </div>
      </div>
    </main>
  );
}

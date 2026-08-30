import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

export const metadata = {
  title: "תנאי שימוש | Okonski Performance",
};

export default function TermsPage() {
  return (
    <main className="bg-charcoal min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-white mb-8">תנאי שימוש – Okonski Performance</h1>
        <div className="text-silver/80 space-y-6 leading-relaxed">
          <p><strong>עדכון אחרון: אוגוסט 2026</strong></p>
          <p>ברוכים הבאים לאתר Okonski Performance ("האתר").</p>
          <p>השימוש באתר, בתכנים המופיעים בו ובשירותים המוצעים באמצעותו כפוף לתנאי שימוש אלה. גלישה באתר או שימוש בשירותיו מהווים הסכמה לתנאים אלה.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. מטרת האתר</h2>
          <p>האתר מספק מידע אודות Okonski Performance, שירותי אימון, Performance Coaching, תוכניות אימון, ליווי, תוכן מקצועי ושירותים נוספים שעשויים להיות מוצעים מעת לעת.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. מידע מקצועי</h2>
          <p>התכנים באתר נועדו למטרות מידע והעשרה בלבד.</p>
          <p>אין לראות במידע באתר ייעוץ רפואי, אבחון רפואי, טיפול רפואי, פיזיותרפיה, ייעוץ תזונתי או תחליף להתייעצות עם בעל מקצוע מוסמך.</p>
          <p>לפני התחלת תוכנית אימונים או ביצוע שינוי משמעותי בפעילות הגופנית, ובמיוחד במקרה של מצב רפואי, פציעה, כאב, מגבלה או ספק לגבי היכולת לבצע פעילות מסוימת, מומלץ להתייעץ עם גורם רפואי מוסמך.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. אחריות המשתמש</h2>
          <p>השתתפות בפעילות גופנית כרוכה מטבעה במאמץ ובסיכונים מסוימים.</p>
          <p>על המשתמש לפעול בהתאם ליכולותיו, למצבו הגופני ולהנחיות שקיבל מגורמים מקצועיים רלוונטיים.</p>
          <p>אין לבצע תרגיל או פעילות הגורמים לכאב חריג, סחרחורת, קוצר נשימה חריג או תסמין מדאיג אחר.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. תוצאות</h2>
          <p>Okonski Performance אינה מתחייבת לתוצאה גופנית, ספורטיבית או אחרת כתוצאה מצפייה בתוכן, שימוש בתוכנית או קבלת שירות.</p>
          <p>התוצאות עשויות להשתנות בין אנשים בהתאם לגורמים רבים, לרבות נקודת הפתיחה, התמדה, מצב גופני, אורח חיים ונסיבות אישיות.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. קניין רוחני</h2>
          <p>אלא אם צוין אחרת, התכנים המקוריים באתר, לרבות טקסטים, תוכניות, גרפיקה, עיצוב, סרטונים, תמונות, סימנים מסחריים, שם המותג והלוגו של Okonski Performance, הם בבעלות בעליהם או נעשה בהם שימוש כדין.</p>
          <p>אין להעתיק, להפיץ, לפרסם, למכור, לשנות או לעשות שימוש מסחרי בתכנים ללא קבלת אישור מראש ובכתב.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. קישורים ושירותי צד שלישי</h2>
          <p>האתר עשוי לכלול קישורים לשירותים ואתרים חיצוניים.</p>
          <p>Okonski Performance אינה אחראית לתוכן, למדיניות הפרטיות, לזמינות או לפעילות של שירותי צד שלישי.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. זמינות האתר</h2>
          <p>אין התחייבות לכך שהאתר יהיה זמין בכל עת או נקי לחלוטין מתקלות, הפרעות או שגיאות.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. שינויים</h2>
          <p>Okonski Performance רשאית לעדכן את האתר ואת תנאי השימוש מעת לעת.</p>
          <p>הגרסה המעודכנת שתפורסם באתר היא הגרסה הרלוונטית החל ממועד פרסומה, בכפוף להוראות הדין.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. הדין החל</h2>
          <p>על תנאי שימוש אלה יחולו דיני מדינת ישראל.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. יצירת קשר</h2>
          <p>לשאלות בנוגע לתנאי השימוש ניתן ליצור קשר באמצעות פרטי יצירת הקשר המופיעים באתר.</p>
        </div>
      </div>
    </main>
  );
}

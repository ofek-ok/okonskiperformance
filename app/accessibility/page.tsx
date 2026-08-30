import Navbar from "@/components/Navbar";

export const metadata = {
  title: "הצהרת נגישות | Okonski Performance",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-charcoal min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-white mb-8">הצהרת נגישות</h1>
        <div className="text-silver/80 space-y-6 leading-relaxed">
          <p><strong>תאריך עדכון אחרון: אוגוסט 2026</strong></p>
          <p>אנו ב-Okonski Performance רואים חשיבות רבה במתן שירות שוויוני, מכבד ונגיש לכלל הלקוחות, לרבות אנשים עם מוגבלויות.</p>
          <p>אנו משקיעים מאמצים כדי להנגיש את האתר שלנו בהתאם להנחיות הנגישות, תוך התמקדות בשיפור מתמיד של חוויית המשתמש.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">אמצעי הנגישות באתר</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>תמיכה בניווט מקלדת:</strong> האתר מותאם לגלישה באמצעות מקלדת.</li>
            <li><strong>קונטרסט וצבעים:</strong> עיצוב האתר בוצע תוך התחשבות בניגודיות צבעים ראויה.</li>
            <li><strong>היררכיה ותוכן:</strong> השימוש בכותרות ובאלמנטים סמנטיים (HTML5) נעשה באופן מסודר.</li>
            <li><strong>תיאור חלופי לתמונות (Alt Text):</strong> התמונות המרכזיות באתר כוללות טקסט חלופי.</li>
            <li><strong>תמיכה במכשירים ובדפדפנים:</strong> האתר רספונסיבי ומותאם למגוון דפדפנים ומכשירים מודרניים.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">מגבלות נגישות ידועות</h2>
          <p>למרות מאמצינו להנגיש את כלל הדפים והרכיבים באתר, ייתכן שיתגלו אזורים שטרם הונגשו במלואם או שקיימת מגבלה טכנולוגית לגביהם. אנו ממשיכים במאמצים לשפר את הנגישות ככל האפשר.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">יצירת קשר בנושא נגישות</h2>
          <p>אם נתקלתם בבעיית נגישות באתר או אם אתם זקוקים לעזרה, נשמח לעמוד לרשותכם. אנא פנו אלינו באמצעות:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>שם איש קשר:</strong> [נדרש להשלים: פרטי איש קשר לנגישות]</li>
            <li><strong>דוא"ל:</strong> [נדרש להשלים: אימייל]</li>
            <li><strong>טלפון / WhatsApp:</strong> [נדרש להשלים: טלפון]</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

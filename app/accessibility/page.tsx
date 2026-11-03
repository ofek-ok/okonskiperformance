import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "הצהרת נגישות | Okonski Performance",
  description: "הצהרת הנגישות של Okonski Performance.",
};

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="הצהרת נגישות" label="OKONSKI PERFORMANCE / ACCESSIBILITY">

      <section aria-labelledby="a11y-intro">
        <p>Okonski Performance רואה חשיבות בהנגשת האתר והשירותים הדיגיטליים לאנשים עם מוגבלות ופועלת לשפר את חוויית השימוש באתר עבור כלל המשתמשים.</p>
        <p>האתר תוכנן ונבנה תוך התייחסות לעקרונות נגישות מקובלים ולדרישות הנגישות החלות על שירותי אינטרנט בישראל, ככל שהן חלות על פעילות האתר.</p>
        <p>במסגרת פיתוח האתר אנו פועלים, בין היתר, ליישום:</p>
        <ul>
          <li>מבנה HTML סמנטי;</li>
          <li>ניווט באמצעות מקלדת;</li>
          <li>סימון ברור של שדות טפסים;</li>
          <li>הודעות שגיאה נגישות;</li>
          <li>ניגודיות מתאימה;</li>
          <li>טקסט חלופי לתמונות משמעותיות;</li>
          <li>היררכיית כותרות;</li>
          <li>תמיכה בתצוגה במובייל;</li>
          <li>תמיכה בכיוון כתיבה RTL;</li>
          <li>מצבי Focus ברורים;</li>
          <li>תמיכה בהעדפת Reduced Motion ככל שרלוונטי.</li>
        </ul>
        <p>אנו ממשיכים לבדוק ולשפר את נגישות האתר.</p>
        <p>ייתכן שיימצאו חלקים או רכיבים שטרם הונגשו באופן מלא. אם נתקלתם בקושי בשימוש באתר, נשמח לקבל דיווח כדי שנוכל לבדוק ולטפל בנושא.</p>
      </section>

      <section aria-labelledby="a11y-contact">
        <h2 id="a11y-contact">יצירת קשר בנושא נגישות</h2>
        <p>שם איש קשר: <strong>[ACCESSIBILITY CONTACT]</strong></p>
        <p>דוא&ldquo;ל: <strong>[ACCESSIBILITY EMAIL]</strong></p>
        <p>טלפון: <strong>[ACCESSIBILITY PHONE]</strong></p>
        <p>אם נתקלתם בבעיית נגישות, מומלץ לציין בפנייה את העמוד שבו נתקלתם בבעיה, הפעולה שניסיתם לבצע, סוג המכשיר/דפדפן וטכנולוגיה מסייעת שבה השתמשתם, ככל שרלוונטי.</p>
      </section>

    </LegalPageLayout>
  );
}

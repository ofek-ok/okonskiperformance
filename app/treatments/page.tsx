import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "טיפולים וחבילות | Okonski Performance",
  description: "הכירו את סוגי הטיפול ואת אפשרויות ההמשך ב־Okonski Performance: מפגש בודד, חבילת 4 מפגשים או חבילת 8 מפגשים.",
};

const needs = [
  {
    title: "Pain Treatment",
    subtitle: "כאב ומגבלות תנועה",
    description: "למי שמתמודד עם כאב, אי־נוחות או מגבלה שמפריעה לתנועה, לאימון או לשגרה. נתחיל בתשאול ובהערכה, ונבנה את המפגש בהתאם לממצאים ולמטרה האישית.",
  },
  {
    title: "Maintenance & Recovery",
    subtitle: "תחזוקה והתאוששות",
    description: "למי שמתמודד עם עומסים מצטברים ורוצה לשלב טיפול גופני והתאוששות בשגרת החיים והאימונים שלו.",
  },
  {
    title: "Level-Up",
    subtitle: "תנועה ושיפור יכולת",
    description: "למי שמעוניין לעבוד על תנועה, טווחי תנועה ומגבלות תפקודיות ביחס למטרות האישיות שלו.",
  },
];

const formats = [
  {
    title: "טיפול בודד",
    eyebrow: "ללא התחייבות לסדרה",
    detail: "מפגש ראשון בן 60 דקות הכולל תשאול, הערכה וטיפול. מפגש המשך בן 45 דקות, לפי הצורך.",
    note: "אפשר להגיע למפגש אחד בלבד. בסיום המפגש נבחן יחד אם יש צורך בהמשך.",
  },
  {
    title: "חבילת 4 טיפולים",
    eyebrow: "רצף טיפולי ממוקד",
    detail: "ארבעה מפגשים במסגרת של עד 60 יום, בהתאם לצורך ולמטרות שיוגדרו.",
    note: "הטיפול והתרגול מותאמים למצב ולתגובה לאורך המפגשים.",
  },
  {
    title: "חבילת 8 טיפולים",
    eyebrow: "רצף טיפולי מתמשך",
    detail: "שמונה מפגשים במסגרת של עד 90 יום, בהתאם לצורך ולמטרות שיוגדרו.",
    note: "מתאים למי שזקוק למסגרת ארוכה יותר; מספר המפגשים המומלץ נקבע לפי הערכה מקצועית.",
  },
];

export default function TreatmentsPage() {
  return (
    <main className="bg-charcoalDark text-silverOff min-h-screen selection:bg-logoBlue selection:text-white">
      <Navbar />
      <section className="relative pt-28 sm:pt-44 pb-12 sm:pb-20 border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-right">
          <Link href="/" className="inline-flex text-sm text-neutral-300 hover:text-white transition-colors mb-6 sm:mb-8 min-h-[44px] items-center">חזרה לעמוד הבית ←</Link>
          <p className="text-neutral-400 text-xs sm:text-sm font-mono tracking-wider mb-3 sm:mb-4">OKONSKI PERFORMANCE</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">טיפולים וחבילות</h1>
          <p className="max-w-3xl text-base sm:text-xl text-neutral-300 leading-relaxed mb-3 sm:mb-4">
            טיפול גופני אישי שמתחיל בהבנת המצב שלך ומותאם למטרה שלך.
          </p>
          <p className="max-w-3xl text-sm sm:text-base text-neutral-400 leading-relaxed">
            אפשר להגיע לטיפול בודד, או לבחור ברצף טיפולים. אין חובה לרכוש חבילה כדי לקבל טיפול.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-24 border-b border-neutral-800/60 scroll-mt-20 sm:scroll-mt-24" id="treatment-types">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4">עם מה אפשר להגיע?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-3xl mb-8 sm:mb-10 leading-relaxed">
            שלושת התחומים מתארים צרכים שונים, ולא שלושה טיפולים נוקשים. אופי המפגש מותאם לאדם, למצבו ולמטרתו.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {needs.map((need) => (
              <article key={need.title} className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8">
                <p className="text-neutral-400 font-mono text-xs sm:text-sm tracking-wider mb-2.5 sm:mb-3" dir="ltr">{need.title}</p>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{need.subtitle}</h3>
                <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-neutral-400">{need.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-24 bg-steelDark border-b border-neutral-800/60 scroll-mt-20 sm:scroll-mt-24" id="packages">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4">איך אפשר לקבל טיפול?</h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-8 sm:mb-10">
            בוחרים את מסגרת הטיפול המתאימה לך. אפשר להתחיל במפגש בודד, ובהתאם לצורך לשקול המשך.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {formats.map((format) => (
              <article key={format.title} className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8 flex flex-col">
                <p className="text-neutral-400 text-xs font-mono tracking-wider mb-2.5 sm:mb-3">{format.eyebrow}</p>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-5">{format.title}</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-6 sm:leading-7 mb-4 sm:mb-5">{format.detail}</p>
                <p className="text-neutral-400 text-xs sm:text-sm leading-6 sm:leading-7 mb-6 sm:mb-8">{format.note}</p>
                <div className="mt-auto border-t border-neutral-800/50 pt-5">
                  <p className="text-xs text-neutral-500 mb-3.5 sm:mb-4">ההרשמה עדיין אינה פתוחה.</p>
                  <Link href="/#performance-list" className="bg-white text-black font-medium hover:bg-neutral-200 transition-colors inline-flex items-center justify-center rounded-lg py-3 px-6 text-sm w-full min-h-[48px]">
                    הבטחת מקום בפתיחה
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-neutral-500 leading-6 sm:leading-7">
            מחירים ותנאי החבילות המלאים יתווספו לאחר אימות הנתונים הסופיים לפרסום. לא מתבצעת רכישה או גבייה דרך עמוד זה.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-24 border-b border-neutral-800/60 scroll-mt-20 sm:scroll-mt-24" id="process">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-6 sm:mb-8">איך נראה תהליך הטיפול?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">מפגש ראשון</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-7 sm:leading-8">היכרות ותשאול, הערכה גופנית בהתאם לצורך, טיפול ראשון וסיכום עם המלצה להמשך במידת הצורך.</p>
            </article>
            <article className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">מפגשי המשך</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-7 sm:leading-8">טיפול מותאם, תרגול והנחיות לבית לפי הצורך, התאמות עומס ומעקב אחר ההתקדמות.</p>
            </article>
          </div>
          <p className="text-xs text-neutral-500 mt-6 sm:mt-7 leading-6 sm:leading-7 max-w-4xl">
            אופי הטיפול מותאם לממצאים. הטיפול אינו מחליף אבחון רפואי, ובמצבים שמצריכים בירור או טיפול רפואי תינתן המלצה לפנות לגורם המתאים.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="border border-neutral-800/60 bg-neutral-900/30 rounded-2xl p-6 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-3xl font-black text-white mb-2.5 sm:mb-4">הטיפולים ייפתחו בקרוב.</h2>
              <p className="text-neutral-300 text-xs sm:text-base leading-relaxed">הפעילות צפויה להתחיל ב־24 בינואר 2027. עד אז אפשר להצטרף לרשימת העדכונים, ללא התחייבות.</p>
            </div>
            <Link href="/#performance-list" className="bg-white text-black font-medium hover:bg-neutral-200 transition-colors rounded-lg text-sm py-3 px-6 text-center shrink-0 w-full md:w-auto min-h-[48px] flex items-center justify-center">הבטחת מקום בפתיחה</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

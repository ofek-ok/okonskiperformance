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
      <section className="relative ambient-glow pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-right">
          <Link href="/" className="inline-flex text-sm text-logoIce hover:text-white transition-colors mb-8">חזרה לעמוד הבית ←</Link>
          <p className="text-logoIce text-sm font-bold mb-4">OKONSKI PERFORMANCE</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">טיפולים וחבילות</h1>
          <p className="max-w-3xl text-lg sm:text-xl text-silverOff leading-relaxed mb-4">
            טיפול גופני אישי שמתחיל בהבנת המצב שלך ומותאם למטרה שלך.
          </p>
          <p className="max-w-3xl text-base text-silverMuted leading-relaxed">
            אפשר להגיע לטיפול בודד, או לבחור ברצף טיפולים. אין חובה לרכוש חבילה כדי לקבל טיפול.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-white/[0.06] scroll-mt-24" id="treatment-types">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">עם מה אפשר להגיע?</h2>
          <p className="text-silverMuted max-w-3xl mb-10 leading-relaxed">
            שלושת התחומים מתארים צרכים שונים, ולא שלושה טיפולים נוקשים. אופי המפגש מותאם לאדם, למצבו ולמטרתו.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {needs.map((need) => (
              <article key={need.title} className="card-steel rounded-2xl p-7 sm:p-8 border-t-2 border-t-logoBlue">
                <p className="text-logoIce font-jakarta text-sm font-bold mb-3" dir="ltr">{need.title}</p>
                <h3 className="text-xl font-bold text-white mb-4">{need.subtitle}</h3>
                <p className="text-sm leading-7 text-silverMuted">{need.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-steelDark border-b border-white/[0.06] scroll-mt-24" id="packages">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">איך אפשר לקבל טיפול?</h2>
          <p className="text-silverMuted max-w-3xl leading-relaxed mb-10">
            בוחרים את מסגרת הטיפול המתאימה לך. אפשר להתחיל במפגש בודד, ובהתאם לצורך לשקול המשך.
          </p>
          <div className="grid lg:grid-cols-3 gap-5">
            {formats.map((format) => (
              <article key={format.title} className="card-steel rounded-2xl p-7 sm:p-8 flex flex-col">
                <p className="text-logoIce text-xs font-bold mb-3">{format.eyebrow}</p>
                <h3 className="text-2xl font-black text-white mb-5">{format.title}</h3>
                <p className="text-silverOff text-sm leading-7 mb-5">{format.detail}</p>
                <p className="text-silverMuted text-sm leading-7 mb-8">{format.note}</p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-xs text-silverMuted mb-4">הרשמה ותשלום עדיין אינם פתוחים.</p>
                  <Link href="/#performance-list" className="btn-logo-metallic inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-bold text-white w-full">
                    עדכנו אותי בפתיחה
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-silverMuted leading-7">
            מחירים ותנאי החבילות המלאים יתווספו לאחר אימות הנתונים הסופיים לפרסום. לא מתבצעת רכישה או גבייה דרך עמוד זה.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-white/[0.06] scroll-mt-24" id="process">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">איך נראה תהליך הטיפול?</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="brushed-panel rounded-2xl p-7 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">מפגש ראשון — 60 דקות</h3>
              <p className="text-sm text-silverOff leading-8">היכרות ותשאול, הערכה גופנית בהתאם לצורך, טיפול ראשון וסיכום עם המלצה להמשך במידת הצורך.</p>
            </article>
            <article className="brushed-panel rounded-2xl p-7 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">מפגשי המשך — 45 דקות</h3>
              <p className="text-sm text-silverOff leading-8">טיפול מותאם, תרגול והנחיות לבית לפי הצורך, התאמות עומס ומעקב אחר ההתקדמות.</p>
            </article>
          </div>
          <p className="text-xs text-silverMuted mt-7 leading-7 max-w-4xl">
            אופי הטיפול מותאם לממצאים. הטיפול אינו מחליף אבחון רפואי, ובמצבים שמצריכים בירור או טיפול רפואי תינתן המלצה לפנות לגורם המתאים.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="brushed-panel rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">הטיפולים ייפתחו בקרוב.</h2>
              <p className="text-silverOff leading-relaxed">הפעילות בתשלום צפויה להתחיל ב־24 בינואר 2027. עד אז אפשר להצטרף לרשימת העדכונים, ללא תשלום או התחייבות.</p>
            </div>
            <Link href="/#performance-list" className="btn-logo-metallic rounded-full text-white font-bold text-sm py-4 px-8 text-center shrink-0">עדכנו אותי בפתיחה</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

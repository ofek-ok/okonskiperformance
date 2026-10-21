import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "מדיניות Cookies | Okonski Performance",
  description: "מדיניות Cookies של Okonski Performance — שימוש בעוגיות וטכנולוגיות דומות.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout title="מדיניות Cookies" label="OKONSKI PERFORMANCE / COOKIE POLICY">

      <section aria-labelledby="cookies-intro">
        <h2 id="cookies-intro">מה הם Cookies?</h2>
        <p>Cookies הם קבצים או מזהים טכנולוגיים קטנים המשמשים אתרים ושירותים דיגיטליים לצרכים כגון הפעלה תקינה, אבטחה, שמירת העדפות, מדידה ושיווק.</p>
        <p>האתר עשוי להשתמש ב-Cookies ובטכנולוגיות דומות בהתאם לכלים המופעלים בו בפועל.</p>
      </section>

      <section aria-labelledby="cookies-types">
        <h2 id="cookies-types">סוגי Cookies</h2>

        <h3>Cookies חיוניים</h3>
        <p>נדרשים לצורך תפעול בסיסי, אבטחה או פונקציות חיוניות של האתר.</p>
        <p>כאשר הם נדרשים להפעלת השירות שביקש המשתמש, לא ניתן בהכרח להשביתם באמצעות מערכת העדפות האתר.</p>

        <h3>Analytics</h3>
        <p>עשויים לסייע לנו להבין כיצד משתמשים באתר, אילו עמודים נצפים ומהם מקורות התנועה.</p>

        <h3>Marketing</h3>
        <p>עשויים לשמש למדידת קמפיינים, Attribution או הצגת פרסום רלוונטי באמצעות פלטפורמות פרסום.</p>

        <h3>Functional</h3>
        <p>עשויים לשמש לשמירת העדפות או פונקציות נוספות שאינן הכרחיות לפעילות הבסיסית.</p>
      </section>

      <section aria-labelledby="cookies-control">
        <h2 id="cookies-control">השליטה שלכם</h2>
        <p>כאשר הדבר נדרש ובהתאם לטכנולוגיות המופעלות, האתר יאפשר לבחור האם לאשר Cookies שאינם חיוניים.</p>
        <p>ניתן לשנות את הבחירה באמצעות: <strong>&ldquo;ניהול העדפות Cookies&rdquo;</strong> (זמין בתחתית הדף).</p>
        <p>בנוסף ניתן לנהל Cookies דרך הגדרות הדפדפן.</p>
      </section>

      <section aria-labelledby="cookies-active">
        <h2 id="cookies-active">שירותים פעילים — טכנולוגיות מזוהות</h2>
        <p>הטבלה הבאה מציגה את הטכנולוגיות הפעילות בפועל באתר נכון למועד עדכון מדיניות זו.</p>

        <div className="overflow-x-auto mt-6">
          <table aria-label="שירותים פעילים">
            <thead>
              <tr>
                <th scope="col">שירות</th>
                <th scope="col">מטרה</th>
                <th scope="col">קטגוריה</th>
                <th scope="col">ספק</th>
                <th scope="col">הערות</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>localStorage (cookie_consent)</td>
                <td>שמירת העדפות Cookies של המשתמש</td>
                <td>חיוני</td>
                <td>Okonski Performance</td>
                <td>נשמר מקומית בדפדפן</td>
              </tr>
              <tr>
                <td>Vercel</td>
                <td>אחסון ואספקת האתר</td>
                <td>חיוני</td>
                <td>Vercel Inc.</td>
                <td>ייתכנו Cookies טכניים של Vercel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm">שירותי Analytics ושיווק (כגון Google Analytics, Meta Pixel וכדומה) אינם פעילים כרגע. רשימה זו תעודכן עם הפעלת שירותים נוספים.</p>
      </section>

      <section aria-labelledby="cookies-manage">
        <h2 id="cookies-manage">ניהול העדפות Cookies</h2>
        <p>ניתן לנהל את העדפות ה-Cookies שלכם בכל עת דרך ההגדרות המופיעות בתחתית האתר או דרך הגדרות הדפדפן.</p>
      </section>

    </LegalPageLayout>
  );
}

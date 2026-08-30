import Navbar from "@/components/Navbar";

export const metadata = {
  title: "מדיניות פרטיות | Okonski Performance",
};

export default function PrivacyPage() {
  return (
    <main className="bg-charcoal min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-white mb-8">מדיניות פרטיות – Okonski Performance</h1>
        <div className="text-silver/80 space-y-6 leading-relaxed">
          <p><strong>עדכון אחרון: אוגוסט 2026</strong></p>
          <p>Okonski Performance מכבדת את פרטיות המשתמשים באתר.</p>
          <p>מדיניות זו מסבירה באופן כללי איזה מידע עשוי להיאסף במסגרת השימוש באתר וכיצד אנו עשויים להשתמש בו.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">איזה מידע עשוי להיאסף?</h2>
          <p>בעת שימוש באתר עשוי להיאסף מידע שהמשתמש מוסר באופן יזום, כגון:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>שם</li>
            <li>מספר טלפון</li>
            <li>כתובת דוא"ל</li>
            <li>תוכן פנייה</li>
            <li>מידע נוסף שהמשתמש בוחר למסור</li>
          </ul>
          <p>בנוסף, בהתאם לטכנולוגיות שיופעלו באתר, עשוי להיאסף מידע טכני וסטטיסטי כגון סוג מכשיר, דפדפן, עמודים שנצפו, מקור ההגעה לאתר ונתוני שימוש.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">מטרות השימוש במידע</h2>
          <p>המידע עשוי לשמש לצורך:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>מענה לפניות</li>
            <li>אספקת השירותים המבוקשים</li>
            <li>יצירת קשר עם מתעניינים ולקוחות</li>
            <li>ניהול קשרי לקוחות</li>
            <li>שיפור האתר והשירות</li>
            <li>ניתוח נתוני שימוש וביצועים</li>
            <li>אבטחת האתר ומניעת שימוש לרעה</li>
            <li>משלוח תוכן ועדכונים שיווקיים כאשר הדבר מותר ובהתאם להסכמות הנדרשות על פי דין</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">מסירת מידע לצדדים שלישיים</h2>
          <p>ייתכן שנעשה שימוש בספקי שירות חיצוניים לצורך הפעלת העסק והאתר, כגון שירותי אחסון, מערכות CRM, מערכות דיוור, כלי Analytics, שירותי פרסום וספקים טכנולוגיים.</p>
          <p>מידע עשוי להיות מועבר לספקים אלה ככל שנדרש לצורך מתן השירות ובהתאם לדין.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cookies וטכנולוגיות דומות</h2>
          <p>האתר עשוי להשתמש בעוגיות (Cookies) ובטכנולוגיות דומות לצורך תפעול האתר, שמירת העדפות, מדידה, ניתוח ושיווק.</p>
          <p>ככל שיידרש על פי דין, יוצגו למשתמש אפשרויות מתאימות ביחס לשימוש בטכנולוגיות אלה.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">אבטחת מידע</h2>
          <p>אנו נוקטים אמצעים סבירים ומקובלים לצורך הגנה על המידע בהתאם לאופי הפעילות והמידע.</p>
          <p>עם זאת, אין מערכת טכנולוגית המספקת אבטחה מוחלטת.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">שמירת מידע</h2>
          <p>מידע יישמר למשך הזמן הנדרש לצורך המטרות שלשמן נאסף, ניהול העסק, עמידה בחובות חוקיות והגנה על זכויות משפטיות, בהתאם לדין.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">זכויות בנוגע למידע</h2>
          <p>ניתן לפנות אלינו בבקשות בנוגע למידע אישי בהתאם לזכויות המוקנות על פי הדין החל.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">שינויים במדיניות</h2>
          <p>מדיניות פרטיות זו עשויה להתעדכן מעת לעת בעקבות שינויים באתר, בשירותים, בטכנולוגיה או בדרישות הדין.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">יצירת קשר</h2>
          <p>לשאלות או בקשות בנושא פרטיות ניתן לפנות באמצעות פרטי יצירת הקשר המופיעים באתר.</p>
        </div>
      </div>
    </main>
  );
}

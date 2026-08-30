export default function About() {
  return (
    <section id="about" className="py-24 bg-steel">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-charcoal rounded-lg overflow-hidden border border-white/5 relative">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" style={{ backgroundImage: "url('/placeholder-about.jpg')" }} />
              {/* Optional: Add a second image overlay for the BJJ/MMA theme */}
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur p-4 rounded border border-white/10 text-center">
                <p className="font-barlow text-brand font-bold tracking-widest uppercase text-sm">Ofek Okonski</p>
                <p className="text-silver/60 text-xs mt-1">Founder, Okonski Performance</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">
              הסיפור מאחורי הקליניקה
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-8">
              ביצועים הם לא משהו שנולדים איתו. <br className="hidden sm:block" />
              <span className="text-brand-bright">הם משהו שבונים.</span>
            </h2>

            <div className="space-y-4 text-silver/80 text-sm sm:text-base leading-relaxed">
              <p>
                אני אופק אוקונסקי.
              </p>
              <p>
                כשהייתי צעיר הייתי ילד חסר ביטחון, כזה שלא תמיד האמין בעצמו או במה שהוא מסוגל לעשות. 
                הכניסה לעולם אמנויות הלחימה שינתה עבורי הרבה יותר מהיכולת להילחם. היא הכניסה לחיים שלי משמעת, התמדה, התמודדות עם קושי והבנה שאפשר לבנות יכולת וביטחון לאורך זמן.
              </p>
              <p>
                מאז עברו כ-15 שנה. הפכתי לבעל חגורה שחורה בג'יוג'יטסו ברזילאי, נכנסתי לעולם ה-MMA והפכתי גם למדריך. 
                במקביל בניתי מסלול מקצועי ואקדמי: שני תארים וקריירה של שנים בניהול פרויקטים בעולם הטכנולוגיה.
              </p>
              <p>
                לאורך הדרך הבנתי שהעקרונות שעזרו לי להתפתח באמנויות הלחימה הם אותם עקרונות שפגשתי שוב ושוב גם בקריירה ובחיים: עקביות, ניהול נכון של עומס, הסתגלות, משמעת והיכולת להשתפר לאורך זמן.
              </p>
              <p className="font-bold text-white border-r-2 border-brand pr-4 my-6 py-2">
                למדתי שביצועים גבוהים הם לא תכונה שנולדים איתה. הם משהו שבונים.
              </p>
              <p>
                מתוך המסע הזה נכנסתי גם לעולם הספורט-תרפיה והתחלתי להעמיק בגוף, בתנועה, בטיפול ובשיקום. וככל שהעמקתי, התחברו עבורי העולמות.
              </p>
              <p>
                הבנתי שהגוף פועל לפי אותו עיקרון: לא מספיק לטפל בו רק כשמשהו משתבש. צריך ללמוד להבין אותו, לתחזק אותו ולבנות את היכולת שלו להתמודד עם הדרישות שאנחנו מציבים בפניו.
              </p>
              <p className="font-bold text-white text-xl mt-6 mb-2">
                מכאן נולדה Okonski Performance.
              </p>
              <p>
                היום זה מתחיל בטיפול, שיקום ותחזוקת הגוף. 
                בהמשך, החזון הוא לבנות הסתכלות רחבה יותר על Performance — גוף, אימון, תזונה, מנטליות וההרגלים שמאפשרים לנו לתפקד ברמה גבוהה לאורך זמן.
              </p>
              <p className="font-bold text-brand-bright text-lg mt-6">
                המטרה שלי היא לעזור לאנשים לבנות את היכולת לדרוש מעצמם יותר.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

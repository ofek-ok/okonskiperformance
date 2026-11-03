"use client";

const pillars = [
  {
    title: "כאב ופציעה",
    topicId: "פציעת ספורט",
    lead: "כשכאב או מגבלה תנועתית עוצרים אותך באימון, בעבודה או בשגרה.",
    points: ["הערכה תפקודית ותנועתית, לא רק של הנקודה שכואבת", "טיפול מותאם אישית להפחתת כאב והורדת עומס", "שיקום אקטיבי לחזרה מלאה לפעילות"],
  },
  {
    title: "תחזוקה והתאוששות",
    topicId: "תחזוקה והתאוששות",
    lead: "כשאין פציעה נקודתית, אבל העומס המצטבר מהאימונים ומהשגרה מכביד על הגוף.",
    points: ["מיפוי עומסים ונקודות תקיעות", "פריקת עומס ושחרור רקמות", "הכנת הגוף לאימון הבא"],
  },
  {
    title: "שיפור תנועה וחוסן",
    topicId: "שיפור תנועה",
    lead: "בניית גוף עמיד, חזק ומשוחרר יותר, שמחזיק לאורך שנים ומונע פציעות עתידיות.",
    points: ["אבחון תנועה, יציבה ודפוסי פיצוי", "הרחבת טווחי תנועה", "בניית עמידות ושליטה בתנועה"],
  },
];

function selectTopic(topicId: string) {
  window.dispatchEvent(new CustomEvent("okonski:select-topic", { detail: topicId }));
}

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-20 sm:py-28 lg:py-32 bg-[#14181F] text-white scroll-mt-20"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14 sm:mb-20 text-right">
          <span className="eyebrow">תחומי טיפול</span>
          <h2 id="who-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
            מה הגוף שלך צריך כרגע?
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            אין פרוטוקול אחד לכולם. ספורטאי עם כתף תפוסה ומנהל עם גב נעול צריכים דברים שונים, ולכן כל טיפול מתחיל ממך.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-white/15 lg:divide-x lg:divide-x-reverse divide-white/15 text-right">
          {pillars.map((p, i) => (
            <article key={p.title} className="py-10 lg:py-12 lg:px-10 first:lg:pr-0 last:lg:pl-0 border-b lg:border-b-0 border-white/15 flex flex-col">
              <span className="text-[#94A3B8] text-sm mb-4">0{i + 1}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{p.title}</h3>
              <p className="text-[#E2E8F0]/85 leading-relaxed mb-6">{p.lead}</p>
              <ul className="space-y-3 text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="border-t border-white/10 pt-3">
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href="#performance-list"
                onClick={() => selectTopic(p.topicId)}
                className="text-white font-semibold text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white self-start"
              >
                הצטרפות לרשימת המתעניינים
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

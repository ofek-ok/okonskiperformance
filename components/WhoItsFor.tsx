interface ServicePillar {
  title: string;
  lead: string;
  example: string;
  steps: {
    num: string;
    title: string;
    desc: string;
  }[];
  cta: string;
}

const pillars: ServicePillar[] = [
  {
    title: "כאב ופציעה",
    lead: "כשכאב או מגבלה תנועתית עוצרים אותך באימון, בעבודה או בשגרה.",
    example: "כאב בכתף בעומס, מגבלה בצוואר ובגב משעות ישיבה, עומס מפרקי או פציעה שמקשה לחזור לפעילות.",
    steps: [
      {
        num: "01",
        title: "בודקים ומאתרים את שורש הבעיה",
        desc: "הערכה תפקודית ותנועתית, ולא רק מבט על הנקודה שכואבת.",
      },
      {
        num: "02",
        title: "טיפול מותאם אישית",
        desc: "שילוב טכניקות מנואליות וכלים מתקדמים בספורטתרפיה להפחתת כאב והורדת עומס.",
      },
      {
        num: "03",
        title: "שיקום אקטיבי",
        desc: "בניית תנועה נכונה ותרגול מותאם כדי לחזור לפעילות מלאה ולמנוע הישנות.",
      },
    ],
    cta: "שריון עדיפות לטיפול בפציעה או כאב",
  },
  {
    title: "תחזוקה והתאוששות",
    lead: "כשאין פציעה נקודתית, אבל העומס המצטבר מהשגרה ומהאימונים מתחיל להכביד על הגוף.",
    example: "נוקשות בגב ובצוואר מישיבה ממושכת, תחושת שחיקה ועייפות שרירית בין אימונים, או גוף שמרגיש \"כבד\" ומוגבל.",
    steps: [
      {
        num: "01",
        title: "מיפוי עומסים ונקודות תקיעות",
        desc: "בדיקת תנועתיות מהירה לאיתור האזורים שסופגים את מירב העומס.",
      },
      {
        num: "02",
        title: "פריקת עומס ושיפור זרימה",
        desc: "שילוב עבודה מנואלית עמוקה וטכניקות התאוששות בספורטתרפיה לשחרור רקמות ושרירים.",
      },
      {
        num: "03",
        title: "החזרה לאיפוס",
        desc: "הכנת הגוף לאימון הבא והקניית הרגלי תנועה קלים לשמירה על תפקוד יומיומי גבוה.",
      },
    ],
    cta: "שריון עדיפות למעטפת התאוששות ותחזוקה",
  },
  {
    title: "שיפור תנועה, יציבה וחוסן גופני",
    lead: "לבנות גוף עמיד, חזק ומשוחרר יותר — שעומד בדרישות של שגרה אינטנסיבית, מונע פציעות עתידיות ומחזיק לאורך שנים.",
    example: "שיפור טווחי תנועה ויציבה שנשחקים בשעות עבודה ממושכות, חיזוק נקודות תורפה לפני שהן מתפתחות לפציעה, ושדרוג הגמישות והעוצמה באימונים.",
    steps: [
      {
        num: "01",
        title: "אבחון תנועה, יציבה ועומסים",
        desc: "זיהוי נקודות תורפה ודפוסי פיצוי שמייצרים עומס מפרקי ושחיקה מצטברת.",
      },
      {
        num: "02",
        title: "פתיחת טווחי תנועה ושחרור רקמות",
        desc: "עבודה מנואלית מתקדמת להרחבת חופש התנועה והפחתת נוקשות בגב, בצוואר ובמפרקים.",
      },
      {
        num: "03",
        title: "הטמעה תנועתית ובניית עמידות",
        desc: "תרגול מדויק לשליטה בטווחים החדשים, ששומר על הגוף לאורך זמן ומשתלב בקלות בשגרה עמוסה.",
      },
    ],
    cta: "שריון עדיפות לתהליך שיפור תנועה וחוסן",
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-16 sm:py-24 lg:py-32 bg-steelDark relative border-b border-white/[0.06] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Editorial Eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[2px] rounded-full bg-logoIce/70" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-silverOff tracking-wide">
              תחומי טיפול
            </span>
          </div>
          <h2
            id="who-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5"
          >
            מה הגוף שלך <span className="text-silverOff">צריך כרגע?</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            אין פתרון אחד שמתאים לכולם. המענה ב־Okonski Performance נבנה בהתאמה אישית לעוסקים בספורט או לאנשים עם שגרת קריירה אינטנסיבית — לפי הצורך המדויק של הגוף שלך באותה נקודה.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-right items-stretch">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="h-full flex flex-col justify-between p-7 lg:p-8 rounded-3xl bg-neutral-900/45 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.16] shadow-[0_12px_36px_-16px_rgba(0,0,0,0.5)] transition-all duration-300 relative"
            >
              <div className="flex-1 flex flex-col">
                {/* Upper Section: Title, Sub-line, and Field Examples Box */}
                <div className="lg:min-h-[330px] xl:min-h-[285px] flex flex-col justify-between">
                  {/* Card Header (Title + Sub-line) */}
                  <div className="lg:min-h-[150px] xl:min-h-[130px] flex flex-col justify-start">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-neutral-300 leading-relaxed">
                      {pillar.lead}
                    </p>
                  </div>

                  {/* Field Examples Box */}
                  <div className="bg-neutral-950/60 p-4 sm:p-5 rounded-2xl border border-white/[0.06] text-neutral-300 text-sm leading-relaxed min-h-[110px] md:min-h-[100px] lg:min-h-[150px] xl:min-h-[125px] flex flex-col justify-center">
                    <span className="text-silverOff font-semibold block mb-1 text-xs sm:text-sm">לדוגמה:</span>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{pillar.example}</p>
                  </div>
                </div>

                {/* "איך עובדים" Section */}
                <div className="flex-grow flex flex-col justify-between mt-6 pt-6 border-t border-white/[0.07]">
                  <h4 className="text-silverOff text-xs sm:text-sm font-semibold tracking-wide mb-4">
                    איך עובדים
                  </h4>

                  <ul className="space-y-4 flex-grow mb-6 border-r border-white/[0.08] pr-3.5">
                    {pillar.steps.map((step) => (
                      <li
                        key={step.num}
                        className="flex items-start gap-2.5 text-right lg:min-h-[74px] xl:min-h-[58px]"
                      >
                        <span className="font-mono text-logoIce/80 text-xs sm:text-sm tracking-wider shrink-0 mt-0.5 font-semibold">
                          {step.num}.
                        </span>
                        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                          <strong className="text-white font-semibold text-sm">{step.title}</strong> — {step.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In-Card Bottom CTA */}
              <div className="mt-auto pt-5 border-t border-white/[0.07]">
                <a
                  href="#performance-list"
                  className="text-silverOff hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-2 group min-h-[44px]"
                >
                  <span>{pillar.cta}</span>
                  <span className="transition-transform duration-200 group-hover:-translate-x-1 text-logoIce group-hover:text-white">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Section Closing CTA (Bottom Summary Capsule Panel) */}
        <div className="mt-12 sm:mt-14 p-7 sm:p-10 rounded-3xl bg-neutral-900/40 border border-white/[0.08] shadow-[0_12px_36px_-16px_rgba(0,0,0,0.5)] text-center md:text-right max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
            לא בטוח איזה מענה הכי מדויק עבורך כרגע? נתחיל באבחון מקיף במפגש הראשון ונתאים את התהליך בדיוק למצב הגוף שלך.
          </p>
          <a
            href="#performance-list"
            className="bg-white text-black hover:bg-neutral-100 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide shrink-0 w-full md:w-auto shadow-sm active:scale-[0.98]"
          >
            <span>הבטחת מקום בפתיחה</span>
            <span>←</span>
          </a>
        </div>

      </div>
    </section>
  );
}

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
      className="py-16 sm:py-24 lg:py-32 bg-steelDark relative border-b border-neutral-800/60 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <h2
            id="who-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5"
          >
            מה הגוף שלך צריך כרגע?
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
              className="h-full flex flex-col justify-between p-7 lg:p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/70 hover:border-neutral-700/80 transition-colors duration-200 relative"
            >
              <div className="flex-1 flex flex-col">
                {/* Upper Section: Title, Sub-line, and Field Examples Box */}
                <div className="lg:min-h-[345px] xl:min-h-[290px] flex flex-col justify-between">
                  {/* Card Header (Title + Sub-line) */}
                  <div className="lg:min-h-[160px] xl:min-h-[135px] flex flex-col justify-start">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-400 leading-relaxed">
                      {pillar.lead}
                    </p>
                  </div>

                  {/* Field Examples Box */}
                  <div className="bg-neutral-950/50 p-4 rounded-xl border border-neutral-800/40 text-neutral-300 text-sm leading-relaxed min-h-[110px] md:min-h-[100px] lg:min-h-[155px] xl:min-h-[125px] flex flex-col justify-center">
                    <span className="text-white/90 font-semibold block mb-1">לדוגמה:</span>
                    <p>{pillar.example}</p>
                  </div>
                </div>

                {/* "איך עובדים" Section */}
                <div className="flex-grow flex flex-col justify-between mt-6 pt-6 border-t border-neutral-800/50">
                  <h4 className="text-neutral-200 text-sm font-semibold tracking-wide mb-4">
                    איך עובדים
                  </h4>

                  <ul className="space-y-4 flex-grow mb-6">
                    {pillar.steps.map((step) => (
                      <li
                        key={step.num}
                        className="flex items-start gap-2.5 text-right lg:min-h-[76px] xl:min-h-[58px]"
                      >
                        <span className="text-neutral-500 font-mono text-xs tracking-wider shrink-0 mt-0.5">
                          {step.num}
                        </span>
                        <span className="text-neutral-700 text-xs select-none">|</span>
                        <p className="text-xs md:text-sm text-neutral-400 leading-normal">
                          <strong className="text-white font-medium text-sm">{step.title}</strong> — {step.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In-Card Bottom CTA */}
              <div className="mt-auto pt-6 border-t border-neutral-800/40">
                <a
                  href="#performance-list"
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-1.5 group min-h-[44px]"
                >
                  <span className="transition-transform duration-200 group-hover:-translate-x-1 text-neutral-400 group-hover:text-white">←</span>
                  <span>{pillar.cta}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Section Closing CTA (Bottom Summary Box) */}
        <div className="mt-12 p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
            לא בטוח איזה מענה הכי מדויק עבורך כרגע? נתחיל באבחון מקיף במפגש הראשון ונתאים את התהליך בדיוק למצב הגוף שלך.
          </p>
          <a
            href="#performance-list"
            className="bg-white text-black hover:bg-neutral-200 font-semibold px-7 py-3 rounded-xl transition-all shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2.5 text-sm sm:text-base tracking-wide"
          >
            <span>הבטחת מקום בפתיחה</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

"use client";

interface ServicePillar {
  title: string;
  topicId: string;
  lead: string;
  example: string;
  steps: {
    num: string;
    title: string;
    desc: string;
  }[];
}

const pillars: ServicePillar[] = [
  {
    title: "כאב ופציעה",
    topicId: "פציעת ספורט",
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
  },
  {
    title: "תחזוקה והתאוששות",
    topicId: "תחזוקה והתאוששות",
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
  },
  {
    title: "שיפור תנועה, יציבה וחוסן גופני",
    topicId: "שיפור תנועה",
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
  },
];

function selectTopic(topicId: string) {
  window.dispatchEvent(new CustomEvent("okonski:select-topic", { detail: topicId }));
}

function PillarDetails({ pillar }: { pillar: ServicePillar }) {
  return (
    <>
      <div className="pt-4 mt-4 border-t border-white/10 text-sm leading-relaxed">
        <span className="text-white font-semibold block mb-1 text-xs sm:text-sm">לדוגמה:</span>
        <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">{pillar.example}</p>
      </div>

      <div className="flex-grow flex flex-col justify-between mt-5 pt-5 border-t border-white/10">
        <h4 className="text-white text-xs sm:text-sm font-semibold mb-3.5">
          איך עובדים:
        </h4>
        <ul className="space-y-3.5 mb-6 flex-grow">
          {pillar.steps.map((step) => (
            <li key={step.num} className="flex items-baseline gap-3">
              <span className="font-mono tabular-nums text-[#A7AAB4] text-xs shrink-0">
                {step.num}
              </span>
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong className="text-white font-semibold">{step.title} — </strong>
                <span className="text-[#A7AAB4]">{step.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-16 sm:py-24 lg:py-28 bg-[#12151C] border-b border-white/10 scroll-mt-16"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading without AI eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <h2
            id="who-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            מה הגוף שלך צריך כרגע?
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base lg:text-lg leading-relaxed">
            אין פרוטוקול אחד לכולם. ספורטאי עם כתף תפוסה ומנהל עם גב נעול צריכים דברים שונים, ולכן כל טיפול מתחיל ממך.
          </p>
        </div>

        {/* 3 Columns — Clean Flat Structure, No Nested Cards, No Icon Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-right items-stretch">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="m-card h-full flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#191D26] border border-white/10"
            >
              <div className="flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#A7AAB4] leading-relaxed">
                    {pillar.lead}
                  </p>
                </div>

                {/* Desktop: details visible */}
                <div className="hidden lg:flex flex-col flex-1">
                  <PillarDetails pillar={pillar} />
                </div>

                {/* Mobile: collapsible */}
                <details className="lg:hidden group mt-4">
                  <summary className="list-none cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-white min-h-[44px] focus:outline-none">
                    <span className="group-open:hidden">ראה איך זה עובד</span>
                    <span className="hidden group-open:inline">הסתר פירוט</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div>
                    <PillarDetails pillar={pillar} />
                  </div>
                </details>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <a
                  href="#performance-list"
                  onClick={() => selectTopic(pillar.topicId)}
                  className="text-white hover:text-[#A7AAB4] text-sm font-semibold inline-flex items-center justify-between w-full gap-2 group py-1 transition-colors"
                >
                  <span>זה אני, שריינו לי מקום</span>
                  <span className="transition-transform duration-150 group-hover:-translate-x-1 text-[#2F5E9E] shrink-0">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-right">
          <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed max-w-xl">
            <strong className="text-white font-semibold">לא בטוח לאיזה מסלול אתה שייך?</strong> בדיוק בשביל זה יש מפגש ראשון: קודם אבחון, ורק אחר כך תוכנית.
          </p>
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#264E86] text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 text-sm sm:text-base shrink-0 w-full md:w-auto"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}

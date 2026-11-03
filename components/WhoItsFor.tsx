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
      {/* Field Examples Box */}
      <div className="bg-[#F5F5F2] p-4 sm:p-5 rounded-sm border border-[#A8B0B7]/25 text-[#22272C] text-sm leading-relaxed lg:min-h-[140px] xl:min-h-[120px] flex flex-col justify-center">
        <span className="text-[#142333] font-semibold block mb-1 text-xs sm:text-sm">לדוגמה:</span>
        <p className="text-[13px] sm:text-sm text-[#49677F] leading-relaxed">{pillar.example}</p>
      </div>

      {/* "איך עובדים" Section */}
      <div className="flex-grow flex flex-col justify-between mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#A8B0B7]/25">
        <h4 className="text-[#142333] text-xs sm:text-sm font-semibold tracking-wide mb-3 sm:mb-4">
          איך עובדים
        </h4>

        <ul className="space-y-3.5 sm:space-y-4 flex-grow mb-5 sm:mb-6 border-r border-[#A8B0B7]/30 pr-3.5">
          {pillar.steps.map((step) => (
            <li
              key={step.num}
              className="flex items-start gap-2.5 text-right lg:min-h-[70px] xl:min-h-[56px]"
            >
              <span className="font-mono text-[#49677F] text-xs sm:text-sm tracking-wider shrink-0 mt-0.5 font-semibold">
                {step.num}.
              </span>
              <p className="text-[13px] sm:text-sm text-[#6B7280] leading-relaxed">
                <strong className="text-[#22272C] font-semibold text-[13.5px] sm:text-sm">{step.title}</strong> — {step.desc}
              </p>
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
      className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F2] relative border-b border-[#A8B0B7]/25 scroll-mt-16"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <span className="eyebrow">תחומי טיפול</span>
          <h2
            id="who-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#22272C] leading-tight mb-4 sm:mb-5 tracking-tight"
          >
            מה הגוף שלך <span className="text-[#49677F]">צריך כרגע?</span>
          </h2>
          <p className="text-[#49677F] text-sm sm:text-base lg:text-lg leading-relaxed">
            אין פרוטוקול אחד לכולם. ספורטאי עם כתף תפוסה ומנהל עם גב נעול צריכים דברים שונים, ולכן כל טיפול מתחיל ממך.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-right items-stretch">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="h-full flex flex-col justify-between p-6 sm:p-7 lg:p-8 rounded-sm bg-white border border-[#A8B0B7]/30 shadow-[0_2px_12px_rgba(20,35,51,0.03)] hover:border-[#142333]/50 transition-colors duration-200"
            >
              <div className="flex-1 flex flex-col">
                {/* Card Header (Title + Sub-line) */}
                <div className="lg:min-h-[140px] xl:min-h-[120px] flex flex-col justify-start">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#22272C] mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-sm text-[#49677F] leading-relaxed">
                    {pillar.lead}
                  </p>
                </div>

                {/* Desktop: details always visible */}
                <div className="hidden lg:flex flex-col flex-1 mt-0">
                  <PillarDetails pillar={pillar} />
                </div>

                {/* Mobile / Tablet: details collapsed in an accordion */}
                <details className="lg:hidden group mt-4">
                  <summary className="list-none cursor-pointer inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#142333] min-h-[44px] focus:outline-none">
                    <span className="group-open:hidden">ראה איך זה עובד</span>
                    <span className="hidden group-open:inline">הסתר פירוט</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3">
                    <PillarDetails pillar={pillar} />
                  </div>
                </details>
              </div>

              {/* In-Card Bottom CTA */}
              <div className="mt-auto pt-4 sm:pt-5 border-t border-[#A8B0B7]/25">
                <a
                  href="#performance-list"
                  onClick={() => selectTopic(pillar.topicId)}
                  className="text-[#142333] hover:text-[#49677F] text-[13.5px] sm:text-sm font-medium inline-flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2 group transition-colors"
                >
                  <span>זה אני, שריינו לי מקום</span>
                  <span className="transition-transform duration-200 group-hover:-translate-x-1 shrink-0">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Section Closing CTA */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-sm bg-white border border-[#A8B0B7]/30 shadow-[0_2px_12px_rgba(20,35,51,0.03)] text-right max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[#49677F] text-sm sm:text-base leading-relaxed max-w-xl">
            <strong className="text-[#22272C] font-semibold">לא בטוח לאיזה מסלול אתה שייך?</strong> בדיוק בשביל זה יש מפגש ראשון: קודם אבחון, ורק אחר כך תוכנית.
          </p>
          <a
            href="#performance-list"
            className="bg-[#142333] hover:bg-[#22272C] text-[#F5F5F2] font-medium px-6 py-3 rounded-sm transition-colors inline-flex items-center justify-center gap-2 text-sm tracking-wide shrink-0 w-full md:w-auto"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>

      </div>
    </section>
  );
}

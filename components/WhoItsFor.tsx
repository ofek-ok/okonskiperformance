"use client";

interface ServicePillar {
  title: string;
  subtitleEn: string;
  topicId: string;
  lead: string;
  example: string;
  icon: "rehab" | "recovery" | "resilience";
  steps: {
    num: string;
    title: string;
    desc: string;
  }[];
}

const pillars: ServicePillar[] = [
  {
    title: "כאב ופציעה",
    subtitleEn: "REHAB & RECOVERY",
    topicId: "פציעת ספורט",
    icon: "rehab",
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
    subtitleEn: "PERFORMANCE MAINTENANCE",
    topicId: "תחזוקה והתאוששות",
    icon: "recovery",
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
    subtitleEn: "LONG-TERM RESILIENCE",
    topicId: "שיפור תנועה",
    icon: "resilience",
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

function PillarIcon({ type }: { type: ServicePillar["icon"] }) {
  if (type === "rehab") {
    return (
      <svg className="w-6 h-6 text-[#2F5E9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-14h8m-9 5h10m-8 5h6" />
      </svg>
    );
  }
  if (type === "recovery") {
    return (
      <svg className="w-6 h-6 text-[#2F5E9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4M7 7v10m10-10v10m4-7v4M7 12h10" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-[#2F5E9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16v-4m5 4V8m5 8V4" />
    </svg>
  );
}

function selectTopic(topicId: string) {
  window.dispatchEvent(new CustomEvent("okonski:select-topic", { detail: topicId }));
}

function PillarDetails({ pillar }: { pillar: ServicePillar }) {
  return (
    <>
      {/* Field Examples Box with Performance Blue Accent Bar */}
      <div className="bg-[#0B0B0F] p-4 rounded-2xl border border-white/[0.07] border-r-2 border-r-[#2F5E9E] text-sm leading-relaxed lg:min-h-[145px] xl:min-h-[125px] flex flex-col justify-center">
        <span className="text-white font-bold block mb-1 text-xs sm:text-sm">לדוגמה:</span>
        <p className="text-[13px] sm:text-sm text-[#A7AAB4] leading-relaxed">{pillar.example}</p>
      </div>

      {/* "איך עובדים" Section */}
      <div className="flex-grow flex flex-col justify-between mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/[0.08]">
        <h4 className="text-white text-xs sm:text-sm font-bold tracking-wide mb-3.5 sm:mb-4">
          איך עובדים:
        </h4>
        <ul className="space-y-3.5 sm:space-y-4 mb-5 sm:mb-6 flex-grow">
          {pillar.steps.map((step) => (
            <li key={step.num} className="flex items-start gap-3">
              <span className="font-mono tabular-nums text-[#2F5E9E] bg-[#2F5E9E]/15 border border-[#2F5E9E]/35 px-2 py-0.5 rounded-md text-xs tracking-wider shrink-0 mt-0.5 font-bold">
                {step.num}
              </span>
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong className="text-white font-semibold block mb-0.5">{step.title}</strong>
                <span className="text-[#A7AAB4] text-[13px]">{step.desc}</span>
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
      className="py-16 sm:py-24 lg:py-32 bg-[#0B0B0F] relative border-b border-white/[0.08] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[3px] rounded-full bg-[#2F5E9E]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-[#A7AAB4] tracking-wide">
              תחומי טיפול
            </span>
          </div>
          <h2
            id="who-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5"
          >
            מה הגוף שלך <span className="text-[#2F5E9E]">צריך כרגע?</span>
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base lg:text-lg leading-relaxed">
            אין פרוטוקול אחד לכולם. ספורטאי עם כתף תפוסה ומנהל עם גב נעול צריכים דברים שונים, ולכן כל טיפול מתחיל ממך.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 text-right items-stretch">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="m-card h-full flex flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-3xl bg-[#11131A] border border-[#2F5E9E]/25 shadow-[0_16px_42px_-16px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              {/* Top Performance Blue Bar */}
              <span className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-[#2F5E9E] via-[#2F5E9E]/60 to-transparent" aria-hidden="true" />

              <div className="flex-1 flex flex-col">
                {/* Card Header */}
                <div className="lg:min-h-[165px] xl:min-h-[150px] flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#2F5E9E]/15 border border-[#2F5E9E]/35 flex items-center justify-center">
                      <PillarIcon type={pillar.icon} />
                    </div>
                    <span className="font-jakarta text-[11px] font-bold tracking-[0.16em] text-[#A7AAB4] uppercase" dir="ltr">
                      {pillar.subtitleEn}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-sm font-medium text-[#A7AAB4] leading-relaxed">
                    {pillar.lead}
                  </p>
                </div>

                {/* Desktop: details always visible */}
                <div className="hidden lg:flex flex-col flex-1 mt-3">
                  <PillarDetails pillar={pillar} />
                </div>

                {/* Mobile / Tablet: details collapsed in an accordion */}
                <details className="lg:hidden group mt-4">
                  <summary className="list-none cursor-pointer inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#2F5E9E] min-h-[44px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2F5E9E] rounded">
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
              <div className="mt-auto pt-4 sm:pt-5 border-t border-white/[0.08]">
                <a
                  href="#performance-list"
                  onClick={() => selectTopic(pillar.topicId)}
                  className="m-btn text-white text-[13.5px] sm:text-sm font-semibold inline-flex items-center justify-between w-full gap-2 group min-h-[46px] px-4 py-2.5 rounded-xl bg-[#2F5E9E]/15 hover:bg-[#2F5E9E] border border-[#2F5E9E]/35"
                >
                  <span>זה אני, שריינו לי מקום</span>
                  <span className="transition-transform duration-150 group-hover:-translate-x-1 text-white shrink-0">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Section Closing CTA */}
        <div className="mt-12 sm:mt-14 p-7 sm:p-10 rounded-3xl bg-gradient-to-l from-[#142238] via-[#11131A] to-[#11131A] border border-[#2F5E9E]/40 shadow-[0_16px_44px_-16px_rgba(47,94,158,0.28)] text-center md:text-right max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed max-w-xl">
            <strong className="text-white font-bold">לא בטוח לאיזה מסלול אתה שייך?</strong> בדיוק בשביל זה יש מפגש ראשון: קודם אבחון, ורק אחר כך תוכנית.
          </p>
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#386CB3] text-white border border-white/15 font-bold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide shrink-0 w-full md:w-auto shadow-[0_8px_24px_-4px_rgba(47,94,158,0.65)]"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

const problems = [
  {
    num: "01",
    title: "כאב כרוני טורדני",
    desc: "צוואר תפוס, גב תחתון, שכמות או ברכיים שלא נותנים לך שקט.",
  },
  {
    num: "02",
    title: "פציעות ספורט חוזרות",
    desc: "תחושה שהגוף לא מחזיק את העומס באימונים וחוזר לאותה נקודת שבר.",
  },
  {
    num: "03",
    title: "שחיקה מנטלית וגופנית",
    desc: "ישיבה ממושכת וימי עבודה תובעניים שמשאירים אותך כבד ונטול אנרגיה.",
  },
];

interface TreatmentTrack {
  title: string;
  subtitleEn: string;
  topicId: string;
  audience: string;
  goal: string;
  outcome: string;
}

const tracks: TreatmentTrack[] = [
  {
    title: "מסלול כאב ופציעה",
    subtitleEn: "Pain & Rehabilitation",
    topicId: "כאב ופציעה",
    audience: "מתמודדים עם פציעה אקוטית, כאבים כרוניים או הגבלה בתנועה.",
    goal: "איתור שורש הבעיה, הפחתת כאב מיידית והחזרת טווחי תנועה מלאים.",
    outcome: "חזרה בטוחה ומהירה לשגרה ולאימונים בלי פחד מתנועה.",
  },
  {
    title: "מסלול תחזוקה והתאוששות",
    subtitleEn: "Maintenance & Recovery",
    topicId: "תחזוקה והתאוששות",
    audience: "ספורטאים, מתאמנים בעצימות גבוהה ואנשי קריירה תחת סטרס מתמיד.",
    goal: "פינוק אקטיבי לגוף, שחרור הידבקויות שריריות והורדת עומסים מצטברים.",
    outcome: "מניעת פציעות עתידיות, שיפור איכות השינה והתאוששות מהירה יותר בין אימונים.",
  },
  {
    title: "מסלול תנועה ואריכות ימים",
    subtitleEn: "Movement & Longevity",
    topicId: "תנועה ויציבה",
    audience: "מי שרוצה גוף חזק, גמיש ומתפקד לאורך שנים קדימה.",
    goal: "שיפור יציבה, בניית חוסן מפרקי וארגונומיה נכונה בשעות העבודה.",
    outcome: "תנועה חלקה וקלילה, יציבה זקופה ורמת אנרגיה גבוהה לאורך כל היום.",
  },
];

function selectTopic(topicId: string) {
  window.dispatchEvent(new CustomEvent("okonski:select-topic", { detail: topicId }));
}

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-16 sm:py-24 bg-[#0E1116] border-b border-white/[0.08] scroll-mt-16"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        {/* SECTION 2: THE PROBLEM (הכאב והתסכול) */}
        <div className="pb-16 mb-16 border-b border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight mb-4">
              הגוף מאותת לך, ואתה ממשיך ללחוץ על הגז?
            </h2>
            <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed">
              בין שעות ארוכות מול המסך, ישיבה שפוגעת ביציבה, ועומסים של אימונים אינטנסיביים – הגוף מתחיל לצבור עייפות, נוקשות ודלקות. רוב האנשים מחכים שהכאב ישבית אותם, או מסתפקים בטיפול רגעי שמשחרר לשעתיים בלבד.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div
                key={problem.num}
                className="pt-6 border-t border-white/[0.08]"
              >
                <span className="font-mono tabular-nums text-xs text-[#2F5E9E] block mb-2">
                  {problem.num}
                </span>
                <h3 className="text-lg sm:text-xl font-medium text-[#F4F6F9] mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-[#A7AAB4] leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: THE METHOD & TRACKS (מסלולי הטיפול) */}
        <div>
          <div className="max-w-3xl mb-12">
            <h2
              id="who-heading"
              className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight mb-4"
            >
              3 מסלולים ממוקדים. יעד אחד ברור.
            </h2>
            <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed">
              טיפול מותאם אישית שמשלב דיקור מערבי (Dry Needling), שחרור מנואלי, כוסות רוח ותרגילי יציבה ותנועה.
            </p>
          </div>

          {/* 3 Track Cards — Radius 12px (rounded-xl), Spacing 24px (gap-6, p-6) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="m-card h-full flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#151A22] border border-white/[0.08]"
              >
                <div>
                  <div className="pb-6 mb-6 border-b border-white/[0.08]">
                    <p className="text-xs font-mono text-[#A7AAB4] mb-1" dir="ltr">
                      {track.subtitleEn}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-medium text-[#F4F6F9]">
                      {track.title}
                    </h3>
                  </div>

                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs font-medium text-[#F4F6F9] mb-1">
                        קהל יעד:
                      </dt>
                      <dd className="text-sm text-[#A7AAB4] leading-relaxed">
                        {track.audience}
                      </dd>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08]">
                      <dt className="text-xs font-medium text-[#F4F6F9] mb-1">
                        המטרה:
                      </dt>
                      <dd className="text-sm text-[#A7AAB4] leading-relaxed">
                        {track.goal}
                      </dd>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08]">
                      <dt className="text-xs font-medium text-[#F4F6F9] mb-1">
                        התוצאה:
                      </dt>
                      <dd className="text-sm text-[#F4F6F9]/90 leading-relaxed">
                        {track.outcome}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <a
                    href="#performance-list"
                    onClick={() => selectTopic(track.topicId)}
                    className="text-[#F4F6F9] hover:text-[#A7AAB4] text-sm font-medium inline-flex items-center justify-between w-full gap-2 py-1"
                  >
                    <span>בחירת מסלול ושריון מקום</span>
                    <span className="text-[#2F5E9E] shrink-0">←</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Closing Bar with Quiet Secondary Button */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed max-w-xl">
              <strong className="text-[#F4F6F9] font-medium">עדיין לא בטוח לאיזה מסלול אתה שייך?</strong> מתחילים באבחון ושיחת תיאום קצרה כדי להתאים את המסלול המדויק עבורך.
            </p>
            <a
              href="#performance-list"
              onClick={() => selectTopic("עדיין לא בטוח")}
              className="btn-secondary shrink-0 w-full md:w-auto"
            >
              <span>שריון קדימות בתורים</span>
              <span>←</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    title: "כאב ופציעה",
    lead: "כשמשהו כואב, מגביל או מפריע לך לעשות את מה שאתה רגיל לעשות.",
    example: "כאב בכתף בזמן אימון, אי־נוחות בגב במהלך יום העבודה או מגבלה בתנועה שמקשה עליך לחזור לפעילות.",
    details: "נתחיל בהבנת התסמינים והמגבלות, נבצע הערכה בהתאם לצורך ונתאים את העבודה הגופנית לממצאים ולמטרה שלך.",
    accent: "from-red-500/80 via-red-500/40 to-transparent",
    iconColor: "text-red-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "תחזוקה והתאוששות",
    lead: "לא צריך לחכות לפציעה כדי לטפל בגוף.",
    example: "שבועות עמוסים באימונים, שעות ארוכות מול מחשב או שגרה שמשלבת עבודה אינטנסיבית ופעילות גופנית.",
    details: "נבחן את העומסים, את התחושות בגוף ואת הצורך בטיפול, בתנועה ובהתאוששות. המטרה היא למצוא מענה מתאים לשגרה שלך, גם כשאין פציעה קיימת.",
    accent: "from-logoIce via-logoBlue to-transparent",
    iconColor: "text-logoIce",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "שיפור יכולת",
    lead: "כשיש לך מטרה גופנית שאתה רוצה לעבוד עליה.",
    example: "למשל, לשפר טווח תנועה שמגביל אותך בתרגיל מסוים, לעבוד על תנועה שמרגישה נוקשה או להתמודד טוב יותר עם הדרישות של הפעילות שלך.",
    details: "נגדיר מטרה ברורה, נבחן מה מגביל אותך ונשלב טיפול ותרגול בהתאם לצורך.",
    accent: "from-emerald-400 via-emerald-600 to-transparent",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-24 sm:py-32 bg-steelDark relative border-b border-white/[0.06] scroll-mt-24" aria-labelledby="who-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <h2 id="who-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            מה הגוף שלך צריך כרגע?
          </h2>
          <p className="text-silverMuted text-base sm:text-lg leading-relaxed mb-3">
            יש מי שמגיע בגלל כאב שמפריע לו להתאמן או לתפקד. אחרים מרגישים את העומס המצטבר של השגרה, ויש מי שרוצה לעבוד על יכולת גופנית מסוימת.
          </p>
          <p className="text-silverOff font-semibold text-sm sm:text-base">
            Okonski Performance מציעה טיפול אישי לגברים בוגרים העוסקים בספורט או חיים בשגרה תובענית, בהתאם לצורך ולמטרה שלהם.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-right">
          {audiences.map((a) => (
            <article
              key={a.title}
              className="card-steel rounded-2xl p-7 sm:p-8 relative flex flex-col justify-between"
            >
              {/* Subtle accent bar */}
              <div className={`absolute top-0 right-6 left-6 h-[2px] bg-gradient-to-l ${a.accent}`} />
              
              <div>
                <div className={`w-12 h-12 rounded-xl bg-steelBase border border-white/10 flex items-center justify-center ${a.iconColor} mb-6 shadow-md`}>
                  {a.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{a.title}</h3>
                <p className="text-sm font-semibold text-silverOff mb-4 leading-snug">
                  {a.lead}
                </p>
                <div className="p-4 rounded-xl bg-charcoalDark/70 border border-white/[0.08] text-xs text-silverMuted leading-relaxed mb-4">
                  <strong className="text-white font-semibold">לדוגמה:</strong> {a.example}
                </div>
                <p className="text-xs text-silverMuted leading-relaxed">
                  {a.details}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <a
                  href="#treatment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-logoIce hover:text-white transition-colors"
                >
                  <span>פירוט המפגש הראשון</span>
                  <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-right">
          <a
            href="#treatment"
            className="inline-flex items-center gap-2 text-logoIce hover:text-white text-sm font-bold transition-colors"
          >
            <span>מה כולל הטיפול?</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}


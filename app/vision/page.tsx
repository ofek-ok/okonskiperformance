import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CancellationCalculator from "@/components/CancellationCalculator";

export const metadata: Metadata = {
  title: "חזון ומדיניות ביטול | Okonski Performance",
  description:
    "החזון הטיפולי שלנו ב-Okonski Performance, חמשת העקרונות שמנחים כל טיפול, ומדיניות ביטול והגעה לטיפולים.",
};

const VISION_PRINCIPLES = [
  {
    title: "האדם, לא רק האזור הכואב",
    description:
      "טיפול איכותי מתחיל בהבנה מעמיקה של מי שמולנו – אורח החיים, שגרת האימונים והעבודה, המטרות והגורמים שמשפיעים על הכאב.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "ידע קליני ומדעי התנועה",
    description:
      "אנטומיה, פיזיולוגיה וביומכניקה, לצד אבחון תנועתי מדויק וגישה מבוססת ראיות שמתעדכנת כל הזמן.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "גוף, עומס והתאוששות יחד",
    description:
      "חיבור מלא בין העומס הפיזי, שגרת היומיום, רמת המתח ואיכות ההתאוששות – תוך הקשבה מלאה ותקשורת בריאה בגובה העיניים.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "תוכנית אישית",
    description:
      "כל תוכנית טיפול, שיקום ושיפור יכולת נבנית לפי המצב, המטרות והצרכים שלכם, ומתעדכנת באופן שוטף לאורך הדרך.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "כלים לטווח ארוך",
    description:
      "המטרה היא לא רק להקל נקודתית, אלא לשפר את איכות התנועה, לבנות חוסן גופני ולתת לכם כלים לשמור על התוצאות לאורך זמן.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const ACCOMPANIMENT_TAGS = [
  "כאב אקוטי או כרוני",
  "פציעות ספורט ואימון",
  "עומס מישיבה וקריירה תובענית",
  "חזרה לפעילות גופנית מלאה",
  "מניעת פציעות חוזרות ושיפור ביצועים",
];

const LATE_AND_ARRIVAL_RULES = [
  {
    title: "איחור של יותר מ־10 דקות",
    description:
      "זמן האיחור יקוזז מזמן הטיפול: הטיפול יסתיים בשעה שנקבעה מראש, והמחיר לא ישתנה – כדי שהמטופל הבא לא ימתין.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "איחור של יותר מ־20 דקות בלי הודעה",
    description: "התור יבוטל ויחויב במחיר המלא, כמו אי־הגעה.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "אי־הגעה",
    description:
      "אחרי אי־הגעה לא נוכל לקבוע תורים נוספים עד שהתשלום על הטיפול שהוחמץ יוסדר. חוב שלא יוסדר בתוך זמן סביר עלול לעבור לגבייה כחוק.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "ביטול ביוזמת הקליניקה",
    description:
      "אם אנחנו נאלצים לבטל או להזיז טיפול – אין שום חיוב, ונתאם איתכם מועד חלופי בעדיפות עליונה ובהקדם.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "איך מבטלים או מזיזים",
    description:
      "בהודעת וואטסאפ או בשיחה ישירה ל־055-5172571 מול אופק. מועד ההודעה נחשב לפי השעה שבה התקבלה.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
];

export default function VisionAndPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoalDark text-silverOff">
      <Navbar />

      <main className="flex-grow">
        {/* =====================================================
            HERO HEADER
           ===================================================== */}
        <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#0E1520] via-charcoalDark to-charcoalDark">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(125,184,232,0.12)_0%,_transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-logoIce text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6">
              חזון ומדיניות
            </span>

            <h1 className="text-[28px] xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-4 sm:mb-5 text-balance">
              הבית לטיפול בכאב,{" "}
              <span className="text-logoIce">שיקום וביצועים</span>
            </h1>

            <p className="text-sm sm:text-lg text-silver max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-8">
              מה מנחה אותנו ב־Okonski Performance בכל טיפול – ומה חשוב לדעת לפני שמגיעים.
            </p>

            {/* Quick-Jump Section Pills */}
            <div className="grid grid-cols-2 sm:flex items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
              <a
                href="#vision"
                className="bg-white text-black hover:bg-neutral-100 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-3 min-h-[44px] rounded-full transition-all duration-200 shadow-sm active:scale-[0.98] inline-flex items-center justify-center"
              >
                החזון שלנו
              </a>
              <a
                href="#policy"
                className="bg-white/[0.07] hover:bg-white/[0.14] text-white border border-white/15 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-3 min-h-[44px] rounded-full transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center"
              >
                מדיניות ביטול והגעה
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 1: OUR VISION (#vision)
           ===================================================== */}
        <section
          id="vision"
          className="py-12 sm:py-24 border-b border-white/[0.06] scroll-mt-20 sm:scroll-mt-24"
          aria-labelledby="vision-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            {/* Vision Intro */}
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
              <p className="text-xs sm:text-sm font-bold tracking-wider text-logoIce uppercase mb-2.5 sm:mb-3">
                החזון שלנו
              </p>
              <h2
                id="vision-heading"
                className="text-xl sm:text-4xl font-extrabold text-white leading-snug sm:leading-tight text-balance"
              >
                טיפול איכותי מתחיל בהבנה מעמיקה של האדם שמולנו – ולא רק של האזור הכואב.
              </h2>
            </div>

            {/* 5 Principles Header */}
            <div className="mb-6 sm:mb-8 text-center">
              <h3 className="text-base sm:text-xl font-bold text-silverOff">
                חמישה עקרונות שמלווים כל טיפול
              </h3>
            </div>

            {/* 5 Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
              {VISION_PRINCIPLES.map((principle, idx) => (
                <div
                  key={principle.title}
                  className={`rounded-3xl bg-steelDark/90 border border-white/[0.08] p-5 sm:p-7 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.45)] hover:border-logoIce/30 transition-all duration-300 flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-logoIce/12 border border-logoIce/25 text-logoIce flex items-center justify-center mb-4 sm:mb-5">
                      {principle.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-[13.5px] sm:text-[15px] text-silver leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accompaniment & Mission Block */}
            <div className="rounded-3xl bg-gradient-to-br from-[#131C28] via-steelDark to-[#0E131B] border border-white/[0.1] p-5 sm:p-10 lg:p-12 shadow-[0_18px_45px_-12px_rgba(0,0,0,0.6)]">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-4 sm:mb-5">
                  אנחנו מלווים אתכם לאורך כל הדרך
                </h3>

                {/* Condition / Goal Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-7">
                  {ACCOMPANIMENT_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-xs sm:text-sm font-medium text-silverOff"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[13.5px] sm:text-base text-silver leading-relaxed">
                  במהלך הדרך ליווינו מתאמנים, ספורטאים ואנשי קריירה בהפחתת הכאב, בשיפור התנועה ובחזרה לאימונים, לעבודה ולשגרה – ובעיקר לתחושת ביטחון מלאה בגוף. זו השליחות שמובילה אותנו בכל יום: טיפול מקצועי, מדויק ואישי, מתוך מחויבות אמיתית לבריאות, ליכולת הגופנית ולאיכות החיים של כל מי שפונה אלינו.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION 2: CLINIC CANCELLATION & ARRIVAL POLICY (#policy)
           ===================================================== */}
        <section
          id="policy"
          className="py-12 sm:py-24 border-b border-white/[0.06] bg-[#090B0E] scroll-mt-20 sm:scroll-mt-24"
          aria-labelledby="policy-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            {/* Policy Header */}
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-wider text-logoIce uppercase mb-2.5 sm:mb-3">
                מדיניות הקליניקה
              </p>
              <h2
                id="policy-heading"
                className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3.5 sm:mb-4"
              >
                מדיניות ביטול והגעה לטיפולים
              </h2>
              <p className="text-[13.5px] sm:text-base text-silver leading-relaxed">
                הזמן שנקבע לכם שמור עבורכם בלבד. כשתור מתבטל ברגע האחרון, מטופל אחר שחיכה לו כבר לא יכול להגיע. לכן קבענו כללים פשוטים וברורים:
              </p>
            </div>

            {/* 3 Cancellation Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-5">
              {/* Tier 1: Free */}
              <div className="rounded-3xl bg-steelDark/90 border border-emerald-400/25 p-5 sm:p-7 text-center flex flex-col justify-between shadow-lg">
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-extrabold text-emerald-300 mb-1.5 sm:mb-2">
                    ללא עלות
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white mb-1.5">
                    24 שעות ויותר לפני הטיפול
                  </p>
                  <p className="text-[13px] sm:text-sm text-silver leading-relaxed">
                    ביטול או שינוי מועד בלי חיוב.
                  </p>
                </div>
              </div>

              {/* Tier 2: 50% */}
              <div className="rounded-3xl bg-steelDark/90 border border-amber-400/25 p-5 sm:p-7 text-center flex flex-col justify-between shadow-lg">
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-extrabold text-amber-300 mb-1.5 sm:mb-2">
                    50%
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white mb-1.5">
                    בין 24 ל־15 שעות לפני הטיפול
                  </p>
                  <p className="text-[13px] sm:text-sm text-silver leading-relaxed">
                    חיוב של חצי ממחיר הטיפול.
                  </p>
                </div>
              </div>

              {/* Tier 3: 100% */}
              <div className="rounded-3xl bg-steelDark/90 border border-rose-400/25 p-5 sm:p-7 text-center flex flex-col justify-between shadow-lg">
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-extrabold text-rose-300 mb-1.5 sm:mb-2">
                    100%
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white mb-1.5">
                    פחות מ־15 שעות, או אי־הגעה
                  </p>
                  <p className="text-[13px] sm:text-sm text-silver leading-relaxed">
                    חיוב מלא של מחיר הטיפול.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-silver/75 text-center mb-10">
              החיוב מחושב לפי השעה שבה התקבלה ההודעה שלכם, ביחס למועד הטיפול שנקבע.
            </p>

            {/* Interactive Slider Calculator */}
            <div className="mb-14 sm:mb-16">
              <CancellationCalculator />
            </div>

            {/* Late & Arrival Rules Subsection */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6 text-center sm:text-right">
                איחורים ונהלי הגעה
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {LATE_AND_ARRIVAL_RULES.map((rule, idx) => (
                  <div
                    key={rule.title}
                    className={`rounded-2xl bg-steelDark/80 border border-white/[0.08] p-5 sm:p-6 flex items-start gap-4 ${
                      idx === 4 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-logoIce flex items-center justify-center shrink-0 mt-0.5">
                      {rule.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                        {rule.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-silver leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Empathy Note Card */}
            <div className="rounded-2xl bg-logoIce/10 border border-logoIce/25 p-5 sm:p-6 text-center mb-6">
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                <span className="text-logoIce font-bold ml-1.5" aria-hidden="true">
                  ♡
                </span>
                <strong>קורה לכולם.</strong> מקרים חריגים באמת – מחלה פתאומית, מקרה חירום או מילואים – נשקלים בהבנה מלאה, לפי שיקול דעת הקליניקה. פשוט דברו איתנו.
              </p>
            </div>

            <p className="text-xs text-silver/60 text-center">
              המדיניות חלה על כל הטיפולים ב־Okonski Performance. עודכן לאחרונה: אוקטובר 2026.
            </p>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA SECTION
           ===================================================== */}
        <section className="py-16 sm:py-20 bg-charcoalDark">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-sm sm:text-base text-silver mb-8 max-w-xl mx-auto">
              הבטיחו את מקומכם לקראת הפתיחה או שלחו לנו הודעה ישירה בוואטסאפ לכל שאלה והתייעצות.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="/#performance-list"
                className="w-full sm:w-auto bg-white text-black hover:bg-neutral-100 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_10px_30px_-5px_rgba(255,255,255,0.2)] inline-flex items-center justify-center active:scale-[0.98]"
              >
                הבטחת מקום בפתיחה ←
              </Link>
              <a
                href="https://wa.me/972555172571"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/[0.07] hover:bg-white/[0.14] text-white border border-white/15 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 inline-flex items-center justify-center active:scale-[0.98]"
              >
                שאלה? כתבו לנו בוואטסאפ
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

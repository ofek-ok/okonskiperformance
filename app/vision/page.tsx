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
];

export default function VisionAndPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F2] text-[#22272C]">
      <Navbar />

      <main className="flex-grow">
        {/* =====================================================
            HERO HEADER
           ===================================================== */}
        <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 border-b border-[#A8B0B7]/30 bg-[#FFFFFF]">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center">
            <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold block mb-4">
              חזון ומדיניות
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#22272C] tracking-tight leading-tight mb-4 text-balance">
              הבית לטיפול בכאב,{" "}
              <span className="text-[#49677F]">שיקום וביצועים</span>
            </h1>

            <p className="text-base sm:text-lg text-[#22272C]/75 max-w-2xl mx-auto leading-relaxed mb-8">
              מה מנחה אותנו ב־Okonski Performance בכל טיפול – ומה חשוב לדעת לפני שמגיעים.
            </p>

            {/* Quick-Jump Section Pills */}
            <div className="grid grid-cols-2 sm:flex items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
              <a
                href="#vision"
                className="bg-[#142333] text-[#F5F5F2] hover:bg-[#22272C] font-semibold text-xs sm:text-sm px-6 py-3 min-h-[44px] rounded-sm transition-colors inline-flex items-center justify-center"
              >
                החזון שלנו
              </a>
              <a
                href="#policy"
                className="bg-[#F5F5F2] hover:bg-white text-[#22272C] border border-[#A8B0B7]/40 font-semibold text-xs sm:text-sm px-6 py-3 min-h-[44px] rounded-sm transition-colors inline-flex items-center justify-center"
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
          className="py-16 sm:py-24 border-b border-[#A8B0B7]/30 scroll-mt-20 sm:scroll-mt-24"
          aria-labelledby="vision-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            {/* Vision Intro */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold block mb-2">
                החזון שלנו
              </span>
              <h2
                id="vision-heading"
                className="text-2xl sm:text-4xl font-bold text-[#22272C] leading-snug text-balance"
              >
                טיפול איכותי מתחיל בהבנה מעמיקה של האדם שמולנו – ולא רק של האזור הכואב.
              </h2>
            </div>

            {/* 5 Principles Header */}
            <div className="mb-6 sm:mb-8 text-center">
              <h3 className="text-base sm:text-lg font-bold text-[#22272C]">
                חמישה עקרונות שמלווים כל טיפול
              </h3>
            </div>

            {/* 5 Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
              {VISION_PRINCIPLES.map((principle, idx) => (
                <div
                  key={principle.title}
                  className={`rounded-sm bg-[#FFFFFF] border border-[#A8B0B7]/30 p-6 sm:p-7 shadow-sm transition-colors flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/30 text-[#142333] flex items-center justify-center mb-4">
                      {principle.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#22272C] mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-[#22272C]/75 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accompaniment & Mission Block */}
            <div className="rounded-sm bg-[#FFFFFF] border border-[#A8B0B7]/35 p-6 sm:p-10 shadow-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#22272C] mb-4">
                  אנחנו מלווים אתכם לאורך כל הדרך
                </h3>

                {/* Condition / Goal Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  {ACCOMPANIMENT_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/35 text-xs sm:text-sm font-medium text-[#22272C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#22272C]/80 leading-relaxed">
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
          className="py-16 sm:py-24 border-b border-[#A8B0B7]/30 bg-[#FFFFFF] scroll-mt-20 sm:scroll-mt-24"
          aria-labelledby="policy-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            {/* Policy Header */}
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <h2
                id="policy-heading"
                className="text-2xl sm:text-4xl font-bold text-[#22272C] leading-tight mb-3"
              >
                מדיניות ביטול והגעה לטיפולים
              </h2>
              <p className="text-sm sm:text-base text-[#22272C]/75 leading-relaxed">
                הזמן שנקבע לכם שמור עבורכם בלבד. כשתור מתבטל ברגע האחרון, מטופל אחר שחיכה לו כבר לא יכול להגיע. לכן קבענו כללים פשוטים וברורים:
              </p>
            </div>

            {/* 3 Cancellation Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {/* Tier 1: Free */}
              <div className="rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/35 p-6 text-center flex flex-col justify-between">
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-bold text-[#142333] mb-2 font-mono">
                    ללא עלות
                  </span>
                  <p className="text-sm font-bold text-[#22272C] mb-1.5">
                    24 שעות ויותר לפני הטיפול
                  </p>
                  <p className="text-xs sm:text-sm text-[#22272C]/70 leading-relaxed">
                    ביטול או שינוי מועד בלי חיוב.
                  </p>
                </div>
              </div>

              {/* Tier 2: 50% */}
              <div className="rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/35 p-6 text-center flex flex-col justify-between">
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-bold text-[#142333] mb-2 font-mono">
                    50%
                  </span>
                  <p className="text-sm font-bold text-[#22272C] mb-1.5">
                    בין 24 ל־15 שעות לפני הטיפול
                  </p>
                  <p className="text-xs sm:text-sm text-[#22272C]/70 leading-relaxed">
                    חיוב של חצי ממחיר הטיפול.
                  </p>
                </div>
              </div>

              {/* Tier 3: 100% */}
              <div className="rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/35 p-6 text-center flex flex-col justify-between">
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-bold text-[#142333] mb-2 font-mono">
                    100%
                  </span>
                  <p className="text-sm font-bold text-[#22272C] mb-1.5">
                    פחות מ־15 שעות, או אי־הגעה
                  </p>
                  <p className="text-xs sm:text-sm text-[#22272C]/70 leading-relaxed">
                    חיוב מלא של מחיר הטיפול.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#22272C]/60 text-center mb-10 font-mono">
              החיוב מחושב לפי השעה שבה התקבלה ההודעה שלכם, ביחס למועד הטיפול שנקבע.
            </p>

            {/* Interactive Slider Calculator */}
            <div className="mb-14 sm:mb-16">
              <CancellationCalculator />
            </div>

            {/* Late & Arrival Rules Subsection */}
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#22272C] mb-6 text-center sm:text-right">
                איחורים ונהלי הגעה
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {LATE_AND_ARRIVAL_RULES.map((rule) => (
                  <div
                    key={rule.title}
                    className="rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/30 p-5 sm:p-6 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-sm bg-[#FFFFFF] border border-[#A8B0B7]/30 text-[#142333] flex items-center justify-center shrink-0 mt-0.5">
                      {rule.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#22272C] mb-1.5">
                        {rule.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#22272C]/70 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#22272C]/50 text-center font-mono">
              המדיניות חלה על כל הטיפולים ב־Okonski Performance. עודכן לאחרונה: אוקטובר 2026.
            </p>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA SECTION
           ===================================================== */}
        <section className="py-16 sm:py-20 bg-[#142333] text-[#F5F5F2]">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F5F5F2] mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-sm sm:text-base text-[#A8B0B7] mb-8 max-w-xl mx-auto">
              הבטיחו את מקומכם לקראת הפתיחה או שלחו לנו הודעה ישירה בוואטסאפ לכל שאלה והתייעצות.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="/#performance-list"
                className="w-full sm:w-auto bg-[#F5F5F2] text-[#142333] hover:bg-white font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors inline-flex items-center justify-center min-h-[46px]"
              >
                שריון קדימות בתורים ←
              </Link>
              <a
                href="https://wa.me/972555172571"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-[#F5F5F2] border border-white/20 font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors inline-flex items-center justify-center min-h-[46px]"
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

"use client";

import { useState } from "react";
import Image from "next/image";

const modalities = [
  {
    id: "needling",
    label: "דיקור מערבי",
    desc: "שחרור נקודות טריגר עמוקות והורדת טונוס שרירי באזורים עמוסים.",
    src: "/method-treatment.jpg",
    alt: "דיקור יבש ומערבי למטופל ב־Okonski Performance",
  },
  {
    id: "cupping",
    label: "כוסות רוח",
    desc: "הגברת זרימת דם מקומית, שחרור פאשיה והאצת התאוששות רקמות.",
    src: "/treatment-cupping.jpg",
    alt: "טיפול בכוסות רוח למטופל ב־Okonski Performance",
  },
  {
    id: "massage",
    label: "עיסוי ספורט",
    desc: "עבודה מנואלית עמוקה וממוקדת לשחרור נוקשות, הידבקויות ועומס מצטבר.",
    src: "/treatment-massage.jpg",
    alt: "עיסוי ספורט ועבודה מנואלית למטופל ב־Okonski Performance",
  },
  {
    id: "stretching",
    label: "מתיחות וטווחי תנועה",
    desc: "מתיחות אקטיביות ופסיביות (PNF) לפתיחת מפרקים ושיפור גמישות תפקודית.",
    src: "/treatment-stretching.jpg",
    alt: "מתיחות ושיפור טווחי תנועה למטופל ב־Okonski Performance",
  },
  {
    id: "strength",
    label: "חיזוק ושיקום תנועתי",
    desc: "תרגול מבוקר לבניית יציבות, שליטה מפרקית ועמידות תחת עומס.",
    src: "/treatment-strength.jpg",
    alt: "חיזוק ושיקום תנועתי למטופל ב־Okonski Performance",
  },
  {
    id: "consultation",
    label: "תשאול ואבחון",
    desc: "שיחה, הקשבה והערכת תנועה להבנת מקור הכאב והתאמת תוכנית מדויקת.",
    src: "/treatment-consultation.jpg",
    alt: "שיחת תשאול ואבחון תנועתי למטופל ב־Okonski Performance",
  },
];

const stages = [
  {
    num: "01",
    title: "אבחון והקשבה מלאה",
    body: "נבין מה הביא אותך לטיפול, מה מפריע לך, מהי שגרת האימונים או העבודה שלך ומה אתה רוצה להשיג.",
  },
  {
    num: "02",
    title: "בדיקת תנועה מקיפה",
    body: "בהתאם לצורך, נבחן תנועה, טווחי תנועה, חוסר איזון ומקורות עומס הרלוונטיים למטרת הטיפול.",
  },
  {
    num: "03",
    title: "טיפול מותאם אישית",
    body: "נבצע טיפול גופני המותאם לממצאים — שילוב של טכניקות מנואליות, דיקור מערבי וכוסות רוח לפי הצורך המדויק.",
  },
  {
    num: "04",
    title: "קביעת המשך תהליך",
    body: "בסיום נסביר מה עלה במפגש, מה אפשר לעשות באופן עצמאי ומה עשוי להתאים להמשך, במידת הצורך.",
  },
];

/**
 * THE SINGLE BRIGHT PRODUCT MOMENT ON THE PAGE:
 * High-contrast light surface (#F4F6F9 / #FFFFFF) showcasing the actual hands-on clinical modalities
 * (faceless action-only shots with male patients) and the 4-stage session structure.
 */
export default function Treatment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentModality = modalities[activeIndex];

  return (
    <section
      id="treatment"
      className="py-16 sm:py-24 bg-[#F4F6F9] text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Split: Heading + Interactive Clinical Modality Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-5 text-right lg:pt-2">
            <h2 className="text-2xl sm:text-4xl font-medium text-[#0E1116] leading-tight mb-4">
              איך עובד התהליך
            </h2>
            <p className="text-[#0E1116] text-base sm:text-lg leading-relaxed mb-3 font-medium">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#4B5262] text-sm sm:text-base leading-relaxed mb-6">
              לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומשלב את הכלים הקליניים המתאימים למה שעולה בתשאול ובהערכה.
            </p>

            {/* Interactive Modality Selector Tabs */}
            <div className="mb-2">
              <p className="text-xs font-medium text-[#4B5262] mb-3">
                כלים שמשתלבים בטיפול לפי הצורך (לחץ לצפייה):
              </p>
              <div
                role="tablist"
                aria-label="שיטות וכלים בתהליך הטיפול"
                className="flex flex-wrap gap-2"
              >
                {modalities.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`modality-panel-${item.id}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`m-btn px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border cursor-pointer focus:outline-none ${
                        isActive
                          ? "bg-[#2F5E9E] text-white border-[#2F5E9E]"
                          : "bg-white text-[#0E1116] border-[#0E1116]/[0.12] hover:border-[#2F5E9E]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              id={`modality-panel-${currentModality.id}`}
              role="tabpanel"
              className="rounded-xl overflow-hidden border border-[#0E1116]/[0.08] bg-white"
            >
              {/* Main Active Clinical Photo */}
              <div className="m-photo-frame relative w-full bg-[#151A22]">
                <Image
                  key={currentModality.src}
                  src={currentModality.src}
                  alt={currentModality.alt}
                  width={1376}
                  height={768}
                  className="w-full h-auto aspect-[16/9] object-cover block"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority
                />
              </div>

              {/* Active Modality Caption Bar + Thumbnail Strip */}
              <div className="p-4 sm:p-6 bg-white border-t border-[#0E1116]/[0.08] text-right">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono tabular-nums text-xs text-[#2F5E9E]">
                      0{activeIndex + 1} / 0{modalities.length}
                    </span>
                    <h3 className="text-base sm:text-lg font-medium text-[#0E1116]">
                      {currentModality.label}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5262]">
                    {currentModality.desc}
                  </p>
                </div>

                {/* 6 Thumbnail Previews */}
                <div className="grid grid-cols-6 gap-2">
                  {modalities.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`הצג תמונת ${item.label}`}
                        className={`m-btn relative rounded-lg overflow-hidden border cursor-pointer focus:outline-none ${
                          isActive
                            ? "border-[#2F5E9E] ring-2 ring-[#2F5E9E]"
                            : "border-[#0E1116]/[0.12] opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.label}
                          width={240}
                          height={135}
                          className="w-full h-auto aspect-[16/9] object-cover block"
                          sizes="120px"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps — Unified Architectural Table on Crisp White */}
        <div className="mb-12 text-right">
          <h3 className="text-xl sm:text-2xl font-medium text-[#0E1116] mb-6">
            המפגש הראשון
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl bg-white border border-[#0E1116]/[0.08] divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#0E1116]/[0.08] overflow-hidden">
            {stages.map((stage) => (
              <li
                key={stage.num}
                className="p-6 text-right flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono tabular-nums text-xs text-[#2F5E9E] block mb-2">
                    {stage.num}
                  </span>
                  <h4 className="text-lg font-medium text-[#0E1116] mb-2">{stage.title}</h4>
                  <p className="text-sm text-[#4B5262] leading-relaxed">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Two Plain Editorial Columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-[#0E1116]/[0.08] text-right">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-[#0E1116] mb-3">מה עשוי להשתלב במפגש?</h3>
            <p className="text-sm sm:text-base text-[#4B5262] leading-relaxed mb-3">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, דיקור מערבי, כוסות רוח, עבודה על טווחי תנועה, מתיחות ותרגילי חיזוק מותאמים.
            </p>
            <p className="text-sm text-[#4B5262] leading-relaxed">
              לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-[#0E1116] mb-3">ומה קורה לאחר המפגש הראשון?</h3>
              <p className="text-sm sm:text-base text-[#4B5262] leading-relaxed mb-3">
                מפגשי המשך יכולים לכלול טיפול גופני, תרגול, הנחיות לבית, התאמות עומס ומעקב אחר ההתקדמות.
              </p>
              <p className="text-sm text-[#4B5262] leading-relaxed">
                אפשר להמשיך במפגשים בודדים או לבחון מסלול טיפולי מתאים. ההמלצה נקבעת לפי הצורך — לא כל אדם זקוק לאותו מספר מפגשים.
              </p>
            </div>
            <div className="pt-4 mt-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-[#0E1116] hover:text-[#2F5E9E] text-sm font-medium"
              >
                <span>איך מתחילים? קרא על השלבים</span>
                <span className="text-[#2F5E9E]">←</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

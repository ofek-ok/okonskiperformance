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
    title: "היכרות והערכת מצב",
    body: "נבין מה הביא אותך, מה אתה חווה כיום, מה ההיסטוריה הגופנית שלך ומה המטרות שלך.",
  },
  {
    num: "02",
    title: "הערכת תנועה ותפקוד",
    body: "נבחן את התנועה, טווחי התנועה והיכולות הרלוונטיות בהתאם למצב ולמטרות שלך.",
  },
  {
    num: "03",
    title: "טיפול מותאם אישית",
    body: "נבחר את הכלים הטיפוליים המתאימים ונבנה מענה בהתאם לממצאים ולצרכים שלך.",
  },
  {
    num: "04",
    title: "תכנון המשך הדרך",
    body: "נסכם את המפגש, נגדיר המלצות להמשך ונבחן האם נדרש תהליך נוסף, תחזוקה או מעקב.",
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
      className="py-16 sm:py-24 bg-white text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Split: Heading + Interactive Clinical Modality Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-5 text-right">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#0E1116] leading-tight mb-4">
              איך עובד התהליך?
            </h2>
            <p className="text-[#0E1116] text-base sm:text-lg leading-relaxed mb-3 font-medium">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#4B5262] text-sm sm:text-base leading-relaxed">
              לכן כל תהליך מתחיל בהבנת הצרכים האישיים ובהתאמת המענה למצב ולמטרות שלך.
            </p>
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

              {/* Active Modality Caption Bar + Thumbnail Strip + Clickable Tool Tabs */}
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
                <div className="grid grid-cols-6 gap-2 mb-4">
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

                {/* Interactive Modality Selector Tabs Underneath Images */}
                <div className="pt-4 border-t border-[#0E1116]/[0.08]">
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
                              : "bg-[#F4F6F9] text-[#0E1116] border-[#0E1116]/[0.12] hover:border-[#2F5E9E]"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps — Unified Architectural Table on Crisp Soft Surface */}
        <div className="mb-12 text-right">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#0E1116] mb-6">
            המפגש הראשון
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl bg-[#F8F9FB] border border-[#0E1116]/[0.08] divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#0E1116]/[0.08] overflow-hidden">
            {stages.map((stage) => (
              <li
                key={stage.num}
                className="p-6 text-right flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono tabular-nums text-xs font-semibold text-[#2F5E9E] block mb-2">
                    {stage.num}
                  </span>
                  <h4 className="text-lg font-semibold text-[#0E1116] mb-2">{stage.title}</h4>
                  <p className="text-sm text-[#4B5262] leading-relaxed">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Clinical Tools Summary */}
        <div className="pt-8 border-t border-[#0E1116]/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 text-right">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0E1116] mb-2">כלים טיפוליים</h3>
            <p className="text-sm sm:text-base text-[#4B5262] leading-relaxed">
              בהתאם לצורך, התהליך עשוי לשלב טיפול ידני, עיסוי ספורט, כוסות רוח, דיקור מערבי, תרגול תנועתי, עבודה על טווחי תנועה וחיזוק.
            </p>
          </div>
          <a
            href="#performance-list"
            className="btn-secondary-light shrink-0 w-full md:w-auto"
          >
            <span>הצטרפות לרשימת המתעניינים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}

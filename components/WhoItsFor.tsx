"use client";

interface ServicePillar {
  num: string;
  title: string;
  topicId: string;
  body: string;
}

const pillars: ServicePillar[] = [
  {
    num: "01",
    title: "שיקום וטיפול בכאבים ופציעות",
    topicId: "כאב ופציעה",
    body: "טיפול בכאבים, פציעות ומגבלות תנועה, במטרה לשפר את התפקוד ולסייע בחזרה הדרגתית לשגרה ולפעילות.",
  },
  {
    num: "02",
    title: "תחזוקה והתאוששות",
    topicId: "תחזוקה והתאוששות",
    body: "התייחסות לעומסים מצטברים, נוקשות ועייפות גופנית, לשמירה על תנועה ותפקוד לאורך זמן.",
  },
  {
    num: "03",
    title: "שיפור תנועה וביצועים",
    topicId: "תנועה ויציבה",
    body: "עבודה על טווחי תנועה, יכולות גופניות ותפקוד, כדי לאפשר ביצוע טוב ויעיל יותר בפעילות היומיומית והספורטיבית.",
  },
];

function selectTopic(topicId: string) {
  window.dispatchEvent(new CustomEvent("okonski:select-topic", { detail: topicId }));
}

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-16 sm:py-24 bg-[#F8F9FB] text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
      aria-labelledby="who-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12 text-right">
          <h2
            id="who-heading"
            className="text-2xl sm:text-4xl font-semibold text-[#0E1116] leading-tight"
          >
            מה הגוף שלך צריך כרגע?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-right items-stretch">
          {pillars.map((pillar) => (
            <article
              key={pillar.num}
              className="m-card h-full flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-white border border-[#0E1116]/[0.08] shadow-[0_2px_12px_rgba(14,17,22,0.03)]"
            >
              <div>
                <span className="font-mono tabular-nums text-xs font-semibold text-[#2F5E9E] block mb-3">
                  {pillar.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0E1116] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5262] leading-relaxed mb-6">
                  {pillar.body}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-[#0E1116]/[0.08]">
                <a
                  href="#performance-list"
                  onClick={() => selectTopic(pillar.topicId)}
                  className="text-[#2F5E9E] hover:text-[#264E86] text-sm font-semibold inline-flex items-center justify-between w-full gap-2 py-1"
                >
                  <span>זה אני, שריינו לי מקום</span>
                  <span className="shrink-0">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Bar with Light Secondary Button */}
        <div className="mt-12 pt-8 border-t border-[#0E1116]/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-right">
          <p className="text-[#4B5262] text-sm sm:text-base leading-relaxed max-w-xl">
            <strong className="text-[#0E1116] font-semibold">לא בטוח לאיזה מסלול אתה שייך?</strong> בדיוק בשביל זה יש מפגש ראשון: קודם אבחון, ורק אחר כך תוכנית.
          </p>
          <a
            href="#performance-list"
            onClick={() => selectTopic("עדיין לא בטוח")}
            className="btn-secondary-light shrink-0 w-full md:w-auto"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}

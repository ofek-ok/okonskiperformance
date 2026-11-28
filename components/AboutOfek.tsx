import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F8F9FB] text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Studio Portrait — Sticky on Desktop so it accompanies the story */}
          <div className="lg:col-span-5 order-first lg:sticky lg:top-24">
            <div className="m-photo-frame relative w-full max-w-[360px] rounded-xl overflow-hidden border border-[#0E1116]/[0.08] bg-white shadow-[0_2px_12px_rgba(14,17,22,0.04)]">
              <Image
                src="/ofek-portrait-hd.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                width={1024}
                height={1024}
                className="w-full h-auto aspect-[4/5] object-cover object-center block"
                sizes="(max-width: 640px) 340px, 360px"
                priority
              />
            </div>
          </div>

          {/* SECTION 5: ABOUT (מי אני) */}
          <div className="lg:col-span-7 text-right space-y-8">
            <div>
              <h2
                id="about-heading"
                className="text-2xl sm:text-4xl font-semibold text-[#0E1116] leading-tight mb-6"
              >
                נעים להכיר, אני אופק.
              </h2>

              <div className="space-y-4 text-[#4B5262] text-base sm:text-lg leading-relaxed">
                <p className="text-[#0E1116] font-medium">
                  אני מנהל פרויקטים בכיר בעולם ההייטק, ספורטתרפיסט ומאמן אומנויות לחימה ובעיקר אדם שספורט, תנועה ופעילות גופנית הם חלק בלתי נפרד מחיי.
                </p>
                <p>
                  ביום יום אני משלב בין קריירה תובענית, אחריות מקצועית וניהול פרויקטים, לבין שגרת אימונים אינטנסיבית והרצון המתמיד לשמור על הגוף, להתקדם ולהשתפר.
                </p>
                <p>
                  אבל הדרך שלי לעולם השיקום והטיפול לא הייתה רק דרך הלימודים וההכשרה המקצועית. היא עברה גם דרך הגוף שלי.
                </p>
              </div>
            </div>

            {/* Chapter 1 */}
            <div className="pt-8 border-t border-[#0E1116]/[0.08]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0E1116] mb-4">
                למדתי על שיקום גם מהצד השני
              </h3>
              <div className="space-y-4 text-[#4B5262] text-sm sm:text-base leading-relaxed">
                <p>
                  לאורך השנים התמודדתי עם מספר פציעות משמעותיות. קרעים ברצועות הברך שהצריכו ניתוחים ושיקום ממושך, ובהמשך גם שבר ברגל ופגיעה קשה בקרסול.
                </p>
                <p>
                  אני מכיר מקרוב את ההתמודדות עם פציעה, את חוסר הוודאות, את המגבלות ואת התסכול שבצורך לעצור או לשנות את שגרת החיים.
                </p>
                <p className="text-[#0E1116] font-medium">
                  אבל אני מכיר גם את הדרך חזרה.
                </p>
                <p>
                  לאחר הפציעה בברך, הצלחתי לחזור להתאמן ברמה גבוהה בתוך כחצי שנה. לאחר הפגיעה בקרסול, חזרתי לרוץ 15 קילומטרים בתוך כשלושה חודשים.
                </p>
                <p>
                  החוויות האלה נתנו לי נקודת מבט אישית על המשמעות של שיקום, התמדה, תהליך נכון והיכולת לחזור לעשות את הדברים שאתה אוהב.
                </p>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="pt-8 border-t border-[#0E1116]/[0.08]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0E1116] mb-4">
                החיבור בין שני העולמות
              </h3>
              <div className="space-y-4 text-[#4B5262] text-sm sm:text-base leading-relaxed">
                <p>
                  החיים שלי משלבים שני עולמות: מצד אחד, קריירה בעולם ההייטק, ניהול פרויקטים ואחריות מקצועית. מצד שני, ספורט, אימונים, תנועה ושאיפה מתמדת לשפר יכולות ולשמור על הגוף.
                </p>
                <p>
                  אני מכיר את האתגר שבניסיון לשלב בין עבודה, עומס, שגרה עמוסה והצורך להמשיך להיות פעיל ומתפקד.
                </p>
                <p>
                  החיבור הזה משפיע גם על הדרך שבה אני מסתכל על טיפול ושיקום. הגוף הוא חלק בלתי נפרד מהחיים שלנו, והמטרה היא לא רק להתמודד עם כאב, אלא גם לשפר את התפקוד ולאפשר לנו להמשיך לעשות את הדברים שחשובים לנו.
                </p>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="pt-8 border-t border-[#0E1116]/[0.08]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0E1116] mb-4">
                מכאן נולד Okonski Performance
              </h3>
              <div className="space-y-4 text-[#4B5262] text-sm sm:text-base leading-relaxed">
                <p>
                  את Okonski Performance הקמתי מתוך החיבור בין הניסיון האישי שלי, ההכשרה המקצועית בספורטתרפיה והתשוקה לעולם השיקום, התנועה והביצועים.
                </p>
                <p>
                  המטרה שלי היא להעניק מענה אישי ומקצועי לאנשים שמתמודדים עם כאבים ופציעות, לאנשים שרוצים לתחזק את הגוף ולשמור על תפקוד לאורך זמן, ולאלו ששואפים לשפר את היכולות הגופניות שלהם.
                </p>
                <p className="text-[#0E1116] font-medium">
                  מבחינתי, כל אדם מגיע עם סיפור אחר, צרכים אחרים ומטרות אחרות. התפקיד שלי הוא להבין אותם ולבנות עבורו מענה שמתאים לו.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

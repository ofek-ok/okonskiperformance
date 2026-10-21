const needs = [
  { n: "01", title: "כאב ומגבלות", text: "גב שמציק, כאב שחוזר, נוקשות או מגבלה שמפריעה לך ביום־יום. לא צריך להתרגל לזה." },
  { n: "02", title: "עומס והתאוששות", text: "שבוע עמוס, אימונים, שעות מול מחשב או פשוט גוף שצריך רגע להתאושש ולהרגיש טוב יותר." },
  { n: "03", title: "חזרה לפעילות", text: "אחרי פציעה או תקופה שבה הגוף עצר אותך — המטרה היא לחזור בהדרגה למה שחשוב לך לעשות." },
  { n: "04", title: "תנועה וביצועים", text: "כשאין פציעה אבל אתה רוצה לנוע טוב יותר, להתאושש טוב יותר ולתת לגוף בסיס לעמוד בדרישות שלך." },
];

export default function PerformancePromise() {
  return (
    <section className="relative bg-primary py-20 sm:py-28 border-t border-white/5 overflow-hidden" aria-labelledby="promise-heading">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-[110px]" aria-hidden="true" />
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="max-w-4xl mb-14 sm:mb-20">
          <p className="font-barlow text-brand font-black tracking-[0.25em] text-xs uppercase mb-5" dir="ltr">DON&apos;T SETTLE FOR LESS</p>
          <h2 id="promise-heading" className="text-[clamp(2rem,6vw,4rem)] font-black text-white leading-[1.08] tracking-tight mb-7">
            הגוף שלך הוא לא משהו<br className="hidden sm:block" /> שצריך לדחוף לסוף הרשימה.
          </h2>
          <p className="text-white/80 text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.85] max-w-3xl">
            עוד שעה בעבודה ועוד אימון הם לא סיבה להתרגל לכאב, לעומס או לתחושה שהגוף מעכב אותך. טיפול והתאוששות הם חלק מהיכולת שלך להמשיך לעשות את הדברים שחשובים לך.
          </p>
        </div>
        <div className="grid md:grid-cols-2 border-t border-white/10">
          {needs.map((item, i) => (
            <article key={item.n} className={`relative py-9 sm:py-11 md:px-9 border-b border-white/10 ${i % 2 === 0 ? "md:border-l" : ""} md:border-white/10`}>
              <span className="font-barlow text-brand font-black tracking-widest text-sm">{item.n}</span>
              <h3 className="text-xl sm:text-2xl text-white font-black mt-4 mb-3">{item.title}</h3>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

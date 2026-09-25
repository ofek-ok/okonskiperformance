const steps = [
  { n: "01", title: "מבינים", text: "מה מפריע לך עכשיו, מה הגוף שלך עובר ומה אתה רוצה להרגיש או לעשות אחרת." },
  { n: "02", title: "מעריכים ומטפלים", text: "מסתכלים על התנועה והעומס ומתאימים את הטיפול למה שנכון לך באותו שלב." },
  { n: "03", title: "מתקדמים", text: "לא נשארים רק עם הטיפול עצמו. יוצאים עם כיוון ברור להמשך — התאוששות, חזרה לפעילות, מניעה או שיפור." },
];

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-20 sm:py-28 border-t border-white/5" aria-labelledby="how-heading">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="font-barlow text-brand font-black tracking-[0.25em] text-xs uppercase mb-4" dir="ltr">THE PROCESS</p>
          <h2 id="how-heading" className="text-[clamp(2rem,6vw,3.5rem)] font-black text-white leading-tight">איך נראה התהליך?</h2>
        </div>
        <div className="grid lg:grid-cols-3 border-y border-white/10">
          {steps.map((step, i) => (
            <article key={step.n} className={`py-10 lg:px-9 ${i < 2 ? "border-b lg:border-b-0 lg:border-l border-white/10" : ""}`}>
              <span className="font-barlow text-brand font-black text-sm tracking-[0.22em]">{step.n}</span>
              <h3 className="text-2xl text-white font-black mt-5 mb-4">{step.title}</h3>
              <p className="text-white/75 text-base sm:text-lg leading-[1.8]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

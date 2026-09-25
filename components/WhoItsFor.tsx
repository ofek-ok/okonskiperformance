const audiences = [
  { n: "01", title: "כאב שמפריע", text: "גב, צוואר, ברך או כל כאב שמפריע לך לעבוד, לזוז, להתאמן או פשוט להרגיש בנוח." },
  { n: "02", title: "עומס והתאוששות", text: "כשהשגרה, האימונים או העבודה מצטברים בגוף ואתה רוצה להוריד עומס ולהרגיש טוב יותר." },
  { n: "03", title: "חזרה מפציעה", text: "כשצריך לחזור בהדרגה לפעילות, לאימון ולדברים שהגוף שלך צריך להיות מסוגל לעשות." },
  { n: "04", title: "יותר מהגוף שלך", text: "כשאתה מרגיש טוב ורוצה לשמור על זה, לנוע טוב יותר, להתאושש ולשפר ביצועים." },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 sm:py-28 bg-primary relative overflow-hidden" aria-labelledby="audiences-heading">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 id="audiences-heading" className="text-[clamp(2rem,6vw,3.5rem)] font-black text-white leading-[1.1] tracking-tight mb-5">לא צריך להיות ספורטאי כדי לטפל בגוף שלך.</h2>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed">אפשר להגיע בגלל כאב. בגלל עומס. בשביל התאוששות. או כי אתה רוצה להמשיך לעשות יותר בלי להתפשר על הגוף בדרך.</p>
        </div>
        <div className="grid sm:grid-cols-2">
          {audiences.map((a,i)=><article key={a.n} className={`py-8 sm:p-9 border-t border-white/10 ${i%2===0?"sm:border-l":""}`}>
            <span className="font-barlow text-brand font-black tracking-widest text-sm">{a.n}</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-4 mb-3">{a.title}</h3>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg">{a.text}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}

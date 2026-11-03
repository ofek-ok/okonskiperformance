const steps = [
  { num: "01", title: "משאירים פרטים", body: "ממלאים את הטופס הקצר ומצטרפים לרשימת המתעניינים." },
  { num: "02", title: "היכרות ראשונית", body: "אחזור אליכם אישית, בהתכתבות או בשיחה קצרה, כדי להבין מה אתם צריכים ואם השירות מתאים." },
  { num: "03", title: "מפגש ראשון", body: "עם פתיחת הפעילות: תשאול, הערכה וטיפול ראשוני, ובסיומו בוחנים אם ואיך כדאי להמשיך." },
];

export default function HowToStart() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 lg:py-32 bg-[#0A0B0D] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="eyebrow">איך מתחילים</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
            מתחילים בהיכרות.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            חשוב לי להבין מי אתה, מה הביא אותך ומה אתה מצפה לקבל מהטיפול. הפעילות נמצאת בהקמה, והמצטרפים לרשימה יקבלו ממני עדכון אישי.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {steps.map((s) => (
            <div key={s.num} className="border-t border-white/25 pt-6">
              <span className="text-[#94A3B8] text-sm block mb-4">{s.num}</span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <a href="#performance-list" className="btn-primary w-full sm:w-auto">
          הצטרפות לרשימת המתעניינים
        </a>
      </div>
    </section>
  );
}

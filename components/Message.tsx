export default function Message() {
  return (
    <section className="py-24 sm:py-32 md:py-48 bg-charcoal relative flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-12">
          מה מפריע לך היום — <br className="hidden md:block" />
          <span className="text-secondary-text block mt-4 sm:mt-6">ומה אתה צריך שהגוף שלך יהיה מסוגל לעשות?</span>
        </h2>
        
        <div className="max-w-2xl mx-auto border-t border-white/10 pt-12 mt-12">
          <p className="text-xl sm:text-2xl text-secondary-text leading-relaxed font-medium">
            אנחנו לא מסתכלים רק על הכאב. <br className="hidden sm:block" />
            אנחנו מסתכלים על <span className="text-white font-bold">הדרישות שהגוף שלך צריך לעמוד בהן.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

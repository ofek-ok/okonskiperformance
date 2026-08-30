export default function Message() {
  return (
    <section className="py-20 sm:py-32 md:py-48 bg-black relative flex items-center justify-center">
      {/* Subtle glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl h-[80%] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-12">
          מה מפריע לך היום — <br className="hidden md:block" />
          <span className="text-silver/60 block mt-4 sm:mt-6">ומה אתה צריך שהגוף שלך יהיה מסוגל לעשות?</span>
        </h2>
        
        <div className="max-w-2xl mx-auto border-t border-brand/30 pt-12 mt-12">
          <p className="text-xl sm:text-2xl text-silver/80 leading-relaxed font-medium">
            אנחנו לא מסתכלים רק על הכאב. <br className="hidden sm:block" />
            אנחנו מסתכלים על <span className="text-white font-bold">הדרישות שהגוף שלך צריך לעמוד בהן.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

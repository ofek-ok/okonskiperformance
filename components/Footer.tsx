"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex flex-col items-center md:items-start text-white">
            <div className="w-12 h-12 relative mb-4">
              <Image src="/logo-official.png" alt="Okonski Performance" fill className="object-contain" />
            </div>
            <p className="font-barlow font-black tracking-widest uppercase text-2xl mb-1">
              OKONSKI PERFORMANCE
            </p>
            <p className="font-barlow text-secondary-text font-bold tracking-[0.2em] uppercase text-sm">
              Built for What You Demand.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-secondary-text gap-8 md:gap-4">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Okonski Performance. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">הבהרה מקצועית ובריאותית</Link>
            <button onClick={() => document.dispatchEvent(new CustomEvent("open-cookie-settings"))} className="hover:text-white transition-colors">הגדרות עוגיות</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

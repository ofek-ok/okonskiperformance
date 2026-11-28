"use client";

import { track } from "@vercel/analytics";
import { WHATSAPP_CONTACT } from "@/config/links";
import ConnectIcon from "@/components/connect/ConnectIcon";

export default function ConnectWhatsAppButton() {
  if (!WHATSAPP_CONTACT.enabled) return null;

  const handleClick = () => {
    track("connect_whatsapp_click", {
      link_id: WHATSAPP_CONTACT.id,
      platform: "WhatsApp",
    });
  };

  return (
    <a
      href={WHATSAPP_CONTACT.url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${WHATSAPP_CONTACT.title} - ${WHATSAPP_CONTACT.description}`}
      className="m-btn flex items-center justify-between gap-4 w-full p-4 sm:p-6 rounded-xl bg-[#2F5E9E] hover:bg-[#264E86] text-white border border-[#2F5E9E] text-right focus:outline-none"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center text-white shrink-0">
          <ConnectIcon icon="whatsapp" className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="block text-base font-semibold text-white truncate">
            {WHATSAPP_CONTACT.title}
          </span>
          <span className="block text-xs sm:text-sm text-white/85 truncate mt-1">
            {WHATSAPP_CONTACT.description}
          </span>
        </div>
      </div>

      <span className="text-white text-sm font-medium shrink-0" aria-hidden="true">
        ←
      </span>
    </a>
  );
}

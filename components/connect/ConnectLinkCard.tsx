"use client";

import { track } from "@vercel/analytics";
import type { ConnectLinkItem } from "@/config/links";
import ConnectIcon from "@/components/connect/ConnectIcon";

interface ConnectLinkCardProps {
  item: ConnectLinkItem;
}

export default function ConnectLinkCard({ item }: ConnectLinkCardProps) {
  const isExternalHttp = item.url.startsWith("http://") || item.url.startsWith("https://");

  const handleClick = () => {
    track("connect_link_click", {
      link_id: item.id,
      platform: item.title,
    });
  };

  return (
    <a
      href={item.url}
      onClick={handleClick}
      target={isExternalHttp ? "_blank" : undefined}
      rel={isExternalHttp ? "noopener noreferrer" : undefined}
      aria-label={item.description ? `${item.title} - ${item.description}` : item.title}
      className="m-card group flex items-center justify-between gap-4 w-full p-4 rounded-xl bg-[#151A22] hover:bg-[#1C222D] border border-white/[0.08] hover:border-white/[0.16] text-right focus:outline-none"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-11 h-11 rounded-lg bg-[#0E1116] border border-white/[0.08] flex items-center justify-center text-[#F4F6F9] group-hover:text-[#2F5E9E] shrink-0">
          <ConnectIcon icon={item.icon} className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="block text-base font-medium text-[#F4F6F9] truncate">
            {item.title}
          </span>
          {item.description && (
            <span className="block text-xs sm:text-sm text-[#A7AAB4] truncate mt-1">
              {item.description}
            </span>
          )}
        </div>
      </div>

      <span
        className="text-[#A7AAB4] group-hover:text-[#2F5E9E] text-sm shrink-0"
        aria-hidden="true"
      >
        ←
      </span>
    </a>
  );
}

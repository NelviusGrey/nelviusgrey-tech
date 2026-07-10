import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with NelviusGrey Tech on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-md bg-[color:var(--brand-green)] text-[#021008] shadow-[0_0_30px_var(--brand-glow)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_var(--brand-glow)]"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}

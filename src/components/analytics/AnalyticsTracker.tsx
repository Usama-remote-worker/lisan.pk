"use client";

import { useEffect } from "react";
import { trackLeadEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const element = target.closest("a, button, [data-lead]") as HTMLElement | null;
      if (!element) return;

      // 1. Explicit data-lead="quote" or buttons tagged with quote lead
      const leadAttr = element.getAttribute("data-lead");
      if (leadAttr === "quote") {
        trackLeadEvent("quote");
        return;
      }

      // Check anchor hrefs
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor && anchor.href) {
        const href = anchor.href.toLowerCase();

        // 2. WhatsApp links
        if (href.includes("wa.me") || href.includes("whatsapp.com") || href.includes("api.whatsapp.com")) {
          trackLeadEvent("whatsapp");
          return;
        }

        // 3. Phone call links
        if (href.startsWith("tel:")) {
          trackLeadEvent("phone");
          return;
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);

  return null;
}

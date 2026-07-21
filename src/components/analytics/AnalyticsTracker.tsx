"use client";

import { useEffect } from "react";
import { trackLeadEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const element = target.closest("a, button, [data-lead], [id]") as HTMLElement | null;
      if (!element) return;

      // 1. Explicit data-lead attribute check
      const leadAttr = element.getAttribute("data-lead");
      if (leadAttr === "quote") {
        trackLeadEvent("quote");
        return;
      }
      if (leadAttr === "whatsapp") {
        trackLeadEvent("whatsapp");
        return;
      }
      if (leadAttr === "phone") {
        trackLeadEvent("phone");
        return;
      }

      // 2. ID-based check
      const id = (element.id || "").toLowerCase();
      if (id.includes("wa-") || id.includes("whatsapp")) {
        trackLeadEvent("whatsapp");
        return;
      }
      if (id.includes("call") || id.includes("phone")) {
        trackLeadEvent("phone");
        return;
      }
      if (id.includes("quote")) {
        trackLeadEvent("quote");
        return;
      }

      // 3. Anchor Href check
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor) {
        const href = (anchor.getAttribute("href") || anchor.href || "").toLowerCase();

        if (
          href.includes("wa.me") ||
          href.includes("whatsapp") ||
          href.includes("api.whatsapp.com")
        ) {
          trackLeadEvent("whatsapp");
          return;
        }

        if (href.startsWith("tel:") || href.includes("tel:")) {
          trackLeadEvent("phone");
          return;
        }

        if (href.includes("/contact") || href.includes("quote") || href.includes("forms.gle")) {
          trackLeadEvent("quote");
          return;
        }
      }

      // 4. Text content fallback check
      const text = (element.textContent || "").trim().toLowerCase();
      if (text.includes("whatsapp")) {
        trackLeadEvent("whatsapp");
        return;
      }
      if (text === "quote" || text.includes("get quote") || text.includes("free quote")) {
        trackLeadEvent("quote");
        return;
      }
      if (text === "call" || text.includes("call us") || text.includes("call now")) {
        trackLeadEvent("phone");
        return;
      }
    };

    // Attach in capturing phase to fire event immediately upon click
    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);

  return null;
}

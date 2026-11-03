"use client";

import { useEffect } from "react";
import { trackLeadEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    // 1. Global Click Tracking (WhatsApp, Phone, Quote)
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const element = target.closest("a, button, [data-lead], [id]") as HTMLElement | null;
      if (!element) return;

      // Check explicit data-lead attribute
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

      // Check Element ID
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

      // Check Anchor Href
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

      // Check Text Content Fallback
      const text = (element.textContent || "").trim().toLowerCase();
      if (text.includes("whatsapp")) {
        trackLeadEvent("whatsapp");
        return;
      }
      if (text === "quote" || text.includes("get quote") || text.includes("free quote")) {
        trackLeadEvent("quote");
        return;
      }
      if (
        text === "call" ||
        text.includes("call us") ||
        text.includes("call now") ||
        text.includes("0304 4296295") ||
        text.includes("0328 8155866") ||
        text.includes("0300 5008586")
      ) {
        trackLeadEvent("phone");
        return;
      }
    };

    // 2. Global Form Submission Tracking
    const handleGlobalSubmit = (_e: Event) => {
      trackLeadEvent("form");
    };

    // Attach in capturing phase to fire immediately upon click or submission
    document.addEventListener("click", handleGlobalClick, true);
    document.addEventListener("submit", handleGlobalSubmit, true);

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      document.removeEventListener("submit", handleGlobalSubmit, true);
    };
  }, []);

  return null;
}

"use client";

export type LeadType = "whatsapp" | "phone" | "form" | "quote";

/**
 * Fires GA4 `generate_lead` event with lead_type and page_path parameters.
 * Includes safety guards to prevent errors if gtag or dataLayer is not defined.
 */
export function trackLeadEvent(leadType: LeadType) {
  if (typeof window === "undefined") return;

  const pagePath = window.location.pathname;
  const eventData = {
    lead_type: leadType,
    page_path: pagePath,
  };

  try {
    // 1. Direct gtag call (if present)
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "generate_lead", eventData);
    }

    // 2. DataLayer push (for GTM & fallback)
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: "generate_lead",
        ...eventData,
      });
    }
  } catch (err) {
    // Fail silently
  }
}

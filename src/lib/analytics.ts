"use client";

export type LeadType = "whatsapp" | "phone" | "form" | "quote";

let lastFiredEvent: { leadType: LeadType; time: number } | null = null;

/**
 * Fires GA4 `generate_lead` event with lead_type and page_path parameters.
 * Uses transport_type: 'beacon' to guarantee events survive page navigation.
 */
export function trackLeadEvent(leadType: LeadType) {
  if (typeof window === "undefined") return;

  const now = Date.now();
  // Prevent duplicate double-firing from nested event triggers within 400ms
  if (
    lastFiredEvent &&
    lastFiredEvent.leadType === leadType &&
    now - lastFiredEvent.time < 400
  ) {
    return;
  }
  lastFiredEvent = { leadType, time: now };

  const pagePath = window.location.pathname;
  const eventData = {
    lead_type: leadType,
    page_path: pagePath,
    transport_type: "beacon",
  };

  try {
    // 1. Direct gtag call (if present)
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "generate_lead", eventData);
    }

    // 2. DataLayer push (for GTM & DebugView)
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

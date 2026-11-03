"use client";

export type LeadType = "whatsapp" | "phone" | "form" | "quote";

let lastFiredEvent: { leadType: LeadType; time: number } | null = null;

/**
 * Fires GA4 `generate_lead` and specific conversion events for forms, WhatsApp, and phone leads.
 * Uses transport_type: 'beacon' to guarantee events survive immediate tab/window transitions.
 */
export function trackLeadEvent(leadType: LeadType, customData?: Record<string, any>) {
  if (typeof window === "undefined") return;

  const now = Date.now();
  // Prevent duplicate double-firing from bubbling click triggers within 500ms
  if (
    lastFiredEvent &&
    lastFiredEvent.leadType === leadType &&
    now - lastFiredEvent.time < 500
  ) {
    return;
  }
  lastFiredEvent = { leadType, time: now };

  const pagePath = window.location.pathname;
  const eventPayload = {
    lead_type: leadType,
    conversion_channel: leadType,
    page_path: pagePath,
    page_title: typeof document !== "undefined" ? document.title : "",
    transport_type: "beacon",
    value: leadType === "form" ? 50 : leadType === "whatsapp" ? 30 : 20,
    currency: "PKR",
    ...(customData || {}),
  };

  try {
    // 1. Ensure window.dataLayer exists
    (window as any).dataLayer = (window as any).dataLayer || [];

    // 2. Ensure window.gtag function exists and buffers to dataLayer
    if (typeof (window as any).gtag !== "function") {
      (window as any).gtag = function () {
        (window as any).dataLayer.push(arguments);
      };
    }

    // 3. Fire standard GA4 generate_lead conversion event
    (window as any).gtag("event", "generate_lead", eventPayload);

    // 4. Fire granular conversion event for GA4 custom conversions
    (window as any).gtag("event", `conversion_${leadType}`, eventPayload);

    // 5. Push standard GTM event for Tag Manager Triggers & GA4 DebugView
    (window as any).dataLayer.push({
      event: "generate_lead",
      event_category: "Lead Conversion",
      event_label: leadType,
      ...eventPayload,
    });

    if (process.env.NODE_ENV !== "production") {
      console.log(`[GA4 / GTM Lead Event Tracked]: ${leadType}`, eventPayload);
    }
  } catch (err) {
    // Fail silently in production
  }
}

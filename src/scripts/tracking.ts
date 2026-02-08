// Tracking loader with consent gating placeholder
// TODO: Implement consent management when ready

interface TrackingConfig {
  ga4Id?: string;
  metaPixelId?: string;
}

export function initTracking(config: TrackingConfig): void {
  // Check for user consent before initializing
  const hasConsent = checkConsent();
  
  if (!hasConsent) {
    console.log('Tracking: Consent not granted');
    return;
  }

  if (config.ga4Id) {
    initGA4(config.ga4Id);
  }

  if (config.metaPixelId) {
    initMetaPixel(config.metaPixelId);
  }
}

function checkConsent(): boolean {
  // TODO: Implement proper consent check
  // For now, return true (opt-in by default)
  // Replace with: return localStorage.getItem('tracking-consent') === 'granted';
  return true;
}

function initGA4(ga4Id: string): void {
  // GA4 is loaded in BaseLayout.astro
  // This function can be used for custom events
  if (typeof gtag !== 'undefined') {
    gtag('config', ga4Id);
  }
}

function initMetaPixel(pixelId: string): void {
  // Meta Pixel is loaded in BaseLayout.astro
  // This function can be used for custom events
  if (typeof fbq !== 'undefined') {
    fbq('init', pixelId);
  }
}

// Track custom events
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
  
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
}

// Declare global types
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

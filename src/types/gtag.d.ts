// Global type declarations for the GA4 gtag.js script injected in index.html.
// Keeps TypeScript happy without installing a full @types/gtag.js package.

interface GtagEventParams {
    page_path?: string;
    send_to?: string;
    [key: string]: unknown;
}

interface Window {
    dataLayer: unknown[];
    gtag: (
        command: 'js' | 'config' | 'event' | 'set',
        targetOrDate: string | Date,
        params?: GtagEventParams
    ) => void;
}

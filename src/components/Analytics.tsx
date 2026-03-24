import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || '';

/**
 * Analytics — fires a GA4 page_view event on every React Router navigation.
 *
 * Must be rendered **inside** <BrowserRouter> so useLocation() works.
 * Renders nothing to the DOM.
 *
 * We disabled automatic page_view in index.html (`send_page_view: false`)
 * so this component is the single source of truth for page_view events,
 * preventing double-counting on the initial load.
 */
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Dynamically inject the gtag script if it's not already in the head
    const scriptId = 'google-analytics-script';
    const initScriptId = 'google-analytics-init';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      const initScript = document.createElement('script');
      initScript.id = initScriptId;
      initScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
      `;
      document.head.appendChild(initScript);
    }

    // Trigger page_view event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        send_to: GA_MEASUREMENT_ID,
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;

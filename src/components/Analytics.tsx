import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-G8ECHZL5NM';

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
    // Guard: gtag may be blocked by an ad-blocker or unavailable in dev
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;

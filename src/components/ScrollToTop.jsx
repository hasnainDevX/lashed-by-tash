import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Mount this once, inside <BrowserRouter> but above <Routes>.
// - No hash (e.g. clicking a Pricing/Process button to "/services"):
//   scrolls to the top of the new page.
// - Hash present (e.g. Footer links to "/#services"): scrolls to the
//   element with that id instead, so cross-page section links work.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Give the new page a tick to render before we look for the element.
      const id = hash.replace("#", "");
      const timeout = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 0);
      return () => clearTimeout(timeout);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
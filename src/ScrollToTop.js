import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This instantly jumps the window to the top (0,0) whenever the URL path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
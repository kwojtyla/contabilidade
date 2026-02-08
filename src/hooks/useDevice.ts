import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 360;
const TABLET_BREAKPOINT = 768;

export const useDevice = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < MOBILE_BREAKPOINT;
  const isTablet =
    windowWidth >= MOBILE_BREAKPOINT && windowWidth < TABLET_BREAKPOINT;
  const isDesktop = windowWidth >= TABLET_BREAKPOINT;

  return {
    isMobile,
    isTablet,
    isDesktop,
    windowWidth,
  };
};

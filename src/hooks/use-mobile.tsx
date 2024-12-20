import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

// Tailwind's lg breakpoint is 1024px
const LAPTOP_MIN_BREAKPOINT = 1024;
// Tailwind's 2xl breakpoint is 1536px
const LAPTOP_MAX_BREAKPOINT = 1536;

export function useIsLaptop() {
  const [isLaptop, setIsLaptop] = React.useState(false);

  React.useEffect(() => {
    const minWidthMql = window.matchMedia(
      `(min-width: ${LAPTOP_MIN_BREAKPOINT}px)`
    );
    const maxWidthMql = window.matchMedia(
      `(max-width: ${LAPTOP_MAX_BREAKPOINT - 1}px)`
    );

    const onChange = () => {
      setIsLaptop(minWidthMql.matches && maxWidthMql.matches);
    };

    // Set initial value
    onChange();

    // Add event listeners
    minWidthMql.addEventListener("change", onChange);
    maxWidthMql.addEventListener("change", onChange);

    // Cleanup
    return () => {
      minWidthMql.removeEventListener("change", onChange);
      maxWidthMql.removeEventListener("change", onChange);
    };
  }, []);

  return isLaptop;
}

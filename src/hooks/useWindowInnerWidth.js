import { useState, useEffect } from "react";

export default function useWindowInnerWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    const getWidthWithDelay = () => {
      setTimeout(() => {
        getWindowWidth();
      }, 1000);
    };

    window.addEventListener("resize", getWidthWithDelay);
    return () => window.removeEventListener("resize", getWidthWithDelay);
  }, []);

  return windowWidth;
};
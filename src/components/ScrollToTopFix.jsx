import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopFix = () => {
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
};

export default ScrollToTopFix;

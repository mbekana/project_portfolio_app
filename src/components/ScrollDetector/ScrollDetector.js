import React, { useState, useEffect } from "react";

const ScrollDetector = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isScrolled = scrollTop > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-detector ${isScrolled ? "elevated" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollDetector;

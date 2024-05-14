import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollUp && window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else if (scrollUp) {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#home" className="scrollup">
      <i href="" className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;

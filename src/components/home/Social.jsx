import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/ekin-kar"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ekin-kar-9028a5194/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/ekinkarr/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;

import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import CV from "../../assets/Kar_Ekin.pdf";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollSections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      let currentSectionId = "#home";

      scrollSections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // Adjust offset if needed
        const sectionBottom = section.offsetTop + section.offsetHeight - 80; // Adjust offset if needed

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          currentSectionId = `#${section.id}`;
        }
      });

      setActiveNav(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Ekin
        </Link>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          {isMainPage ? (
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => {
                    setActiveNav("#home");
                  }}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => {
                    setActiveNav("#about");
                  }}
                  className={
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => {
                    setActiveNav("#skills");
                  }}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualifications"
                  onClick={() => {
                    setActiveNav("#qualifications");
                  }}
                  className={
                    activeNav === "#qualifications"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav__icon"></i>
                  Qualifications
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => {
                    setActiveNav("#portfolio");
                  }}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i>
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => {
                    setActiveNav("#contact");
                  }}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>
            </ul>
          ) : (
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>
                  Home
                </Link>
              </li>
              <li>
                <a download="" href={CV} className="nav__link">
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ekin-kar/"
                  className="nav__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <Link to="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
            </ul>
          )}

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

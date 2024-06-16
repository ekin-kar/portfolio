import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { navItems, otherPageLinks } from "../../utils/constants.js";

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
        const sectionTop = section.offsetTop - 80;
        const sectionBottom = section.offsetTop + section.offsetHeight - 80;

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          currentSectionId = `#${section.id}`;
        }
      });

      setActiveNav(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveNav(id);
    setShowMenu(false);
  };

  const renderMainPageLinks = () => (
    <ul className="nav__list grid">
      {navItems.map(({ id, icon, label }) => (
        <li key={id} className="nav__item">
          <a
            href={id}
            onClick={() => handleNavClick(id)}
            className={activeNav === id ? "nav__link active-link" : "nav__link"}
          >
            <i className={`uil ${icon} nav__icon`}></i>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderOtherPageLinks = () => (
    <ul className="nav__list grid">
      {otherPageLinks.map(({ to, label, href, download, target, rel }) => (
        <li key={label} className="nav__item">
          {to ? (
            <Link to={to} className="nav__link">
              <i className="uil uil-estate nav__icon"></i>
              {label}
            </Link>
          ) : (
            <a
              href={href}
              className="nav__link"
              download={download}
              target={target}
              rel={rel}
            >
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Ekin
        </Link>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          {isMainPage ? renderMainPageLinks() : renderOtherPageLinks()}
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

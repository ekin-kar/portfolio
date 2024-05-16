import React from "react";
import "./footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ekin</h1>

        {isMainPage ? (
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#qualifications" className="footer__link">
                Qualifications
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>
        ) : (
          <Link to="/" className="footer__home footer__link">
            Back to Home
          </Link>
        )}
        <div className="footer__social">
          <a
            href="https://github.com/ekin-kar"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ekin-kar-9028a5194/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/ekinkarr/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; ekinkar</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ekin</h1>

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
        <div className="footer__social">
          <a
            href="https://www.instagram.com/ekinkarr/"
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
        <span className="footer__copy">&#169; Ekin Kar</span>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Frontend Developer Intern
                </h3>
                <span className="qualification__subtitle">Mava Software</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2023 - Oct 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer </h3>
                <span className="qualification__subtitle">GET Software</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2023 - Present
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  English Preparatory Program
                </h3>
                <span className="qualification__subtitle">
                  Mugla Sitki Kocman University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Computer Engineering (English)
                </h3>
                <span className="qualification__subtitle">
                  Mugla Sitki Kocman University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  Warsaw University of Technology (Erasmus)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Feb 2023 - July 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React from "react";
import CV from "../../assets/Kar_Ekin.pdf";
import CvIcon from "../icons/CvIcon";
import HandEmoji from "../icons/HandEmoji";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Ekin Kar
        <HandEmoji />
      </h1>
      <h2 className="home__subtitle">Frontend Developer</h2>
      <p className="home__description">
        Hi there, I'm Ekin, a frontend developer with 1 year of experience and a
        degree in computer engineering. My primary focus is on Next.js, React.js
        and Vue.js. In addition to these technologies, I am also skilled in
        Redux, PostgreSql, MongoDB, TailwindCSS, Shadcn and Material-UI.
      </p>
      <a download="" href={CV} className="button button--flex">
        Download CV
        <CvIcon />
      </a>
    </div>
  );
};

export default Data;

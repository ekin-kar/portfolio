import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="work" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__buttons">
        <a href={item.demo} target="_blank" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.code} target="_blank" className="work__button">
          Code <i className="bx bxl-github"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;

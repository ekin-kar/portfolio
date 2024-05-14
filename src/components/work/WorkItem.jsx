import React from "react";

const WorkItem = ({ item }) => {
  console.log(item);
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="work" className="work__img" />
      <div className="work__info__wrapper">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__img__wrapper">
          <strong className='techs'>Technologies: </strong>
          {item.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.image}
              alt={tech.name}
              className="work__tech-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;

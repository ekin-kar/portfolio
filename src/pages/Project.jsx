import React, { useState, useEffect } from "react";
import "./project.css";
import { useParams } from "react-router-dom";
import { projectsData } from "../components/work/Data";
import Layout from "../components/Layout";
const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const selectedProject = projectsData.find(
      (project) => project.id === parseInt(id)
    );
    setProject(selectedProject);
  }, [id]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.pics.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.pics.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!project || !project.pics || !project.pics.length) {
    return null;
  }

  return (
    <Layout>
      <div className="container section">
        <div className="project-info">
          <h1 className="title">{project.title}</h1>
          <div className="header__wrapper">
            <div className='category__wrapper'>
              <p>
                <strong>Category: </strong>
                {project.category
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
            </div>
            <div className="links__wrapper">
              {project.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="project-image mb-2">
            <button className="prev-button" onClick={handlePrevImage}>
              {"<"}
            </button>
            <img src={project.pics[currentImageIndex]} alt={project.title} />
            <button className="next-button" onClick={handleNextImage}>
              {">"}
            </button>
          </div>
          <div className="project-details">
            <h2 className="title">Project Overview:</h2>
            <p className="mb">{project.overview}</p>
            <h3 className="title">Technology Stack:</h3>
            <ul className="mb">
              {project.technologies.map((tech, index) => (
                <li key={index} className="iconlist mb-2">
                  <img src={tech.image} alt={tech.name} className="logo" />
                  <p>
                    <strong>{tech.name}</strong>: {tech.desc}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="title">Key Features:</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <strong>{feature.name}</strong>: {feature.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;

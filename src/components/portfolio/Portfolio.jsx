import React, { useState } from "react";
import "./portfolio.css";
import Project from "./project";


const Portfolio = () => {
  const [items, setItems] = useState(Project);
  const filterItem = (categoryItem) => {
    const updatedItems = Project.filter((currentItem) => {
      return currentItem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Featured Work</h2>

      <div className="project__filters">
        <span
          className="project__item"
          onClick={() => {
            setItems(Project);
          }}
        >
          Everything
        </span>
        <span
          className="project__item"
          onClick={() => {
            filterItem("Web App");
          }}
        >
          Web App
        </span>
        <span
          className="project__item"
          onClick={() => {
            filterItem("Mobile App");
          }}
        >
          Mobile App
        </span>
      </div>

      <div className="project__container grid">
        {items.map((item) => {
          return (
            <div className="project__card" key={item.id}>
              <div className="project__thumnail">
                <img src={item.image} alt="" className="project__image" />
                <div className="project__mask"></div>
              </div>

              <span className="project__category">{item.category}</span>
              <h3 className="project__title">{item.title}</h3>
              <h3 className="project__description">{item.description}</h3>
              <a href={item.link} className="project__button">
                <i className="icon-link project__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

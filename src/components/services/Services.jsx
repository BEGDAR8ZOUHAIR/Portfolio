import React from "react";
import "./services.css";
import Image1 from "../../assets/Web-Development.png";
import Image2 from "../../assets/UI-Design.png";

const Services = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "Web Development",
      description:
        "Client-focused, customer-centric, creating web-based software that delivers tangible business results",
    },
    {
      id: 2,
      image: Image2,
      title: "UI/UX Design",
      description:
        "Creating the most effective UI/UX solutions for users on the web and mobile platforms",
    },
  ];

  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map((eachData) => {
          return (
            <div className="services__card" key={eachData.id}>
              <img src={eachData.image} alt="" className="services__img" />
              <h3 className="services__title">{eachData.title}</h3>
              <p className="services__description">{eachData.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

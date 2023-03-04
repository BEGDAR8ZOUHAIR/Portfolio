import React from "react";
import "./resume.css";
import Experience from "./Experience";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline gird">
          {Experience.map((eachExperience) => {
            if (eachExperience.category === "education") {
              return (
                <Card
                  key={eachExperience.id}
                  icon={eachExperience.icon}
                  title={eachExperience.title}
                  year={eachExperience.year}
                  desc={eachExperience.description}
                />
              );
            }
          })}
        </div>

        <div className="timeline gird">
          {Experience.map((eachExperience) => {
            if (eachExperience.category === "work") {
              return (
                <Card
                  key={eachExperience.id}
                  icon={eachExperience.icon}
                  title={eachExperience.title}
                  year={eachExperience.year}
                  desc={eachExperience.description}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;

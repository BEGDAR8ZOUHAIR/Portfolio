import React from "react";
import "./about.css";
import Image from "../../assets/avatar-1.jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a Full-Stack Developer originally from Morocco . My expertise lies in developing web
              and mobile applications, and I have a strong passion for exploring
              the latest technologies and frameworks. This motivates me to take
              on new challenges and find innovative solutions for my clients.
              <br></br>
              <br></br>My approach is to build applications from scratch and
              bring ideas to life on the web. If you are searching for a
              dedicated and experienced Developer, please feel free to contact
              me.
            </p>
            <a
              href="CV_Zouhair Begdar-front-end.pdf"
              download="Zouhair Begdar.pdf"
              className="btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

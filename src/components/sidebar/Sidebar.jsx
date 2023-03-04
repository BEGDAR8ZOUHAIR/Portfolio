import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo"></a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#project" className="nav__link">
                  <i className="icon-folder-alt"></i>
                </a>
              </li>

              {/* <li className="nav__item">
                <a href="#testimonials" className="nav__link">
                  <i className="icon-speech"></i>
                </a>
              </li> */}

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubbles"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;

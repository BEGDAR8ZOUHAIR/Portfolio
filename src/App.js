import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Github from "./components/Github";
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Github />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;

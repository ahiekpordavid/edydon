import React from "react";
import "./page.css";
import Slide from "../components/Slide";
import About from "../components/About";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Gallary from "../components/Gallary";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Slide />
      <About/>
      <Services/>
      <Testimonial/>
      <Gallary/>
      <Contact/>
    </div>
  );
};

export default Home;

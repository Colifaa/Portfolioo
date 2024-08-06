import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, Testimonial, Information, Service } from "../../components";
import ParticlesBg from "../../components/BgParticles/BgParticles";

const Home = () => {
  return (
    <div className="pt-16">

      <Banner />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;

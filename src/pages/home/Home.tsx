import React from "react";

import Hero from "./sections/hero/Hero";
import News from "./sections/news/News";
import Feature from "./sections/feature/Feature";
import BootCampDesc from "./sections/bootCampDesc/BootCampDesc";
import BrandBuilding from './sections/brandBuilding/BrandBuilding';
import Experience from "./sections/experience/Experience";
import ProgramInfo from "./sections/programInfo/ProgramInfo";
import Courses from "./sections/Courses/Courses";
import FeedBack from "./sections/feedBack/FeedBack";
import Team from "./sections/team/Team";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home: React.FC = () =>{
  return (
    <React.Fragment>
      <Hero />
      <News />
      <Feature />
      <BootCampDesc />
      <BrandBuilding />
      <Experience />
      <ProgramInfo />
      <Courses />
      <FeedBack />
      <Team />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default Home
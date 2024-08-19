import React from "react";
import HeroMedia from "./HeroMedia";
import HeroContent from "./HeroContent";
import backgroundImage from "../../../../assets/background-image2.png";
import "./Hero.css";

const Hero: React.FC = () => {
  
  const style = {
    backgroundColor: "#f0f0f0",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <section style={style} className="hero flex flex-col mx-auto mb-10">
      <div className="w-11/12 lg:w-4/5 hero-content mx-auto flex align-baseline flex-col lg:flex-row">
        <HeroContent />
        <HeroMedia />
      </div>
    </section>
  )
};

export default Hero;

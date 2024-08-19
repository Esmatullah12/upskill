import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import featureImage from "../../../../assets/feature-image.webp";
import backgroundImage from "../../../../assets/background-image.jpg";

const Feature: React.FC = () => {
  const style: React.CSSProperties = {
    backgroundColor: "#f0f0f0",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={style}
      className="w-11/12 lg:w-4/5 mx-auto text-center border rounded-2xl mb-16 py-6 lg:flex lg:flex-row lg:gap-10 lg:px-10 lg:items-center"
    >
      <div className="lg:w-3/6 lg:text-left font-light">
        <h3 className="text-3xl mb-3 lg:text-5xl">
          Make an impact on the future
        </h3>
        <p className="text-sm mb-2">
          Tomorrow’s pioneers need your knowledge. As an Author, you’ll empower
        </p>
        <p className="text-sm mb-2">
          individuals to boost their career and enable tech teams—from small
        </p>
        <p className="text-sm mb-8">
          businesses to enterprises—to deliver innovations.
        </p>
        <button
          className="btn mb-6 mx-auto lg:mx-0 flex items-center gap-2 px-7 py-4 text-sm text-white rounded-full"
          aria-label="Contact Us"
        >
          <FaPhoneAlt /> Contact Us
        </button>
      </div>
      <div className="flex justify-center lg:w-3/6 lg:order-first">
        <img
          className="ml-4 w-8/12"
          src={featureImage}
          alt="Feature illustration showing the impact on the future"
        />
      </div>
    </div>
  );
};

export default Feature;

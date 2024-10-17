import React from "react";
import backgroundImage from "../assets/background-image2.png";

interface CourseCardProps {
  imagePath: string;
  title: string;
  text: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ imagePath, title, text }) => {
  return (
    <div className="relative overflow-hidden group course-card border p-5 rounded-xl mb-5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          className="rounded-xl mb-5"
          src={imagePath}
          alt="upskill course image"
        />
        <h4 className="text-2xl mb-2">{title}</h4>
        <p className="text-sm secondary-text-color font-light">{text}</p>
      </div>
    </div>
  );
};

export default CourseCard;

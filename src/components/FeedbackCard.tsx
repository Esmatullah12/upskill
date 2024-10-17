import React from "react";
import backgroundImage from "../assets/background-image2.png";

interface FeedbackCardProps {
  feedback: string;
  imgPath: string;
  name: string;
  jobTitle: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  feedback,
  imgPath,
  name,
  jobTitle,
}) => {
  return (
    <div className="relative overflow-hidden group rw-full p-8 border rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 flex flex-col">
        <p className="mb-6 text-sm font-light secondary-text-color">
          {feedback}
        </p>
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={imgPath}
            alt={name}
          />
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm font-light secondary-text-color">
              {jobTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

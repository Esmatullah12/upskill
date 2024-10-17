import React from "react";

interface DescPointProps {
  title: string;
  descText: string;
  imgPth: string
}

const DescPoint: React.FC<DescPointProps> = ({title, descText, imgPth}) => {
  return (
    <div className="main-point mx-auto flex gap-7 mb-8 lg:mb-3">
      <img className="w-11 h-11 mt-1" src={imgPth} alt="" />
      <div className="info">
        <p className="text-xl font-medium mb-2">{title}</p>
        <p className="text-sm secondary-text-color">{descText}</p>
      </div>
    </div>
  );
};

export default DescPoint;

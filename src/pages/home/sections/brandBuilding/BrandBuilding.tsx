import React from "react";
import { FaPencilAlt, FaBookReader, FaAddressCard } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import BrandCard from "../../../../components/BrandCard";
import CustomButton from "../../../../components/CustomButton";

const cardData = [
  {
    title: "Technical interview preparation",
    cardDesc:
      "Our program provides comprehensive technical interview preparation to help you succeed in job interviews.",
    icon: <FaPencilAlt />,
  },
  {
    title: "Design",
    cardDesc:
      "Our design training offers hands-on experience and practical skills to help you excel in the creative industry.",
    icon: <FaBookReader />,
  },
  {
    title: "Website",
    cardDesc:
      "We teach you how to create stunning and functional websites, from design to deployment.",
    icon: <FaEarthAmericas />,
  },
  {
    title: "Resume Development",
    cardDesc:
      "Our resume development program helps you craft a professional and impactful resume that stands out to employers.",
    icon: <FaAddressCard />,
  },
];

const BrandBuilding: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-4/5 brand-building text-center mx-auto mb-14 lg:mb-20">
      <h3 className="text-3xl mb-6">Build your brand</h3>
      <p className="text-sm font-light mb-4 secondary-text-color">
        Get your name in front of a global audience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  flex-grow gap-5">
        {cardData.map((card, index) => (
          <BrandCard
            key={index}
            title={card.title}
            cardDesc={card.cardDesc}
            icon={card.icon}
          />
        ))}
      </div>
      <CustomButton
        text="All Features"
        padding="px-8 py-3"
        fontSize="text-sm"
      />
    </div>
  );
};

export default BrandBuilding;

import React from "react";
import ExperienceCard from "../../../../components/ExperienceCard";
import CustomButton from "../../../../components/CustomButton";
import experienceImg from "../../../../assets/experience-img.webp";
import backgroundImage from "../../../../assets/background-image.jpg";


const experienceCardData = [
  {
    title: "Career-Change",
    text: "Unlock your potential Learn tech skills today",
  },
  {
    title: "Fresh Graduates",
    text: "Preparing tech enabled fresh graduates for the IT industry",
  },
  {
    title: "Professional Mentor",
    text: "Become a mentor: share your expertise and inspire growth.",
  },
  {
    title: "Localized curriculum",
    text: "Localized curriculum tailored to meet regional needs and standards.",
  },
];

const Experience: React.FC = () => {

  const style: React.CSSProperties = {
    backgroundColor: "#f0f0f0",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mb-16 lg:flex gap-8 lg:mb-28">
      <div className="left text-center lg:text-left">
        <h1 className="text-4xl mb-4">A life-changing experience</h1>
        <p className="text-sm mb-12 secondary-text-color">
          Learn the technical skills and mindset for a thriving career in the
          digital economy via interactive online sessions, a robust community of
          peers, dedicated instructors, and international mentors. We help
          displaced and underserved talent to reskill and build sustainable
          careers in the digital economy.
        </p>
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {experienceCardData.map((card) => (
            <ExperienceCard title={card.title} text={card.text} />
          ))}
        </div>
        <CustomButton
          text="All Features"
          padding="px-8 py-3"
          fontSize="text-sm"
        />
      </div>
      <div style={style} className="right p-8 rounded-2xl mt-8 lg:mt-2">
        <img className="w-full rounded-xl" src={experienceImg} alt="experience Image" />
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import ProgramInfoCard from "../../../../components/ProgramInfoCard";
import CustomButton from "../../../../components/CustomButton";
import { SlPencil } from "react-icons/sl";
import { GoGear } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi2";
import { PiFlagLight } from "react-icons/pi";

const CardData = [
  {
    icon: <SlPencil />,
    title: "Expert Tutor",
    text: "Learn from expert tutors who bring extensive experience and deep knowledge to guide your learning journey.",
  },
  {
    icon: <GoGear />,
    title: "Updated Material",
    text: "Access updated material to ensure you stay current with the latest industry trends and best practices.",
  },
  {
    icon: <HiOutlineHome />,
    title: "Lifetime Access",
    text: "Enjoy lifetime access to all course materials and resources, allowing you to revisit and refresh your skills anytime you need.",
  },
  {
    icon: <PiFlagLight />,
    title: "Weekly Bootcamp",
    text: "Join our weekly bootcamp for consistent, focused learning and hands-on practice.",
  },
];

const ProgramInfo: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto program-info text-center mb-24 grid lg:grid-cols-2 gap-8 lg:mb-18">
      <div className="program-ifno mb-14">
        <h3 className="text-4xl text-black font-medium mb-6">
          What makes the program unique?
        </h3>
        <p className="mb-6 text-sm secondary-text-color leading-loose font-light">
          Completing our Learn to Earn training program empowers college
          students with versatile digital proficiencies, enabling them to seize
          high-potential opportunities for income generation. Moreover, they
          gain a solid understanding of technology, propelling them toward a
          rewarding path in the ever-evolving field of IT.
        </p>
        <p className="text-sm secondary-text-color leading-loose font-light">
          Why Upskill Bootcamp? <br />
          Afghanistan is brimming with young IT talent and our tech companies
          are raising the bar high with soaring IT exports! But still a
          disconnect exists between what the IT companies are looking for and
          what the universities are producing. For our IT sector to reach its
          full potential, it is necessary that we equip our fresh tech-graduates
          with skills that not only enable them to enter the market but also add
          value to the industry as a whole.
        </p>
      </div>
      <div className="program-card">
        <div className="grid lg:grid-cols-2">
          {CardData.map((card) => (
            <ProgramInfoCard
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
        <CustomButton
          text={"Get Started"}
          fontSize="text-sm"
          padding="px-9 p-3"
        />
      </div>
    </div>
  );
};

export default ProgramInfo;

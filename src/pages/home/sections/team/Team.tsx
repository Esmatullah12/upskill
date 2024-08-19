import React from "react";
import CustomButton from "../../../../components/CustomButton";
import TeamCard from "../../../../components/TeamCard";

import teamImg1 from "../../../../assets/team-img1.webp";
import teamImg2 from "../../../../assets/team-img2.webp";
import teamImg3 from "../../../../assets/team-img3.webp";
import teamImg4 from "../../../../assets/team-img4.webp";

const cardData = [
  {
    imgPath: teamImg1,
    name: "Said shah Ahmadi",
    position: "CEO /  FOUNDER",
    facebookLink: "facebook.com",
    twitterLink: "x.com",
    linkedinLink: "linkedin.com",
  },
  {
    imgPath: teamImg2,
    name: "khalilrahmannoori",
    position: "General Manager",
    facebookLink: "facebook.com",
    twitterLink: "x.com",
    linkedinLink: "linkedin.com",
  },
  {
    imgPath: teamImg3,
    name: "Rizvan Murad",
    position: "Finance Officer",
    facebookLink: "facebook.com",
    twitterLink: "x.com",
    linkedinLink: "linkedin.com",
  },
  {
    imgPath: teamImg4,
    name: "Shah Jahan",
    position: "Senior Creative Designer",
    facebookLink: "facebook.com",
    twitterLink: "x.com",
    linkedinLink: "linkedin.com",
  },
];

const Team: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto team text-center mb-10">
      <div className="team-info mb-10 lg:text-left lg:flex justify-between lg:items-center">
        <div>
          <div className="h3 text-4xl mb-6">Meet Our Team</div>
          <p className="text-sm font-light secondary-text-color mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            tincidunt velit. Donec bibendum turpis vitae maximus bibendum.
          </p>
        </div>
        <CustomButton
          text="View More"
          fontSize="text-sm font-light"
          padding="px-9 p-3"
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {cardData.map((card) => (
          <TeamCard
            imgPath={card.imgPath}
            name={card.name}
            position={card.position}
            facebookLink={card.facebookLink}
            twitterLink={card.twitterLink}
            linkedinLink={card.linkedinLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

interface TeamCardProps {
  imgPath: string;
  name: string;
  position: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  imgPath,
  name,
  position,
  facebookLink,
  twitterLink,
  linkedinLink,
}) => {
  return (
    <div className="team-card border p-4 rounded-xl mb-5 hover:border-indigo-400">
      <img className="rounded-xl mb-2" src={imgPath} alt="team card image" />
      <p className="text-xl">{name}</p>
      <p className="font-extralight secondary-text-color text-base mb-6">{position}</p>
      <div className="social-media-link flex gap-3 w-fit mx-auto">
        <a className="p-2 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]" href={facebookLink}>
          <IoLogoFacebook />
        </a>
        <a className="p-2 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]" href={twitterLink}>
          <IoLogoTwitter />
        </a>
        <a className="p-2 bg-primary-color rounded-full text-white transform transition-transform duration-500 hover:translate-y-[-10px]" href={linkedinLink}>
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;

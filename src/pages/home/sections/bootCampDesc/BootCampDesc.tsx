import React from "react";
import DescPoint from "../../../../components/DescPoint";

import descImg1 from '../../../../assets/asset-image1.webp'
import descImg2 from '../../../../assets/asset-image2.webp'
import descImg3 from '../../../../assets/asset-image3.webp'


const cardData =  [
  { title: 'Hands-on, face-to-face training',
    descText: 'Hands-on, face-to-face training offers an engaging and interactive learning experience.',
    imgPath: descImg1
  },
  {
    title: 'Industry driven curriculum, real world projects',
    descText: 'Our industry-driven curriculum, combined with real-world projects, ensures you gain practical skills and experience.',
    imgPath: descImg2
  },
  {
    title: 'Intensive technical and culture fit interview preparation',
    descText: "Our program offers intensive preparation for both technical and culture fit interviews, ensuring you're ready for every aspect of the hiring process.",
    imgPath: descImg3
  }
  
]

const BootCampDesc: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mb-20 lg:flex items-center gap-8">
      <div className="text-center mb-8 lg:text-left lg:w-1/2">
        <h3 className="text-3xl mb-6 lg:text-5xl">Supplement your income</h3>
        <p className="text-sm mb-5 font-light secondary-text-color">
          Join the bootcamp at our state-of-the-art corporate training facility,
          specifically designed to equip talent for the digital economy. Dive
          into the world of tech education and earn while you teach. Share your
          hard-earned expertise with eager learners and get rewarded for your
          contribution.
        </p>
        <p className="text-sm font-light secondary-text-color">
          This is your opportunity to help shape the future of tech while being
          compensated for your valuable knowledge.
        </p>
      </div>
      <div className="lg:w-1/2">
        {cardData.map(card => (
          < DescPoint title={card.title} descText={card.descText} imgPth={card.imgPath}/>
        ))}
      </div> 
    </div>
  );
};

export default BootCampDesc;

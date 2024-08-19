import React, { ReactNode } from 'react';
import backgroundImage from "../assets/background-image.jpg";


interface BrandCardProps {
  title: string;
  cardDesc: string;
  icon: ReactNode;
}

const BrandCard: React.FC<BrandCardProps> = ({ title, cardDesc, icon }) => {
  return (
    <div className="relative overflow-hidden group border rounded-lg p-8 mb-6 lg:flex-1">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="icon mx-auto text-2xl border p-3 text-center w-12 h-12 rounded-lg mb-6 text-purple-600 bg-white">{icon}</div>
        <h4 className='text-xl mb-4'>{title}</h4>
        <p className='text-sm'>{cardDesc}</p>
      </div>
    </div>
  );
}

export default BrandCard;

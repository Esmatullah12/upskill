import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import heroImage from "../../../../assets/hero-image.webp";
import "./Hero.css";

const HeroMedia: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto">
      <div className="hero-content hero-image px-14 py-3 rounded-lg mx-auto">
        <img src={heroImage} alt="Hero" className="px-6 py-3 bg-ight-white rounded-xl" />
        <div className="play-btn" onClick={openModal}>
          <IoPlay /> 
        </div>
      </div>

      {isModalOpen && (
        <div className="overlay">
          <div className="content">
            <button className="close-btn" onClick={closeModal}>
              <IoMdClose />
            </button>
            <iframe
              className="video"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroMedia;

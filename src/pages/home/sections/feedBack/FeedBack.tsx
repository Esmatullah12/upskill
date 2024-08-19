import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1Path from "../../../../assets/std-image1.webp";
import image2Path from "../../../../assets/std-image2.webp";
import image3Path from "../../../../assets/std-image3.webp";
import image4Path from "../../../../assets/std-image4.webp";
import FeedbackCard from "../../../../components/FeedbackCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperCustom.css'; 

const cardData = [
  {
    text: "upskill Bootcamps is one of the best training programs I've experienced. The hands-on approach and expert instructors made a huge difference in my learning journey and career growth.",
    imgPath: image1Path,
    name: "Noman",
    jobTitle: "Student",
  },
  {
    text: "Upskill Bootcamps provided me with the skills and confidence I needed to excel in front-end development. The training was thorough and practical, setting me up for success in my career.",
    imgPath: image2Path,
    name: "Sayed Naeen",
    jobTitle: "Student",
  },
  {
    text: "The graphic design program at Upskill Bootcamps has been incredibly valuable. I’ve gained practical skills and creative insights that are helping me excel in my studies and projects",
    imgPath: image3Path,
    name: "Zakirullah Aminy",
    jobTitle: "Student",
  },
  {
    text: "The financial accounting program at Upskill Bootcamps was outstanding. The practical lessons and detailed instruction have greatly enhanced my understanding of accounting and improved my professional skills",
    imgPath: image4Path,
    name: "Fahim",
    jobTitle: "Student",
  }
];

const FeedBack: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mb-20">
      <div className="feedbackInfo text-center mb-6">
        <h3 className="text-4xl mb-6">What Our Students Say</h3>
        <div className="text-sm font-light secondary-text-color lg:w-1/2 mx-auto">
          Hear directly from our students about their experiences and successes
          with our programs. Discover how our training has helped them achieve
          their goals and advance their careers.
        </div>
      </div>
      <Swiper
      className="pb-12"
      modules={[ Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        200:{
          slidesPerView: 1,
        },
        640: { 
          slidesPerView: 2,
        },
        1024: { 
          slidesPerView: 3,
        },
      }}
      >
        {cardData.map(card => (
          <SwiperSlide>
          <FeedbackCard
            feedback={card.text}
            imgPath={card.imgPath}
            name={card.name}
            jobTitle={card.jobTitle}
          />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBack;

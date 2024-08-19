import React from "react";
import CourseCard from "../../../../components/CourseCard";

import CustomButton from "../../../../components/CustomButton";
import cardImg1 from "../../../../assets/course-card-img1.webp";
import cardImg2 from "../../../../assets/course-card-img2.webp";
import cardImg3 from "../../../../assets/course-card-img3.webp";
import cardImg4 from "../../../../assets/course-card-img4.webp";
import cardImg5 from "../../../../assets/course-card-img5.webp";
import cardImg6 from "../../../../assets/course-card-img6.webp";
import cardImg7 from "../../../../assets/course-card-img7.webp";
import cardImg8 from "../../../../assets/course-card-img8.webp";

const cardData = [
  {
    imgPath: cardImg1,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg2,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg3,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg4,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg5,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg6,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg7,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
  {
    imgPath: cardImg8,
    title: "Front-End Web Development Bootcamp",
    text: "Front-End Web Development Bootcamp: Choose between our 6-month or 3-month program to master essential front-end languages including HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, and Bootstrap, along with tools like GitHub and Figma. Build dynamic, user-friendly websites with cutting-edge technologies.",
  },
];

const Courses: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto courses mb-20">
      <div className="course-info text-center lg:text-left lg:items-center lg:flex justify-between">
        <div>
          <h3 className="text-4xl mb-4">Explore Our Courses</h3>
          <p className="text-sm secondary-text-color mb-6">
            We deliver thoughtfully curated, multi-disciplinary programs both
            online and on-campus at our training centers across the country.
          </p>
        </div>
        <CustomButton
          text="See All Courses"
          fontSize="text-sm"
          padding="px-9 py-3"
        />
      </div>
      <div className="course-cards mt-10 grid lg:grid-cols-2 gap-5">
        {cardData.map((card, index) => (
          <CourseCard
            key={index}
            imagePath={card.imgPath}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;

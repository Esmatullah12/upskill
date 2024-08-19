import React from "react";
import newsImage from '../../../../assets/news-image.webp';

const News: React.FC = () => {
  return(
    <div className="w-11/12 mx-auto news text-center mb-24">
      <h2 className="text-4xl mb-4 lg:text-5xl lg:w-4/6 lg:mx-auto">Exciting News from Upskill & CEO Club Afghanistan!</h2>
      <p className="font-light secondary-text-color mb-4 lg:w-96 lg:mx-auto">We’re launching 100+ Tech and Non-Tech Training Programs for Afghan youth! Our 6-month bootcamps provide hands-on IT training and job placement support to help participants succeed in today's job market.</p>
      <button className="text-white btn text-xl mb-5 px-12 py-4 rounded-full">Register Now</button>
      <img className="w-9/12 m-auto max-w-xl" src={newsImage} alt="upskill news image" />
    </div>
  )
}

export default News
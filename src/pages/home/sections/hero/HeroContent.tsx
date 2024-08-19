import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

import "./Hero.css";

const HeroContent: React.FC = () => {
  const weeksRef = useRef<HTMLSpanElement>(null);
  const hoursRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);

      if (weeksRef.current) {
        new CountUp(weeksRef.current, 24, {
          startVal: 0,
          duration: 4,
          useEasing: false,
          useGrouping: false,
          separator: ",",
        }).start();
      }
      if (hoursRef.current) {
        new CountUp(hoursRef.current, 360, {
          startVal: 0,
          duration: 4,
          useEasing: false,
          useGrouping: false,
          separator: ",",
        }).start();
      }
    }
  });

 

  return (
    <section className="w-full hero-content py-8 mx-auto">
      <h1 className="text-4xl mb-4 lg:text-7xl">
        Preparing Young Tech Talent of Afghanistan
      </h1>
      <p className="hero-desc text-sm font-light mb-4 text-stone-500">
        Join UpSkill’s immersive 6-month bootcamps, available both in-person and
        online. Get hands-on IT training, face-to-face learning, and job
        placement services to launch your career in Front End Development,
        Graphic Designing, UI/UX Designing, Financial Accounting, and CIT/DIT.
      </p>
      <p className="hero-desc text-base font-light mb-4 text-stone-500">
        Changing Afghanistan’s Next Generation by Creating Developers,
        Designers, and Accountants.
      </p>
      <a
        className="btn rounded-full px-7 py-3 text-white inline-block mb-6"
        href="#"
      >
        Apply Now
      </a>
      <div className="lg:flex gap-8 justify-center gap-y-5 lg:justify-start">
        <div className="bg-ight-white mb-6 mx-auto p-7 rounded-lg w-8/12  flex flex-col justify-center">
          <h3 className="text-4xl lg:text-4xl font-medium text-center">
            <span ref={weeksRef}>0</span> +
          </h3>
          <p className="text-sm text-center">Weeks Bootcamp</p>
        </div>
        <div className="bg-ight-white mb-6 p-7 w-8/12 mx-auto rounded-lg flex flex-col justify-center">
          <h3 className="text-4xl lg:text-4xl font-medium text-center">
            <span ref={hoursRef}>0</span> h
          </h3>
          <p className="text-sm text-center">hours of hands-on experience</p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;

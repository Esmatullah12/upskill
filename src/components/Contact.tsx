import React from "react";
import CustomButton from "./CustomButton";
import backgroundImage from "../assets/background-image.jpg";


const Contact: React.FC = () => {
  const style: React.CSSProperties = {
    backgroundColor: "#f0f0f0",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={style} className="w-11/12 lg:w-4/5 mx-auto text-center border rounded-xl p-10 mb-16">
      <h3 className="text-4xl mb-6 lg:text-5xl">Ready to start learning? Contact us!</h3>
      <p className="text-sm font-light mb-8 mx-">
        Get in touch to begin your journey with our expert-led programs and take
        the next step towards achieving your goals!
      </p>
      <div className="flex gap-6 justify-center">
        <CustomButton
          text="Contact Us"
          fontSize="text-sm font-light"
          padding="px-9 p-3"
        />
        <CustomButton
          text="Send Email"
          fontSize="text-sm font-light"
          padding="px-9 p-3"
        />
      </div>
    </div>
  );
};

export default Contact;

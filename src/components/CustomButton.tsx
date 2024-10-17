import React from 'react';
import './CustomButton.css'

interface ButtonProps {
  text: string;
  padding?: string;
  fontSize?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, padding = 'py-2 px-4', fontSize = 'text-base', onClick }) => {
  return (
    <button
      className={`${padding} ${fontSize} btn rounded-full text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;

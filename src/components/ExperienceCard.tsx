import React from 'react';

interface ExperienceCardProps {
  title: string,
  text: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({title, text}) => {
  return(
    <div className="experience-card mb-10">
       <h5 className='text-2xl primary-text-color mb-2'>{title}</h5>
       <p className='text-sm font-light secondary-text-color'>{text}</p>
    </div>
  )
}

export default ExperienceCard
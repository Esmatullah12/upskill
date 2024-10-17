import React, {ReactNode} from 'react';

interface ProgramInfoProps {
  title: string,
  text: string,
  icon: ReactNode
}

const ProgramInfoCard: React.FC<ProgramInfoProps> = ({title, text, icon}) =>{
  return(
    <div className="program-info-card mb-10">
      <div className="mx-auto border flex align-bottom pt-3 justify-center text-white text-3xl font-extralight text-center w-14 h-14 rounded-lg mb-6 bg-primary-color">{icon}</div>
      <h4 className='text-2xl text-black font-normal'>{title}</h4>
      <p className='text-sm font-light secondary-text-color'>{text}</p>
    </div>
  )
}

export default ProgramInfoCard
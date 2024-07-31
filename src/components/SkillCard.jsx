
import React from 'react';
import java from '../assets/Java.png';
import spring from '../assets/spring.png';
import js from '../assets/js.png';
import reactLogo from '../assets/react.png';
import mysql from '../assets/mysql.png';
import go from '../assets/go.svg';
import git from '../assets/git.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';
import ml from '../assets/ml.png'

const skills = [
  { name: 'Java', image: java },
  { name: 'Spring', image: spring },
  {name:'Machine Learning',image:ml},
  { name: 'JavaScript', image: js },
  { name: 'React', image: reactLogo },
  { name: 'MySQL', image: mysql },
  { name: 'Go', image: go },
  { name: 'Git', image: git },
  { name: 'Tailwind', image: tailwind },
  { name: 'Python', image: python },
];

const SkillCard = () => {
  return (
    <>
    
    
   <div className='m-12'>
    <div><center><h2 className='text-whitenew font-normal text-3xl md:text-6xl '>Skills</h2></center></div>
    <div className='h-[100%] bg-background flex items-center justify-center mt-12'>
        
        
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-shadowBg rounded-xl flex flex-col hover:bg-yellow justify-center items-center p-6 md:h-64 w-full md:w-64 mx-auto'>
              <img className='h-16 w-16 md:h-24 md:w-24 object-contain' src={skill.image} alt={skill.name} />
              <h3 className='text-lg md:text-3xl font-normal text-whitenew mt-2'>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
   </div>
    </>
  );
};

export default SkillCard;

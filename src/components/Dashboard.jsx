import React from 'react'
import SkillCard from './SkillCard'
import Navbar from './Navbar'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import code from '../assets/code.jpg'
import designer from '../assets/bgmmpremium.png'
import Work from './Work'
function Dashboard() {
  return (
    <>
    <Navbar/>
      <div className=' bg-background'>
      {/* <Navbar/>
      <About/>
      <div><center className='text-5xl mb-28 text-whitenew'>My Skills</center></div>
        <SkillCard/>
        <Experience/> */}

<div className='h-96 md:mx-32'>
        <div className='flex mx-12 mt-48 justify-between'>
           
      <div class="flex flex-col sm:flex-row items-center">
  <div class="sm:w-1/2">
    
  <div class="flex items-center">
  <h1 class="font-semibold text-3xl text-whitenew mr-4">I'am</h1>
  <h2 class="text-5xl text-yellow">Aryan Dwivedi</h2>
</div>

    
    
    <h3 class=" text-3xl text-white font-bold">Software Enginner</h3>
    <div class="mt-5">
     <a  href='#contact'> <button class="border-4 border-yellow rounded-lg  text-whitenew text-xl font-bold px-8 py-2 bg-navColor">Contact Me</button></a>
    </div>
  </div>
  <div class="sm:w-1/2 lg:w-1/2 ">
    <img class="hidden lg:block object-cover h-60 w-96 rounded-lg mr-48" src={designer} alt=""/>
  </div>
</div>


    </div>
    </div>
    <About/>
    <SkillCard />
    <Work/>
    <Experience/>
        <Contact/>
        </div>  
    </>
  )
}

export default Dashboard

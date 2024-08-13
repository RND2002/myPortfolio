import React, { useState } from 'react'
import { CgMenuHotdog,CgClose } from "react-icons/cg";
import logo from '../assets/logo2.png'
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  const [showNav,setShowNav]=useState(false)
  return (
    <div className='h-28 bg-background flex justify-around'>
        <div><img className='mt-10 w-12' src={logo} alt=''/></div>
        <div className='md:hidden mt-12'>
          {
            showNav ?(
              <CgClose className='text-white text-2xl cursor-pointer block' size={32} onClick={()=>setShowNav(!showNav)}/>
            ):(
             < CgMenuHotdog className='text-white text-2xl cursor-pointer block' size={32} onClick={()=>setShowNav(!showNav)}/>
            )
          }
          </div>
          <div className={`${ showNav ? 'block' : 'hidden'} md:hidden bg-shadowBg z-10 absolute top-24 w-full `}>
          
          <div className='flex flex-col justify-center items-center sm:items-stretch sm:justify-start'>
          <div className='flex flex-col sm:flex-row justify-center items-center'>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='#about'>About</a>
  </span>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='#portfolio'>Portfolio</a>
  </span>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='#contact'>Contact</a>
  </span>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='https://drive.google.com/file/d/1jqc03ccnKkr7qaAnXHkDarM5LYMW8XSK/view?usp=drivesdk'>Resume</a>
  </span>
</div>

            
          </div>
          </div>
        <div className='mt-12 ml-16 hidden md:block'>
        
          
         
          
        <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='#about'>About</a>
  </span>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='#portfolio'>Portfolio</a>
  </span>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='#contact'>Contact</a>
  </span>
  <span className='text-whitenew font-sans font-normal text-lg m-6'>
    <a className='cursor-pointer hover:text-gray-400' href='https://drive.google.com/file/d/1hm6u6ZVok1EAlURTwTHiPE3u1mMbfYAB/view?usp=drivesdk'>Resume</a>
  </span>
        </div>
        <div className='mt-12 hidden md:block relative'>
  <input className='p-2 pl-10 rounded-md bg-shadowBg text-whitenew' type='text' placeholder='Search' />
  <IoIosSearch className='absolute top-2 left-2 text-white' size={20} />
</div>
    </div>
  )
}

export default Navbar
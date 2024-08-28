import React from "react";
import SkillCard from "./SkillCard";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

import designer from "../assets/bgmmpremium.png";
import Work from "./Work";
function Dashboard() {
  return (
    <>
      <Navbar />
      <div className=" bg-background">
        {/* <Navbar/>
      <About/>
      <div><center className='text-5xl mb-28 text-whitenew'>My Skills</center></div>
        <SkillCard/>
        <Experience/> */}

        <div className="h-96 md:mx-32">
          <div className="flex mx-12 mt-48 justify-between">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2">
                <div className="flex items-center">
                  <h1 className="font-semibold text-3xl text-whitenew mr-4">
                    I'am
                  </h1>
                  <h2 className="text-5xl text-yellow">Aryan Dwivedi</h2>
                </div>

                <h3 className=" text-3xl text-white font-bold">
                  Software Engineer
                </h3>
                <div className="mt-5">
                  <a href="#contact">
                    {" "}
                    <button className="border-4 border-yellow rounded-lg  text-whitenew text-xl font-bold px-8 py-2 bg-navColor">
                      Contact Me
                    </button>
                  </a>
                </div>
              </div>
              <div className="sm:w-1/2 lg:w-1/2 ">
                <img
                  className="hidden lg:block object-cover h-60 w-96 rounded-lg mr-48"
                  src={designer}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <About />
        <SkillCard />
        <Work />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default Dashboard;




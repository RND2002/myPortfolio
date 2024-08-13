// import React from "react";
// import SkillCard from "./SkillCard";
// import Navbar from "./Navbar";
// import About from "./About";
// import Experience from "./Experience";
// import Contact from "./Contact";
// import code from "../assets/code.jpg";
// import designer from "../assets/bgmmpremium.png";
// import Work from "./Work";
// function Dashboard() {
//   return (
//     <>
//       <Navbar />
//       <div className=" bg-background">
//         {/* <Navbar/>
//       <About/>
//       <div><center className='text-5xl mb-28 text-whitenew'>My Skills</center></div>
//         <SkillCard/>
//         <Experience/> */}

//         <div className="h-96 md:mx-32">
//           <div className="flex mx-12 mt-48 justify-between ">
//             <div class=" flex-row justify-center items-center">
//               <div class="sm:w-1/2">
//                 <div class="flex items-center">
//                   <h1 class="font-semibold text-3xl text-whitenew mr-4">
//                     I'am
//                   </h1>
//                   <h2 class="text-5xl text-yellow">Aryan Dwivedi</h2>
//                 </div>

//                 <h3 class=" text-3xl text-white font-bold">
//                   Software Engineer
//                 </h3>
//                 <div class="mt-5">
//                   <a href="#contact">
//                     {" "}
//                     <button class="border-4 border-yellow rounded-lg  text-whitenew text-xl font-bold px-8 py-2 bg-navColor">
//                       Contact Me
//                     </button>
//                   </a>
//                 </div>
//               </div>
//               <div class="sm:w-1/2 lg:w-1/2 ">
//                 <img
//                   class="hidden lg:block object-cover h-60 w-96 rounded-lg mr-48"
//                   src={designer}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <About />
//         <SkillCard />
//         <Work />
//         <Experience />
//         <Contact />
//       </div>
//     </>
//   );
// }

// export default Dashboard;
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
      <div className="bg-background">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center ">
          <div className="flex flex-col sm:w-1/2 md:w-full md:flex-row items-center justify-center">
            <div className="text-center md:text-left md:w-1/2">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <h1 className="font-semibold text-3xl text-whitenew mr-4">
                  I'm
                </h1>
                <h2 className="text-5xl text-yellow">Aryan Dwivedi</h2>
              </div>
              <h3 className="text-3xl text-white font-bold">
                Software Engineer
              </h3>
              <div className="mt-5">
                <a href="#contact">
                  <button className="border-4 border-yellow rounded-lg text-whitenew text-xl font-bold px-8 py-2 bg-navColor">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img
                className="object-cover h-60 w-96 rounded-lg"
                src={designer}
                alt="Designer Image"
              />
            </div>
          </div>
        </div>

        {/* Other Sections */}
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

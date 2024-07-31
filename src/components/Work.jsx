import React from "react";
import "./Work.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import quiz from "../assets/quiz.png";
import education from "../assets/educatio.png";
import social from "../assets/social-media.png";
import bank from "../assets/bank1.png";

const projects = [
  {
    name: "Social Media Platform",
    image: social,
    description:
      "A social media platform for connecting with friends, sharing updates, and more.",
    link: "https://github.com/RND2002/voyage-fullstack",
  },
  {
    name: "Education Platform",
    image: education,
    description:
      "An online learning platform for students where they can share and download resources lectures and files.",
    link: "https://github.com/RND2002/education-platoform-fullstack",
  },
  {
    name: "Quiz App",
    image: quiz,
    description:
      "An interactive quiz application with various categories and difficulty levels.",
    link: "https://github.com/RND2002/Quiz-app-fullstack",
  },
  
  {
    name: "Desktop Banking System",
    image: bank,
    description:
      "A secure and robust banking system application for managing transactions and accounts.",
    link: "https://github.com/RND2002/Bank-Management-System",
  },
];
const Work = () => {
  return (
    <section id="portfolio">
    <center><h3 className="text-whitenew text-3xl md:text-5xl m-8 font-semibold">Portfolio</h3></center>
        <div className="flex items-center justify-center">
        
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 bg-background">
        {projects.map((project, index) => (
          <div key={index} className="flip-card flex flex-col justify-center items-center w-64 h-80 ">
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front flex items-center justify-center rounded-lg bg-shadowBg  text-white text-2xl font-bold">
                <div className="flex flex-col items-center">
                  <img src={project.image} alt="" />
                  <span className="text-whitenew">
                    <h3 className="text-xl">{project.name}</h3>
                  </span>
                </div>
              </div>
              <div className="flip-card-back flex items-center justify-center bg-shadowBg text-white text-2xl font-bold">
                <div className="flex flex-col items-center">
                    
                  <div className="m-2">
                    {" "}
                    <p className="text-whitenew text-sm">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    className="border-2 p-2 rounded-lg flex items-center gap-2 bg-white text-background text-xl"
                  >
                    <span>See More</span>
                    <FaLongArrowAltRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default Work;

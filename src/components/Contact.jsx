import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
function Contact() {
  return (
    <div id="contact" className="h-screen mt-24  bg-background">
      <div className="flex justify-center items-center">
        <div className="h-1 w-[42%] bg-yellow"></div>
        <div>
          <h3 className="text-xl font-semibold md:text-4xl text-whitenew">
            Contact Me
          </h3>
        </div>
        <div className="h-1 w-[42%] bg-yellow"></div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-12 mt-12">
  <div className="h-16 w-96 bg-shadowBg flex items-center rounded-lg">
    <a href="mailto:aryan.735921@gmail.com" className="flex items-center w-full h-full">
      <span className="mx-4">
        <CiMail size={32} color="white" />
      </span>
      <span className="mx-3">
        <h5 className="text-yellow text-xl font-semibold">
          aryan.735921@gmail.com
        </h5>
      </span>
    </a>
  </div>
  <div className="h-16 w-96 bg-shadowBg flex items-center rounded-lg">
    <a href="tel:+918299141590" className="flex items-center w-full h-full">
      <span className="mx-4">
        <IoCallOutline size={32} color="white" />
      </span>
      <span className="mx-3">
        <h5 className="text-yellow text-xl font-semibold">
          (+91) 8299141590
        </h5>
      </span>
    </a>
  </div>
  <div className="h-16 w-96 bg-shadowBg flex items-center rounded-lg">
    <a href="https://wa.me/918299141590" className="flex items-center w-full h-full" target="_blank" rel="noopener noreferrer">
      <span className="mx-4">
        <SiWhatsapp size={32} color="white" />
      </span>
      <span className="mx-3">
        <h5 className="text-yellow text-xl font-semibold">
          (+91) 8299141590
        </h5>
      </span>
    </a>
  </div>
</div>


      <div className="flex justify-center items-center mt-12">
        <div className="h-1 w-[42%] bg-yellow"></div>
        <div className="flex ">
        <a href="https://www.linkedin.com/in/aryan-dwivedi-33832b229/" target="_blank" rel="noopener noreferrer">
  <CiLinkedin size={32} color="white" />
</a>
<a href="https://github.com/RND2002?tab=repositories" target="_blank" rel="noopener noreferrer">
  <FiGithub size={32} color="white" />
</a>
<a href="https://www.facebook.com/aryan.dwivedi.5059601" target="_blank" rel="noopener noreferrer">
  <CiFacebook size={32} color="white" />
</a>

        </div>
        <div className="h-1 w-[42%] bg-yellow"></div>
      </div>
      <center>
        <h2 className="text-2xl sm:text-3xl md:text-6xl text-yellow font-normal mt-28">
          "Thanks for visiting ."
        </h2>
      </center>
    </div>
  );
}

export default Contact;

// import React from "react";

// const Experience = () => {
//   return (
//     <div className="h-screen bg-background mt-24">
//       <div className="mx-4 md:mx-32">
//         <h2 className="text-2xl md:text-4xl text-whitenew font-bold">Experience</h2>
//       </div>
//       <div className="flex md:mx-36 mt-12">
//         <div className=" mx-2  bg-shadowBg h-12 w-24 rounded-md md:mx-12">

//             <h4 className="text-whitenew">Feb 2024</h4>

//         </div>
//         <div className="hidden md:flex flex-col justify-center items-center">
//           <span className="inline-block h-8 w-8 rounded-full bg-yellow "></span>
//           <span className="inline-block h-96 w-1 md:mt-2 bg-whitenew "></span>
//         </div>
//         <div className="md:mx-16">
//             <p className="text-whitenew font-normal ">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ratione minus. Perferendis, adipisci incidunt. Non possimus aliquam accusantium nobis laboriosam animi. Ad itaque optio nostrum ipsam! Ut, earum soluta? Dolore!
//                 Dolorem doloremque, voluptatem praese
//                 orem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ratione minus. Perferendis, adipisci incidunt. Non possimus aliquam accusantium nobis laboriosam animi. Ad itaque optio nostrum ipsam! Ut, earum soluta? Dolore!
//                 Dolorem doloremque, voluptatem praese
//                 orem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ratione minus. Perferendis, adipisci incidunt. Non possimus aliquam accusantium nobis laboriosam animi. Ad itaque optio nostrum ipsam! Ut, earum soluta? Dolore!
//                 Dolorem doloremque, voluptatem praesentium cupiditate modi nostrum nemo similique, perferendis fugit eveniet eos facilis. Dicta, dolores ab odit sapiente culpa reiciendis, molestias quisquam velit ipsum blanditiis minus illum dolore est.
//             </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import React from "react";

const Experience = () => {
  return (
    <div className="h-96 mb-4 bg-background mt-24 px-4 sm:px-8 md:px-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-whitenew font-bold">
        Experience
      </h2>
      <div className="flex flex-col sm:flex-row items-start mt-8">
        <div className="bg-shadowBg h-12 w-48 rounded-md border-4 border-yellow mx-auto sm:mx-2 hidden">
          <h4 className="text-whitenew text-center text-xl">Since Feb 2024</h4>
        </div>
        <div className="hidden sm:flex flex-col justify-center items-center sm:mx-4 md:mx-8">
          <span className="inline-block h-8 w-8 rounded-full bg-yellow"></span>
          <span className="inline-block h-40 w-1 sm:mt-2 bg-whitenew"></span>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
          <h4 className="text-yellow text-center text-2xl md:text-4xl ">
            Backend Engineer at Blubook Solutions
          </h4>
          <div className="h-1 w-[100%] bg-white mt-2 mb-2 "></div>
          <p className="text-whitenew font-normal">
          
            <p>
              {" "}
              <span className="text-yellow">
                {" "}
                Developing and optimizing
              </span>{" "}
              backend systems for multiple projects, including designing and
              implementing RESTful APIs.
            </p>
            <div className="h-1 w-[42%] bg-yellow m-2"></div>
            <p>
              <span className="text-yellow">
                Enhancing performance by improving database queries
              </span>{" "}
              and server-side logic, achieving significant response time
              improvements.
            </p>
            <div className="h-1 w-[42%] bg-yellow m-2"></div>
            <p>
              <span className="text-yellow">
                Contributing to frontend development, integrating APIs
              </span>{" "}
              and implementing user-friendly interfaces using modern frameworks.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

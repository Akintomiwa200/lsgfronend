// import React from "react";
// import Button from "../Button"; 
// import bg from "../../assets/bgimage.jpg"; 
// import { useNavigate } from "react-router-dom";

// const Hero = () => {


//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/buyer")
//   }


//   const handleSubmit = () => {
//     navigate("/build")
//   }


//   return (
//     <section
//       className="relative w-full h-auto py-8 md:h-[60vh] lg:h-[80vh] flex justify-start items-center px-4 lg:px-16 bg-cover "
     
//     >
     
   
//       <div
//   className="absolute inset-0 bg-opacity-40 bg-no-repeat scale-x-[-1] lg:bg-cover bg-[length:100%_100%] "
//   style={{ backgroundImage: `url(${bg})` }}
// ></div>

//       {/* Content */}
//       <div className="relative z-8 md:p-32 lg:text-[#1D2150] sm:w-[30vw] lg:w-[50vw] px-4 lg:px-10 py-12 md:px-8 mx-auto md:m-0 text-left sm:text-left ml-0 sm:ml-4">

//         <h1 className="text-xl  md:text-3xl lg:text-6xl text-[#1D2150] font-bold  w-[40vw] lg:w-auto ">
//           Ready to <span className="text-green-500">Buy</span>,{" "}
//           <span className="text-green-500">Sell</span>, or{" "}
//           <span className="text-green-500">Invest ?</span>
//         </h1>
//         <p className="mt-4 text-sm lg:text-[1.3em] w-[45vw] lg:w-auto ">
//           We simplify your real estate journey with verified land deals,
//           transparent processes, and dedicated support ensuring stress-free
//           transactions and secure investments tailored to your needs.
//         </p>

// <h3 className="my-4 lg:my-8 text-[1.2em]">Get Started as:</h3>
//         {/* Buttons */}
//         <div className="lg:mt-6 flex gap-4">
//           <Button 
//           onClick={handleClick} 
//           backgroundColor="bg-[#1D2150]" 
//           className="rounded-3xl px-10" textColor="text-white"
//           >
//             Investor
//           </Button>
//           <Button
//           onClick={handleSubmit}
//             backgroundColor="bg-transparent"
//             textColor="text-[#1D2150]"
//             className="rounded-3xl border-2 border-[#1D2150]"
//           >
//             Partner with Us
//           </Button>
//         </div>

//         {/* Stats */}
//         <div className="mt-8 flex space-x-8 text-sm">
//           <div><p className=" text-2xl font-bold">13+</p><p className="text-base w-[10vw] md:w-auto lg:">Years of experience</p></div>
//           <div><p className="text-2xl font-bold">50+</p><p className="text-base w-[10vw] md:w-auto lg:">Happy clients</p></div>
//           <div><p className="text-2xl font-bold">95%</p><p className="text-base w-[10vw] md:w-auto lg:">Customer satisfaction</p></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import bg from "../../assets/bgimage.jpg"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    navigate("/buyer");
  };

  const handleSubmit = () => {
    navigate("/build");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: stop observing after load
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto py-8 md:h-[60vh] lg:h-[80vh] flex justify-start items-center px-4 lg:px-16 bg-cover"
    >
      {/* Lazy-loaded Background */}
      {isVisible && (
        <div
          className="absolute inset-0 bg-opacity-40 bg-no-repeat scale-x-[-1] lg:bg-cover bg-[length:100%_100%]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-8 md:p-32 lg:text-[#1D2150] sm:w-[30vw] lg:w-[50vw] px-4 lg:px-10 py-12 md:px-8 mx-auto md:m-0 text-left sm:text-left ml-0 sm:ml-4">
        <h1 className="text-xl md:text-3xl lg:text-6xl text-[#1D2150] font-bold w-[40vw] lg:w-auto">
          Ready to <span className="text-green-500">Buy</span>,{" "}
          <span className="text-green-500">Sell</span>, or{" "}
          <span className="text-green-500">Invest ?</span>
        </h1>
        <p className="mt-4 text-sm lg:text-[1.3em] w-[45vw] lg:w-auto">
          We simplify your real estate journey with verified land deals,
          transparent processes, and dedicated support ensuring stress-free
          transactions and secure investments tailored to your needs.
        </p>

        <h3 className="my-4 lg:my-8 text-[1.2em]">Get Started as:</h3>

        {/* Buttons */}
        <div className="lg:mt-6 flex gap-4">
          <Button
            onClick={handleClick}
            backgroundColor="bg-[#1D2150]"
            className="rounded-3xl px-10"
            textColor="text-white"
          >
            Investor
          </Button>
          <Button
            onClick={handleSubmit}
            backgroundColor="bg-transparent"
            textColor="text-[#1D2150]"
            className="rounded-3xl border-2 border-[#1D2150]"
          >
            Partner with Us
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-8 flex space-x-8 text-sm">
          <div>
            <p className="text-2xl font-bold">13+</p>
            <p className="text-base w-[10vw] md:w-auto lg:">Years of experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">50+</p>
            <p className="text-base w-[10vw] md:w-auto lg:">Happy clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold">95%</p>
            <p className="text-base w-[10vw] md:w-auto lg:">Customer satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

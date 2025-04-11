// import React from "react";

// const HowItWorks = () => {
//   const steps = [
//     { id: 1, title: "Reach out to us. Ask your questions. Book a site inspection and come see the land for yourself." },
//     { id: 2, title: "Fill out the subscription form and make your payment to Secure your plot." },
//     { id: 3, title: "Plot Allocation", description: "Once your payment is confirmed, we guide you through the allocation process. Where you’ll receive your plot details and documents—no stress, no delays." }
//   ];

//   return (
//     <section className="text-center py-12 bg-gray-100">
//       <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
//       <p className="text-gray-600 max-w-2xl mx-auto mt-2">
//         Our services encompass land buying, selling, consultancy, and development, 
//         offering comprehensive solutions to meet your real estate needs.
//       </p>

//       <div className="flex justify-center gap-6 mt-10 flex-wrap flex-row">
//         {steps.map((step) => (
//           <div key={step.id} className="relative flex flex-col  items-center">
//             <div className="lg:w-48 lg:h-48 w-96 h-96 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center text-white text-center p-4">
//               <div>
//                 <h3 className="text-3xl md:text-lg font-semibold">{step.title}</h3>
//                 <p className="text-2xl lg:text-sm mt-2">{step.description}</p>
//               </div>
//             </div>
//             <div className="absolute lg:top-3 -translate-x-16 lg:right-5 bg-white border-2 border-gray-900 w-10 h-10 flex items-center justify-center rounded-full text-gray-900 font-bold text-lg">
//               {step.id}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Show Interest",
      description: "Reach out to us. Ask your questions. Book a site inspection and come see the land for yourself."
    },
    {
      id: 2,
      title: "Subscribe & Pay",
      description: "Fill out the subscription form and make your payment to Secure your plot."
    },
    {
      id: 3,
      title: "Plot Allocation",
      description: "Once your payment is confirmed, we guide you through the allocation process. Where you'll receive your plot details and documents—no stress, no delays."
    }
  ];

  return (
    <section className="text-center py-12 bg-gray-100 relative">
    
      {/* Title Container - Inside Border */}
      <div className="relative mb-8 w-[85%] max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900  ">
          Our Process
        </h2>
        <p className="text-center max-w-2xl mx-auto px-4">
          We don't complicate things. You show interest, make your move, and we handle the rest.
          <br />Fast, clear, and reliable—just how it should be.
        </p>
      </div>

      
      <div className="relative flex justify-center mt-12">
     
        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row justify-center lg:max-w-5xl mx-auto w-full px-4 lg:relative">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative flex flex-col items-center mx-4 z-10 ${
                index === 1 ? "mt-20" : ""
              }`}
            >
              {/* Circle Container */}
              <div className={`
                w-96 h-96 md:w-96 md:h-96 
                bg-green-500 rounded-full 
                border-[10px] border-blue-900 
                flex items-center justify-center 
                text-white text-left p-6 pl-16 relative
                `}>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-blue-900">{step.title}</h3>
                  <p className="text-2xl leading-tight">{step.description}</p>
                </div>
              
              </div>
              
              {/* Number Badge */}
              <div className="absolute -top-3 left-8 lg:right-8 bg-white  w-20 h-20 flex items-center justify-center rounded-full text-blue-900 font-bold text-xl">
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
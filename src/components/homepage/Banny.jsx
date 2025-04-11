// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Banners = () => {

//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         navigate("/build")
//     }
//     return (
//         <section className="md:w-[80vw] mx-auto  h-[30vh] flex justify-center px-16 py-6">
//             <div className="bg-[#1D2150] text-white rounded-2xl w-full px-8 py-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
//                 {/* Left Content */}
//                 <div className="text-center md:text-left">
//                     <h2 className="text-4xl font-semibold">Get a FREE Building Quote.</h2>
//                     <p className="mt-2 text-2xl w-[40vw]">
//                         Get a free, no-obligation quote tailored to your needs. Quick,
//                         transparent, and hassle-free.
//                     </p>
//                 </div>

//                 {/* Button */}
//                 <button onClick={handleSubmit} className="mt-4 md:mt-0 bg-white text-[#1D2150] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition">
//                     Get a Free Quote
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default Banners;



import React from "react";
import { useNavigate } from "react-router-dom";

const Banners = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/build");
  };

  return (
    <section className="w-full lg:w-[80vw] md:w-3xl mx-auto h-auto lg:h-[30vh] flex items-center justify-center px-6 md:px-16 py-6">
      <div className="bg-[#47B649] lg:bg-[#1D2150] text-white rounded-2xl w-full px-12 md:px-8  flex flex-col lg:flex-row items-center jusify-center lg:justify-between shadow-lg h-auto py-8 ">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Get a FREE Building Quote.
          </h2>
          <p className="mt-2 text-base md:text-2xl max-w-lg mx-auto md:mx-0">
            Get a free, no-obligation quote tailored to your needs. Quick,
            transparent, and hassle-free.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="mt-4 md:mt-0 bg-white text-[#1D2150] font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default Banners;

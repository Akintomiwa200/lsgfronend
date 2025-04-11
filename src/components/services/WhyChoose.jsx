// import React from "react";
// import { FaUsers, FaHandshake, FaShieldAlt, FaBuilding } from "react-icons/fa";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <FaUsers className="text-4xl text-white" />,
//       title: "Client-Centric Values",
//       description: "Your satisfaction comes first, and we exceed expectations to build lasting relationships.",
//     },
//     {
//       id: 2,
//       icon: <FaHandshake className="text-4xl text-white" />,
//       title: "Personalized Approach",
//       description: "Your satisfaction comes first, and we exceed expectations to build lasting relationships.",
//     },
//     {
//       id: 3,
//       icon: <FaShieldAlt className="text-4xl text-white" />,
//       title: "Transparency and Trust",
//       description: "Our processes are open and clear, giving you peace of mind.",
//     },
//     {
//       id: 4,
//       icon: <FaBuilding className="text-4xl text-white" />,
//       title: "Comprehensive Services",
//       description: "We handle everything from planning to after-sales support for a hassle-free experience.",
//     },
//   ];

//   return (
//     <section className="text-center py-12 bg-gray-100">
//       <h2 className="text-2xl font-bold text-gray-800">Why Choose Us</h2>
//       <p className="text-gray-600 max-w-2xl mx-auto mt-2">
//         Choose us for our transparency, expertise, and personalized approach to real estate.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-8xl mx-auto">
//         {features.map((feature) => (
//           <div key={feature.id} className="bg-[#1D2150] p-6 rounded-xl text-white flex flex-col items-center justify-center shadow-md h-[40vh] lg:h-[30vh] md:w-auto w-[80vw] mx-auto">
//             <div className="bg-white p-4 rounded-full mb-4">
//             <span className="text-black w-20 h-20 " stroke="black">
//               {feature.icon}
//               </span>
//               </div>
//             <h3 className="lg:text-lg text-2xl font-semibold">{feature.title}</h3>
//             <p className="text-2xl md:text-lg lg:text-sm break-all break-words">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;




import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <circle cx="17" cy="11" r="2" />
          <path d="M17 13.5V14a2 2 0 0 0 2 2h.5" />
          <circle cx="20" cy="16" r="2" />
        </svg>
      ),
      title: "Client-Centric Values",
      description: "Your satisfaction comes first, and we exceed expectations to build lasting relationships.",
    },
    {
      id: 2,
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 13l-3 3-3-3" />
          <path d="M12 6v10" />
          <rect x="3" y="17" width="18" height="4" rx="1" />
          <circle cx="12" cy="5" r="2" />
          <path d="M4 13h4" />
          <path d="M16 13h4" />
        </svg>
      ),
      title: "Personalised Approach",
      description: "Your satisfaction comes first, and we exceed expectations to build lasting relationships.",
    },
    {
      id: 3,
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 3a8 8 0 0 1 0 16" />
          <path d="M20.1 17.5l-1.2 3.9L14.8 20" />
          <path d="M10 3a8 8 0 0 0 0 16" />
          <path d="M3.9 17.5l1.2 3.9 4.1-1.4" />
        </svg>
      ),
      title: "Transparency and Trust",
      description: "Our processes are open and clear, giving you peace of mind.",
    },
    {
      id: 4,
      iconPath: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 6h8" />
          <path d="M8 12h8" />
          <path d="M8 18h5" />
          <path d="M18 5.5v12c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5v-12c0-.8.7-1.5 1.5-1.5h9c.8 0 1.5.7 1.5 1.5z" />
          <path d="M17 14l3 3" />
        </svg>
      ),
      title: "Comprehensive Services",
      description: "We handle everything from planning to after-sales support for a hassle-free experience.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Choose us for our transparency, expertise, and personalized approach to real estate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-[#1D2150] text-white p-8 rounded-lg flex flex-col items-center text-center"
          >
            <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <div className="text-indigo-900">
                {feature.iconPath}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
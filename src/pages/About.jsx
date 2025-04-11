import React from "react";
import {
  FaStar,
  FaFileContract,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";
import ea from "../assets/Frameb.png";
import ex from "../assets/Frame184.png";
import ey from "../assets/Frame183.png";
import ez from "../assets/Frame185.png";
import OurServices from "../components/homepage/Services";
import WhyChooseUs from "../components/services/WhyChoose";
import Testimonials from "../components/homepage/Testimoinal";
import MeetTeam from "../components/homepage/MeetTeam";
import Banner from "../components/homepage/Banner";

const About = () => {
  const sections = [
    {
      id: 1,
      title: "Our Story",
      content:
        "In 2024, three passionate engineers saw the heartbreak caused by land fraud in Nigeria and decided to act. They founded LSG Investment Limited to offer a safe, transparent path to homeownership. Fueled by integrity and innovation, they transform land into thriving communities, helping families turn dreams into reality.",
      image: ex,
      reverse: false,
    },
    {
      id: 2,
      title: "Our Mission",
      content:
        "At LSG Investment Limited, our mission is to revolutionize the real estate industry in Nigeria by empowering customers with knowledge, ensuring transparent transactions, and delivering exceptional services that foster trust, peace of mind, and informed decision-making.",
      image: ey,
      reverse: true,
    },
    {
      id: 3,
      title: "Our Vision",
      content:
        "Our vision is to become the most trusted and innovative real estate company in Nigeria, renowned for our unwavering commitment to transparency, professionalism, and customer satisfaction, while driving growth, sustainability, and positive impact in the communities we serve.",
      image: ez,
      reverse: false,
    },
  ];

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21v-2a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v2" />
          <path d="M8 10l-2 2" />
          <path d="M16 10l2 2" />
        </svg>
      ),
      title: "Expertise",
      description: "We bring unmatched knowledge and skills to every project, ensuring top-quality results.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
          <circle cx="17" cy="10" r="3" />
          <line x1="16" y1="13" x2="19" y2="16" />
        </svg>
      ),
      title: "Transparency",
      description: "Honesty and openness guide all our processes, fostering trust and clarity with our clients.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="7" y1="15" x2="8" y2="15" />
          <line x1="12" y1="15" x2="13" y2="15" />
          <path d="M8 3v2" />
          <path d="M16 3v2" />
          <path d="M9 14l1 1 3-3" />
        </svg>
      ),
      title: "Accountability",
      description: "We take full responsibility for delivering on our promises and commitments.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="7" r="4" />
          <path d="M5 22v-4a7 7 0 0 1 14 0v4" />
          <circle cx="5" cy="8" r="2" />
          <circle cx="19" cy="8" r="2" />
        </svg>
      ),
      title: "Professionalism",
      description: "Our approach is marked by respect, dedication, and excellence in every interaction.",
    },
  ];
  return (
    <div className=" bg-gray-100 w-[100vw] overflow-x-hidden p-0 m-0 flex flex-col">
      {/* Hero Section */}
      <div className="w-[100vw] bg-white text-center ">
        <img src={ea} alt="" className="w-[100vw] h-[25vh] lg:h-auto" />
      </div>

      <section className="bg-gray-100 py-12 px-4">
        <div className="md:w-[80vw] mx-auto ">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`flex flex-col md:flex-row my-16 ${
                section.reverse ? "md:flex-row-reverse" : ""
              } items-center gap-16 mb-12 `}
            >
              {/* Text Section */}
              <div className="md:w-1/2 px-8">
                <h2 className="text-4xl text-center font-bold text-[#1D2150] mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-xl">{section.content}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12 ">
        <div className="w-[100vw] mx-0 text-center">
          <h2 className="text-5xl font-bold text-[#1D2150] mb-2">Our Values</h2>
          <p className="text-gray-600 text-2xl mb-8">
            Choose us for our transparency, expertise, and personalized approach
            to real estate.
          </p>

          <div className="bg-[#1D2150] rounded-xl p-8 md-p-2 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-64 md:gap-8 lg:gap-6 mx-8 ">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="bg-white  text-black p-3 rounded-full flex justify-center items-center mb-4">
                  <span className="text-black w-20 h-20  flex justify-center items-center" stroke="black">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-4xl lg:text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="text-2xl md:text-lg lg:text-sm break-all break-words">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <MeetTeam />

      <div className="w-[90vw] lg:*:w-[80vw] mx-auto z-10 mb-16">
        <Banner />
      </div>
    </div>
  );
};

export default About;

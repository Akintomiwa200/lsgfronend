import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ex from '../assets/Frame663.png'
import ey from '../assets/Frame160.png'
import Banner from "../components/homepage/Banner";


const faqs = [
    {
      question:"Is the land free from any government acquisition or claim?",
      answer: "Yes, it's free from all forms of government acquisition or claims."
    },
    {
      question:"What documents will I receive after full payment?",
      answer: "You will receive the following documents : Receipts, Contract of Sales, Deep of Assignment, and Registered Survey"
    },
  {
    question: "Are there additional fees I should be aware of?",
    answer:"No, there are no addtional payments; its an all exclusive payment",
  },
    {
      question:"Do commercial and corner piece plots cost extra?",
      answer: "No, the purpose of purchase does not affect the cost of the land",
    }, 
   {
    question:"When will my plot be allocated?",
    answer:"Instant allocation once deposit patment is made" ,
   }
];

const estateFAQs = [
  { 
      question: "Where is the property located?", 
      answer: "Our property is situated in Agbowa, Ikorodu, a boundary community between Lagos and Ogun."
  },
  { 
      question: "What are the nearest landmarks to the property?", 
      answer: "The property is located just an hour from Epe and Ibeju-Lekki and surrounded by key landmarks like LASUSTECH, Imota Rice Mill, and Caleb University."
  },
  { 
      question: "What types of units are available in the property?", 
      answer: "We offer 300 sqm, 500 sqm, and 1-acre plots."
  },
  { 
      question: "What amenities are available in the property?", 
      answer: "Our property promises high appreciation value, 100% dry land, excellent road networks, power supply, and top-notch security."
  },
  { 
      question: "Is the property easily accessible by public transportation?", 
      answer: "Yes."
  }
];





const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
      };
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Hero Section */}
            <div className="w-full bg-white text-center ">
                <img className="w-[100vw] h-[25vh] lg:h-auto" src={ex} alt="" />
            </div>

            <section className="bg-gray-100 py-12 px-4">
                <div className="w-[80vw] mx-auto text-center">
                    <h2 className=" text-3xl lg:text-2xl font-bold text-[#1D2150] mb-6">General Questions</h2>

                    <div className="space-y-4">
                    {faqs.map((item, index) => (
                            <div key={index} className="bg-green-500 rounded-lg shadow-md">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-4 text-white font-semibold"
                                >
                                     <span className="relative text-2xl  px-4 m-2 after:block after:h-[2px] after:bg-blue-950 after:w-full after:mt-2">
                                     {item.question}
                                     </span>
                                    <FaChevronDown
                                        className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="bg-green-200 text-2xl text-black  p-8 text-left">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 py-12 px-4">
                <div className="w-[80vw] mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#1D2150] mb-6">
                        Questions About Maitama Gardens Estate
                    </h2>

                    <div className="space-y-4">
                        {estateFAQs.map((item, index) => (
                            <div key={index} className="bg-green-500 rounded-lg shadow-md">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-4 text-white font-semibold"
                                >
                                    
                                    <span className="relative px-4 text-2xl m-2 after:block after:h-[2px] after:bg-blue-950 after:w-full after:mt-2">
                                    {index + 1}. {item.question}
</span>
                                    <FaChevronDown
                                        className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="bg-green-200 text-black p-8 text-2xl text-left">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#1D2150] mb-4">
            More Questions? <br /> Reach Out to Us!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#91D592] text-white placeholder-white"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#91D592] text-white placeholder-white"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#91D592] text-white placeholder-white"
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#91D592] text-white placeholder-white"
            ></textarea>
            <button
              type="submit"
              className="bg-[#1D2150] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition  mx-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:block">
          <img
            src={ey}
            alt="Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
    <div className="w-[90vw lg:w-[80vw] mx-auto z-10 mb-16">
<Banner />
</div>

        </div>
    )
}

export default Faq
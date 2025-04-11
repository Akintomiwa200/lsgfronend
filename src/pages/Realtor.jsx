import React, {useState} from "react";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import ex from "../assets/Frame67.png"
import Banner from "../components/homepage/Banner";




const Realtor = () => {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    licenseNumber: "",
    agency: "",
    experience: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const realtorData = {
      name: `${formData.firstName} ${formData.lastName}`, // Combine first & last name
      phone: formData.phone,
      email: formData.email,
      licenseNumber: formData.licenseNumber,
      agency: formData.agency,
      experience: formData.experience,
      specialization: formData.specialization,
    };

    try {
      const response = await fetch("https://lsg-backend.onrender.com/api/realtors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(realtorData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Realtor registered successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          licenseNumber: "",
          agency: "",
          experience: "",
          specialization: "",
        });
      } else {
        alert(`Error: ${data.error}`);
      }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Banner Section */}
      <div className="w-full text-center">
        <img
          src={ex}

          alt="Community Not Competition"
          className="mx-auto w-[100vw]"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto  p-4 lg:h-[80vh] flex flex-col md:flex-row bg-white shadow-lg rounded-lg my-10">
        {/* Left: Contact Info */}
        <div className="w-full  flex-col md:w-1/3 bg-[#1D2150] text-white p-8 px-12 rounded-l-lg hidden md:flex">
          <h2 className="text-4xl font-normal mb-6">Our Contact Info:</h2>
          <p className="mb-12">
            Kindly reach out to us on any of our communication channels below.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <MapPin size={20} />
              <span>
                Jendol Superstore, Km 1, Opposite Akasoleri Estate, Ikorodu, Lagos.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={20} />
              <span>
                Block F2, HFP Shopping Complex, Opposite Abraham Adesanya Estate, Lekki Ajah, Lagos.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={20} />
              <span>lsginvestmentlimited@gmail.com</span>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Partner Form */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partner With Us</h2>

          {/* <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
              <input type="text" placeholder="Last name*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
              <input type="email" placeholder="Email*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Realtor License number*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
              <input type="text" placeholder="Agency name*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
            </div>

            <input type="text" placeholder="Years of experience*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />

            <textarea placeholder="Areas of specialization*" className="p-3 bg-[#F2FAF6] rounded-md w-full h-36"></textarea>

            <button className="bg-blue-900 text-white py-3 px-16 rounded-2xl mx-auto self-center  md:w-auto">
              Submit
            </button>
          </form> */}


          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" type="text" placeholder="First name*" value={formData.firstName} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
              <input name="lastName" type="text" placeholder="Last name*" value={formData.lastName} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="phone" type="tel" placeholder="Phone*" value={formData.phone} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
              <input name="email" type="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="licenseNumber" type="text" placeholder="Realtor License number*" value={formData.licenseNumber} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
              <input name="agency" type="text" placeholder="Agency name*" value={formData.agency} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />
            </div>

            <input name="experience" type="text" placeholder="Years of experience*" value={formData.experience} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-16" />

            <textarea name="specialization" placeholder="Areas of specialization*" value={formData.specialization} onChange={handleChange} className="p-3 bg-[#F2FAF6] rounded-md w-full h-36"></textarea>

            <button type="submit" className="bg-blue-900 text-white py-3 px-16 rounded-2xl mx-auto self-center md:w-auto">
              Submit
            </button>
          </form>


        </div>
      </div>
      <div className="w-[90vw] lg:w-[80vw] mx-auto z-10 mb-16">
        <Banner />
      </div>
    </div>
  );
};

export default Realtor;

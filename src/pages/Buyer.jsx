import { useState } from "react";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import ex from "../assets/Frame68.png"
import Banner from "../components/homepage/Banner";



const Buyer = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    plots: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      email: formData.email,
      plots: formData.plots,
      purpose: formData.purpose,
    };
  
    console.log("Sending Payload:", payload);
  
    try {
      const response = await fetch("https://lsg-backend.onrender.com/api/buyers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
      console.log("Server Response:", result);
  
      if (!response.ok) {
        throw new Error(result.message || "Failed to submit buying request");
      }
  
      alert("Quote request sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        plots: "",
        purpose: "",
      });
    } catch (error) {
      alert("Error submitting quote request.");
      console.error(error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Banner Section */}
      <div className="w-full">
        <img
          src={ex}
          alt="Investor Banner"
          className="mx-auto h-[25vh] lg:h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:h-[70vh] flex flex-col md:flex-row bg-white shadow-lg rounded-lg my-10">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/3 bg-[#1D2150] text-white p-8 px-12 rounded-l-lg">
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

        {/* Right: Investor Form */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Input Details to Get Started as Investor</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name*"
                className="p-3 bg-[#F2FAF6] rounded-md w-full h-16"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name*"
                className="p-3 bg-[#F2FAF6] rounded-md w-full h-16"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="p-3 bg-[#F2FAF6] rounded-md w-full h-16"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="p-3 bg-[#F2FAF6] rounded-md w-full h-16"
                required
              />
            </div>

            <input
              type="text"
              name="plots"
              value={formData.plots}
              onChange={handleChange}
              placeholder="Number of plots"
              className="p-3 bg-[#F2FAF6] rounded-md w-full h-16"
              required
            />
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Purpose of purchase"
              className="p-3 bg-[#F2FAF6] rounded-md w-full h-36"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white py-3 px-16 rounded-2xl mx-auto self-center md:w-auto"
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-[80vw] mx-auto z-10 mb-16">
        <Banner />
      </div>
    </div>
  );
};

export default Buyer;

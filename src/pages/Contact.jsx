import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import ex from "../assets/Frame14.png";
import Banner from "../components/homepage/Banner";



const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "your_service_id", 
        "your_template_id", 
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "your_public_key" 
      );

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSuccess("Failed to send message. Try again later.");
    }

    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="w-full bg-white text-center ">
        <img src={ex} className="w-[100vw] h-[25vh] lg:h-auto" alt="" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:h-[70vh] flex flex-col md:flex-row bg-white shadow-lg rounded-lg my-10">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/3 bg-[#1D2150] text-white hidden lg:flex lg:flex-col p-8 px-12 rounded-l-lg">
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

        {/* Right: Contact Form */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            We would love to hear from you!
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name*"
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
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="p-3 bg-[#F2FAF6] rounded-md w-full h-16"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 bg-[#F2FAF6] rounded-md w-full h-36"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white py-3 px-16 rounded-2xl mx-auto self-center md:w-auto"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {success && (
            <p className={`mt-4 text-center ${success.includes("Failed") ? "text-red-600" : "text-green-600"}`}>
              {success}
            </p>
          )}
        </div>
      </div>
      <div className="sw-[90vw] lg:w-[80vw] mx-auto z-10 mb-16">
        <Banner />
      </div>
    </div>
  );
};

export default Contact;

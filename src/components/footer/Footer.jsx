import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logowhite.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";


const Footer = () => {
  return (
    <footer className="bg-[#0A0F3A] text-white py-10 px-6 lg:px-20 h-auto md:h-auto lg:h-auto">
      
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
      <div className="hidden lg:flex">
        <img src={logo} alt="" />
      </div>
        {/* Logo & Contact Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          
          <span className="flex gap-4">
          <CiLocationOn size={40} />
          <p className="mt-4 text-sm">
            Jendol superstore, km 1 opposite Akasoleri estate, Itokin road, Ikorodu.
          </p>
          </span>
         
          <span className="flex gap-4">
          <CiLocationOn size={40} />
          <p className="mt-2 text-sm">
            Block F4, 212 HFP Shopping Complex, opposite Abraham Adesanya Estate, Lekki Ajah, Lagos Nigeria.
          </p>
          </span>
        
          <span className="flex gap-4">
          <FiMessageCircle size={20}/>
          <p className="mt-2 text-sm">
            <a href="mailto:lsginvestmentlimited@gmail.com" className="hover:underline">
              lsginvestmentlimited@gmail.com
            </a>
          </p>
          </span>
          <span className="flex gap-4">
          <IoIosCall size={20} />
          <p className="mt-2 text-sm">
            <a href="tel:+2347017228735" className="hover:underline">
              +234 701 722 8735
            </a>
          </p>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="my-4">
          <h3 className="text-lg font-semibold mb-4">Browse</h3>
          <ul className="space-y-2 text-sm flex flex-col  gap-6">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="/our_services" className="hover:underline">Our Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/lsginvestmentltd" className="p-2 rounded-full  hover:bg-gray-900 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com/lsginvestmentlimited" className="p-2 rounded-full hover:bg-gray-900 transition">
              <FaInstagram size={16} />
            </a>
            <a href="https://www.linkedin.com/company/lsginvestmentltd" className="p-2 rounded-full  hover:bg-gray-900 transition">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
        © 2025 LSG Investment Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

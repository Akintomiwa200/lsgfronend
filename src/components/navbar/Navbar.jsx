// import React from 'react'
// import logo from "../../assets/logowhite.png"
// import { Link } from 'react-router-dom'
// import Button from '../Button'

// const Navbar = () => {
//     return (
//         <div className='flex bg-[#1D2150] h-[10vh] w-[100vw] top-0 justify-evenly items-center sticky z-10'>
//             <div className=''>
//                 <img src={logo} alt="" className='h-[9vh]' />
//             </div>
//             <div className='flex gap-8 text-white text-[1.2em]'>
//             <Link to="/">Home</Link>
//                 <Link to="/about">About Us</Link>
//                 <Link to="/our_services">Services</Link>
//                 <Link to="/contact">Contact Us</Link>
//                 <Link to="/faq">FAQs</Link>
//             </div>
//             <div>
//                 <Button
//                     width="w-full"
//                     padding="px-6 py-3"
//                     backgroundColor="bg-white"
//                     textColor="text-black"
//                     borderRadius="rounded-lg"
//                     hoverEffect="hover:bg-purple-600"
//                     onClick={() => alert('Full Width Button Clicked!')}
//                 >
//                     Schedule a call
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default Navbar




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logowhite.png";
import Button from "../Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/contact");
  };

  return (
    <nav className="bg-[#1D2150] h-[10vh] w-full sticky top-0 z-10 flex justify-between items-center px-8 mx-auto">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-[9vh]" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-white text-[1.2em] ">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/our_services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQs</Link>
      </div>

      {/* Call to Action Button for Desktop */}
      <div className="hidden md:block mr-8">
        <Button
          width="w-full"
          padding="px-6 py-3"
          backgroundColor="bg-white"
          textColor="text-black"
          borderRadius="rounded-lg"
          hoverEffect="hover:bg-purple-600"
          onClick={handleClick}
        >
          Schedule a call
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
{isMobileMenuOpen && (
  <div 
    className="absolute top-[10vh] left-0 w-full h-[90vh] bg-[#1D2150] flex flex-col items-center py-6 gap-4 text-white text-lg shadow-lg md:hidden z-50 pointer-events-auto"
  >
    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
    <Link to="/our_services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
    <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>

    {/* Call to Action Button for Mobile */}
    <button
      className="bg-white text-black px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
      onClick={() => {
       handleClick
        setIsMobileMenuOpen(false);
      }}
    >
      Schedule a call
    </button>
  </div>
)}

    </nav>
  );
};

export default Navbar;

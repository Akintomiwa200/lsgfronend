import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-[100vw] overflow-x-hidden justify-center bg-[#F8FAFC]">

      <Navbar/>
     
      <main >
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

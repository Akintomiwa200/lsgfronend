import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout, MdOutlineClass, MdAssignment } from "react-icons/md";
import { Menu, ChevronLeft } from "lucide-react";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation(); // Get the current URL path

  // Sidebar links
  const links = [
    { name: "Dashboard", icon: <LuLayoutDashboard size={20} />, path: "/admin" },
    { name: "Quotations", icon: <MdOutlineClass size={20} />, path: "/admin/quote" },
    { name: "Buyers", icon: <MdAssignment size={20} />, path: "/admin/buyers" },
  ];

  return (
    <div
      className={`min-h-[70vh] bg-blue-700 text-white flex flex-col justify-between p-4 shadow-md sticky top-0 transition-all duration-300 
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Sidebar Header (Title + Toggle Button) */}
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && (
          <h2 className="text-2xl font-bold flex">
            <span className="h-8 w-8 flex rounded-lg justify-center items-center bg-red-400">
              A
            </span>{" "}
            dmin
          </h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-blue-800 hover:bg-blue-900"
        >
          {isCollapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="space-y-2 flex-grow">
        {links.map((link, index) => (
          <li key={index} className="group relative">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `p-4 flex items-center rounded-lg cursor-pointer transition-all duration-300 
                ${isCollapsed ? "justify-center" : "gap-2"} 
                ${isActive || location.pathname === link.path ? "bg-blue-900 w-full" : "hover:bg-blue-500 text-white"}`
              }
            >
              {link.icon}
              {!isCollapsed && <span>{link.name}</span>}
            </NavLink>

            {/* Tooltip when collapsed */}
            {isCollapsed && (
              <span className="absolute left-full ml-2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all">
                {link.name}
              </span>
            )}
          </li>
        ))}
      </ul>

    
    </div>
  );
};

export default AdminSidebar;

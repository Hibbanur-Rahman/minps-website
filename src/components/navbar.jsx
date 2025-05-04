import React from "react";
import logo from "@/assets/images/logo.png";
import { PhoneCall, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ title, path, currentPath }) => {
  const isActive = currentPath === path;
  const navigate=useNavigate();
  
  return (
    <div className={`group hover:bg-indigo-800 hover:text-white border border-indigo-800 rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${isActive ? "bg-indigo-800" : ""}`} onClick={()=>navigate(`${path}`)}>
      <p className={`text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-indigo-800/60 group-hover:text-white"}`}>
        {title}
      </p>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Course", path: "/course" },
    { title: "Academics", path: "/academics" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-center items-center md:h-36">
      <div className="max-w-7xl md:w-11/12 w-full flex flex-col md:flex-row justify-between items-center md:px-0 px-6">
        <div className="flex-shrink-0 md:w-auto ">
          <img src={logo} alt="School logo" className="w-full md:w-48" />
        </div>
        
        <div className="flex flex-col space-y-3">
          <div className="flex md:flex-row flex-col items-center gap-5 w-full justify-between">
            {/* Contact Info Card */}
            <div className="rounded-full bg-gray-300 flex items-center p-2 gap-4 pr-4 md:w-auto w-full">
              <div className="p-2 rounded-full bg-red-800 flex-shrink-0">
                <PhoneCall className="text-white" size={30} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-indigo-800 text-lg font-extrabold">9031718666</p>
                  <span className="text-gray-500">|</span>
                  <p className="text-indigo-800 text-lg font-extrabold">9709739854</p>
                </div>
                <p className="text-xs text-center text-indigo-800 font-light">
                  Call Us for any Help and Enquiry
                </p>
              </div>
            </div>
            
            {/* Admission Button */}
            <div className="rounded-full bg-green-600 flex items-center p-2 pr-4 cursor-pointer hover:bg-green-700 transition-colors duration-300">
              <div className="p-2 rounded-full flex-shrink-0">
                <User className="text-white" size={20} />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">ADMISSION OPEN</p>
                <p className="text-xs text-center text-white font-light">Apply Now</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.path}
                title={item.title} 
                path={item.path}
                currentPath={pathname}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
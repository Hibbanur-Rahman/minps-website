import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import { PhoneCall, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const NavItem = ({ title, path, currentPath, submenu }) => {
  const isActive = currentPath === path;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (submenu) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (submenu) {
      setIsOpen(false);
    }
  };

  return submenu ? (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <div
            className={`group hover:bg-indigo-800 border border-indigo-800 rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
              isActive ? "bg-indigo-800" : ""
            }`}
            onClick={() => navigate(`${path}`)}
          >
            <p
              className={`text-sm transition-colors duration-200 ${
                isActive
                  ? "text-white"
                  : "text-indigo-800/60 group-hover:text-white"
              }`}
            >
              {title}
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-58 bg-transparent border-none shadow-none mt-1">
          {submenu.map((item) => (
            <DropdownMenuItem
              key={item.path}
              className="cursor-pointer bg-indigo-800 hover:!bg-[#A02B2D] text-white hover:text-white my-1 rounded-full p-2 px-4 shadow-lg"
              onClick={() => navigate(item.path)}
            >
              <div className="flex items-center justify-center w-full">
                <p className="text-sm text-white">{item.title}</p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <div
      className={`group hover:bg-indigo-800 hover:text-white border border-indigo-800 rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
        isActive ? "bg-indigo-800" : ""
      }`}
      onClick={() => navigate(`${path}`)}
    >
      <p
        className={`text-sm transition-colors duration-200 ${
          isActive ? "text-white" : "text-indigo-800/60 group-hover:text-white"
        }`}
      >
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
    {
      title: "About Us",
      path: "/about",
      submenu: [
        {
          title: "About Milli Trust",
          path: "/about",
        },
        {
          title: "Chairman Message",
          path: "/about/chairman-message",
        },
        {
          title: "Director Message",
          path: "/directorsmessage",
        },
        {
          title: "Principal Message",
          path: "/about/principal-message",
        },
        {
          title: "About University (BUHS)",
          path: "/about/university",
        },
        {
          title: "About University (AKU)",
          path: "/about/university",
        },
        {
          title: "Recognition & Affiliation",
          path: "/about/recognition",
        },
      ],
    },
    {
      title: "Academics",
      path: "/academics",
      submenu: [
        {
          title: "Course",
          path: "/course",
        },
        {
          title: "Fee Structure",
          path: "/course/fee-structure",
        },
        {
          title: "Events",
          path: "/events",
        },
        {
          title: "College Committees",
          path: "/course/college-committees",
        },
        {
          title: "Rules & Regulations",
          path: "/course/rules-regulations",
        },
        {
          title: "Parent Hospital",
          path: "/course/parent-hospital",
        },
        {
          title: "Additional Affiliated Hospital",
          path: "/course/additional-affiliated-hospital",
        },
        {
          title: "Community Training",
          path: "/course/community-training",
        },
        {
          title: "Workshop & Seminar",
          path: "/course/workshop-seminar",
        },
        {
          title: "Infrastructure",
          path: "/course/infrastructure",
        },
      ],
    },
    {
      title: "Faculty",
      path: "/faculty",
      submenu: [
        {
          title: "Faculty",
          path: "/faculty",
        },
        {
          title: "Non Teaching Staff",
          path: "/faculty/non-teaching-staff",
        },
        {
          title: "Guest Faculty",
          path: "/faculty/guest-faculty",
        },
      ],
    },
    {
      title: "Student",
      path: "/student",
      submenu: [
        {
          title: "Student List",
          path: "/student/student-list",
        },
        {
          title: "Examination  Result",
          path: "/student/examination-result",
        },
        {
          title: "Campus Life",
          path: "/student/campus-life",
        },
      ],
    },
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
                  <p className="text-indigo-800 text-lg font-extrabold">
                    9031718666
                  </p>
                  <span className="text-gray-500">|</span>
                  <p className="text-indigo-800 text-lg font-extrabold">
                    9709739854
                  </p>
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
                <p className="text-lg font-semibold text-white">
                  ADMISSION OPEN
                </p>
                <p className="text-xs text-center text-white font-light">
                  Apply Now
                </p>
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
                submenu={item.submenu}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

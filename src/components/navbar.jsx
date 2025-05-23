import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import { PhoneCall, User, Menu } from "lucide-react";
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
            className={`group hover:hover:!bg-[#A02B2D] hover:text-white border border-indigo-800 hover:!border-[#A02B2D] rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
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
              className="cursor-pointer bg-indigo-800 hover:!bg-[#A02B2D] border-1 border-[#FFFFFF] text-white hover:text-white my-1 rounded-full p-2 px-4 shadow-lg"
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
      className={`group hover:hover:!bg-[#A02B2D] hover:text-white border border-indigo-800 hover:!border-[#A02B2D] rounded-full px-4 py-1 cursor-pointer transition-colors duration-200 ${
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

const MobileNavItem = ({ title, path, currentPath, submenu, closeMenu }) => {
  const isActive = currentPath === path;
  const navigate = useNavigate();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleClick = () => {
    if (submenu) {
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      navigate(path);
      closeMenu();
    }
  };

  return (
    <div className="w-full">
      <div
        className={`w-full py-2 px-4 border-b border-gray-200 flex justify-between items-center ${
          isActive ? "bg-indigo-800 text-white" : "text-gray-800"
        }`}
        onClick={handleClick}
      >
        <span>{title}</span>
        {submenu && (
          <span className="text-sm">{isSubMenuOpen ? "▲" : "▼"}</span>
        )}
      </div>

      {submenu && isSubMenuOpen && (
        <div className="bg-gray-100">
          {submenu.map((item) => (
            <div
              key={item.path}
              className="py-2 px-8 border-b border-gray-200 text-sm"
              onClick={() => {
                navigate(item.path);
                closeMenu();
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          path: "/chairmanMessage",
        },
        {
          title: "Director Message",
          path: "/directorsmessage",
        },
        {
          title: "Principal Message",
          path: "/principleMessage",
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
          path: "/result",
        },
        {
          title: "Campus Life",
          path: "/student/campus-life",
        },
      ],
    },
    { title: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      

      <nav className="w-full flex justify-center items-center">
        {/* Mobile View */}
        <div className="md:hidden w-full">
          <div className="flex flex-col w-full">
            {/* Logo Section */}
            <div className="flex justify-center bg-white  w-full p-4">
              <img
                src={logo}
                alt="School logo"
                className=" w-full h-auto max-w-xs"
              />
            </div>

            {/* Phone Numbers */}
            <div className="flex-col justify-center bg-[#D9D9D9] px-2 py-2 w-auto rounded-full gap-2 mx-4">
              <div className="flex items-center w-full justify-center gap-4  ">
                <PhoneCall
                  size={18}
                  className="text-white  bg-[#A02B2D] rounded-full p-2 w-auto h-auto"
                />
                <div>
                  <span className="text-[16px] text-[#3E4095] font-semibold ">
                    9031716666 | 9709739854
                  </span>
                  <p className="flex justify-center items-center text-[12px] text-[#3E4095]">
                    Call Us for any Help and Enquiry
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full gap-2 px-3 my-2">
              <button className="flex-2 bg-green-600 py-2 text-white flex justify-center items-center gap-4 rounded-full">
                <User size={20} />
                <div className="flex-col">
                  <span className="text-md font-semibold">ADMISSION OPEN </span>
                  <p className="text-xs ">Apply Now</p>
                </div>
              </button>

              <button
                className="w-14 bg-red-800 flex justify-center items-center rounded-full"
                onClick={toggleMobileMenu}
              >
                <Menu size={24} color="white" />
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 bg-white z-50 pt-16 overflow-y-auto">
                <div className="absolute top-4 right-4">
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 bg-red-800 rounded-full text-white"
                  >
                    X
                  </button>
                </div>

                <div className="flex flex-col w-full">
                  {navItems.map((item) => (
                    <MobileNavItem
                      key={item.path}
                      title={item.title}
                      path={item.path}
                      currentPath={pathname}
                      submenu={item.submenu}
                      closeMenu={closeMobileMenu}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop View (unchanged) */}
        <div className="hidden md:flex max-w-7xl md:w-11/12 w-full flex-col md:flex-row justify-between items-center md:px-0 px-6 md:h-36">
          <div className="flex-shrink-0 md:w-auto">
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
    </>
  );
};

export default Navbar;

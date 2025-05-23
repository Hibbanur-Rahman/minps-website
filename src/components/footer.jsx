import logoImg from "@/assets/images/logo-white.svg";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <div
        className="relative pb-2"
        style={{
          background:
            "linear-gradient(to bottom, #fff 0%, #fff 50%, #a02b2d 50%, #a02b2d 100%)",
        }}
      >
        {/* Main Footer */}
        <div className="bg-[#3E4095] text-white rounded-3xl py-10 w-11/12 max-w-7xl mx-auto">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-10 md:gap-0">
              {/* Logo and Address */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 relative mb-4">
                  <img
                    src={logoImg}
                    alt="MINPS Logo"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-1">MINPS</h2>
                <p className="text-sm">
                  Madhubani, Bihar
                  <br />
                  India - 847212
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:flex w-[2px] bg-white/40 h-[150px] my-auto" />

              {/* Contact Us */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/30 inline-block">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">Call Us</p>
                    <p className="font-semibold">9031718666</p>
                    <p className="font-semibold">9709739854</p>
                  </div>
                  <div>
                    <p className="mb-2">Mail us</p>
                    <a
                      href="mailto:hello@minps.org"
                      className="font-semibold hover:underline"
                    >
                      hello@minps.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:flex w-[2px] bg-white/40 h-[150px] my-auto" />

              {/* Links */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/30 inline-block">
                  Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/anti-ragging" className="hover:underline">
                      Anti Ragging
                    </Link>
                  </li>
                  <li>
                    <Link to="/women-grievance" className="hover:underline">
                      Women Grievance Cell
                    </Link>
                  </li>
                  <li>
                    <Link to="/student-grievance" className="hover:underline">
                      Student Grievance Cell
                    </Link>
                  </li>
                  <li>
                    <Link to="/academic-calendar" className="hover:underline">
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link to="/e-cell" className="hover:underline">
                      E-Cell
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="hidden md:flex w-[2px] bg-white/40 h-[150px] my-auto" />

              {/* Social Media */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/30 inline-block">
                  Social Media
                </h3>
                <div className="flex justify-center md:justify-start space-x-4 mb-4">
                  <a
                    href="https://facebook.com/minpsmadhubani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-[#3E4095]" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com/minpsmadhubani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-[#3E4095]" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/minpsmadhubani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-[#3E4095]" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com/minpsmadhubani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-[#3E4095]" />
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
                <p className="text-center md:text-left">@minpsmadhubani</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="bg-[#a02b2d] text-white py-4 text-center text-sm">
        © copyright {new Date().getFullYear()} | all rights reserved | MINPS
      </p>
    </footer>
  );
};

export default Footer;

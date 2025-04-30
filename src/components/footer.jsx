import logoImg from "@/assets/images/logo.png";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#3E4095] text-white rounded-t-3xl py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo and Address */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 relative mb-4">
                <img
                  src={logoImg}
                  alt="MINPS Logo"
                  width={128}
                  height={128}
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

            {/* Vertical Divider - Hidden on Mobile */}
            <div className="hidden md:block w-px bg-white/30 h-full mx-auto"></div>

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

            {/* Vertical Divider - Hidden on Mobile */}
            <div className="hidden md:block w-px bg-white/30 h-full mx-auto"></div>

            {/* Links */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/30 inline-block">
                Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/anti-ragging" className="hover:underline">
                    Anti Ragging
                  </Link>
                </li>
                <li>
                  <Link href="/women-grievance" className="hover:underline">
                    Women Grievance Cell
                  </Link>
                </li>
                <li>
                  <Link href="/student-grievance" className="hover:underline">
                    Student Grievance Cell
                  </Link>
                </li>
                <li>
                  <Link href="/academic-calendar" className="hover:underline">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/e-cell" className="hover:underline">
                    E-Cell
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vertical Divider - Hidden on Mobile */}
            <div className="hidden md:block w-px bg-white/30 h-full mx-auto"></div>

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

      {/* Copyright Bar */}
      <div className="bg-[#a02b2d] text-white py-4 text-center text-sm">
        © copyright {new Date().getFullYear()} | all rights reserved | MINPS
      </div>
    </footer>
  );
};

export default Footer;

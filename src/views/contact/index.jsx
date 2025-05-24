import React, { useState } from "react";
import bannerdesktop from "@/assets/images/contact/bannerDesktop.png"; // Importing the banner image
import bannerMobile from "@/assets/images/contact/bannerMobile.png"; // Importing the mobile banner image
const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      {/* Desktop Banner */}
      <div className="relative w-full hidden sm:block p-4 mt-4">
        <img
          src={bannerdesktop}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-6xl  font-bold">
          CONTACT US
        </h1>
      </div>
      {/* mobile banner */}
      <div className="relative w-full block sm:hidden p-2 mt-4">
        <img
          src={bannerMobile}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-4xl  font-bold">
          CONTACT US
        </h1>
      </div>

      {/* Contact Information Cards */}
      <div className="px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Visit Us Card */}
            <div className="bg-[#D8EAE8] rounded-3xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#3E4095]">
                VISIT US
              </h2>
              <div className="text-center space-y-1">
                <p className="text-lg md:text-xl italic font-semibold text-[#3E4095]">
                  Madhubani Medical College
                </p>
                <p className="text-base md:text-lg italic text-[#3E4095]">
                  Campus Madhubani, Bihar
                </p>
                <p className="text-base md:text-lg italic text-[#3E4095]">
                  India – 847212
                </p>
              </div>
            </div>

            {/* Contact Us Card */}
            <div className="bg-[#ECD2D3] rounded-3xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#A02B2D]">
                CONTACT US
              </h2>
              <div className="text-center space-y-2">
                <p className="text-2xl md:text-3xl italic font-bold text-[#A02B2D]">
                  9709739854
                </p>
                <p className="text-2xl md:text-3xl italic font-bold text-[#A02B2D]">
                  9031718666
                </p>
                <p className="text-sm md:text-base italic text-[#A02B2D] mt-3">
                  minpsmadhubani@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              {/* Full Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full Name please"
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-full border-2 border-dashed border-[#A02B2D] bg-[#ECD2D3] text-gray-700 placeholder-gray-500 focus:outline-none  transition-all duration-300 text-sm md:text-base"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="A valid E-mail Address"
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-full border-2 border-dashed border-[#A02B2D] bg-[#ECD2D3] text-gray-700 placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm md:text-base"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Your Message"
                  rows="6"
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-3xl border-2 border-dashed border-[#3E4095] bg-[#D8EAE8] text-gray-700 placeholder-gray-500 focus:outline-none   transition-all duration-300 resize-none text-sm md:text-base"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#A02B2D] hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from "react";
import desktopBanner from "@/assets/images/about/bannerDesktop.svg"; // Desktop banner
import mobileBanner from "@/assets/images/about/bannerMobile.svg"; // Mobile banner

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 sm:px-4">
      {/* Hero Section */}
      <div className="relative w-full  sm:px-12">
        {/* Mobile Banner */}
        <img
          src={mobileBanner}
          alt="About Banner Mobile"
          className="w-[90%] h-[300px] mx-auto object-cover rounded-lg  block sm:hidden "
        />

        {/* Desktop Banner */}
        <img
          src={desktopBanner}
          alt="About Banner Desktop"
          className="w-full h-auto object-cover rounded-lg hidden sm:block"
        />
      </div>

      {/* About Section */}
      <section className="px-4 md:px-16 py-10 space-y-8">
        <div>
          <h2 className="text-[#A02B2D] text-xl md:text-2xl font-bold mb-2">
            ABOUT US
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            MINPS is the brain child of our Visionary Educationist and Founder
            Dr. Faiyaz Ahmad. He has been working tirelessly in improving the
            education quality and providing best facilities to the students of
            this region for the last 33 years. Madhubani is a district where
            best of the best minds exist but the problem has been proper
            nurturing of those, the students from the region had to always look
            to the bigger cities for quality education.
          </p>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            The campus is spread over 25 Acres with fully equipped and
            operational 300 bedded hospital within campus and. The campus is
            well connected and is on par with best medical institutes.
          </p>
        </div>

        {/* Who We Are Section */}
        <div>
          <h2 className="text-[#A02B2D] text-xl md:text-2xl font-bold mb-2">
            WHO WE ARE ?
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            MINPS is committed to producing competent healthcare professionals
            who can contribute effectively to the medical field. With a blend of
            theoretical learning and hands-on clinical practice, we ensure that
            our students are well-prepared for real-world challenges.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div>
          <h2 className="text-[#A02B2D] text-xl md:text-2xl font-bold mb-2">
            MISSION & VISION
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            <strong>Mission:</strong> To provide top-quality education in
            nursing and paramedical sciences, fostering skill development,
            ethical practice, and compassionate healthcare services.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2">
            <strong>Vision:</strong> To be a center of excellence in medical
            education, research, and healthcare training, producing
            professionals who make a difference in society.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import React from "react";
import bannerDesktop from "@/assets/images/about/bannerDesktop.png"; // Desktop banner
import bannerMobile from "@/assets/images/about/bannerMobile.png"; // Mobile banner

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 ">
      {/* Hero Section */}
      {/* Desktop Banner */}
      <div className="relative w-full hidden sm:block p-4 mt-4">
        <img
          src={bannerDesktop}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-6xl  font-bold">
          ABOUT US
        </h1>
      </div>
      {/* mobile banner */}
      <div className="relative w-full block sm:hidden p-2 mt-4">
        <img
          src={bannerMobile}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-5xl  font-bold">
          ABOUT US
        </h1>
      </div>

      {/* About Section */}
      <section className="px-6 md:px-4 py-10 space-y-12 max-w-7xl mx-auto">
        {/* About Us */}
        <div>
          <h2 className="text-[#A02B2D] text-xl md:text-2xl font-bold mb-4">
            ABOUT US
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mb-4">
            MINPS is the brainchild of our visionary educationist and founder
            Dr. Faiyaz Ahmad. He has been working tirelessly to improve the
            quality of education and provide the best facilities to the students
            of this region for the last 33 years. Madhubani is a district full
            of potential where brilliant minds reside, but the lack of proper
            nurturing has forced many students to look toward bigger cities for
            quality education.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            The campus spans 25 acres and includes a fully equipped and
            operational 300-bedded hospital. It is well-connected and on par
            with some of the best medical institutes in the country.
          </p>
        </div>

        {/* Who We Are */}
        <div>
          <h2 className="text-[#A02B2D] text-xl md:text-2xl font-bold mb-4">
            WHO WE ARE?
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            MINPS is committed to producing competent healthcare professionals
            who can contribute effectively to the medical field. With a blend of
            theoretical learning and hands-on clinical practice, we ensure that
            our students are well-prepared for real-world challenges.
          </p>
        </div>

        {/* Mission & Vision */}
        <div>
          <h2 className="text-[#A02B2D] text-xl md:text-2xl font-bold mb-4">
            MISSION & VISION
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mb-2">
            <strong>Mission:</strong> To provide top-quality education in
            nursing and paramedical sciences, fostering skill development,
            ethical practice, and compassionate healthcare services.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
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

import React from "react";
import banner from "@/assets/images/faculty/banner.png";
import faculty1 from "@/assets/images/faculty/faculty1.svg";
import faculty2 from "@/assets/images/faculty/faculty2.svg";
import faculty3 from "@/assets/images/faculty/faculty3.svg";

const FacultySection = () => {
  return (
    <div className="text-gray-800 mt-8">
      {/* Banner */}
      <div className="relative w-full">
        <img
          src={banner}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-2xl sm:text-5xl font-bold">
          FACULTY
        </h1>
      </div>

      {/* Intro Text */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-12 space-y-2 text-justify text-sm sm:text-base">
        <h2 className="text-xl sm:text-2xl font-bold text-[#3C3D93] uppercase">
          Team of 150+ Experienced and Dedicated Faculty
        </h2>
        <p>
          At MINPS, we are proud to have a team of over 150 highly qualified and
          committed faculty members and medical professionals across a wide
          range of disciplines. Our educators bring with them rich teaching
          experience at both undergraduate and diploma levels, ensuring that our
          students benefit from strong academic guidance and practical insights.
        </p>
        <p>
          Our faculty members are actively involved in innovative and practical
          research relevant to the fields of nursing and paramedical sciences.
          Their contributions not only support the advancement of healthcare
          knowledge but also directly enhance our students' learning experience.
        </p>
        <p>
          Many among our faculty are respected figures in their specialties and
          are frequently invited to speak at workshops, seminars, and academic
          forums at the state and national levels. We strongly encourage their
          participation in ongoing professional development activities,
          including conferences, training programs, and certification workshops.
        </p>
        <p>
          This culture of continuous learning and excellence enables our faculty
          to stay updated with the latest developments in healthcare education,
          ultimately fostering a rich and future-ready academic environment at
          MINPS.
        </p>
      </section>

      {/* Faculty Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-6">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#BDDDD9] rounded-2xl p-4 sm:p-6 shadow-sm">
          <img
            src={faculty1}
            alt="Faculty 1"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover border border-gray-300"
          />
          <div className="bg-white rounded-xl w-full px-4 py-6 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#3C3D93] font-semibold text-center text-sm sm:text-base">
              <div>FACULTY FULL NAME</div>
              <div>DESIGNATION</div>
              <div>QUALIFICATION</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#ECD2D3] rounded-2xl p-4 sm:p-6 shadow-sm">
          <img
            src={faculty2}
            alt="Faculty 2"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover border border-gray-300"
          />
          <div className="bg-white rounded-xl w-full px-4 py-6 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#A02B2D] font-semibold text-center text-sm sm:text-base">
              <div>FACULTY FULL NAME</div>
              <div>DESIGNATION</div>
              <div>QUALIFICATION</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#BDDDD9] rounded-2xl p-4 sm:p-6 shadow-sm">
          <img
            src={faculty3}
            alt="Faculty 3"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover border border-gray-300"
          />
          <div className="bg-white rounded-xl w-full px-4 py-6 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#3C3D93] font-semibold text-center text-sm sm:text-base">
              <div>FACULTY FULL NAME</div>
              <div>DESIGNATION</div>
              <div>QUALIFICATION</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultySection;

import React from "react";
import banner from "@/assets/images/faculty/banner.png"; // replace with actual path
import faculty1 from "@/assets/images/faculty/faculty1.svg";
import faculty2 from "@/assets/images/faculty/faculty2.svg"; 
import faculty3 from "@/assets/images/faculty/faculty3.svg";  // sample image

const facultyList = [
  {
    name: "FACULTY FULL NAME",
    designation: "DESIGNATION",
    qualification: "QUALIFICATION",
    image: faculty1,
  },
  {
    name: "FACULTY FULL NAME",
    designation: "DESIGNATION",
    qualification: "QUALIFICATION",
    image: faculty2,
  },
  {
    name: "FACULTY FULL NAME",
    designation: "DESIGNATION",
    qualification: "QUALIFICATION",
    image: faculty3,
  },
];

const FacultySection = () => {
  return (
    <div className=" text-gray-800 mt-8" >
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-4 text-justify text-sm sm:text-base leading-relaxed">
        <h2 className="text-xl sm:text-2xl font-bold text-[#3C3D93] uppercase">
          Team of 150+ Experienced and Dedicated Faculty
        </h2>
        <p>
          At MINPS, we are proud to have a team of over 150 highly qualified and
          committed faculty members and medical professionals across a wide
          range of disciplines...
        </p>
        <p>
          Our faculty members are actively involved in innovative and practical
          research relevant to the fields of nursing and paramedical sciences...
        </p>
        <p>
          Many among our faculty are respected figures in their specialties and
          are frequently invited to speak at workshops, seminars, and academic
          forums...
        </p>
        <p>
          This culture of continuous learning and excellence enables our faculty
          to stay updated with the latest developments...
        </p>
      </section>

      {/* Faculty Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16 grid gap-6 sm:grid-rows-2 md:grid-rows-3">
        {facultyList.map((faculty, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#3C3D93]">{faculty.name}</h3>
              <p className="text-sm text-gray-600">{faculty.designation}</p>
              <p className="text-sm text-gray-500 mt-1">{faculty.qualification}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FacultySection;

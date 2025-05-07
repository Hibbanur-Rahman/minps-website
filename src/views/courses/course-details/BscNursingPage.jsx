import React from "react";
import banner from "@/assets/images/courses/nursing-courses/nursingbanner.svg";

const BscNursingPage = () => {
  return (
    <div className="mt-8">
      {/* Banner Section with Image and Overlapping Title */}
      <div className="relative w-full ronded-lg ">
        <img
          src={banner}
          alt="BSc Nursing Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-5xl font-bold shadow-md">
          BSc Nursing
        </h1>
      </div>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3C3D93] mb-6">
          Introduction
        </h2>
        <div className="space-y-2 text-justify text-sm sm:text-base ">
          <p>
            B.Sc Nursing is a bachelor degree program offered at the university
            level. The undergraduate nursing program is broad-based education
            within an academic framework as envisaged in national health policy
            2002.
          </p>
          <p>
            B.Sc Nursing at Madhubani Institute of Nursing & Paramedical
            Sciences is approved by Indian Nursing Council and affiliated to
            Bihar University of Health Sciences, Patna.
          </p>
          <p>
            The aim of this program is to prepare graduates to assume
            responsibilities as professional, competent nurses and midwives in
            providing promotive, preventive, curative and rehabilitative
            services, who can make independent decisions in nursing situations,
            protect the rights of individuals in pursuit of health.
          </p>
          <p>
            The students may function in the hospital, community – nursing
            services and conduct research studies in the areas of Nursing
            Practice.
          </p>
          <p>
            They are also expected to assume the role of teacher, supervisor and
            manager in a clinical/public health setting.
          </p>
        </div>
      </section>

      {/* Eligibility & Curriculum Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3C3D93] mb-6">
          Eligibility
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-4 text-sm sm:text-base ">
          <li>
            The minimum age for admission shall be 17 years on 31st December of
            the year in which admission is sought.
          </li>
          <li>
            Minimum education:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                10+2 class passed with Science (PCB) & English Core/English
                Elective with aggregate of 45% marks from recognized board under
                AISSCE/CBSE/ICSE/SSCE/HSCE or other equivalent Board.
              </li>
            </ul>
          </li>
          <li>Student shall be medically fit.</li>
          <li>
            Students appearing in 10+2 examination in Science conducted by
            National Institute of Open School with 45% marks.
          </li>
          <li>Student shall be admitted once in a year.</li>
        </ul>

        {/* Curriculum Section */}

        <p className="text-sm sm:text-base leading-relaxed mt-10 mb-4">
          <span className=" text-xl font-bold text-[#3C3D93]">
            <strong>Curriculum:</strong>
          </span>{" "}
          As per Indian Nursing Council
        </p>
      </section>
    </div>
  );
};

export default BscNursingPage;

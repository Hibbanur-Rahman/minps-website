import React from "react";
import directorBanner from "@/assets/images/directorsmessage/banner.png"; // horizontal banner
import directorBanner1 from "@/assets/images/directorsmessage/banner1.png";
import principlePhoto from "@/assets/images/about/principle.png";

const PrincipleMessage = () => {
  return (
    <div className="bg-white text-gray-800 mt-8">
      {/* Banner Section */}
      <div className="relative w-full">
        {/* Mobile Banner */}
        <img
          src={directorBanner1}
          alt="Mobile Banner"
          className="w-full rounded-2xl h-[320px] object-cover sm:hidden"
        />

        {/* Desktop/Tablet Banner */}
        <img
          src={directorBanner}
          alt="Desktop Banner"
          className="w-full rounded-2xl h-[320px] object-cover hidden sm:block"
        />

        {/* Overlay Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-10 text-white">
          <h2 className="text-2xl sm:text-5xl font-bold italic mb-2 text-center font-[Poppins]">
            Principal's Message
          </h2>

          {/* White bar underlay for name */}
          <div className="px-4  rounded-md">
            <p className="text-[20px] sm:text-2xl font-semibold text-[#3E4095] font-[Poppins] tracking-wide">
              Anitha Jyothi Chili
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 md:px-0 py-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-2 text-sm md:text-sm text-gray-800 leading-relaxed text-justify">
            <h3 className="text-red-700 text-xl font-bold border-l-4 border-red-700 pl-3">
              Principal Message
            </h3>

            <p>
              Welcome to the Madhubani Institute of Nursing and Paramedical
              Sciences. As Principal, I am proud to be part of an institution
              that is deeply committed to excellence in healthcare education and
              to the holistic development of our students.
            </p>

            <p>
              At MINPS, we recognize that the fields of nursing and paramedical
              sciences demand more than academic knowledge—they require
              dedication, empathy, and ethical integrity. Our mission is to
              cultivate healthcare professionals who are not only skilled in
              their practice but also compassionate in their service.
            </p>

            <p>
              We offer a dynamic learning environment led by experienced faculty
              members who are passionate about teaching and mentoring. Our
              curriculum is designed to equip students with the competencies
              they need to thrive in today’s rapidly evolving healthcare
              landscape, while also instilling in them the values that define a
              true caregiver.
            </p>

            <p>
              We are equally committed to contributing to society through
              initiatives that improve healthcare access and support community
              welfare. We believe that education is a powerful tool for change,
              and through our efforts, we strive to create a positive and
              lasting impact.
            </p>

            <p>
              I encourage you to explore all that MINPS has to offer and to
              become part of our growing community of dedicated learners and
              healthcare leaders.
            </p>
          </div>

          {/* Director Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative">
            <div className="relative w-[220px] sm:w-[240px] md:w-[280px] h-[320px] sm:h-[360px] md:h-[440px] flex justify-center items-center md:items-end">
              {/* Background Circle */}
              <div className="w-[200px] sm:w-[200px] md:w-[300px] h-[200px] sm:h-[240px] md:h-[300px] bg-[#3E4095] rounded-full absolute top-10 sm:top-2 left-1/2 -translate-x-1/2 z-0"></div>

              {/* Director Image */}
              <img
                src={principlePhoto}
                alt="Asif Ahmad"
                className="w-[180px] sm:w-[200px] md:w-[260px] relative z-10 mt-24 sm:mt-28 md:mt-36 md:bottom-[-40px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipleMessage;

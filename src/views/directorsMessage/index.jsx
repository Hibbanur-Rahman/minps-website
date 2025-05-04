import React from "react";
import directorBanner from "@/assets/images/directorsmessage/banner.png"; // horizontal banner
import directorBanner1 from "@/assets/images/directorsmessage/banner1.png";
import directorPhoto from "@/assets/images/directorsmessage/pic.svg"; // formal photo

const DirectorsMessage = () => {
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
            Director's Message
          </h2>

          {/* White bar underlay for name */}
          <div className="px-4  rounded-md">
            <p className="text-[20px] sm:text-2xl font-semibold text-[#3E4095] font-[Poppins] tracking-wide">
              ASIF AHMAD
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 md:px-16 py-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-2 text-sm md:text-sm text-gray-800 leading-relaxed text-justify">
            <h3 className="text-red-700 text-xl font-bold border-l-4 border-red-700 pl-3">
              Director's Message
            </h3>

            <p>
              At the Madhubani Institute of Nursing and Paramedical Sciences, we
              are committed to providing quality education and training in the
              field of nursing and paramedical sciences. Our institute is
              dedicated to nurturing compassionate, skilled, and ethical
              healthcare professionals who can make a positive impact on the
              health and well-being of our community.
            </p>

            <p>
              We offer a range of programs designed to equip our students with
              the knowledge, skills, and values necessary to excel in their
              chosen careers. Our experienced faculty members are passionate
              about teaching and are committed to providing our students with a
              supportive and stimulating learning environment.
            </p>

            <p>
              We believe that education is not just about acquiring knowledge,
              but also about developing character and values. We strive to
              instill in our students a sense of empathy, compassion, and
              professionalism.
            </p>

            <p>
              Our vision is to be a catalyst for positive change, driving
              progress and fostering a supportive environment across all our
              initiatives. We are dedicated to:
            </p>

            <ul className="list-disc pl-5 space-y-1 marker:text-red-700">
              <li>
                <strong>Expanding Educational Access:</strong> By growing and
                enhancing our educational institutions, we aim to provide more
                opportunities for learning and development.
              </li>
              <li>
                <strong>Enhancing Healthcare Services:</strong> Through our
                charitable initiatives, we seek to improve health outcomes and
                ensure quality care for all.
              </li>
              <li>
                <strong>Supporting Community Welfare:</strong> Our charitable
                efforts are designed to address urgent needs and support the
                well-being of underserved populations.
              </li>
            </ul>
            <p>
              We are grateful for the support and partnership of our donors,
              volunteers, and community members. Your contributions are vital to
              our success and enable us to continue our work with integrity and
              dedication.
            </p>
            <p>
              Thank you for visiting our website. We invite you to explore our
              projects, learn more about our vision, and join us in our mission
              to create a brighter and more equitable future.
            </p>
          </div>

         {/* Director Image */}
<div className="w-full md:w-1/3 flex justify-center md:justify-end relative">
  <div className="relative w-[220px] sm:w-[240px] md:w-[280px] h-[320px] sm:h-[360px] md:h-[440px] flex justify-center items-center md:items-end">
    
    {/* Background Circle */}
    <div className="w-[200px] sm:w-[200px] md:w-[300px] h-[200px] sm:h-[240px] md:h-[300px] bg-[#A02B2D] rounded-full absolute top-10 sm:top-8 left-1/2 -translate-x-1/2 z-0"></div>

    {/* Director Image */}
    <img
      src={directorPhoto}
      alt="Asif Ahmad"
      className="w-[180px] sm:w-[200px] md:w-[260px] relative z-10 mt-24 sm:mt-28 md:mt-36 md:top-18 object-cover rounded-lg"
    />
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default DirectorsMessage;

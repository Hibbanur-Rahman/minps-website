import React from "react";
import directorBanner from "@/assets/images/directorsmessage/banner.png"; // horizontal banner
import directorBanner1 from "@/assets/images/directorsmessage/banner1.png";
import chairmanPhoto from "@/assets/images/about/chairman.png"; // formal photo

const ChairmanMessage = () => {
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
            Chairman Message
          </h2>

          {/* White bar underlay for name */}
          <div className="px-4  rounded-md">
            <p className="text-[20px] sm:text-2xl font-semibold text-[#3E4095] font-[Poppins] tracking-wide">
              TAUSIF AHMAD
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
              Chairman's Message
            </h3>

            <p>
              It is with great pride and purpose that I welcome you to the
              Madhubani Institute of Nursing and Paramedical Sciences. As
              Chairman, I am honored to lead an institution committed to
              excellence in healthcare education and to the development of
              compassionate and competent professionals.
            </p>

            <p>
              At MINPS, we believe that quality education is the foundation of
              strong healthcare systems. Our programs are designed not only to
              impart knowledge and technical skills, but also to foster empathy,
              ethical conduct, and a deep sense of service. We are deeply
              invested in shaping healthcare professionals who can lead with
              both competence and compassion.
            </p>

            <p>
              Our vision extends beyond the classroom. We aim to be a driver of
              positive change—expanding educational access, improving healthcare
              services, and supporting the welfare of our community through
              meaningful initiatives. These efforts are rooted in our belief
              that true progress comes from empowering individuals and uplifting
              society as a whole.
            </p>

            <p>
              The success of our mission relies on the collective effort of our
              faculty, students, partners, and well-wishers. I extend my
              heartfelt gratitude to all those who contribute to our
              journey—your support strengthens our resolve and inspires us to
              aim higher.
            </p>

            <p>
              I invite you to explore the Madhubani Institute of Nursing and
              Paramedical Sciences, learn more about our initiatives, and join
              us as we work towards a healthier, more equitable future.
            </p>
          </div>

          {/* Director Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative">
            <div className="relative w-[220px] sm:w-[240px] md:w-[280px]   flex justify-center items-center md:items-end">
              {/* Background Circle */}
              <div className="w-[200px] sm:w-[200px] md:w-[300px] h-[200px] sm:h-[240px] md:h-[300px] bg-[#A02B2D] rounded-full absolute top-10 sm:top-8 left-1/2 -translate-x-1/2 z-0"></div>

              {/* Director Image */}
              <img
                src={chairmanPhoto}
                alt="Asif Ahmad"
                className="w-[180px] sm:w-[200px] md:w-[260px] relative z-10 md:bottom-[-40px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;

import React from "react";
import Hero from "@/components/hero";
import statisticBgImg from "@/assets/images/statistic-bg.png";
import graduateIcon from "@/assets/images/graduate-icon.svg";
import facultyIcon from "@/assets/images/faculty-icon.svg";
import classIcon from "@/assets/images/class-icon.svg";
import { Link } from "react-router-dom";
import { BsQuestionLg } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import courseBgImg from "@/assets/images/course-bg.svg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import dummyProfileImg from "@/assets/images/dummy-profile-img.png";
import collegeimg from "@/assets/images/collegeimg.png";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 md:px-6">
      <Hero />

      {/**Statistic section */}
      <div
        className=" rounded-3xl p-4 sm:p-6 py-10 sm:py-[60px] bg-cover flex justify-center items-center border border-gray-200 mt-6"
        style={{ backgroundImage: `url(${statisticBgImg})` }}
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[50px] w-[50px] sm:h-[61px] sm:w-[61px]"
              src={graduateIcon}
              alt="graduate icon"
            />
            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#3E4095]">
              15k+
            </h1>
            <p className="text-xs sm:text-sm font-medium text-[#4F4F4F] text-center">
              Successful Graduates
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[50px] w-[50px] sm:h-[61px] sm:w-[61px]"
              src={facultyIcon}
              alt="faculty icon"
            />
            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#3E4095]">
              500+
            </h1>
            <p className="text-xs sm:text-sm font-medium text-[#4F4F4F] text-center">
              Expert Faculty Members
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[50px] w-[50px] sm:h-[61px] sm:w-[61px]"
              src={classIcon}
              alt="class icon"
            />
            <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#3E4095]">
              20+
            </h1>
            <p className="text-xs sm:text-sm font-medium text-[#4F4F4F] text-center">
              Labs & Training Centers
            </p>
          </div>
        </div>
      </div>

      {/**video section */}
      <div className="w-full rounded-3xl p-4 flex flex-col lg:flex-row justify-between items-center bg-[#ECD2D3] my-4 gap-6">
        <div className="w-full lg:w-8/12 flex flex-col items-center justify-center">
          <div
            className="flex justify-center w-full"
            style={{
              background:
                "linear-gradient(90deg,rgba(236, 210, 211, 1) 0%, rgba(251, 226, 227, 1) 50%, rgba(236, 210, 211, 1) 100%)",
            }}
          >
            <h1 className="text-[#A02B2D] text-xl sm:text-2xl md:text-3xl font-bold text-center w-full py-2">
              Madhubani Institute of Nursing <br className="hidden sm:block" />& Paramedical Sciences
            </h1>
          </div>
          <p className="text-center text-[#3E4095] text-base sm:text-lg mt-4 w-full lg:w-10/12">
            Madhubani Institute of Nursing and Paramedical Sciences (MINPS) is a
            premier institution dedicated to nurturing skilled healthcare
            professionals. With a commitment to academic excellence, hands-on
            training, and ethical practice, we empower students to excel in the
            dynamic medical field.
          </p>
        </div>
        <div className="rounded-2xl bg-white h-[200px] sm:h-[250px] lg:h-[300px] w-full lg:w-4/12 relative overflow-hidden">
          <img
            src={collegeimg}
            alt="College building"
            className="absolute h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/** why choose minps */}
      <div className="relative w-full rounded-3xl p-4 sm:p-8 bg-[#d8eae8] my-6">
        <div className="w-full relative z-[2]">
          <div
            className="flex justify-center"
            style={{
              background:
                "linear-gradient(90deg,#D8EAE8 0%, #E8F6F5 50%, #D8EAE8 100%)",
            }}
          >
            <h2 className="text-center text-2xl sm:text-3xl md:text-[3rem] font-light italic text-[#3E4095] py-2">
              Why Choose <span className="font-bold">MINPS?</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto mt-5">
            <div className="flex items-start sm:items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl mt-1 sm:mt-0 flex-shrink-0" />
              <p className="text-[#3E4095] font-regular text-sm sm:text-base">
                Comprehensive Curriculum: Industry-oriented syllabus with
                practical exposure.
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl mt-1 sm:mt-0 flex-shrink-0" />
              <p className="text-[#3E4095] font-regular text-sm sm:text-base">
                State-of-the-Art Infrastructure: Well-equipped labs, digital
                classrooms, and advanced medical training facilities.
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl mt-1 sm:mt-0 flex-shrink-0" />
              <p className="text-[#3E4095] font-regular text-sm sm:text-base">
                Experienced Faculty: Highly qualified and dedicated educators.
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl mt-1 sm:mt-0 flex-shrink-0" />
              <p className="text-[#3E4095] font-regular text-sm sm:text-base">
                Placement Assistance: Tie-ups with reputed hospitals and
                healthcare organizations.
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl mt-1 sm:mt-0 flex-shrink-0" />
              <p className="text-[#3E4095] font-regular text-sm sm:text-base">
                Focus on Holistic Development: Personality development, soft
                skills training, and extracurricular activities.
              </p>
            </div>
          </div>
        </div>
        <BsQuestionLg className="hidden md:block absolute bottom-0 right-0 text-[120px] lg:text-[180px] rotate-[12deg] text-[#E8F6F5]" />
        <BsQuestionLg className="hidden md:block absolute bottom-[40px] right-[90px] text-[120px] lg:text-[180px] rotate-[12deg] text-[#E8F6F5]" />
        <BsQuestionLg className="hidden md:block absolute bottom-[60px] right-[180px] text-[120px] lg:text-[180px] rotate-[12deg] text-[#E8F6F5]" />
      </div>

      {/**Course offered */}
      <div
        className="w-full rounded-3xl py-6 sm:py-8 my-6 bg-cover bg-[##ECD2D3]"
        style={{ backgroundImage: `url(${courseBgImg})` }}
      >
        <div
          className="flex justify-center w-full"
          style={{
            background:
              "linear-gradient(90deg,rgba(255,255,255,0.5) 0%, #ECD2D3 50%, rgba(255,255,255,0.5) 100%)",
          }}
        >
          <h2 className="text-center text-2xl sm:text-3xl md:text-[3rem] font-light italic text-[#A02B2D] py-2">
            <span className="text-[#a02b2d] font-bold">Courses</span> Offered
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8 mx-4">
          {/* Nursing Courses */}
          <div className="w-full md:w-5/12 lg:w-4/12 rounded-3xl overflow-hidden bg-[#3E4095]">
            <p className="bg-[#3E4095] text-white p-4 text-center text-xl sm:text-2xl font-extralight italic">
              Nursing <span className="font-bold">Courses</span>
            </p>
            <div className="bg-white p-4 sm:p-6 space-y-4 sm:space-y-6 h-full rounded-3xl shadow-3xl">
              <div className="text-center">
                <h3 className="text-[#3E4095] font-bold text-lg">
                  BSc Nursing
                </h3>
              </div>

              <div className="text-center">
                <h3 className="text-[#3E4095] font-bold text-lg">ANM</h3>
                <p className="text-gray-600 text-sm">
                  (Auxiliary Nurse Midwifery)
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-[#3E4095] font-bold text-lg">GNM</h3>
                <p className="text-gray-600 text-sm">
                  (General Nursing and Midwifery)
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <Link
                  to="#"
                  className="bg-[#3E4095] text-white px-6 sm:px-8 py-2 rounded-full font-medium text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Paramedical Courses */}
          <div className="w-full md:w-5/12 lg:w-4/12 rounded-3xl overflow-hidden bg-[#0b7165]">
            <p className="bg-[#0b7165] text-white p-4 text-center text-xl sm:text-2xl font-extralight italic">
              Paramedical <span className="font-bold">Courses</span>
            </p>
            <div className="bg-[#e2fde8] p-4 sm:p-6 space-y-2 sm:space-y-3 h-full rounded-3xl shadow-3xl">
              <div className="text-center">
                <p className="text-[#0b7165] text-sm sm:text-base">
                  Diploma in <span className="font-bold">OT Technician</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165] text-sm sm:text-base">
                  Diploma in{" "}
                  <span className="font-bold">Medical Lab Technician</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165] text-sm sm:text-base">
                  Diploma in{" "}
                  <span className="font-bold">Medical Radiology</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165] text-sm sm:text-base">
                  Diploma in <span className="font-bold">ECG</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165] text-sm sm:text-base">
                  Diploma in{" "}
                  <span className="font-bold">Ophthalmic Assistant</span>
                </p>
              </div>

              <div className="flex justify-center mt-4 sm:mt-6">
                <Link
                  to="#"
                  className="bg-[#0b7165] text-white px-6 sm:px-8 py-2 rounded-full font-medium text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**testimonial */}
      <div className="w-full rounded-3xl p-4 sm:p-8 bg-[#d8eae8] my-6 relative overflow-hidden">
        <div
          className="flex justify-center"
          style={{
            background:
              "linear-gradient(90deg,#D8EAE8 0%, #E8F6F5 50%, #D8EAE8 100%)",
          }}
        >
          <h2 className="text-center text-2xl sm:text-3xl md:text-[3rem] font-extralight text-[#3E4095] italic py-2">
            <span className="font-bold">Student</span> Testimonials
          </h2>
        </div>
        <div className="max-w-4xl mx-auto relative mt-[60px] sm:mt-[80px] px-2 sm:px-4">
          {/* Quote marks */}
          <RiDoubleQuotesL
            className="absolute top-[-30px] sm:top-[-48px] left-0 sm:left-auto"
            color="#3E4095"
            size={60}
          />

          <div className="border border-[#3E4095] rounded-3xl relative flex flex-col justify-center items-center">
            <div className="flex flex-col items-center mt-[-40px] sm:mt-[-50px]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#3E4095] flex items-center justify-center mb-2 border-[3px] border-white">
                <img
                  src={dummyProfileImg}
                  alt="Student"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-[#3E4095] font-bold text-base sm:text-lg">
                FARIQUE NASEEM
              </h3>
              <p className="text-[#a02b2d] text-xs sm:text-sm">
                OT Technician (Batch 2022)
              </p>
            </div>

            <div className="p-4 sm:p-6 relative">
              <p className="text-[#24746c] text-center text-sm sm:text-base">
                Choosing MINPS was a game-changer! The supportive faculty,
                practical training in modern labs, and valuable clinical
                exposure provided a strong foundation for my healthcare career.
                Knowledgeable instructors made learning engaging, and the focus
                on holistic development, communication, and ethics was
                invaluable.
                <br />
                <br />I feel well-prepared and confident thanks to MINPS's
                comprehensive education. Highly recommended for aspiring nurses
                and paramedics!
              </p>
            </div>
          </div>

          <RiDoubleQuotesR
            className="absolute bottom-0 right-0"
            color="#3E4095"
            size={60}
          />

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            <div className="w-2 h-2 rounded-full bg-[#3E4095]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
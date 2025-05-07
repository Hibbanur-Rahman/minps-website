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
    <div className="w-full max-w-7xl ">
      <Hero />

      {/**Statistic section */}
      <div
        className="w-full rounded-3xl p-6 py-[60px] bg-cover flex justify-center items-center border border-gray-200"
        style={{ backgroundImage: `url(${statisticBgImg})` }}
      >
        <div className="w-11/12 flex justify-between items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[61px] w-[61px]"
              src={graduateIcon}
              alt="graduate icon"
            />
            <h1 className="mt-1 text-[4rem] font-extrabold text-[#3E4095]">
              15k+
            </h1>
            <p className="text-sm font-medium text-[#4F4F4F]">
              Successful Graduates
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[61px] w-[61px]"
              src={facultyIcon}
              alt="faculty icon"
            />
            <h1 className="mt-1 text-[4rem] font-extrabold text-[#3E4095]">
              500+
            </h1>
            <p className="text-sm font-medium text-[#4F4F4F]">
              Expert Faculty Members
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-[61px] w-[61px]"
              src={classIcon}
              alt="class icon"
            />
            <h1 className="mt-1 text-[4rem] font-extrabold text-[#3E4095]">
              20+
            </h1>
            <p className="text-sm font-medium text-[#4F4F4F]">
              Labs & Training Centers
            </p>
          </div>
        </div>
      </div>

      {/**video section */}
      <div className="w-full rounded-3xl p-4 flex justify-between items-center bg-[#ECD2D3] my-4">
        <div className="w-8/12 flex flex-col items-center justify-center">
          <div
            className="flex justify-center"
            style={{
              background:
                "linear-gradient(90deg,rgba(236, 210, 211, 1) 0%, rgba(251, 226, 227, 1) 50%, rgba(236, 210, 211, 1) 100%)",
            }}
          >
            <h1 className="text-[#A02B2D] text-3xl font-bold text-center w-full">
              Madhubani Institute of Nursing <br />& Paramedical Sciences
            </h1>
          </div>
          <p className="text-center text-[#3E4095] text-lg mt-4 w-10/12">
            Madhubani Institute of Nursing and Paramedical Sciences (MINPS) is a
            premier institution dedicated to nurturing skilled healthcare
            professionals. With a commitment to academic excellence, hands-on
            training, and ethical practice, we empower students to excel in the
            dynamic medical field.
          </p>
        </div>
        <div className="rounded-2xl bg-white h-[300px] w-4/12 relative">
          <img
            src={collegeimg}
            alt=""
            className="absolute h-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/** why choose minps */}
      <div className="relative w-full rounded-3xl p-8 bg-[#d8eae8] my-6">
        <div className="w-full relative z-[2]">
          <div
            className="flex justify-center"
            style={{
              background:
                "linear-gradient(90deg,#D8EAE8 0%, #E8F6F5 50%, #D8EAE8 100%)",
            }}
          >
            <h2 className="text-center text-[3rem] font-light italic text-[#3E4095]">
              Why Choose <span className="font-bold">MINPS?</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto mt-5">
            <div className="flex items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl" />
              <p className="text-[#3E4095] font-regular">
                Comprehensive Curriculum: Industry-oriented syllabus with
                practical exposure.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl" />
              <p className="text-[#3E4095] font-regular">
                State-of-the-Art Infrastructure: Well-equipped labs, digital
                classrooms, and advanced medical training facilities.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl" />
              <p className="text-[#3E4095] font-regular">
                Experienced Faculty: Highly qualified and dedicated educators.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl" />
              <p className="text-[#3E4095] font-regular">
                Placement Assistance: Tie-ups with reputed hospitals and
                healthcare organizations.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <HiBadgeCheck className="text-[#3E4095] text-xl" />
              <p className="text-[#3E4095] font-regular">
                Focus on Holistic Development: Personality development, soft
                skills training, and extracurricular activities.
              </p>
            </div>
          </div>
        </div>
        <BsQuestionLg className="absolute bottom-0 right-0 text-[180px] rotate-[12deg] text-[#E8F6F5]" />
        <BsQuestionLg className="absolute bottom-[40px] right-[90px] text-[180px] rotate-[12deg] text-[#E8F6F5]" />
        <BsQuestionLg className="absolute bottom-[60px] right-[180px]  text-[180px] rotate-[12deg] text-[#E8F6F5]" />
      </div>

      {/**Course offered */}
      <div
        className="w-full rounded-3xl py-8 my-6 bg-cover bg-[##ECD2D3]"
        style={{ backgroundImage: `url(${courseBgImg})` }}
      >
        <div
          className="flex justify-center w-full"
          style={{
            background:
              "linear-gradient(90deg,rgba(255,255,255,0.5) 0%, #ECD2D3 50%, rgba(255,255,255,0.5) 100%)",
          }}
        >
          <h2 className="text-center text-[3rem] font-light italic text-[#A02B2D]">
            <span className="text-[#a02b2d] font-bold">Courses</span> Offered
          </h2>
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-center  mt-8 mx-auto">
          {/* Nursing Courses */}
          <div className="md:w-4/12 w-full rounded-3xl overflow-hidden bg-[#3E4095]">
            <p className="bg-[#3E4095] text-white p-4 text-center text-2xl font-extralight italic">
              Nursing <span className="font-bold">Courses</span>
            </p>
            <div className="bg-white p-6 space-y-6 h-full rounded-3xl shadow-3xl">
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
                  href="#"
                  className="bg-[#3E4095] text-white px-8 py-2 rounded-full font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Paramedical Courses */}
          <div className="md:w-4/12 w-full rounded-3xl overflow-hidden bg-[#0b7165]">
            <p className="bg-[#0b7165] text-white p-4 text-center text-2xl font-extralight italic">
              Paramedical <span className="font-bold">Courses</span>
            </p>
            <div className="bg-[#e2fde8] p-6 space-y-3 h-full rounded-3xl shadow-3xl">
              <div className="text-center">
                <p className="text-[#0b7165]">
                  Diploma in <span className="font-bold">OT Technician</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165]">
                  Diploma in{" "}
                  <span className="font-bold">Medical Lab Technician</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165]">
                  Diploma in{" "}
                  <span className="font-bold">Medical Radiology</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165]">
                  Diploma in <span className="font-bold">ECG</span>
                </p>
              </div>

              <div className="text-center">
                <p className="text-[#0b7165]">
                  Diploma in{" "}
                  <span className="font-bold">Ophthalmic Assistant</span>
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Link
                  href="#"
                  className="bg-[#0b7165] text-white px-8 py-2 rounded-full font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**testimonial */}
      <div className="w-full rounded-3xl p-8 bg-[#d8eae8] my-6 relative overflow-hidden">
        <div
          className="flex justify-center"
          style={{
            background:
              "linear-gradient(90deg,#D8EAE8 0%, #E8F6F5 50%, #D8EAE8 100%)",
          }}
        >
          <h2 className="text-center text-[3rem] font-extralight text-[#3E4095] italic">
            <span className="font-bold">Student</span> Testimonials
          </h2>
        </div>
        <div className="max-w-4xl mx-auto relative mt-[80px]">
          {/* Quote marks */}
          <RiDoubleQuotesL
            className="absolute top-[-48px]"
            color="#3E4095"
            size={90}
          />

          <div className="border border-[#3E4095] rounded-3xl relative flex flex-col justify-center items-center">
            <div className="flex flex-col items-center mt-[-50px]">
              <div className="w-24 h-24 rounded-full bg-[#3E4095] flex items-center justify-center mb-2  border-[3px] border-white">
                <img
                  src={dummyProfileImg}
                  alt="Student"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-[#3E4095] font-bold text-lg">
                FARIQUE NASEEM
              </h3>
              <p className="text-[#a02b2d] text-sm">
                OT Technician (Batch 2022)
              </p>
            </div>

            <div className=" p-6 relative">
              <p className="text-[#24746c] text-center">
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
            size={90}
          />
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
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

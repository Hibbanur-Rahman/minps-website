import React from "react";
import banner from "@/assets/images/result/banner.png";
import quizicon from "@/assets/images/result/Quiz.png";
import { FaFileDownload } from "react-icons/fa";

const Result = () => {
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
          EXAM RESULT
        </h1>
      </div>

      {/* result Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 space-y-6">
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#BDDDD9] rounded-2xl p-2 shadow-sm">
          <div className="bg-[#3E4095] w-32 h-32 flex items-center justify-center rounded-lg">
            <img
              src={quizicon}
              alt="Faculty 1"
              className="w-12 h-12 rounded-md object-cover border"
            />
          </div>
          <div className="bg-white rounded-xl w-full px-4 py-6 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#3C3D93] font-semibold text-center text-sm sm:text-base">
              <div>BMLT</div>
              <div>2024-25</div>
              <div className="flex item-center justify-center cursor-pointer">
                <FaFileDownload className="h-6 w-6 mr-2"/>
                <h1>Download</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#ECD2D3] rounded-2xl p-2  shadow-sm">
          <div className="bg-[#A02B2D] w-32 h-32 flex items-center justify-center rounded-lg">
            <img
              src={quizicon}
              alt="Faculty 1"
              className="w-12 h-12 rounded-md object-cover border"
            />
          </div>
          <div className="bg-white rounded-xl w-full px-4 py-6 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#A02B2D] font-semibold text-center text-sm sm:text-base">
              <div>DOTA</div>
              <div>2024-25</div>
              <div className="flex item-center justify-center cursor-pointer">
                <FaFileDownload className="h-6 w-6 mr-2"/>
                <h1>Download</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-[#BDDDD9] rounded-2xl p-2  shadow-sm">
          <div className="bg-[#3E4095] w-32 h-32 flex items-center justify-center rounded-lg">
            <img
              src={quizicon}
              alt="Faculty 1"
              className="w-12 h-12 rounded-md object-cover border"
            />
          </div>
          <div className="bg-white rounded-xl w-full px-4 py-6 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#3C3D93] font-semibold text-center text-sm sm:text-base">
              <div>GNM</div>
              <div>2024-25</div>
              <div className="flex item-center justify-center cursor-pointer">
                <FaFileDownload className="h-6 w-6 mr-2"/>
                <h1>Download</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;

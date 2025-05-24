import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SlideImg1 from "@/assets/images/slide-img-1.png";
import SlideImg2 from "@/assets/images/slide-img-2.jpeg";
import SlideImg3 from "@/assets/images/slide-img-3.jpg";
import bgNotice from "@/assets/images/notice-background.png";

import "swiper/css";
import "swiper/css/pagination";

const MobileHero = () => {
  const navigate = useNavigate();

  const EventItem = ({ title, date }) => (
    <div className="text-center py-2">
      <h4 className="text-[#3e4095] text-sm font-semibold mb-1">{title}</h4>
      <p className="text-[#3e4095] text-xs mb-2">{date}</p>
      <div className="flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-[#a02b2d]"></div>
        <div className="h-0.5 w-16 bg-[#a02b2d] mx-2"></div>
        <div className="h-1 w-1 rounded-full bg-[#a02b2d]"></div>
      </div>
    </div>
  );

 // ...existing code...
return (
  <div className="container mx-auto px-2 sm:px-4 max-w-full sm:max-w-screen-xl py-6 sm:py-10">
    {/* Hero Section */}
    <div className="relative mx-auto rounded-lg overflow-hidden mb-4 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
      {/* Hero Content */}
      <div className="container mx-auto relative z-0 w-full h-full bg-white">
        <div className="w-full">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-48 sm:h-64 md:h-80 w-full rounded-lg"
          >
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src={SlideImg1}
                  alt=""
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-end justify-start p-2 sm:p-3">
                  <h1 className="text-[#646464] italic text-xs sm:text-sm md:text-base font-semibold leading-tight">
                    Shaping{" "}
                    <span className="text-[#3E4095] font-bold">
                      Healthcare Professionals
                    </span>
                    ,<br />
                    Transforming{" "}
                    <span className="text-[#3E4095] font-bold">Lives.</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    {/* Notice Board */}
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center z-[20] mt-[-60px] sm:mt-[-90px] mx-auto">
      {/* Background Image Layer */}
      <div className="absolute top-[-30] left-0 w-full h-full z-0 overflow-hidden rounded-tl-[40px] sm:rounded-tl-[60px]">
        <img
          src={bgNotice}
          alt="Notice Background"
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-2 sm:px-4 py-8 sm:py-12 mt-12 sm:mt-20">
        {/* Notice Board Header (top-right) */}
        <div className="flex justify-end mb-2 sm:mb-4 mr-2 sm:mr-6">
          <h2 className="text-xs sm:text-sm font-extralight italic text-[#a02b2d] text-right leading-tight">
            NOTICE
            <br />
            <span className="font-bold">BOARD</span>
          </h2>
        </div>

        {/* Card Section */}
        <div className="bg-[#D8EAE8] p-2 rounded-2xl sm:rounded-3xl shadow-inner border-4 sm:border-6 border-white max-w-full mx-auto">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 shadow-sm">
            <div className="bg-[#a02b2d] text-white text-center py-2 sm:py-3 rounded-t-xl sm:rounded-t-2xl">
              <h3 className="text-sm sm:text-base font-medium">Upcoming EVENTS</h3>
            </div>
            <div className="p-2 sm:p-4">
              <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
              <div className="border-t border-gray-200 my-2 sm:my-3"></div>
              <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#a02b2d] text-white text-center py-2 sm:py-3 rounded-t-xl sm:rounded-t-2xl">
              <h3 className="text-sm sm:text-base font-medium">Recent EVENTS</h3>
            </div>
            <div className="p-2 sm:p-4">
              <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
              <div className="border-t border-gray-200 my-2 sm:my-3"></div>
              <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
            </div>
          </div>
        </div>
        {/* All Events Button */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <Button
            className="bg-[#3e4095] hover:bg-[#3e4095]/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg"
            onClick={() => navigate("/events")}
          >
            ALL EVENTS
          </Button>
        </div>
      </div>
    </div>
  </div>
);
// ...existing code...
};

export default MobileHero;

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

  return (
    <div className=" py-12">
      {/* Hero Section */}
      <div className="relative max-w-sm mx-auto rounded-lg overflow-hidden mb-4">
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
              className="mySwiper h-64 w-full rounded-lg"
            >
              <SwiperSlide>
                <div className="relative h-full">
                  <img
                    src={SlideImg1}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-end justify-start p-3">
                    <h1 className="text-[#646464] italic text-xs font-semibold leading-tight">
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
      <div className="relative max-w-sm w-full flex justify-center z-[20] mt-[-90px] ">
        {/* Background Image Layer */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden rounded-tl-[60px]">
          <img
            src={bgNotice}
            alt="Notice Background"
            className="w-full h-full object-cover rounded-3xl  "
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl w-full px-4 py-12 mt-20 ">
          {/* Notice Board Header (top-right) */}
          <div className="flex justify-end mb-4 mr-6 ">
            <h2 className="text-xs sm:text-sm font-extralight italic text-[#a02b2d] text-right leading-tight">
              NOTICE
              <br />
              <span className="font-bold">BOARD</span>
            </h2>
          </div>

          {/* Card Section */}
          <div className="bg-[#D8EAE8] p-2 rounded-3xl shadow-inner border-6 border-white max-w-2xl mx-auto">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl overflow-hidden mb-4 shadow-sm">
              <div className="bg-[#a02b2d] text-white text-center py-3 rounded-t-2xl">
                <h3 className="text-base font-medium">Upcoming EVENTS</h3>
              </div>
              <div className="p-4">
                <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
                <div className="border-t border-gray-200 my-3"></div>
                <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
              </div>
            </div>

            {/* Recent Events */}
            <div className="bg-white rounded-2xl overflow-hidden  shadow-sm">
              <div className="bg-[#a02b2d] text-white text-center py-3 rounded-t-2xl">
                <h3 className="text-base font-medium">Recent EVENTS</h3>
              </div>
              <div className="p-4">
                <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
                <div className="border-t border-gray-200 my-3"></div>
                <EventItem title="Fresher Party 2025" date="25 MAY 2025" />
              </div>
            </div>
          </div>
          {/* All Events Button */}
          <div className="flex justify-center pt-6">
            <Button
              className="bg-[#3e4095] hover:bg-[#3e4095]/90 text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg"
              onClick={() => navigate("/events")}
            >
              ALL EVENTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;

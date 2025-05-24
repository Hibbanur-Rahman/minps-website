import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import MobileHero from "./MobileHero";
//images
import SlideImg1 from "@/assets/images/slide-img-1.png";
import SlideImg2 from "@/assets/images/slide-img-2.jpeg";
import SlideImg3 from "@/assets/images/slide-img-3.jpg";
import SlideImg4 from "@/assets/images/slide-img-4.jpg";
import SlideImg5 from "@/assets/images/slide-img-5.jpg";
import SlideImg6 from "@/assets/images/slide-img-6.jpg";
import bgNotice from "@/assets/images/notice-background.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [slides] = useState([
    {
      title: "Shaping Healthcare Professionals, Transforming Lives.",
      description: "Dedicated to excellence in healthcare education.",
      image: SlideImg1,
    },
    {
      title: "Building Tomorrow's Healthcare Leaders",
      description:
        "Innovative programs designed for modern healthcare challenges.",
      image: SlideImg2,
    },
    {
      title: "Excellence in Medical Education",
      description: "Join our community of healthcare professionals.",
      image: SlideImg3,
    },
  ]);
  const EventItem = ({ title, date }) => (
    <div className="text-center">
      <h4 className="text-[#3e4095] text-lg font-semibold">{title}</h4>
      <p className="text-[#3e4095] text-sm">{date}</p>
      <div className="flex items-center justify-center mt-2">
        <div className="h-1 w-1 rounded-full bg-[#a02b2d]"></div>
        <div className="h-0.5 w-40 bg-[#a02b2d] mx-2"></div>
        <div className="h-1 w-1 rounded-full bg-[#a02b2d]"></div>
      </div>
    </div>
  );
  return (
    <div className="w-auto  ">
      <div className="hidden md:block">
        {/* Hero Section with Curved Right Side */}
        <div className="relative  max-w-7xl mx-auto rounded-xl overflow-hidden h-[500px]">
          {/* Hero Content */}
          <div className="container mx-auto relative z-[0] w-full h-full bg-white">
            <div className="w-full h-full">
              <Swiper
                spaceBetween={30}
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
                className="mySwiper h-full"
              >
                <SwiperSlide>
                  <div className="relative">
                    <img
                      src={SlideImg1}
                      alt=""
                      className="w-full h-[500px] sm:h-[400px] xs:h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-start p-12 sm:p-6 xs:p-4">
                      <h1 className="text-[#646464] italic text-3xl md:text-4xl sm:text-2xl xs:text-xl font-semibold leading-tight">
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

        {/* Notice Board Section */}
        <div className="relative flex justify-center max-w-7xl mx-auto rounded-xl my-4 mt-[-40px] z-[20]">
          <div className="container mx-auto max-w-6xl absolute z-[10] py-8 px-4 ">
            {/* NOTICE BOARD Header */}
            <div className="flex justify-end mb-4 mr-4 relative mt-[-60px]">
              <h2 className="text-4xl font-extralight italic  text-[#a02b2d]">
                NOTICE
                <br />
                <span className="font-bold">BOARD</span>
              </h2>
            </div>

            <div className="bg-[#D8EAE8] p-6 rounded-lg inset-shadow-sm inset-shadow-[#72AFA8]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Upcoming Events */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-[#a02b2d] text-white text-center py-3">
                    <h3 className="text-2xl font-medium">Upcoming EVENTS</h3>
                  </div>
                  <div className="p-6 space-y-6 shadow-sidebar-ring">
                    {/* Event 1 */}
                    <div className="text-center">
                      <h4 className="text-[#3e4095] text-2xl font-semibold">
                        Fresher Party 2025
                      </h4>
                      <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                      <div className="flex items-center justify-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                        <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      </div>
                    </div>

                    {/* Event 2 */}
                    <div className="text-center">
                      <h4 className="text-[#3e4095] text-2xl font-semibold">
                        Fresher Party 2025
                      </h4>
                      <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                      <div className="flex items-center justify-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                        <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Events */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-[#a02b2d] text-white text-center py-3">
                    <h3 className="text-2xl font-medium">Recent EVENTS</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {/* Event 1 */}
                    <div className="text-center">
                      <h4 className="text-[#3e4095] text-2xl font-semibold">
                        Fresher Party 2025
                      </h4>
                      <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                      <div className="flex items-center justify-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                        <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      </div>
                    </div>

                    {/* Event 2 */}
                    <div className="text-center">
                      <h4 className="text-[#3e4095] text-2xl font-semibold">
                        Fresher Party 2025
                      </h4>
                      <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                      <div className="flex items-center justify-center mt-2">
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                        <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Events Button */}
            </div>
            <div className="flex justify-center mt-8">
              <div>
                <Button
                  className="bg-[#3e4095] hover:bg-[#3e4095]/90 text-white px-12 py-6 rounded-full text-xl cursor-pointer"
                  onClick={() => navigate("/events")}
                >
                  ALL EVENTS
                </Button>
              </div>
            </div>
          </div>
          {/**background design */}
          <div className="h-[580px] w-full  top-[-60px] relative">
            <img src={bgNotice} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* 📱 Mobile View */}
      {/* <div className="block md:hidden container mx-auto px-4 max-w-screen-xl  ">
        <MobileHero />
      </div> */}
    </div>
  );
};

export default Hero;
